import React, { useState } from 'react';
import "./PersonalInfoManager.css";
import axios from 'axios';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';

export const PersonalInfoManager = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [homeAddress, setHomeAddress] = useState("");

  const handleChange = (e)=>{
    switch(e.target.id){
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value)
        break;
      case "nickname":
        setNickname(e.target.value);
        break;
      case "homeAddress":
        setHomeAddress(e.target.value)
        break
      default:
        break
    }
  }

  const ResponseAlert = (stausCode, responseMsg) => {
    switch (stausCode) {
      case 200:
        store.addNotification({
          container: 'top-center',
          insert: 'top',
          message: responseMsg,
          title: 'Update Success',
          type: 'success',
          animationIn: ['animate__animated', 'animate__fadeIn'],
          animationOut: ['animate__animated', 'animate__fadeOut'],
          dismiss: {
            duration: 3000,
            showIcon: true
          },
          onRemoval: ()=>{
            window.location.reload(false)
          }
        });

        break;
      case 400:
        store.addNotification({
          container: 'top-center',
          insert: 'top',
          message: responseMsg,
          title: 'Update Fail',
          type: 'danger',
          animationIn: ['animate__animated', 'animate__fadeIn'],
          animationOut: ['animate__animated', 'animate__fadeOut'],
          dismiss: {
            duration: 3000,
            showIcon: true
          }
        });

        break;
      case 404:
        store.addNotification({
          container: 'top-center',
          insert: 'top',
          message: responseMsg,
          title: 'Update Fail',
          type: 'danger',
          animationIn: ['animate__animated', 'animate__fadeIn'],
          animationOut: ['animate__animated', 'animate__fadeOut'],
          dismiss: {
            duration: 3000,
            showIcon: true
          }
        });

        break;
      case 500:
        store.addNotification({
          container: 'top-center',
          insert: 'top',
          message: responseMsg,
          title: 'Login Fail',
          type: 'danger',
          animationIn: ['animate__animated', 'animate__fadeIn'],
          animationOut: ['animate__animated', 'animate__fadeOut'],
          dismiss: {
            duration: 3000,
            showIcon: true
          }
        });

        break;
    }
  };
  const UpdateInfo = (e)=>{
    e.preventDefault();

    const baseURL = {
      dev:"http://localhost:5000/api/personal-info",
      prod:"https://geek-store-api.herokuapp.com/api/personal-info"
    }
    const url = process.env.NODE_ENV === "production" ? baseURL.prod : baseURL.dev;

    const form_data = new FormData();
    //name, email, nickname, home_address
    form_data.append('name', name);
    form_data.append('email', email);
    form_data.append('nickname', nickname);
    form_data.append('home_address', homeAddress)
    const token = localStorage.getItem('token')
    axios.post(url, form_data, {
      headers:{
        "x-auth-token":token
      }
    }).then(res=>{
      const { status, data } = res;
      ResponseAlert(status, data.msg)
      console.log("Reached");
    }).catch(err=>{
      // console.log(err.response.data.msg);
      const { status, data } = err.response;
      ResponseAlert(status, data.msg)
      console.log(status, data);
    })

  }

  return (
    <div className="">
      <form className="personal-info-update-form">
        <h2>Update Personal Information</h2>
        <label>Name</label>
        <input onChange={handleChange}  id="name" type="text" placeholder="Enter new name"/>
        <label>Email</label>
        <input onChange={handleChange}  id="email" type="email" placeholder="Enter new email"/>
        <label>Nickname</label>
        <input onChange={handleChange}  id="nickname" type="text" placeholder="Enter new nickname"/>
        <label>Home address</label>
        <input onChange={handleChange}  id="homeAddress" type="text" placeholder="Enter new home address"/>
        <p className="btn-wrapper">
          <span  onClick={UpdateInfo} className="btn-update-info">Update Information</span>
          <span className="btn-cancel">Cancel</span>
        </p>
      </form>
      <ReactNotification className='Notification-Card' />
    </div>
  )
}
