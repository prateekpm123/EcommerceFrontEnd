import P_EmptyCard from "@/projectComponents/EmptyCard";
import Input from "@/projectComponents/Input";
import PrimaryButton from "@/projectComponents/PrimaryButton";
// import { useRef } from "react";
// import { useRef } from "react";

function SignUp() {
  // const emailRef = useRef();
  // const passRef = useRef();

  return (
    <div className="h-full">
      <h1 className="text-3xl text-slate-300 pt-10">Sign Up</h1>
      <P_EmptyCard>
        <Input id="signEmailId" name="Email" placeHolder="Email here"></Input>
        <Input
          id="signPasswordId"
          name="Password"
          placeHolder="Password here"
        ></Input>
        <PrimaryButton id="signUpButton" name="Sign up" className="m-5"></PrimaryButton>
        <PrimaryButton id="cancelButton" name="Cancel" className="m-5"></PrimaryButton>
      </P_EmptyCard>
    </div>
  );
}

export default SignUp;
