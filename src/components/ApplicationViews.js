import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeProvider } from "./employees/EmployeesProvider"
import { EmployeeList } from "./employees/EmployeesList"


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
            <LocationProvider>
                <Route path="/locations">
                    <h2>locations</h2>
                    <LocationList />
                </Route>
            </LocationProvider>
            {/* Render the animal list when http://localhost:3000/animals */}
            {/* Note that the <AnimalList> component is a child of the <AnimalProvider> component. 
            It is crucial that you wrap components that need data with the provider component that exposes 
            that data in JSX. You can wrap a component in as many providers as needed. */}
            <AnimalProvider>
            <LocationProvider>
                <CustomerProvider>
                    <Route exact path="/animals">
                        <h2>Animals</h2>
                        <AnimalList />
                    </Route>
                </CustomerProvider>
            </LocationProvider>
            </AnimalProvider>
            {/* Render the animal list when http://localhost:3000/animals */}
            <CustomerProvider>
                <Route path="/customers">
                    <h2>Customers</h2>
                        <CustomerList />
                </Route>
            </CustomerProvider>
            {/* Render the animal list when http://localhost:3000/animals */}
            <EmployeeProvider>
                <Route path="/employees">
                    <h2>Employees</h2>
                    <EmployeeList />
                </Route>
            </EmployeeProvider>
        </>
    )
}