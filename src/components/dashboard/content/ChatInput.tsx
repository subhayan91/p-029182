import React, { useState } from "react";

export const ChatInput: React.FC = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="rounded bg-white shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border flex w-full flex-col overflow-hidden items-stretch justify-center mt-4 p-6 border-[rgba(234,236,240,1)] border-solid max-md:max-w-full max-md:px-5">
      <div className="flex w-full items-center gap-6 text-base text-slate-600 font-medium tracking-[-0.11px] leading-none max-md:max-w-full">
        <div className="self-stretch flex min-w-60 w-[922px] items-center gap-2 flex-wrap my-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/83b7637b627162b19f5607604caad87fc48d0686?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
            alt="Chat"
          />
          <input
            type="text"
            className="self-stretch w-full my-auto bg-transparent border-none outline-none"
            placeholder="Ask anything about this topic..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>

      <div className="flex w-full items-center gap-6 flex-wrap mt-6 max-md:max-w-full">
        <div className="text-slate-600 text-base font-medium leading-none tracking-[-0.11px] opacity-40 self-stretch grow shrink w-[903px] my-auto max-md:max-w-full">
          'Is this late?' or 'What's the next step?'
        </div>
        <div className="self-stretch flex gap-1 my-auto">
          <button className="flex min-h-10 items-center gap-2.5 overflow-hidden justify-center w-10 pt-2 px-2 rounded-[123px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a710b7d3408b1c21e4e5c56bb06778344c4bce9?placeholderIfAbsent=true"
              className="aspect-[1.2] object-contain w-6 self-stretch my-auto"
              alt="Microphone"
            />
          </button>
          <button className="bg-[rgba(37,58,130,1)] flex min-h-10 items-center gap-2.5 overflow-hidden justify-center w-10 pt-2 px-2 rounded-[123px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/02ccde237cab43489a8cd6a9f789b9d81094583d?placeholderIfAbsent=true"
              className="aspect-[1.2] object-contain w-6 self-stretch my-auto"
              alt="Send"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
