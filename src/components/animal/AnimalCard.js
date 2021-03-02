import React from "react"
import "./Animal.css"

export const AnimalCard = ({ animal, location, customer }) => (
   
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed">Breed: {animal.breed}</div>
        <address className="location__name">Location: {animal.location.name}</address>
        <div className="customer__Name">Customer: {animal.customer.name}</div>
    </section>
    
)