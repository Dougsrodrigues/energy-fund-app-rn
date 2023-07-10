import { render } from "@/modules/app/providers";
import { SignIn } from "./sign-in";

describe("SignIn", () => {
  test("test", () => {
    const sut = render(<SignIn />);
  });
});
