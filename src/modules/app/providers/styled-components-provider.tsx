import { ThemeProvider } from "styled-components/native";
import theme from "../styles/theme";

interface StyledComponentsProviderProps {
  children: React.ReactNode;
}
export const StyledComponentsProvider = ({
  children,
}: StyledComponentsProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
