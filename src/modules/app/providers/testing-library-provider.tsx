import { render } from "@testing-library/react-native";
import { Providers } from ".";

const AllTheProviders = ({ children }) => {
  return <Providers>{children}</Providers>;
};

const customRender: typeof render = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react-native";

// override render method
export { customRender as render };
