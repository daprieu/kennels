import React, { useState } from "react"
// Definition: useState() is what the React team calls a hook. 
// It is used to store data about the component. 
// You can translate its usage into English with the following statement.
// "My component has its own state to maintain. Therefore, I will use the State hook to store it."
export const PropsAndState = ({ yourName }) => {
    // Within the StateAndProps component, we will define state and a function to update state with the useState hook.
  let [countClicks, setCountClicks] = useState(0)
    // We will also create a function to handleClick.
  const handleClick = () => {
    //good practice:
    //make a copy of state, modifiy it, and then setState to the copy
    const newCountClicks = ++countClicks
    setCountClicks(newCountClicks)
  }
    //   Every time state is updated, the component will re-render. (Say that one more time)
  return (
    <>
      <h3>Welcome, {yourName} </h3>
      <p>{countClicks}</p>
      <button onClick={(handleClick)}>Click Me</button>
    </>
  )
}