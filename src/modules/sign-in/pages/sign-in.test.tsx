import { fireEvent, render } from "@/modules/app/providers";
import { SignIn } from "./sign-in";

const makeSut = () => {
  const sut = render(<SignIn />);

  return { sut };
};

describe("SignIn", () => {
  test("Should show error if inputs are empty", async () => {
    const { sut } = makeSut();

    const button = await sut.findByTestId("submit_button");

    fireEvent.press(button);

    const errorPasswordLabel = await sut.findByTestId(
      "input_content_password_error"
    );
    const errorEmailLabel = await sut.findByTestId("input_content_email_error");

    expect(errorPasswordLabel).toBeTruthy();
    expect(errorEmailLabel).toBeTruthy();
  });

  test("Should show invalid email if email is invalid", async () => {
    const value = "loremipsum";
    const { sut } = makeSut();

    const input = await sut.findByTestId("input_field_email");

    fireEvent.changeText(input, value);

    const button = await sut.findByTestId("submit_button");
    fireEvent.press(button);

    const errorEmailLabel = await sut.findByTestId("input_content_email_error");

    expect(errorEmailLabel).toBeTruthy();
    expect(errorEmailLabel.children[0]).toEqual("This e-mail is not valid");
  });

  test("Should show minimum char error if password is less than 8", async () => {
    const value = "1234";
    const { sut } = makeSut();

    const input = await sut.findByTestId("input_password_field");

    fireEvent.changeText(input, value);

    const button = await sut.findByTestId("submit_button");
    fireEvent.press(button);

    const errorEmailLabel = await sut.findByTestId(
      "input_content_password_error"
    );

    expect(errorEmailLabel).toBeTruthy();
    expect(errorEmailLabel.children[0]).toEqual("Minimum 8 characters");
  });

  test("Should call function if password and email is valid", async () => {
    const emailValue = "test@mail.com";
    const passwordValue = "12345678";

    const { sut } = makeSut();

    const inputEmail = await sut.findByTestId("input_field_email");
    const inputPassword = await sut.findByTestId("input_password_field");

    fireEvent.changeText(inputEmail, emailValue);
    fireEvent.changeText(inputPassword, passwordValue);

    const button = await sut.findByTestId("submit_button");
    fireEvent.press(button);

    const spinnerButton = await sut.findByTestId("snipper_button");

    expect(spinnerButton).toBeTruthy();
  });
});
