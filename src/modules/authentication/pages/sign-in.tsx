import { Typography } from "@/modules/app/components";
import { horizontalScale, verticalScale } from "@/modules/app/utils/functions";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { styled } from "styled-components/native";

export const SignIn = () => {
  return (
    <Container>
      <SafeAreaViewStyled>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Content>
            <Typography variant="title">Login</Typography>
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
