import React from "react";
import "./UserItem.css";
import Avatar from "../../Shared/components/UiElements/Avatar";
import Card from "../../Shared/components/UiElements/Card";

const UserItem = ({ name, id, image, placeCount }) => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <div className="user-item__image">
          <Avatar image={image} alt={name} />
        </div>
        <div className="user-item__info">
          <h2>{name}</h2>
          <h3>
            {placeCount} {placeCount === 1 ? "Place" : "Places"}
          </h3>
        </div>
      </Card>
    </li>
  );
};

export default UserItem;
