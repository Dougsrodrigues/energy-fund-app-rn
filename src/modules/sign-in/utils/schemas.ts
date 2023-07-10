import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const signInSchema = yupResolver(
  yup.object({
    email: yup
      .string()
      .email("This e-mail is not valid")
      .required("This field is required"),
    password: yup
      .string()
      .required("This field is required")
      .min(8, "Minimum 8 characters"),
  })
);
