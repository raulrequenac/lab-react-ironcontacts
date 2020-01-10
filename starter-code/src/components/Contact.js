import React from 'react'
import './Contacts.css'


const Contact = ({
  pictureUrl,
  name,
  popularity
}) => (
  <div className="Contact">
    <div className="row">
      <img alt="picurl" src={pictureUrl} width="100" className="space"></img>
      <p className="space">{name}</p>
      <p className="space">{popularity}</p>
    </div>
  </div>
)

export default Contact
