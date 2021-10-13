import { useState } from "react";

export default function useToken() {
   const getToken = () => {
      const tokenString = localStorage.getItem("token");
      const userToken = JSON.parse(tokenString);
      return userToken?.token;
   };
   const getUserId = () => {
      const tokenString = localStorage.getItem("token");
      const userToken = JSON.parse(tokenString);
      return userToken?.userId;
   };

   const [token, setToken] = useState(getToken());

   const saveToken = (userToken) => {
      console.log({ action: "LOG IN", userId: userToken.userId });
      localStorage.setItem("token", JSON.stringify(userToken));
      setToken(userToken.token);
   };

   return {
      setToken: saveToken,
      getUserId,
      token,
   };
}
