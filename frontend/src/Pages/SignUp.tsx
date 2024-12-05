import { Button } from "../components/Button"
import { InputBox } from "../components/InputBox"

export const SignUp = () => {
    return (
    
        <div className="flex justify-center items-center min-h-screen ">
            <div className="w-fit p-10 space-y-4 border-2 flex flex-col justify-center items-center">
                <InputBox placehoder="username"/>
                <InputBox placehoder="email"/>
                <InputBox placehoder="password"/>
                <Button variants="primary" title="signUp"/>
            </div>
        </div>
    )
}