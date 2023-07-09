import { ViewProps } from "react-native";
import { styled } from "styled-components/native";

interface InputProps extends ViewProps {
  children: React.ReactNode;
}

export const InputRoot = ({ children, ...rest }: InputProps) => {
  return <Container {...rest}>{children}</Container>;
};

const Container = styled.View``;
