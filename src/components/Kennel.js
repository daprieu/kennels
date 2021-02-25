import React from "react"
// import { AnimalCard } from "./animal/AnimalCard"
// import { LocationCard } from "./location/Location"
// import { EmployeeCard } from "./employees/Employees"
// import { CustomerCard } from "./customer/Customer"
// Display this component from the Kennel component and pass in your name. Don't forget to import.
// import { PropsAndState } from "./propsAndState/PropsAndState"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import "./customer/Customer.css"
import "./employees/Employees.css"
import "./location/Location.css"
import "./animal/Animal.css"
import "./Kennel.css"



export const Kennel = () => {
    

    return (
        // Display this component from the Kennel component and pass in your name. Don't forget to import.
        <>
        <NavBar />
        <ApplicationViews />
        </>
    )
}