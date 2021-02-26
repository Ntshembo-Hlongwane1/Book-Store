import React from 'react';
import "./PersonalInfoManager.css"

export const PersonalInfoManager = () => {
  return (
    <div className="">
      <form className="personal-info-update-form">
        <h2>Update Personal Information</h2>
        <label>Name</label>
        <input type="text" placeholder="Enter new name"/>
        <label>Email</label>
        <input type="email" placeholder="Enter new email"/>
        <label>Nickname</label>
        <input type="text" placeholder="Enter new nickname"/>
        <label>Home address</label>
        <input type="email" placeholder="Enter new home address"/>
        <p className="btn-wrapper">
          <span className="btn-update-info">Update Information</span>
          <span className="btn-cancel">Cancel</span>
        </p>
      </form>
    </div>
  )
}
