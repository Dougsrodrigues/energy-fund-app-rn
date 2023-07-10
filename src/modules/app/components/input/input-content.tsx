import { ViewProps } from "react-native";
import { css, styled } from "styled-components/native";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "@/modules/app/utils/functions";
import { Typography } from "../typography";

interface InputProps extends ViewProps {
  error?: string;
  children: React.ReactNode;
}

export const InputContent = ({ children, error, ...rest }: InputProps) => {
  return (
    <>
      <Container hasError={!!error} {...rest}>
        {children}
      </Container>
      {!!error && <TextError>{error}</TextError>}
    </>
  );
};

const Container = styled.View<{ hasError: boolean }>`
  width: 100%;
  flex-direction: row;

  background-color: ${({ theme }) => theme.colors.grey100};

  border-radius: ${moderateScale(6)}px;
  padding: ${verticalScale(15)}px ${horizontalScale(10)}px;

  ${({ hasError, theme }) =>
    hasError &&
    css`
      border: 1px solid red;
    `}
`;

const TextError = styled(Typography).attrs({
  variant: "body2",
})`
  margin-top: ${verticalScale(8)}px;
  padding-left: ${verticalScale(8)}px;
  color: red;
`;
