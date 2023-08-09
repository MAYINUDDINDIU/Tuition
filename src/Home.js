
import React from 'react';
import Slider from './Slider/Slider';

import { Card } from 'flowbite-react';
import Dashboar from './Dashboard/Dashboar';



const Home = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userdetails=user.user;
    console.log(userdetails?.id);

    return (
        <div className='p-2 lg:p-10'>
          <Slider/>
           <Dashboar/>
        </div>
    );
};

export default Home;