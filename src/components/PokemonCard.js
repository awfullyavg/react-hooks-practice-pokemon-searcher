import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name, hp, front, back}) {
const [toggle, setToggle] = useState(true)

function handleClick () {
  setToggle(!toggle)
}

  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          <img alt="oh no!"  src={toggle ? front : back}/>
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
