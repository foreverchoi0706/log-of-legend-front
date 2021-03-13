import React, { useState, useEffect, memo } from "react";
import axios from "axios";
import styled from "styled-components";
import { useRef } from "react";

const SpellStyle = styled.div`
  img {
    width: 20px;
  }
`;

function Spell({ spell1Id, spell2Id }) {
  const [spell1Name, setSpell1Name] = useState("");

  const [spell2Name, setSpell2Name] = useState("");

  useEffect(async () => {
    const {
      data: { data },
    } = await axios.get(
      "https://ddragon.leagueoflegends.com/cdn/11.1.1/data/en_US/summoner.json"
    );
    const temp = Object.values(data);
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
    <SpellStyle>
      <img
        src={`http://ddragon.leagueoflegends.com/cdn/11.1.1/img/spell/${spell1Name}.png`}
        alt={spell1Name}
      />
      <img
        src={`http://ddragon.leagueoflegends.com/cdn/11.1.1/img/spell/${spell2Name}.png`}
        alt={spell2Name}
      />
    </SpellStyle>
  );
}

export default memo(Spell);
