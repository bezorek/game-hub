import axios from "axios";

export default axios.create({
   baseURL: 'https://api.rawg.io/api',
   params: {
      key: '776a75a2eff240678286e44a4962f609'
   }
})