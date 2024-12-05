interface InputInterface {
    placehoder :  string,
    onChangeFun?: () => void
}

export const InputBox = (props : InputInterface) => {
    return (
        <div>
            <input type="text" placeholder={props.placehoder} className="p-3 rounded border-2" />
        </div>
    )
}