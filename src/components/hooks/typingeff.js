import { useEffect, useState } from "react";

export function useTypingEff(textRecieve,Dura){
 
    const [currentPos,setcurrentPos] = useState(0);
   useEffect(()=>{
    const intervalId = setInterval(()=>{
        setcurrentPos((value)=>value + 1);

    },Dura);
    return ()=>{
        clearInterval(intervalId);
    }
   },[Dura]);

   return textRecieve.substring(0,currentPos);
}