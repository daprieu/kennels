//This code imports the main React library, and two functions that it exports.
//We will useState to hold and set the array of animals.
import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
// A context stores a certain kind of data to be used in your application. 
// Therefore, when you create a data provider component in React, 
// you need to create a context.
export const CustomerContext = createContext()
//Nothing is stored in the context when it's defined. At this point, 
//it's just an empty warehouse waiting to be filled.


// This component establishes what data can be used.
//Now that the required functions are imported, and an empty context is created, 
//it's time to define the data provider component that will allow other 
//components to use the data in the context.
export const CustomerProvider = (props) => {
    //Next, you will use the useState() hook to define a variable 
    //that holds the state of the component, and a function that updates it.
    const [customers, setCustomers] = useState([])
//Here's what the State hook is doing for you with a single line of code.
// Define the variable which will hold the data.
//let customers = []
// Define the function to be used to modify that state.
//const setAnimals = animalsData => {
//     if (animalsData !== null && Array.isArray(animalsData)) {
//         animals = animalsData
//     }
// }

    const getCustomers = () => {
        return fetch("http://localhost:8088/customers")
        .then(res => res.json())
        .then(setCustomers)
    }

    const addCustomer = customerObj => {
        return fetch("http://localhost:8088/customers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customerObj)
        })
        .then(getCustomers)
    }

    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
    return (
        <CustomerContext.Provider value={{
            customers, getCustomers, addCustomer
        }}>
            {props.children}
        </CustomerContext.Provider>
    )
}