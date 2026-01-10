import { Que } from "./App";

export function getFinalState(baseState: number, queue: Que[]) {
    let finalState = baseState;

    for(let el of queue){
        if(typeof el === 'function'){
            finalState = el(finalState);
        }else{
            finalState = el;
        }
    }


    return finalState;
}