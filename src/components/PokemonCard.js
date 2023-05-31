import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name, hp, image_front, image_back}) {
  const [cardImage, setCardImage] = useState(true)

  function onClick () {
   setCardImage(!cardImage)
  }

  

  return (
    <Card>
      <div onClick={onClick}>
        <div className="image" >
          <img alt="oh no!" src={cardImage ? image_front : image_back} id="cardImage"/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
