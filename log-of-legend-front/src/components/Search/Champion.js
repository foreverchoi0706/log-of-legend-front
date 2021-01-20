import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const ChampionStyle = styled.img`
  width: 20px;
  height : 20px;
`;

function Champion({ championId }) {
  const [name, setName] = useState("");

  useEffect(async () => {
    const {
      data: { data },
    } = await axios.get(
      "https://ddragon.leagueoflegends.com/cdn/11.1.1/data/en_US/champion.json"
    );
    const temp = Object.values(data);
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
    <ChampionStyle
      src={`https://ddragon.leagueoflegends.com/cdn/11.1.1/img/champion/${name}.png`}
    />
  );
}

export default Champion;
