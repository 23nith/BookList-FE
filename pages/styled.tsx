import tw from "tailwind-styled-components";

const Button = tw.button`py-10px px-15px border-0 leading-none rounded-3`;

const LoginButton = tw(Button)`text-white bg-custom_blue`;
const RegisterButton = tw(Button)`text-custom_gray bg-custom_light_gray2`;

export { Button, LoginButton, RegisterButton };
