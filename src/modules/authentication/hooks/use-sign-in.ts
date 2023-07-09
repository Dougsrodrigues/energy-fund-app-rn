import { useCallback, useState } from "react";

export const useSignIn = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const handleSeePassword = useCallback(() => {
    setIsPasswordShown((prevState) => !prevState);
  }, []);

  return { isPasswordShown, handleSeePassword };
};
