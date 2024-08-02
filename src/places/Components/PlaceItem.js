import React from "react";
import Card from "../../Shared/components/UiElements/Card";
import Button from "../../Shared/components/UiElements/Button";

const PlaceItem = (props) => {
  return (
    <li className="place-item">
      <Card className="place-item__content">
        <div className="place-item__image">
          <img src={props.image} alt={props.title} />
        </div>

        <div className="place-item__info">
          <h2>{props.title}</h2>
          <h3>{props.address}</h3>
          <p>{props.description}</p>
        </div>

        <div className="place-item__actions">
          <Button inverse>VIEW ON MAP</Button>
          <Button to={`/places/${props.id}`}>EDIT</Button>
          <Button>DELETE</Button>
        </div>
      </Card>
    </li>
  );
};

export default PlaceItem;
