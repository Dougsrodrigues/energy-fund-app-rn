import { ViewProps } from "react-native";
import { styled } from "styled-components/native";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "@/modules/app/utils/functions";

interface InputProps extends ViewProps {
  children: React.ReactNode;
}

export const InputContent = ({ children, ...rest }: InputProps) => {
  return <Container {...rest}>{children}</Container>;
};

const Container = styled.View`
  width: 100%;
  flex-direction: row;

  background-color: ${({ theme }) => theme.colors.grey100};

  border-radius: ${moderateScale(6)}px;
  padding: ${verticalScale(15)}px ${horizontalScale(10)}px;
`;
