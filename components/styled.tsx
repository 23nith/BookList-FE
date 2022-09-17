import tw from "tailwind-styled-components";
import { FaSpinner } from "react-icons/fa";

const Spinner = tw(FaSpinner)`animate-spin-slow wiggle`;

const Button = tw.button`py-10px px-15px border-0 leading-none rounded-3`;

const LoginButton = tw(Button)`text-white bg-custom_blue`;

const RegisterButton = tw(Button)`text-custom_gray bg-custom_light_gray2`;

const LogoutButton = tw(RegisterButton)`leading-none`;

const CloseFormDiv = tw.div`flex justify-end`;

const CloseFormButton = tw.button`rounded-30 p-0 w-40 h-40 leading-none flex items-center justify-center bg-white text-custom_gray border border-custom_light_gray cursor-pointer`;

const CloseFormSpan = tw.span`border-0 h-1 m-negative_1 overflow-hidden p-0 w-1 whitespace-nowrap absolute`;

export {
  Button,
  LoginButton,
  LogoutButton,
  RegisterButton,
  CloseFormDiv,
  CloseFormButton,
  CloseFormSpan,
  Spinner,
};
