import React from 'react';
import { useRef, useState } from 'react';
import { useStateValue } from "../state/StateProvider";

const Counter = ({loopLength}) => {

  const [{ aniCount }, aniCountDispatch] = useStateValue();
  const [count, setCount] = useState(0)
  const [prevNum, setPrevNum] = useState(1)
  const requestRef = useRef();
  const previousTimeRef = useRef();
 
  const animate = time => {
    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current;
      setCount(prevCount => ((prevCount + deltaTime * 0.01)));

      if (count > prevNum) {
       setPrevNum(prevNum + 1) 
        if (aniCount + 1 >= loopLength) {
          aniCountDispatch({
            type: 'changeAniCount',
            newAniCount: 0
          })
        }
        else {
          aniCountDispatch({
            type: 'changeAniCount',
            newAniCount: aniCount + 1
          })
        }
      }
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  }
  React.useEffect(() => {
 
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, );
  return null
}

export default Counter 