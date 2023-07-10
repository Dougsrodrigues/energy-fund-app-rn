import { useNavigationAuth } from "@/modules/app/hooks";
import { useCallback } from "react";

export const useSignIn = () => {
  const navigation = useNavigationAuth();

  const handleGoToSignUp = useCallback(() => {
    navigation.navigate("SignUp");
  }, []);

  return { handleGoToSignUp };
};
