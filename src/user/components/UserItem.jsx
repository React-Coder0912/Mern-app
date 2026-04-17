import React from "react";
import { Link } from "react-router-dom";

import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";

const UserItem = (props) => {
  return (
    <li className="w-full">
      <Card className="p-0 overflow-hidden rounded-2xl shadow-xl">
        <Link
          to={`/${props.id}/places`}
          className="
            flex flex-col sm:flex-row
            items-center
            w-full
            bg-gray-900
            text-white
            px-8 py-10
            gap-6
            transition-all duration-300
            hover:bg-yellow-400
            hover:text-gray-900
            group
          "
        >
          {/* Avatar */}
          <div className="w-32 h-32 sm:w-36 sm:h-36 flex-shrink-0">
            <Avatar image={props.image} alt={props.name} />
          </div>

          {/* User Info */}
          <div className="text-center sm:text-left">
            <h2
              className="
                text-3xl sm:text-4xl
                font-semibold
                mb-3
                text-yellow-400
                group-hover:text-gray-900
                transition-colors
              "
            >
              {props.name}
            </h2>

            <h3
              className="
                text-lg sm:text-xl
                opacity-90
                group-hover:text-gray-900
                transition-colors
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
