import React from "react";

import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="flex justify-center items-center mt-16">
        <Card className="p-6 text-center">
          <h2 className="text-lg font-semibold text-gray-700">
            No users found.
          </h2>
        </Card>
      </div>
    );
  }

  return (
    <ul
      className="
        list-none
        m-0 mx-auto
        p-0
        w-[90%]
        max-w-[50rem]
        flex
        justify-center
        flex-wrap
      "
    >
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};

export default UsersList;