import { IconProps } from "phosphor-react-native";
import { ElementType } from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

interface InputIconProps extends IconProps {
  icon: ElementType;
  onPress: () => void;
}

export const InputIcon = ({ icon: Icon, onPress, ...rest }: InputIconProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Icon {...rest} />
    </TouchableWithoutFeedback>
  );
};
