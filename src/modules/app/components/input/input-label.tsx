import { styled } from "styled-components/native";
import { Typography } from "../typography";
import { verticalScale } from "@/modules/app/utils/functions";

interface InputLabelProps {
  label: string;
}

export const InputLabel = ({ label }: InputLabelProps) => {
  return <Label>{label}</Label>;
};

const Label = styled(Typography)`
  color: ${({ theme }) => theme.colors.grey700};
  text-align: left;
  width: 100%;

  margin-bottom: ${verticalScale(4)}px;
`;
