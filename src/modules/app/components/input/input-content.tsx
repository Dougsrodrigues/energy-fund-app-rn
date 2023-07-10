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
  testID?: string;
}

export const InputContent = ({
  children,
  error,
  testID,
  ...rest
}: InputProps) => {
  return (
    <>
      <Container testID={testID} hasError={!!error} {...rest}>
        {children}
      </Container>
      {!!error && <TextError testID={testID + "_error"}>{error}</TextError>}
    </>
  );
};

const Container = styled.View<{ hasError: boolean }>`
  width: 100%;
  flex-direction: row;

  background-color: ${({ theme }) => theme.colors.grey100};

  border-radius: ${moderateScale(6)}px;
  padding: ${verticalScale(15)}px ${horizontalScale(10)}px;

  ${({ hasError }) =>
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
