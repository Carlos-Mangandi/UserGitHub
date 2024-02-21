import { useState } from "react";

interface User {
  avatar_url: string;
  name: string;
  created_at: string;
  html_url: string;
  login: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  blog?: string;
  twitter_username?: string;
  mail?: string;
  location?: string;
}

type FetchDataFunction = (user: string) => Promise<void>;

function useGetData(): [User | null, boolean, string | null, FetchDataFunction] {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData: FetchDataFunction = async (user) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${user}`);
      if (response.status === 404) {
        setError(`User "${user}" not found`);
      } else {
        const data: User = await response.json();
        setUser(data);
        setError(null);
      }
    } catch (error) {
      setError(error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return [user, loading, error, fetchData];
}

export { useGetData };
