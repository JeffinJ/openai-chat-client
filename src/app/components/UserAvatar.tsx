import { User } from "lucide-react";

export default function UserAvatar() {
  return (
    <div className="flex items-center w-fit p-1 rounded-full bg-slate-50/10">
      <User size={20} className="text-emerald-600" />
    </div>
  );
}
