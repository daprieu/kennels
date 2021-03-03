import React from "react"
import "./Location.css"
import { Link } from "react-router-dom"

export const LocationCard = ({location}) => (
    <section className="location">
        <h3 className="location__name"><Link to={`/locations/detail/${location.id}`}>
          { location.name }
        </Link></h3>
        
        <div className="location__employees">Current employees: {location.employees.length}</div>
        <div className="location__animals">Current furry friends: {location.animals.length}</div>

    </section>
)