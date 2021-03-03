import React from "react"
import "./Employees.css"
import { Link } from "react-router-dom"

export const EmployeeCard = ({ employee }) => (
    <section className="employee">
        <h3 className="employee__name"><Link to={`/employees/detail/${employee.id}`}>
          { employee.name }
        </Link></h3>
    </section>
)
{/* <div className="employee__location">{employee.location}</div> */}