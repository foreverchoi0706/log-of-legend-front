import Emblem_Iron from "../images/emblems/Emblem_Iron.png";
import Emblem_Bronze from "../images/emblems/Emblem_Bronze.png";
import Emblem_Silver from "../images/emblems/Emblem_Silver.png";
import Emblem_Gold from "../images/emblems/Emblem_Gold.png";
import Emblem_Platinum from "../images/emblems/Emblem_Platinum.png";
import Emblem_Diamond from "../images/emblems/Emblem_Diamond.png";
import Emblem_Master from "../images/emblems/Emblem_Master.png";
import Emblem_Grandmaster from "../images/emblems/Emblem_Grandmaster.png";
import Emblem_Challenger from "../images/emblems/Emblem_Challenger.png";

import Position_Bronze_Bot from "../images/positions/Position_Bronze-Bot.png";
import Position_Bronze_Jungle from "../images/positions/Position_Bronze-Jungle.png";
import Position_Bronze_Mid from "../images/positions/Position_Bronze-Mid.png";
import Position_Bronze_Top from "../images/positions/Position_Bronze-Top.png";
import Position_Bronze_Support from "../images/positions/Position_Bronze_Support.png";

export const tierDivision = {
  IRON: Emblem_Iron,
  BRONZE: Emblem_Bronze,
  SILVER: Emblem_Silver,
  GOLD: Emblem_Gold,
  PLATINUM: Emblem_Platinum,
  DIAMOND: Emblem_Diamond,
  MASTER: Emblem_Master,
  GRANDMASTER: Emblem_Grandmaster,
  CHALLENGER: Emblem_Challenger,
};

export const laneDivision = {
  TOP: Position_Bronze_Top,
  JUNGLE: Position_Bronze_Jungle,
  MIDDLE: Position_Bronze_Mid,
  BOTTOM: Position_Bronze_Bot,
  NONE : Position_Bronze_Support,
};

export const championDivision = {
  TOP: "TOP",
  JUNGLE: "JNG",
  MIDDLE: "MID",
  BOTTOM: "BOT",
};

export const tagDivision = {
  Tank: "탱커",
  Mage: "마법사",
  Assassin : "암살자",
  Marksman : "원거리딜러",
  Fighter : "브루저",
  Support : "서포터"
};

export default [];
