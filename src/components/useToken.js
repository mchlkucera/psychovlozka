import { useState } from "react";

export default function useToken() {
   const getToken = () => {
      const tokenString = localStorage.getItem("token");
      const userToken = JSON.parse(tokenString);
      return userToken;
   };
   const getUserId = () => {
      const tokenString = localStorage.getItem("token");
      const userToken = JSON.parse(tokenString);
      return userToken?.userId;
   };

   const [token, setToken] = useState(getToken());

   const saveToken = (userToken) => {
      // console.log({ action: "SETTING UP TOKEN", userToken });
      localStorage.setItem("token", JSON.stringify(userToken));
      setToken(userToken);
   };

   return {
      setToken: saveToken,
      getUserId,
      token,
   };
}
