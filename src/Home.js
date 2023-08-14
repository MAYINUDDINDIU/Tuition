
import React from 'react';
import Slider from './Slider/Slider';

import { Button, Card } from 'flowbite-react';
import Dashboar from './Dashboard/Dashboar';
import { useNavigate } from 'react-router-dom';



const Home = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userdetails=user.user;
    console.log(userdetails?.id);
    const navigate = useNavigate();
    const handleLogout = () => {
      localStorage.removeItem("user");
      navigate("/");
    };

    return (
        <div className='p-2 lg:pl-10 pr-10'>
              <div className="flex justify-center mb-2 ">
                  <Button   onClick={handleLogout} size="md" gradientDuoTone="greenToBlue" >
                    LOGOUT
                  </Button>
              </div>
           <Slider/>
           <Dashboar/>
        </div>
    );
};

export default Home;