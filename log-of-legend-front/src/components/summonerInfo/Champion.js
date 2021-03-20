import React, { useEffect, useState, memo } from "react";

function Champion({ champions, championId }) {
  const [name, setName] = useState("");

  useEffect(() => {
    const temp = Object.values(champions.data);
    if (!name) {
      for (let i = 0; i < temp.length; i++) {
        if (parseInt(temp[i].key) === championId) {
          setName(temp[i].id);
          break;
        }
      }
    }
  });

  return (
    <img
      src={`https://ddragon.leagueoflegends.com/cdn/11.6.1/img/champion/${name}.png`}
      alt={name}
      style={{ width: "20px", height: "20px", marginRight: "20px" }}
    />
  );
}

export default memo(Champion);
