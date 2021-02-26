import React from 'react';
import ".././PersonalInfoManager/PersonalInfoManager.css"

export const LoginManger = () => {
  return (
    <div className="">
      <form className="personal-info-update-form">
        <h2>Update Login Details</h2>
        <label>Email</label>
        <input type="email" placeholder="Enter new email"/>
        <label>Password</label>
        <input type="password" placeholder="Enter new login password"/>
        <p className="btn-wrapper">
          <span className="btn-update-info">Update Login Details</span>
          <span className="btn-cancel">Cancel</span>
        </p>
      </form>
    </div>
  )
}
