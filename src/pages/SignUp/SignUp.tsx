import SignUpDto from "@/dtos/SignUpDto";
import P_EmptyCard from "@/projectComponents/EmptyCard";
import Input from "@/projectComponents/Input";
import PrimaryButton from "@/projectComponents/PrimaryButton";
import { useRef } from "react";
import axios from "axios";

function SignUp() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);

  // const handleSignUp: Promise<null> = async (param1: object, param2: object) => {
  const handleSignUp = async (param1?: object,param2?: object): Promise<null> => {
    let signupBody: SignUpDto;
    if (emailRef && emailRef.current && passRef && passRef.current) {
      if (param1 || param2) {
        console.log("something is there", param1, param2);
      }

      signupBody = new SignUpDto(emailRef.current.value, passRef.current.value);
      try {
        const response = await axios.post(
          "http://localhost:8080/auth/signIn",
          signupBody,
          {
            headers: {
              "Content-Type": "application/json", // Ensure request is JSON
            },
          }
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    return null;
  };

  return (
    <div className="h-full">
      <h1 className="text-3xl text-slate-300 pt-10">Sign Up</h1>
      <P_EmptyCard>
        <Input
          ref={emailRef}
          id="signEmailId"
          name="Email"
          placeHolder="Email here"
          className="text-slate-50"
        ></Input>
        <Input
          id="signPasswordId"
          name="Password"
          placeHolder="Password here"
          ref={passRef}
          className="text-slate-50"
        ></Input>
        <PrimaryButton
          id="signUpButton"
          name="Sign up"
          className="m-5"
          onClick={handleSignUp}
        ></PrimaryButton>
        <PrimaryButton
          id="cancelButton"
          name="Cancel"
          className="m-5"
        ></PrimaryButton>
      </P_EmptyCard>
    </div>
  );
}

export default SignUp;
