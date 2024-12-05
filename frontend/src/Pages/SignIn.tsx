import { Button } from "../components/Button"
import { InputBox } from "../components/InputBox"

export const SignIn = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="flex flex-col items-center space-y-5 border-2 rounded-md p-6">
                <InputBox placehoder="email"/>
                <InputBox placehoder="password"/>
                <Button title="signIn" variants="primary"/>
            </div>
        </div>
    )
}