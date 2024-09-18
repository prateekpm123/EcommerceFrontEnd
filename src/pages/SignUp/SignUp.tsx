import P_EmptyCard from "@/projectComponents/EmptyCard";
import Input from "@/projectComponents/Input";
import PrimaryButton from "@/projectComponents/PrimaryButton";
import { useRef } from "react";

function SignUp() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);

  const handleSignUp = () => {
    if(emailRef && passRef) {
      console.log("Signed up");
    }
    return null;
  }

  return (
    <div className="h-full">
      <h1 className="text-3xl text-slate-300 pt-10">Sign Up</h1>
      <P_EmptyCard>
        <Input ref={emailRef} id="signEmailId" name="Email" placeHolder="Email here" className="text-slate-50"></Input>
        <Input
          id="signPasswordId"
          name="Password"
          placeHolder="Password here"
          ref={passRef}
          className="text-slate-50"
        ></Input>
        <PrimaryButton id="signUpButton" name="Sign up" className="m-5" onClick={handleSignUp}></PrimaryButton>
        <PrimaryButton id="cancelButton" name="Cancel" className="m-5"></PrimaryButton>
      </P_EmptyCard>
    </div>
  );
}

export default SignUp;
