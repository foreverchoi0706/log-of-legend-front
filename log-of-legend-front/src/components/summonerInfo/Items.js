import React, { memo } from "react";
//style
import styles from "../../styles/summonerInfo/Items.module.scss";

const ITEM_URL = "https://ddragon.leagueoflegends.com/cdn/11.6.1/img/item";

const NULL_ITEM_URL ="https://cdn3.iconfinder.com/data/icons/game-3-fill/512/close-512.png";

const NULL_ITEM_ALT ="null_item";

function Items({ item0, item1, item2, item3, item4, item5 }) {
  return (
    <div className={styles.Items}>
      {item0 ? <img src={`${ITEM_URL}/${item0}.png`} alt={item0}/> : <img src={NULL_ITEM_URL} alt={NULL_ITEM_ALT}/>}
      {item1 ? <img src={`${ITEM_URL}/${item1}.png`} alt={item1}/> : <img src={NULL_ITEM_URL} alt={NULL_ITEM_ALT}/>}
      {item2 ? <img src={`${ITEM_URL}/${item2}.png`} alt={item2}/> : <img src={NULL_ITEM_URL} alt={NULL_ITEM_ALT}/>}
      {item3 ? <img src={`${ITEM_URL}/${item3}.png`} alt={item3}/> : <img src={NULL_ITEM_URL} alt={NULL_ITEM_ALT}/>}
      {item4 ? <img src={`${ITEM_URL}/${item4}.png`} alt={item4}/> : <img src={NULL_ITEM_URL} alt={NULL_ITEM_ALT}/>}
      {item5 ? <img src={`${ITEM_URL}/${item5}.png`} alt={item5}/> : <img src={NULL_ITEM_URL} alt={NULL_ITEM_ALT}/>}
    </div>
  );
}

export default memo(Items);
