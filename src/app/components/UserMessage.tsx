import UserAvatar from "./UserAvatar";
type Props = {
  m: {
    id: string;
    role: string;
    content: string;
  };

};
export default function UserMessage({m}: Props) {
  return (
    <div className="flex flex-row gap-x-2 items-start">
      <div>
        <UserAvatar />
      </div>
      <div className='whitespace-pre-wrap font-semibold text-emerald-400'>
        {m.content}
      </div>
    </div>
  );
}
