import React, { memo } from "react";
import styled from "styled-components";

const ITEM_URL = "https://ddragon.leagueoflegends.com/cdn/11.1.1/img/item";

const NULL_ITEM_URL ="https://cdn3.iconfinder.com/data/icons/game-3-fill/512/close-512.png";

const ItemsStyle = styled.div`
  img {
    width: 20px;
  }
  div {
    width: 20px;
    height : 20px;
    text-align: center;
  }
`;

function Items({ item0, item1, item2, item3, item4, item5 }) {
  return (
    <ItemsStyle>
      {item0 ? <img src={`${ITEM_URL}/${item0}.png`} /> : <img src={NULL_ITEM_URL}/>}
      {item1 ? <img src={`${ITEM_URL}/${item1}.png`} /> : <img src={NULL_ITEM_URL}/>}
      {item2 ? <img src={`${ITEM_URL}/${item2}.png`} /> : <img src={NULL_ITEM_URL}/>}
      {item3 ? <img src={`${ITEM_URL}/${item3}.png`} /> : <img src={NULL_ITEM_URL}/>}
      {item4 ? <img src={`${ITEM_URL}/${item4}.png`} /> : <img src={NULL_ITEM_URL}/>}
      {item5 ? <img src={`${ITEM_URL}/${item5}.png`} /> : <img src={NULL_ITEM_URL}/>}
    </ItemsStyle>
  );
}

export default memo(Items);
