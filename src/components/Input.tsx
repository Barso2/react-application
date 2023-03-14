import React, { useEffect, useRef } from "react";
import { Alert } from "./Alert";
type Props = {
    submitFn: (value: string) => string;
    placeHolder: string;
    buttonName?: string;
}
export const Input: React.FC<Props> = ({ submitFn, placeHolder, buttonName }) => {
    const id = useRef<string>('');
    const inputElement = useRef<HTMLInputElement | null>();
    let message:string = '';
    useEffect(() => {
        id.current = Math.random().toString();
        inputElement.current = document.getElementById(id.current) as HTMLInputElement
    },[]);
    function inputProcess(){
        const message = submitFn(inputElement.current!.value)
    }
    return <div>
        <input type="text" placeholder={placeHolder} id={id.current} />
        <button onClick={inputProcess}>{buttonName || "GO"}</button>
        {message && <Alert>}
    </div>
}