import AIAvatar from "./AIAvatar";
type Props = {
  m: {
    id: string;
    role: string;
    content: string;
  };

};
export default function AIMessage({m}: Props) {
  return (
    <div className="flex flex-row gap-x-2 items-start">
      <div>
        <AIAvatar />
      </div>
      <div className='whitespace-pre-wrap '>
        {m.content}
      </div>
    </div>
  );
}
