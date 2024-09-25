import P_EmptyCard from "@/projectComponents/EmptyCard"
import Input from "@/projectComponents/Input"
import PrimaryButton from "@/projectComponents/PrimaryButton"
import { useRef } from "react"
import UserAuthenticationController from "@/controller/UserAuthenticationController"
import { UserCreatedDto } from "@/dtos/UserCreatedDto"
import { AxiosResponse } from "node_modules/axios/index.ts"
import { useProjectContext } from "@/contexts/ProjectContext"
import { useNavigate } from "react-router-dom"

export const LoginPage = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const projectContext = useProjectContext();
    const navigate = useNavigate();

    const handleLogin = (): undefined => {
        if(emailRef?.current && passwordRef?.current) {
            const email = emailRef.current.value;
            const password = passwordRef.current.value;
            const userAuthController = new UserAuthenticationController();
            
            // Making a call to the server
            userAuthController.getUserAuth().login({email, password})
            .then((value) => {
                const response = value as AxiosResponse;
                const userData = response.data.data as UserCreatedDto;
                if(response.status == 200 && response.data.status == "OK") { // on success
                    console.log(response.data.message); 
                    projectContext.setUserContext(userData);
                    navigate("/welcome");
                }
            }).catch(()=> {
                alert("Login failed");
            })
        }
    }

    return (
        <div className="flex flex-col items-center h-screen w-screen p-8">
            <P_EmptyCard className="flex h-fit w-full p-8">
                <h1 className="text-3xl flex-block text-slate-200 pt-4 pb-6">Login Page</h1>
                <Input placeHolder={"Email"} id={"loginEmailInput"} name={"Email"} text={"Email"} ref={emailRef}></Input>
                <Input placeHolder={"Password"} id={"loginEmailInput"} name={"Password"} text={"Password"} ref={passwordRef}></Input>
                <PrimaryButton id={"loginButton"} name={"Log In"} onClick={handleLogin}></PrimaryButton>
            </P_EmptyCard>
        </div>
    )
}