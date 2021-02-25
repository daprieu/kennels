import React from "react";
import { PropsAndState } from './propsAndState/PropsAndState'

// Home Component
// Use this code for your homepage that will be displayed when navigating to the route of /.
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


export const Home = () => (
    
    <>
        {console.log(kennel.name)}
       
       <h2>{kennel.name}</h2>
       <small>{kennel.slogan}</small>
       <address>
           <div>Visit Us at the {kennel.locations[0].name} Location</div>
           <div>{kennel.locations[0].address}</div>
       </address>
        <PropsAndState yourName={"Alex Prieu"} />
    </>
)