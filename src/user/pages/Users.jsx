import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max Schwarz",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Profile_avatar_placeholder_large.png/800px-Profile_avatar_placeholder_large.png",
      places: 3,
    },
  ];

  return (
    <div className="min-h-screen flex justify-center items-start bg-gradient-to-br from-slate-100 to-slate-200 px-4 pt-24">
      <div className="w-full max-w-3xl">
        <UsersList items={USERS} />
      </div>
    </div>
  );
};

export default Users;
