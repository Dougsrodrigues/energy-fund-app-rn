import { useNavigationAuth } from "@/modules/app/hooks";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { SignInDTO, SignInFormFields, signInSchema } from "../utils";

export const useSignIn = () => {
  const navigation = useNavigationAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormFields>({
    resolver: signInSchema,
  });

  const handleSignIn = (data: SignInDTO) => {
    console.log(data);
  };

  const handleGoToSignUp = useCallback(() => {
    navigation.navigate("SignUp");
  }, []);

  return {
    handleGoToSignUp,
    control,
    errors,
    handleSignIn: handleSubmit(handleSignIn),
  };
};
