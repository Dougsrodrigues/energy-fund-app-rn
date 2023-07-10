import { styled, useTheme } from "styled-components/native";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "@/modules/app/utils/functions";
import { useEffect, useState } from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Check } from "phosphor-react-native";

interface CheckboxProps {
  isChecked?: boolean;
}

export const CheckboxField = ({ ...rest }: CheckboxProps) => {
  const theme = useTheme();
  const [isChecked, setIsChecked] = useState(false);

  const checked = useSharedValue(0);

  const styleAnimated = useAnimatedStyle(() => {
    return {
      opacity: interpolate(checked.value, [0, 1], [0, 1]),
    };
  });

  useEffect(() => {
    checked.value = withSpring(isChecked ? 1 : 0);
  }, [isChecked]);
  return (
    <Box onPress={() => setIsChecked((prevState) => !prevState)}>
      <IconAnimatedStyled style={styleAnimated}>
        <Check
          size={moderateScale(20)}
          weight="bold"
          color={theme.colors.green}
        />
      </IconAnimatedStyled>
    </Box>
  );
};

const IconAnimated = Animated.View;

const IconAnimatedStyled = styled(IconAnimated)``;

const Box = styled.Pressable`
  width: ${horizontalScale(20)}px;
  height: ${verticalScale(20)}px;

  border: 2px solid ${({ theme }) => theme.colors.grey500};

  justify-content: center;
  align-items: center;
`;
