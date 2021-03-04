//This code imports the main React library, and two functions that it exports.
//We will useState to hold and set the array of animals.
import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
// A context stores a certain kind of data to be used in your application. 
// Therefore, when you create a data provider component in React, 
// you need to create a context.
export const LocationContext = createContext()
//Nothing is stored in the context when it's defined. At this point, 
//it's just an empty warehouse waiting to be filled.


// This component establishes what data can be used.
//Now that the required functions are imported, and an empty context is created, 
//it's time to define the data provider component that will allow other 
//components to use the data in the context.
export const LocationProvider = (props) => {
    //Next, you will use the useState() hook to define a variable 
    //that holds the state of the component, and a function that updates it.
    const [locations, setLocations] = useState([])
//Here's what the State hook is doing for you with a single line of code.
// Define the variable which will hold the data.
//let animals = []
// Define the function to be used to modify that state.
//const setAnimals = animalsData => {
//     if (animalsData !== null && Array.isArray(animalsData)) {
//         animals = animalsData
//     }
// }

    const getLocations = () => {
        return fetch("http://localhost:8088/locations/?_embed=employees&_embed=animals")
        .then(res => res.json())
        .then(setLocations)
    }

    const addLocation = locationObj => {
        return fetch("http://localhost:8088/locations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(locationObj)
        })
        .then(getLocations)
    }
const getLocationById = (id) => {
    return fetch(`http://localhost:8088/locations/${id}?_embed=employees&_embed=animals`)
    .then(res => res.json())
}   

const updateLocation = location => {
    return fetch(`http://localhost:8088/locations/${location.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(location)
    })
      .then(getLocations)
  }
    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
    return (
        <LocationContext.Provider value={{
            locations, getLocations, addLocation, getLocationById, updateLocation
        }}>
            {props.children}
        </LocationContext.Provider>
    )
}