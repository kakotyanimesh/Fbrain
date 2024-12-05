import { ReactElement } from "react"

interface ButtonInterface {
    variants : "primary" | "secondary",
    title : string,
    startIcon ?: ReactElement,
    onClickfn ?: () => void
}


const variantsStyle = {
    'primary' : 'bg-[#4f45e4] text-white',
    'secondary' : 'bg-[#dfe6fe] text-[#9d9de7]' 
}


const defaultStyle= 'flex justify-between py-2 w-fit sm:px-6 px-1 items-center sm:gap-4 gap-2  rounded-md'


export const Button = (props : ButtonInterface) => {

    return (
        <button className={`${variantsStyle[props.variants]} ${defaultStyle}`} onClick={props.onClickfn}>
            {props.startIcon}
            {props.title}
        </button>
    )
}