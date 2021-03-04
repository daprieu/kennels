import React, { useContext, useEffect, useState } from "react"

import { LocationContext } from "../location/LocationProvider"
import "./Location.css"
import { useHistory, useParams } from 'react-router-dom';

export const LocationForm = () => {
    // const { addAnimal } = useContext(AnimalContext)

    const { addLocation, getLocationById, updateLocation} = useContext(LocationContext)
    const { locations, getLocations } = useContext(LocationContext)

    /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

    Define the intial state of the form inputs with useState()
    */

    const [location, setLocation] = useState({
      name: "",
      address: ""
    });

    //wait for data before button is active. Look at the button to see how it's setting itself to disabled or not based on this state
    const [isLoading, setIsLoading] = useState(true);

    // Now that the form can be used for editing as well as adding an animal, you need access to the animal id for fetching the animal you want to edit
    const { locationId } = useParams();
        const history = useHistory();

        
        //when a field changes, update state. The return will re-render and display based on the values in state
        // NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot questions about it.
   //Controlled component
   const handleControlledInputChange = (event) => {
       /* When changing a state object or array,
       always create a copy, make changes, and then set state.*/
      const newLocation = { ...location }
      let selectedVal = event.target.value
      
      /* location is an object with properties.
      Set the property to the new value
      using object bracket notation. */
      newLocation[event.target.id] = selectedVal
      // update state
      setLocation(newLocation)
    }
    
    const handleClickSaveLocation = () => {
        if (location.address === "") {
            window.alert("Please select a location")
        } else {
          //disable the button - no extra clicks
          setIsLoading(true);
        // This is how we check for whether the form is being used for editing or creating. 
        //If the URL that got us here has an id number in it, 
        //we know we want to update an existing record of an location
        if (locationId){
            //PUT - update
            updateLocation({
                id: location.id,
                name: location.name,
                address: location.address
            })
            .then(() => history.push(`/locations/detail/${location.id}`))
          }else {
            //POST - add
            addLocation({
                name: location.name,
                address: location.address
            })
            .then(() => history.push("/locations"))
          }
        }
      }
/*
Reach out to the world and get location state
and locations state on initialization, so we can provide their data in the form dropdowns
*/
useEffect(() => {
  getLocations().then(() => {
    if (locationId) {
        getLocationById(locationId)
      .then(location => {
          setLocation(location)
          setIsLoading(false)
      })
    } else {
      setIsLoading(false)
    }
  })
}, [])

return (
    <form className="locationForm">
          <h2 className="locationForm__title">{locationId ? "Edit Location" : "Add Location"}</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="name">Loaction name:</label>
                  <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location name" value={location.name}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="location">Location address:</label>
                  <input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location address" value={location.address}/>
              </div>
          </fieldset>
          <button className="btn btn-primary"
            disabled={isLoading}
            onClick={event => {
                event.preventDefault()
                handleClickSaveLocation()}}>
            {locationId ? "Edit Location" : "Add Location"}
          </button>
      </form>
    )
}