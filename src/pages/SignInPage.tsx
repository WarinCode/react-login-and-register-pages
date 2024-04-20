import {
  ReactElement,
  FC,
  FormEvent,
  ChangeEvent,
  useState,
  useRef,
} from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import FormContainer from "../components/FormContainer";
import InputGroup from "../components/InputGroup";
import InputField from "../components/InputField";
import ButtonGroup from "../components/ButtonGroup";
import Button from "../components/Button";
import Line from "../components/Line";
import UtilityFuncs from "../utils";
import google from "../assets/logos/google.png";
import apple from "../assets/logos/apple.png";

const SignInPage: FC<AppProps.SignInPageProps<HTMLElement>> = ({
  attributes,
}): ReactElement<HTMLElement> => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const emailRef: InputRef = useRef() as InputRef;
  const passwordRef: InputRef = useRef() as InputRef;

  return (
    <Container
      attributes={{
        ...attributes,
        className: `h-[630px] w-[450px] flex flex-col items-start justify-stretch rounded-2xl text-white bg-white px-5 py-8 ${attributes?.className}`,
      }}
    >
      <Header />
      <FormContainer
        attributes={{
          onSubmit: (e: FormEvent<HTMLFormElement>): void =>
            UtilityFuncs.handleSubmit(e, (): void => {
              console.log({ email, password });
              UtilityFuncs.resetForm(emailRef, passwordRef);
            }),
        }}
      >
        <InputGroup
          attributes={{
            className: "w-full h-max",
          }}
        >
          <InputField
            inputRef={emailRef}
            inputAttributes={{
              id: "email",
              type: "email",
              name: "email",
              placeholder: "email",
              maxLength: 40,
              required: true,
              onChange: (e: ChangeEvent<HTMLInputElement>): void => {
                UtilityFuncs.handleChange(e, setEmail);
              },
            }}
          />
          <InputField
            inputRef={passwordRef}
            inputAttributes={{
              id: "password",
              type: "password",
              name: "password",
              placeholder: "password",
              maxLength: 30,
              minLength: 8,
              required: true,
              onChange: (e: ChangeEvent<HTMLInputElement>): void => {
                UtilityFuncs.handleChange(e, setPassword);
              },
            }}
          />
          <a
            href="#"
            className="font-bold font-prompt text-lg text-black text-end capitalize block cursor-pointer hover:underline hover:text-primary ease-in duration-300"
          >
            forget password?
          </a>
        </InputGroup>
        <Button
          text={"log in"}
          attributes={{
            type: "submit",
            className: "bg-gradient-to-l from-primary to-secondary my-6",
          }}
        />
      </FormContainer>
      <Line />
      <ButtonGroup
        attributes={{
          className:
            "w-full h-[140px] flex flex-col items-center justify-between mt-6",
        }}
      >
        <Button
          text={"Log In with Google"}
          displayImg={true}
          attributes={{
            type: "button",
            className:
              "normal-case w-full flex items-center justify-center border-2 border-gray300",
          }}
          childAttributes={{
            src: google,
            alt: "google-logo",
          }}
        />
        <Button
          text={"Log In with Apple"}
          displayImg={true}
          attributes={{
            type: "button",
            className:
              "normal-case w-full flex items-center justify-center border-2 border-black bg-dark text-white",
          }}
          childAttributes={{
            src: apple,
            alt: "apple-logo",
          }}
        />
      </ButtonGroup>
    </Container>
  );
};

export default SignInPage;
