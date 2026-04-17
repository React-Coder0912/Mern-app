import React from "react";
import { Link } from "react-router-dom";

import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";

const UserItem = (props) => {
  return (
    <li
      className="
        m-4
        w-[calc(45%-2rem)]
        min-w-[17.5rem]
      "
    >
      <Card className="p-0 overflow-hidden">
        <Link
          to={`/${props.id}/places`}
          className="
            flex items-center
            w-full h-full
            p-4
            bg-gray-800
            text-white
            no-underline
            transition-colors duration-200
            hover:bg-yellow-400
            group
          "
        >
          {/* Avatar */}
          <div className="w-16 h-16 mr-4">
            <Avatar image={props.image} alt={props.name} />
          </div>

          {/* User Info */}
          <div>
            <h2
              className="
                text-2xl
                font-normal
                mb-2
                text-yellow-400
                transition-colors duration-200
                group-hover:text-gray-800
              "
            >
              {props.name}
            </h2>

            <h3
              className="
                m-0
                transition-colors duration-200
                group-hover:text-gray-800
              "
            >
              {props.placeCount}{" "}
              {props.placeCount === 1 ? "Place" : "Places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;