import { Eye, EyeClosed } from "phosphor-react-native";
import { useCallback, useState } from "react";

export const useSeePasswordInput = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const handleSeePassword = useCallback(() => {
    setIsPasswordShown((prevState) => !prevState);
  }, []);

  const eyeIcon = isPasswordShown ? Eye : EyeClosed;
  return { isPasswordShown, handleSeePassword, eyeIcon };
};
