import React from 'react';
import ".././PersonalInfoManager/PersonalInfoManager.css";

export const NewCreditCard = () => {
  return (
    <div className="">
      <form className="personal-info-update-form">
        <h2>Add New Credit Card</h2>
        <label>Card Holder</label>
        <input type="text" placeholder="Enter card holder"/>
        <label>Card Number</label>
        <input type="text" placeholder="Enter card number"/>
        <label>Card Exp</label>
        <span>
          <input type="text" placeholder="Enter exp month"/>
          <input type="text" placeholder="Enter exp year"/>
        </span>
        <label style={{marginTop:"1rem"}} >CVC</label>
        <input type="text" placeholder="Enter security number"/>
        <p className="btn-wrapper">
          <span className="btn-update-info">Update Login Details</span>
          <span className="btn-cancel">Cancel</span>
        </p>
      </form>
    </div>
  )
}
