import { Button, Input, Typography } from "@/modules/app/components";
import { horizontalScale, verticalScale } from "@/modules/app/utils/functions";
import { styled, useTheme } from "styled-components/native";
import { useSignIn } from "../hooks/use-sign-in";
import { useSeePasswordInput } from "../hooks";

export const SignIn = () => {
  const theme = useTheme();
  const { handleGoToSignUp } = useSignIn();

  const { handleSeePassword, isPasswordShown, eyeIcon } = useSeePasswordInput();

  return (
    <Container>
      <Typography variant="title">Login</Typography>

      <InputRootWithMarginBottom marginBottom={20}>
        <Input.Label label="E-mail" />
        <Input.Content>
          <Input.Field
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder="Enter with your email address"
          />
        </Input.Content>
      </InputRootWithMarginBottom>

      <InputRootWithMarginBottom marginBottom={40}>
        <Input.Label label="Password" />
        <Input.Content>
          <Input.Field
            secureTextEntry={!isPasswordShown}
            placeholder="Minimum 8 characters"
          />
          <Input.Icon
            icon={eyeIcon}
            size={20}
            color={theme.colors.grey700}
            onPress={handleSeePassword}
          />
        </Input.Content>
      </InputRootWithMarginBottom>

      <Button variant="action1">Login</Button>

      <PressableStyled onPress={handleGoToSignUp}>
        <TypographyStyled variant="body2">
          Don’t have an account?{" "}
          <TypographyUnderline variant="body2">Sign up</TypographyUnderline>{" "}
          here
        </TypographyStyled>
      </PressableStyled>
    </Container>
  );
};

const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flex: 1,
    alignItems: "center",
    paddingVertical: verticalScale(20),
    paddingHorizontal: horizontalScale(20),
  },
})``;

const InputRootWithMarginBottom = styled(Input.Root)<{ marginBottom: number }>`
  margin-bottom: ${({ marginBottom }) => verticalScale(marginBottom)}px;
`;

const PressableStyled = styled.Pressable`
  margin-top: ${verticalScale(20)}px;
`;

const TypographyStyled = styled(Typography).attrs({
  variant: "body2",
})`
  color: ${({ theme }) => theme.colors.grey700};
`;
const TypographyUnderline = styled(TypographyStyled)`
  text-decoration: underline;
`;
