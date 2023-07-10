import { styled } from "styled-components/native";
import { horizontalScale } from "../../utils/functions";

interface CheckboxTextProps {
  children: React.ReactNode;
}
export const CheckboxText = ({ children }: CheckboxTextProps) => {
  return <Container>{children}</Container>;
};

const Container = styled.View`
  flex: 1;
  margin-left: ${horizontalScale(10)}px;
`;
