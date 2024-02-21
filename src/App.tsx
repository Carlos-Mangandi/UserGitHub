import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { Searcher } from "./components/Searcher";
import { UserCard } from "./components/UserCard";
import { LoadingSpinner } from "./components/LoadingSpiner";
import { AiFillGithub } from "react-icons/ai";
import { BsFillSendFill } from "react-icons/bs";
import { useGetData } from "./hooks/useGetData";

// const URL = "https://api.github.com/users/";

function App() {
  const [user, loading, error, fetchData] = useGetData();
  const [inputValue, setInputValue] = useState<string>("Carlos-Mangandi");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchData(inputValue);
  };

  useEffect(() => {
    fetchData(inputValue);
  }, []);

  return (
    <>
      <i>
        <AiFillGithub className="text-white text-9xl mb-6" />
      </i>
      <main className="w-11/12 max-w-5xl rounded-2xl min-h-[40rem] py-8 bg-violet-300 text-slate-800">
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center h-[20%] gap-2"
        >
          <Searcher
            name=""
            value={inputValue}
            onChange={handleChange}
            placeholder="Github User..."
            icon={<AiFillGithub />}
          />
          <button
            type="submit"
            className="bg-slate-50 text-violet-500 text-xl rounded-full p-3 cursor-pointer"
          >
            <BsFillSendFill />
          </button>
        </form>
        {error && (
          <p className="flex items-center justify-center h-32">{error}</p>
        )}
        {loading && (
          <div className="flex items-center justify-center h-32">
            <LoadingSpinner />
          </div>
        )}
        {!error && !loading && user && <UserCard user={user} />}
      </main>
    </>
  );
}

export default App;

