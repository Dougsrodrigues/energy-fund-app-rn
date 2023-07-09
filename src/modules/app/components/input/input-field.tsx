import { TextInputProps } from "react-native";
import { styled } from "styled-components/native";

interface InputProps extends TextInputProps {
  label?: string;
}

export const InputField = ({ ...rest }: InputProps) => {
  return <InputStyled {...rest}></InputStyled>;
};

const InputStyled = styled.TextInput`
  flex: 1;
`;
