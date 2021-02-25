import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { LocationCard } from "./location/Location"
import { AnimalCard } from "./animal/AnimalCard"
import { CustomerCard } from "./customer/Customer"
import { EmployeeCard } from "./employees/Employees"


export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            {/* exact is needed on the first route, otherwise it will also match the other routes, 
            and the Home will render for every route. */}
            <Route exact path="/">
                <Home />
            </Route>
            
            {/* Render the animal list when http://localhost:3000/locations */}
            <Route path="/locations">
                <h2>locations</h2>
                <article className="locations">
                    <LocationCard />
                    <LocationCard />
                </article>
            </Route>
            
            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animals">
            <h2>Animals</h2>
                <article className="animals">
                    <AnimalCard />
                    <AnimalCard />
                    <AnimalCard />
                </article>
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/customers">
                <h2>Customers</h2>
                <article className="customers">
                    <CustomerCard />
                    <CustomerCard />
                    <CustomerCard />
                </article>
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/employees">
                <h2>Employees</h2>
                <article className="employees">
                    <EmployeeCard />
                    <EmployeeCard />
                    <EmployeeCard />
                </article>
            </Route>
        </>
    )
}