import React, { ChangeEvent } from 'react';

interface SearcherProps {
  icon?: React.ReactNode;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type?: string;
  htmlFor?: string;
  disabled?: boolean;
  placeholder?: string;
}

function Searcher(props: SearcherProps) {
  return (
    <div className="w-3/4">
      <div className="relative">
        <div className="absolute text-3xl inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-violet-500">
          {props.icon || <></>}
        </div>
        <input
          value={props.value}
          onChange={props.onChange}
          name={props.name}
          type={props.type || "text"}
          id={props.htmlFor}
          disabled={props.disabled || false}
          className="bg-slate-50 shadow-2xl shadow-slate-50/50 font-medium text-slate-800 focus:outline-none rounded-lg block w-full pl-14 p-3"
          placeholder={props.placeholder || ""}
        />
      </div>
    </div>
  );
}

export { Searcher };
