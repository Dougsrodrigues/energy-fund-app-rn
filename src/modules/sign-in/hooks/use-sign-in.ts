import { useNavigation } from "@/modules/app/hooks";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { SignInDTO, SignInFormFields, signInSchema } from "../utils";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const useSignIn = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormFields>({
    resolver: signInSchema,
  });

  const handleSignIn = async (data: SignInDTO) => {
    try {
      setIsLoading(true);
      await sleep(3000);
      console.log("Logic executed", data);
      navigation.navigate("Home");
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoToSignUp = useCallback(() => {
    navigation.navigate("SignUp");
  }, []);

  return {
    handleGoToSignUp,
    control,
    errors,
    handleSignIn: handleSubmit(handleSignIn),
    isLoading,
  };
};
