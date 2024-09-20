import SignUpDto from "@/dtos/SignUpDto";
import P_EmptyCard from "@/projectComponents/EmptyCard";
import Input from "@/projectComponents/Input";
import PrimaryButton from "@/projectComponents/PrimaryButton";
import { useRef } from "react";
import UserAuthenticationController from "@/controller/UserAuthenticationController";
import { AxiosError, AxiosResponse } from "node_modules/axios/index.ts";
import SignUpErrorResponseData from "@/dtos/SignUpErrorResponseData";
import SignUpSuccessfulResponse from "@/dtos/SignUpSuccessfulResponse";
import { UserCreatedDto } from "@/dtos/UserCreatedDto";


function SignUp() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const userAuthController: UserAuthenticationController =
    new UserAuthenticationController();

  // const handleSignUp: Promise<null> = async (param1: object, param2: object) => {
  const handleSignUp = async (
    param1?: object,
    param2?: object
  ): Promise<null> => {
    let signupBody: SignUpDto;
    if (emailRef && emailRef.current && passRef && passRef.current) {
      if (param1 || param2) {
        console.log("something is there", param1, param2);
      }

      signupBody = new SignUpDto(emailRef.current.value, passRef.current.value);
      try {
        const userService = userAuthController.getUserAuth();
        if (userAuthController.getUserAuth()) {
          const response = userService
            .signIn(signupBody)
            .then((response: object) => {
              const responsed = response as AxiosResponse;
              const responseData = responsed.data as SignUpSuccessfulResponse;
              const userData: UserCreatedDto = responseData.data;
              alert("Sign Up successful");
              // emailRef.current?.;
              console.log(userData);
            })
            .catch((errorReason: AxiosError) => {
              if(errorReason.response) {
                const data = errorReason.response.data as SignUpErrorResponseData;
                alert(data.message);
                return data.message;           
              }
            });
          console.log(response);
        }
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
