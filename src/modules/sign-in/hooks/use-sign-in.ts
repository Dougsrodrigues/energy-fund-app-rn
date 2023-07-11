import { useAppDispatch, useNavigation } from "@/modules/app/hooks";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { SignInDTO, SignInFormFields, signInSchema } from "../utils";
import { authActions } from "../store";

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
  const dispatch = useAppDispatch();
  const handleSignIn = async (data: SignInDTO) => {
    try {
      setIsLoading(true);
      await sleep(3000);
      dispatch(authActions.saveUserSignInData(true));
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
