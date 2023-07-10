import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "@/modules/app/utils/functions";
import { Check } from "phosphor-react-native";
import { useState } from "react";
import { styled } from "styled-components/native";

export const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Container>
      <Box onPress={() => console.log("apertou")}>
        <Check size={moderateScale(20)} />
      </Box>
    </Container>
  );
};

const Container = styled.View``;

const Box = styled.Pressable`
  width: ${horizontalScale(20)}px;
  height: ${verticalScale(20)}px;

  border: 2px solid ${({ theme }) => theme.colors.grey500};
  justify-content: center;
  align-items: center;
`;
