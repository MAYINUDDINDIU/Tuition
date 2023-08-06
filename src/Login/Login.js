import { Button, Card, Checkbox, Label, TextInput, Toast } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import image from '../Assets/login_banner.jpg';
import logo from '../Assets/logo.png';
import { NavLink, Navigate, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from "sweetalert";
import { ToastContainer, toast } from 'react-toastify';
const Login = () => {
   const[status,setStatus]=useState('');
   console.log(status);
   const navigate = useNavigate();
   const location = useLocation();
   const notify = () => toast("Login Successfully");

   const handleAdded = event => {
    event.preventDefault();
    const std_no = event.target.userid.value;
    const password = event.target.password.value;
    const addItem = {std_no, password};
        console.log(addItem);

    const url = 'https://api.ibrahimtuition.co.uk/api/login-web';
    fetch(url, {
        method: "POST",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "content-type": "application/json"
        },
        body: JSON.stringify(addItem)

    })
        .then(Response => Response.json())
            .then(data => setStatus(data.message));
               
}

useEffect(() => {
    if (status === 'login successfully') {
        <ToastContainer />

        navigate(`/dashboard`);

      
    } else if(status === 'User not found') {
        alert('Please type proper user id & pass');
        //  toast.error(`Opps!Please type proper emp code & password`);
    }
});

    return (
        <div className="px-2 mt-12 lg:mt-24 lg:px-48 ">
        <Card className="shadow-lg mb-3">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 ">
            <div className="flex  items-center justify-center">
              <img className="" src={image} alt="" />
            </div>
  
            <div className="max-h-96">
              <div className="flex justify-center mt-0 h-0 lg:h-24 ">
                <img
                  className="  p-2"
                  src={logo}
                  alt=""
                />
              </div>
  
              <form onSubmit={handleAdded} className="flex flex-col gap-3 lg:px-12">
                <div>
                  <div className="mb-1 block text-start">
                    <Label htmlFor="userid" value="Enter User ID" />
                  </div>
                  <TextInput
                    id="userid"
                    required
                    type="number"
                  />
                </div>
                <div>
                  <div className="mb-1 block text-start">
                    <Label htmlFor="password" value="Your password" />
                  </div>
                  <TextInput
                   id="password"
                   type="password"
                   required 
                   />
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember">Remember me</Label>
                </div>
                <Button
                  color="success"
                  gradientDuoTone="greenToBlue"
                  type="submit"
                >
                  LOGIN
                </Button>
              </form>
              <p className="mt-1">If you are not registered? </p>
              <div className="flex justify-center mt-0 ">
                <NavLink to={"/registration"}>
                  <Button size="xs" onClick={notify} gradientDuoTone="greenToBlue" outline>
                    Register now
                  </Button>
                </NavLink>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
};

export default Login;