import axios from "axios";

const HOST = "http://localhost:3000/log-of-legend";

const lolAPI = {
  championRotations: async () => {
    const { data } = await axios.get(`${HOST}/champion-rotations`);
    return data;
  },

  platformData : async ()  => {
    return {};
  },
  searchSummoner: () => {},
};

export default lolAPI;
