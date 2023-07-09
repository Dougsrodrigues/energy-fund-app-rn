import { useState } from "react";

export const useSignIn = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const handleSeePassword = () => {
    console.log("AAAA");
    setIsPasswordShown((prevState) => !prevState);
  };
  return { isPasswordShown, handleSeePassword };
};
