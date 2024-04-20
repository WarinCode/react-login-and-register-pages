type DefineDefaultAttributes<T extends HTMLElement> = React.HTMLAttributes<T>;

interface BaseAttributes<T extends HTMLElement> {
  attributes?: DefineDefaultAttributes<T>;
}

declare type InputRef = React.MutableRefObject<HTMLInputElement>;
declare type InputRefs = Array<InputRef>

declare namespace AppProps {
  declare interface ContainerProps<T extends HTMLElement>
    extends BaseAttributes<T> {
    children: React.ReactNode;
  }
  declare interface HeaderProps<T extends HTMLElement>
    extends BaseAttributes<T> {
    text?: string;
  }
  declare interface SignInPageProps<T extends HTMLElement>
    extends BaseAttributes<T> {}
  declare interface SignUpPageProps<T extends HTMLElement>
    extends BaseAttributes<T> {}
  declare interface ButtonProps<
    T extends HTMLButtonElement = HTMLButtonElement,
    K extends HTMLImageElement = HTMLImageElement
  > {
    attributes?: React.ButtonHTMLAttributes<T>;
    childAttributes?: React.ImgHTMLAttributes<K>;
    text: string;
    displayImg?: boolean;
  }
  declare interface FormContainerProps<
    T extends HTMLFormElement = HTMLFormElement
  > extends ContainerProps<T> {}
  declare interface InputGroupProps<T extends HTMLElement>
    extends ContainerProps<T> {}
  declare interface InputFieldProps<T extends React.HTMLAttributes> {
    inputAttributes: React.InputHTMLAttributes<T>;
    inputRef: InputRef;
  }
  declare interface LineProps<T extends HTMLElement>
    extends BaseAttributes<T> {}
  declare interface ButtonGroupProps<T extends HTMLElement>
    extends ContainerProps<T> {}
}

declare namespace UserModel {
  declare interface BaseUser<T = unknown> {
    name: T;
    email: T;
    password: T;
  }
  declare interface UserObject<T extends string = string> extends BaseUser<T> {
    id: T;
  }
  declare interface UserRef<T extends InputRef = InputRef> extends BaseUser<T> {
    confirmPassword: T;
  }
}
