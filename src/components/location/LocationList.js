import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./Location"
import "./Location.css"

export const LocationList = () => {
    // you will notice two new hooks: useContext and useEffect.
    // The useContext hook allows you to use data structures and functions 
    // that a parent provider component exposes.
    // To start, you need to import the context object you created in the provider 
    // component so that the Context hook can access the objects it exposes.
  // This state changes when `getAnimals()` is invoked below
  const { locations, getLocations } = useContext(LocationContext)

//   The useEffect hook allows the component to reach out into the world for anything 
//   that cannot be handled during render. 
//   In this case, it is the API call for the animals.
  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("LocationsList: useEffect - getLocations")
    getLocations()
}, [])
//     What is that empty array bracket?
// The dependency array. Logic within functions only occur when a function is invoked. 
// Within a React component, useEffect is a function. After the return, useEffect is automatically 
// invoked and since the dependency array is empty, it only runs the first time the component renders.
// You can include dependencies in the array to cause the useEffect to run additional times.
// Be careful setting state within the useEffect. State changes cause a re-render. Re-render can invoke 
// useEffect (depending on the dependency array values). This would result in an infinate loop.

//   Use the .map() array method to iterate the array of animals and 
//   generate HTML for each one by invoking the AnimalCard component function.
  return (
    <div className="locations">
      {console.log("LocationList: Render", locations)}
      {
        locations.map(location => {
          return <LocationCard key={location.id} location={location} />
        })
      }
    </div>
  )
}
// ***Note that even though it looks like you are specifying an HTML component, you are actually invoking 
// a function. Also, the key and animal arguments look like HTML attributes here, but they actually become 
// properties on an object that gets passed as an argument.