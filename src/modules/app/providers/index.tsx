import { NavigatorProvider } from "./navigator-provider";
import { StyledComponentsProvider } from "./styled-components-provider";

interface ProvidersProps {
  children: React.ReactNode;
}
export const Providers = ({ children }: ProvidersProps) => {
  return (
    <StyledComponentsProvider>
      <NavigatorProvider>{children}</NavigatorProvider>
    </StyledComponentsProvider>
  );
};
