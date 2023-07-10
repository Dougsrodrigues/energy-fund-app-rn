import { styled, useTheme } from "styled-components/native";
import { Typography } from "./typography";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../utils/functions";
import {
  ActivityIndicator,
  PressableProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";

type Variant = "action1";
interface ButtonProps extends PressableProps {
  children: React.ReactNode;
  variant: Variant;
  isLoading?: boolean;
}

interface MakeStylesButtonReturn {
  stylesButton: StyleProp<ViewStyle>;
  stylesText: StyleProp<TextStyle>;
}

export const Button = ({
  children,
  variant,
  isLoading,
  ...rest
}: ButtonProps) => {
  const theme = useTheme();

  const makeStylesButton = (variant: Variant): MakeStylesButtonReturn => {
    switch (variant) {
      case "action1":
        return {
          stylesButton: {
            backgroundColor: theme.colors.purple700,
          },
          stylesText: {
            color: theme.colors.white,
            fontSize: verticalScale(16),
          },
        };
    }
  };

  const { stylesButton, stylesText } = makeStylesButton(variant);

  return (
    <Container style={stylesButton} {...rest}>
      {isLoading ? (
        <ActivityIndicator testID="snipper_button" />
      ) : (
        <Typography style={stylesText}>{children}</Typography>
      )}
    </Container>
  );
};

const Container = styled.Pressable`
  width: 100%;

  align-items: center;
  justify-content: center;

  padding: ${verticalScale(16)}px ${horizontalScale(16)}px;

  border-radius: ${moderateScale(4)}px;
`;
