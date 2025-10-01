import React, { type FC } from "react";
import type { IUser } from "../../types";
import { Link } from "react-router-dom";
import { useLogout } from "../../service/auth";

interface Props {
  user: IUser;
}
interface MenuItem {
  to: string;
  label: string;
}

const User: FC<Props> = ({ user }) => {
  const { mutate, isPending } = useLogout();
  const menuItems: MenuItem[] = [
    user.isSeller && { to: "/my-gigs", label: "My Orders" },
    user.isSeller && { to: "/add-gig", label: "Add Gig" },
    { to: "/", label: "Orders" },
    { to: "/", label: "Messages" },
  ].filter(Boolean) as MenuItem[];
  return (
    <div className="flex items-center gap-5 hover:cursor-pointer">
      <img src={user.profilePicture} className="size-[40px] rounded-full object-cover" />
      <span>{user.username}</span>

      <div>
        <div className="w-[150px] text-[13px] flex-col absolute top-[40px] left-[-20px] transition duration-500 bg-gray-200 rounded-md text-center hidden group-hover:flex ">
          {menuItems.map(({ label, to }: { label: string; to: string }, index) => (
            <Link key={index} to={to} className="header-link">
              {label}
            </Link>
          ))}
          <button
            className="header-link hover:cursor-pointer"
            disabled={isPending}
            onClick={() => mutate()}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
