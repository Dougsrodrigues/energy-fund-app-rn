import { Input, Typography } from "@/modules/app/components";
import { InputContent } from "@/modules/app/components/input/input-content";
import { horizontalScale, verticalScale } from "@/modules/app/utils/functions";
import { Eye, EyeClosed } from "phosphor-react-native";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { styled, useTheme } from "styled-components/native";
import { useSignIn } from "../hooks/use-sign-in";

export const SignIn = () => {
  const theme = useTheme();
  const { isPasswordShown, handleSeePassword } = useSignIn();

  const eyeIcon = isPasswordShown ? Eye : EyeClosed;
  return (
    <Container>
      <SafeAreaViewStyled>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Content>
            <Typography variant="title">Login</Typography>

            <InputRootWithMarginBottom>
              <Input.Label label="E-mail" />
              <InputContent>
                <Input.Field />
              </InputContent>
            </InputRootWithMarginBottom>

            <Input.Root>
              <Input.Label label="Senha" />
              <InputContent>
                <Input.Field secureTextEntry={!isPasswordShown} />
                <Input.Icon
                  icon={eyeIcon}
                  size={20}
                  color={theme.colors.grey700}
                  onPress={handleSeePassword}
                />
              </InputContent>
            </Input.Root>
          </Content>
        </TouchableWithoutFeedback>
      </SafeAreaViewStyled>
    </Container>
  );
};

const SafeAreaViewStyled = styled.KeyboardAvoidingView`
  flex: 1;
`;
const Container = styled.KeyboardAvoidingView`
  flex: 1;
`;

const Content = styled.View`
  flex: 1;
  align-items: center;

  padding: ${verticalScale(16)}px ${horizontalScale(16)}px;
`;

const InputRootWithMarginBottom = styled(Input.Root)`
  margin-bottom: ${verticalScale(20)}px;
`;
