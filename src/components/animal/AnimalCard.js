import React from "react"
import "./Animal.css"
import { Link } from "react-router-dom"

//Change the AnimalCard to display animal names as hyperlinks. When you click on one animal name, an animal detail component will render.
export const AnimalCard = ({ animal, location, customer }) => (
   
  <section className="animal">
  <h3 className="animal__name">
    <Link to={`/animals/detail/${animal.id}`}>
      { animal.name }
    </Link>
  </h3>
  <div className="animal__breed">{ animal.breed }</div>
</section>

)