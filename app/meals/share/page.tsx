'use client';

import { useFormState } from "react-dom";

export default function ShareMealPage(){
    const [state, formAction] = useFormState(shareMeal,{message:null});
    return(<></>);
}