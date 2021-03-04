import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useParams, useHistory } from "react-router-dom"

export const LocationDetail = () => {
  const { getLocationById } = useContext(LocationContext)
// debugger
	const [location, setlocations] = useState({})

	const {locationId} = useParams();
	const history = useHistory();

  useEffect(() => {
    // console.log("useEffect", locationId)
    getLocationById(locationId)
    .then((response) => {
      setlocations(response)
    })
    }, [])

  return (
    <section className="location">
    <h3 className="location__name">{location.name}</h3>
    <div className="location__location">Location: {location.name}</div>
    <div className="location__address">Address: {location.address}</div>
    {/* What's up with the question mark???? See below.*/}
    
    <div className="location__address">Employee names: {location.employees?.map(employee => employee.name).join(", ")}</div>
    <div className="location__address">Animal names: {location.animals?.map(animal => animal.name).join(", ")}</div>
    <button onClick={() => {
        history.push(`/locations/edit/${location.id}`)}}>Edit
        </button>
    </section>
  )
}