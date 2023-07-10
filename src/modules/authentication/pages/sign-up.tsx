import { Button, Input, Typography } from "@/modules/app/components";
import { horizontalScale, verticalScale } from "@/modules/app/utils/functions";
import { styled, useTheme } from "styled-components/native";
import { useSeePasswordInput } from "../hooks";
import { KeyboardAvoidingView, Platform } from "react-native";
import { Checkbox } from "../components";

export const SignUp = () => {
  const { handleSeePassword, isPasswordShown, eyeIcon } = useSeePasswordInput();

  const theme = useTheme();

  const isIos = Platform.OS === "ios";
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={isIos ? 47 : null}
      behavior={isIos ? "padding" : null}
    >
      <Container>
        <Typography variant="title">Create your account</Typography>
        <Content>
          <InputRootWithMarginBottom marginBottom={20}>
            <Input.Label label="First Name" />
            <Input.Content>
              <Input.Field placeholder="Enter with your name" />
            </Input.Content>
          </InputRootWithMarginBottom>

          <InputRootWithMarginBottom marginBottom={20}>
            <Input.Label label="Last Name" />
            <Input.Content>
              <Input.Field placeholder="Enter with your last name" />
            </Input.Content>
          </InputRootWithMarginBottom>

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

          <InputRootWithMarginBottom marginBottom={16}>
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

          <Checkbox />
          <TypographyStyled>
            I am over 18 years of age and I have read and agree to the{" "}
            <Typography variant="body2">Terms of Service</Typography> and{" "}
            <Typography variant="body2">Privacy policy.</Typography>
          </TypographyStyled>

          <Button variant="action1">Create account</Button>

          <PressableStyled onPress={() => console.log("ola")}>
            <TypographyStyled>
              Already have an account?{" "}
              <TypographyUnderline>Log in here</TypographyUnderline>
            </TypographyStyled>
          </PressableStyled>
        </Content>
      </Container>
    </KeyboardAvoidingView>
  );
};

const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    minHeight: "100%",
    flexGrow: 1,
    alignItems: "center",
    paddingTop: verticalScale(20),
    paddingHorizontal: horizontalScale(20),
  },
})`
  flex-grow: 1;
`;

const Content = styled.View`
  width: 100%;
  margin-top: ${verticalScale(34)}px;
  min-height: 100%;
  align-items: center;
`;

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
const TypographyUnderline = styled(Typography).attrs({
  variant: "body2",
})`
  text-decoration: underline;
`;
