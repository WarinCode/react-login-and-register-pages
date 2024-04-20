import {
  ReactElement,
  FC,
  useRef,
  useState,
  FormEvent,
  ChangeEvent,
} from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import InputGroup from "../components/InputGroup";
import InputField from "../components/InputField";
import Button from "../components/Button";
import FormContainer from "../components/FormContainer";
import UtilityFuncs from "../utils";

const SignUpPage: FC<AppProps.SignUpPageProps<HTMLElement>> = ({
  attributes,
}): ReactElement<HTMLElement> => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const id: string = UtilityFuncs.generateId({ uuidLength: 30 });

  const userRef: UserModel.UserRef = {
    name: useRef() as InputRef,
    email: useRef() as InputRef,
    password: useRef() as InputRef,
    confirmPassword: useRef() as InputRef,
  };

  const validate = (): boolean => {
    if (name === "" || name.length < 3) {
      alert("ชื่อผู้ใช้งานต้องมีความยาวอย่างน้อย 3 ตัวอักษรขึ้นไป!");
      UtilityFuncs.resetForm(userRef.name);
      return false;
    } else if (Number(name[0]) in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
      alert("ชื่อผู้ใช้งานต้องไม่สามารถขึ้นต้นด้วยตัวเลขได้!");
      UtilityFuncs.resetForm(userRef.name);
      return false;
    } else if (password !== confirmPassword) {
      alert("รหัสผ่านไม่ถูกต้อง!");
      UtilityFuncs.resetForm(userRef.confirmPassword, userRef.password);
      return false;
    } else {
      alert("สมัครบัญชีผู้ใช้งานสำเร็จ");
      return true;
    }
  };

  const createUserAccount = (): UserModel.UserObject => {
    return { id, name, email, password };
  };

  return (
    <Container
      attributes={{
        ...attributes,
        className: `h-[630px] w-[450px] flex flex-col items-start justify-stretch rounded-2xl text-white bg-white px-5 py-8 ${attributes?.className}`,
      }}
    >
      <Header text={"sign up"} />
      <FormContainer
        attributes={{
          onSubmit: (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (validate()) {
              UtilityFuncs.handleSubmit(e, (): void => {
                UtilityFuncs.resetForm(
                  ...Object.entries(userRef)
                    .flat()
                    .filter((el: string | InputRef | HTMLElement): boolean => {
                      return typeof el !== "string";
                    })
                );
                console.log(createUserAccount());
              });
            }
          },
        }}
      >
        <InputGroup
          attributes={{
            className: "w-full h-max",
          }}
        >
          <InputField
            inputRef={userRef.name}
            inputAttributes={{
              type: "text",
              id: "name",
              placeholder: "name",
              required: true,
              onChange: (e: ChangeEvent<HTMLInputElement>) => {
                UtilityFuncs.handleChange(e, setName);
              },
            }}
          />
          <InputField
            inputRef={userRef.email}
            inputAttributes={{
              type: "email",
              id: "email",
              placeholder: "email",
              required: true,
              onChange: (e: ChangeEvent<HTMLInputElement>) => {
                UtilityFuncs.handleChange(e, setEmail);
              },
            }}
          />
          <InputField
            inputRef={userRef.password}
            inputAttributes={{
              type: "password",
              id: "password",
              placeholder: "password",
              min: 8,
              max: 30,
              required: true,
              onChange: (e: ChangeEvent<HTMLInputElement>) => {
                UtilityFuncs.handleChange(e, setPassword);
              },
            }}
          />
          <InputField
            inputRef={userRef.confirmPassword}
            inputAttributes={{
              type: "password",
              id: "repeat-password",
              placeholder: "repaet password",
              min: 8,
              max: 30,
              required: true,
              onChange: (e: ChangeEvent<HTMLInputElement>) => {
                UtilityFuncs.handleChange(e, setConfirmPassword);
              },
            }}
          />
        </InputGroup>
        <Button
          text={"create your account"}
          attributes={{
            type: "submit",
            className: "bg-gradient-to-l from-primary to-secondary mt-12",
          }}
        />
      </FormContainer>
    </Container>
  );
};

export default SignUpPage;
