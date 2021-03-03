import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"
import { useParams, useHistory } from "react-router-dom"
//Create a new component in the animal directory which will be responsible for showing all the details of an animal. 
//Consider the flow of a React component. What will you need to store as state? Will you need useEffect?
//We will also include useParams from react-router-dom allowing the app to read a parameter from the URL.

export const AnimalDetail = () => {
  const { getAnimalById } = useContext(AnimalContext)

	const [animal, setAnimal] = useState({})
  // console.log('animal: ', animal);

	const {animalId} = useParams();
	const history = useHistory();

  useEffect(() => {
    console.log("useEffect", animalId)
    getAnimalById(animalId)
    
    .then((response) => {
      setAnimal(response)
    })
    }, [])

  return (
    <section className="animal">
      <h3 className="animal__name">{animal.name}</h3>
      <div className="animal__breed">{animal.breed}</div>
      {/* What's up with the question mark???? See below.*/}
      <div className="animal__location">Location: {animal.location?.name}</div>
      <div className="animal__owner">Customer: {animal.customer?.name}</div>
    </section>
  )
}