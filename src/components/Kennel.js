import React from "react"
import { AnimalCard } from "./animal/AnimalCard"
import { LocationCard } from "./location/Location"
import { EmployeeCard } from "./employees/Employees"
import { CustomerCard } from "./customer/Customer"
// Display this component from the Kennel component and pass in your name. Don't forget to import.
import { PropsAndState } from "./propsAndState/PropsAndState"
import "./customer/Customer.css"
import "./employees/Employees.css"
import "./location/Location.css"
import "./animal/Animal.css"
import "./Kennel.css"
export const Kennel = () => {
    const kennel = {
        name: "Nashville Kennels: #1 in Davidson County",
        slogan: "Loving care when you're not there.",
        locations: [
            {
                name: "Nashville North",
                address: "500 Puppy Way"
            }
        ]
    }

    return (
        // Display this component from the Kennel component and pass in your name. Don't forget to import.
        <>
        {console.log(kennel.name)}
        <PropsAndState yourName="Alex Prieu" />
        <h2>{kennel.name}</h2>
        <small>{kennel.slogan}</small>
        <address>
            <div>Visit Us at the {kennel.locations[0].name} Location</div>
            <div>{kennel.locations[0].address}</div>
        </address>

        <h2>Animals</h2>
        <article className="animals">
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
        </article>

        <h2>Employees</h2>
        <article className="employees">
            <EmployeeCard />
            <EmployeeCard />
            <EmployeeCard />
        </article>

        <h2>locations</h2>
        <article className="locations">
            <LocationCard />
            <LocationCard />
        </article>

        <h2>Customers</h2>
        <article className="customers">
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
        </article>
    </>
    )
}