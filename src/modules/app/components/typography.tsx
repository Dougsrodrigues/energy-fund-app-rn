import { StyleProp, Text, TextProps, TextStyle } from "react-native";
import { useTheme } from "styled-components/native";
import { verticalScale } from "../utils/functions";

type Variant = "title";

interface TypographyProps extends TextProps {
  children: React.ReactNode;
  variant?: Variant;
}
export const Typography = ({
  children,
  variant,
  style,
  ...rest
}: TypographyProps) => {
  const theme = useTheme();

  const makeStyles = (variant: Variant): StyleProp<TextStyle> => {
    switch (variant) {
      case "title":
        return {
          fontFamily: theme.fonts.semiBold600,
          fontSize: verticalScale(18),
          color: theme.colors.black,
        };

      default:
        return {
          fontFamily: theme.fonts.regular400,
          color: theme.colors.black,
          fontSize: verticalScale(14),
        };
    }
  };
  return (
    <Text {...rest} style={[makeStyles(variant), style]}>
      {children}
    </Text>
  );
};
