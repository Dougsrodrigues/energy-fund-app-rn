import { TextInputProps } from "react-native";
import { styled } from "styled-components/native";
import { verticalScale } from "@/modules/app/utils/functions";

interface InputProps extends TextInputProps {}

export const InputField = ({ ...rest }: InputProps) => {
  return <InputStyled {...rest}></InputStyled>;
};

const InputStyled = styled.TextInput`
  flex: 1;

  font-family: ${({ theme }) => theme.fonts.regular400};
  font-size: ${verticalScale(14)}px;
`;
