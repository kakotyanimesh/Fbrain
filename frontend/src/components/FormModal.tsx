import React from "react"
import { CloseIcon } from "../Icons/CloseIcon"
import { Button } from "./Button"
import { InputBox } from "./InputBox"

interface StateValueInterface {
    open : boolean,
    onClose : () => void
}

export const ContentModal = ({open, onClose} : StateValueInterface) => {
    return (
        <div>
        {open && 
            <div className="bg-red-700 text-black top-0 left-0 flex justify-center items-center right-0 bg-opacity-10 min-h-screen fixed">
                <div className="w-fit p-9 bg-white flex flex-col items-center relative gap-5 rounded-xl">
                    <button onClick={onClose} className="right-3 top-4 absolute"><CloseIcon/></button>
                    <InputBox placehoder="title"/>
                    <InputBox placehoder="Link"/>
                    <Button variants="primary" title="submit" onClickfn={onClose}/>
                </div>
            </div>}
        </div>
    )
}