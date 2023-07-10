import { ViewProps } from "react-native";
import { styled } from "styled-components/native";

interface CheckboxRootProps extends ViewProps {
  children: React.ReactNode;
}

export const CheckboxRoot = ({ children, ...rest }: CheckboxRootProps) => {
  return <Container {...rest}>{children}</Container>;
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
