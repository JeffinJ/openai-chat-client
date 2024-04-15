'use client';

import { useChat } from 'ai/react';
import UserAvatar from './UserAvatar';
import AIAvatar from './AIAvatar';
import UserMessage from './UserMessage';
import AIMessage from './AIMessage';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="flex relative flex-col w-3/6 py-24 mx-auto stretch overflow-y-auto text-white h-screen">

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
