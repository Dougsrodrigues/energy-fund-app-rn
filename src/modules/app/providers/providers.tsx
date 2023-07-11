import { NavigatorProvider, ReduxProvider, StyledComponentsProvider } from ".";

interface ProvidersProps {
  children: React.ReactNode;
}
export const Providers = ({ children }: ProvidersProps) => {
  return (
    <StyledComponentsProvider>
      <ReduxProvider>
        <NavigatorProvider>{children}</NavigatorProvider>
      </ReduxProvider>
    </StyledComponentsProvider>
  );
};
