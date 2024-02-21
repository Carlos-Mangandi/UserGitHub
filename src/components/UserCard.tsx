import React from "react";
import { ImLocation, ImTwitter } from "react-icons/im";
import { AiOutlineGlobal, AiOutlineMail } from "react-icons/ai";

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

interface UserCardProps {
  user: User;
}

function UserCard({ user }: UserCardProps) {
  return (
    <section className="flex justify-center items-center flex-wrap gap-4 min-h-[80%] mt-8 lg:mt-24">
      <figure className="w-full max-w-[230px] lg:max-w-[280px] rounded-full overflow-hidden">
        <img src={user.avatar_url} alt="Profile Picture" />
      </figure>
      <article className="w-full max-w-lg px-3 pt-3">
        <div className="">
          <h2 className="font-bold text-2xl ml-2">{user.name}<span className="font-light text-sm ml-2">{user.created_at} </span></h2>
          <a
            href={user.html_url}
            target="__BLANK"
            className="underline underline-offset-4 text-violet-600 font-medium ml-2 mb-3 inline-block"
          >
            @{user.login}
          </a>
          <p>{user.bio}</p>
        </div>
        <div className="flex justify-around mt-5 bg-slate-50 rounded-md py-3">
          <div className="flex flex-col items-center">
            <p className="font-bold">Repositories</p>
            <p>{user.public_repos}</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold">Followers</p>
            <p>{user.followers}</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold">Following</p>
            <p>{user.following}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 justify-items-center my-8 gap-2">
          <div className="flex items-center gap-1">
            <AiOutlineGlobal />
            <p>{user.blog || "Not Available"}</p>
          </div>
          <div className="flex items-center gap-1">
            <ImTwitter />
            <p>{user.twitter_username || "Not Available"}</p>
          </div>

          <div className="flex items-center gap-1">
            <AiOutlineMail />
            <p>{user.mail || "Not Available"}</p>
          </div>
          <div className="flex items-center gap-1">
            <ImLocation />
            <p>{user.location || "Not Available"}</p>
          </div>
        </div>
      </article>
    </section>
  );
}

export { UserCard };
