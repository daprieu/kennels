import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"

import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import { LocationForm } from "./location/LocationForm"
import { LocationDetail } from "./location/LocationDetail"

import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { AnimalForm } from "./animal/AnimalForm"
import { AnimalDetail } from "./animal/AnimalDetail"

import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"

import { EmployeeProvider } from "./employees/EmployeesProvider"
import { EmployeeList } from "./employees/EmployeesList"
import { EmployeeForm } from "./employees/EmployeeForm"
import { EmployeeDetail } from "./employees/EmployeeDetail"
import { AnimalSearch } from "./animal/AnimalSearch"


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
                <Route exact path="/locations">
                    <h2>locations</h2>
                    <LocationList />
                </Route>
                <Route path="/locations/create">
                    <LocationForm />
                </Route>
                <Route exact path="/locations/detail/:locationId(\d+)">
                    <LocationDetail />
                </Route>
                
                <Route path="/locations/edit/:locationId(\d+)">
                    <LocationForm />
                </Route>
            </LocationProvider>
            {/* Render the animal list when http://localhost:3000/animals */}
            {/* Note that the <AnimalList> component is a child of the <AnimalProvider> component. 
            It is crucial that you wrap components that need data with the provider component that exposes 
            that data in JSX. You can wrap a component in as many providers as needed. */}
            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        {/* Note the addition of "exact" now that we have an additional route 
                        with "/animals" in it below this Route: "/animals/create" */}
                        <Route exact path="/animals">
                            <h2>Animals</h2>
                            <AnimalSearch />
                            <AnimalList />
                        </Route>
                        <Route path="/animals/create">
                            <AnimalForm />
                        </Route>
                        <Route exact path="/animals/detail/:animalId(\d+)">
                            <AnimalDetail />
                        </Route>
                        {/* // Which provider should this be nested in? */}
                        <Route path="/animals/edit/:animalId(\d+)">
                            <AnimalForm />
                        </Route>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>
            {/* Render the customer list when http://localhost:3000/customers */}
            <CustomerProvider>
                <Route path="/customers">
                    <h2>Customers</h2>
                        <CustomerList />
                </Route>
            </CustomerProvider>
            {/* Render the employee list when http://localhost:3000/employees */}
            <EmployeeProvider>
                <LocationProvider>
                <Route exact path="/employees">
                    <h2>Employees</h2>
                    <EmployeeList />
                </Route>
                <Route path="/employees/create">
                    <EmployeeForm />
                </Route>
                <Route exact path="/employees/detail/:employeeId(\d+)">
                    <EmployeeDetail />
                </Route>
                <Route path="/employees/edit/:employeeId(\d+)">
                    <EmployeeForm />
                </Route>
                </LocationProvider>
            </EmployeeProvider>
        </>
    )
}