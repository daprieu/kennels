import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom" // import from libraries before your local modules
import { AnimalContext } from "./AnimalProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"

export const AnimalList = () => {
    // you will notice two new hooks: useContext and useEffect.
    // The useContext hook allows you to use data structures and functions 
    // that a parent provider component exposes.
    // To start, you need to import the context object you created in the provider 
    // component so that the Context hook can access the objects it exposes.
  // This state changes when `getAnimals()` is invoked below
const { animals, getAnimals, searchTerms } = useContext(AnimalContext)
// const { locations, getLocations } = useContext(LocationContext)
// const { customers, getCustomers } = useContext(CustomerContext)
//   The useHistory hook let's us tell React which route we want to visit. 
//   We will use it to tell React to render the animal form component.

  // Since you are no longer ALWAYS displaying all of the animals
  const [ filteredAnimals, setFiltered ] = useState([])
const history = useHistory()

//   The useEffect hook allows the component to reach out into the world for anything 
//   that cannot be handled during render. 
//   In this case, it is the API call for the animals.
  //useEffect - reach out to the world for something
  useEffect(() => {
    // console.log("AnimalList: Initial render before data")
        getAnimals()
        // .then(getCustomers)
        // .then(getAnimals)
    }, [])
//     What is that empty array bracket?
// The dependency array. Logic within functions only occur when a function is invoked. 
// Within a React component, useEffect is a function. After the return, useEffect is automatically 
// invoked and since the dependency array is empty, it only runs the first time the component renders.
// You can include dependencies in the array to cause the useEffect to run additional times.
// Be careful setting state within the useEffect. State changes cause a re-render. Re-render can invoke 
// useEffect (depending on the dependency array values). This would result in an infinate loop.

 // useEffect dependency array with dependencies - will run if dependency changes (state)
  // searchTerms will cause a change
  useEffect(() => {
    if (searchTerms !== "") {
      // If the search field is not blank, display matching animals
      const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms))
      setFiltered(subset)
    } else {
      // If the search field is blank, display all animals
      setFiltered(animals)
    }
  }, [searchTerms, animals])

//   Use the .map() array method to iterate the array of animals and 
//   generate HTML for each one by invoking the AnimalCard component function.
// Use the .find() method on both the customers array and the locations array to find 
// the object representation that each foreign key is referencing.
  return (
      <>
          <button onClick={() => {history.push("/animals/create")}}>Add Animal</button>
      <div className="animals">
        
{/* In React, we add event listeners directly on a button's onClick attribute.
useHistory is provided by react-router-dom. 
It contains a method, push() which we can use to change the URL. 
Be sure to import it at the top of the document. */}
      {
        filteredAnimals.map(animal => {
            return <AnimalCard key={animal.id} animal={animal} />
        })
      }
    </div>
    </>
  )
}
// ***Note that even though it looks like you are specifying an HTML component, you are actually invoking 
// a function. Also, the key and animal arguments look like HTML attributes here, but they actually become 
// properties on an object that gets passed as an argument.