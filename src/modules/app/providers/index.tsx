import { StyledComponentsProvider } from "./styled-components-provider";

interface ProvidersProps {
  children: React.ReactNode;
}
export const Providers = ({ children }: ProvidersProps) => {
  return <StyledComponentsProvider>{children}</StyledComponentsProvider>;
};
