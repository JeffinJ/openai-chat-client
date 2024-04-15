'use client';

import { useChat } from 'ai/react';
import UserMessage from './UserMessage';
import AIMessage from './AIMessage';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="flex relative flex-col gap-y-2 w-3/6 py-24 mx-auto stretch overflow-y-auto text-white h-screen">

      <h1 className='text-2xl font-semibold underline text-emerald-600 mb-5'>OpenAI Chat</h1>

      <div className='flex flex-col gap-y-2 px-1'>
        {messages.map(message => (
          <div key={message.id} className="flex flex-row gap-x-2 items-center">
            {message.role === 'user' ?
              <UserMessage key={message.id} m={message} /> :
              <AIMessage key={message.id} m={message} />
            }
          </div>
        ))}
      </div>

      <div>
        <form onSubmit={handleSubmit}
          className='absolute bottom-0 mb-8 w-full text-white '>
          <input
            className="w-full py-2 placeholder:text-sm px-4 focus:outline-none bg-slate-100/20 rounded"
            value={input}
            placeholder="Ask something..."
            onChange={handleInputChange}
          />
        </form>
      </div>

    </div>
  );
}
