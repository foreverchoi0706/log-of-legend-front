import React, { useState, useEffect, memo } from "react";

function Spell({ spells, spell1Id, spell2Id }) {
  const [spell1Name, setSpell1Name] = useState("");

  const [spell2Name, setSpell2Name] = useState("");

  useEffect(async () => {
    const temp = Object.values(spells.data);
    if (!spell1Name && !spell2Name) {
      for (let i = 0; i < temp.length; i++) {
        if (parseInt(temp[i].key) === spell1Id) {
          setSpell1Name(temp[i].id);
        } else if (parseInt(temp[i].key) === spell2Id) {
          setSpell2Name(temp[i].id);
        }
      }
    }
  });
  return (
    <div>
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/11.6.1/img/spell/${spell1Name}.png`}
        alt={spell1Name}
        style={{
          width: "20px",
        }}
      />
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/11.6.1/img/spell/${spell2Name}.png`}
        alt={spell2Name}
        style={{
          width: "20px",
          marginRight: "20px"
        }}
      />
    </div>
  );
}

export default memo(Spell);
