import { useEffect, useState } from "react"

function Timer() {


const [count, setCount] = useState(1);

useEffect (() => {
console.log('Screen Rendered!')
checkcount()
}, [count])


function checkcount(){
    if(count>10){
        setCount(1)
    }
}

function updateCount() {
setCount((previousState) => { return previousState+1})
}

return <><h1>I have rendered {count} times!</h1>
<button onClick={updateCount}>Increase count</button></>
}

export default Timer;