//This code imports the main React library, and two functions that it exports.
//We will useState to hold and set the array of animals.
import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
// A context stores a certain kind of data to be used in your application. 
// Therefore, when you create a data provider component in React, 
// you need to create a context.
export const AnimalContext = createContext()
//Nothing is stored in the context when it's defined. At this point, 
//it's just an empty warehouse waiting to be filled.


// This component establishes what data can be used.
//Now that the required functions are imported, and an empty context is created, 
//it's time to define the data provider component that will allow other 
//components to use the data in the context.
export const AnimalProvider = (props) => {
    //Next, you will use the useState() hook to define a variable 
    //that holds the state of the component, and a function that updates it.
    const [animals, setAnimals] = useState([])
//Here's what the State hook is doing for you with a single line of code.
// Define the variable which will hold the data.
//let animals = []
// Define the function to be used to modify that state.
//const setAnimals = animalsData => {
//     if (animalsData !== null && Array.isArray(animalsData)) {
//         animals = animalsData
//     }
// }
const [ searchTerms, setSearchTerms ] = useState("")


    const getAnimals = () => {
        return fetch("http://localhost:8088/animals?_expand=location&_expand=customer")
        .then(res => res.json())
        .then(setAnimals)
    }

    const addAnimal = animalObj => {
        return fetch("http://localhost:8088/animals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animalObj)
        })
        .then(getAnimals)
    }
    //Since the animal detail component is responsible for showing data about an animal, 
    //as well as its related owner and location data objects embedded inside the response. 
    //Our use of _expand to get the nested related data back in one query looks like this.
    const getAnimalById = (id) => {
        return fetch(`http://localhost:8088/animals/${id}?_expand=location&_expand=customer`)
            .then(res => res.json())
    }
    //Since the provider components handle all interactions with the database, you need to implement 
    //a function that performs a fetch operation with the DELETE method to delete a specific animal.
    const releaseAnimal = animalId => {
        return fetch(`http://localhost:8088/animals/${animalId}`, {
            method: "DELETE"
        })
            .then(getAnimals)
    }

    const updateAnimal = animal => {
        return fetch(`http://localhost:8088/animals/${animal.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(animal)
        })
          .then(getAnimals)
      }
    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
//    Expose the method via the AnimalContext.
    return (
        <AnimalContext.Provider value={{
            animals, getAnimals, addAnimal, getAnimalById, releaseAnimal, updateAnimal,
            searchTerms, setSearchTerms
        }}>
            {props.children}
        </AnimalContext.Provider>
    )
}