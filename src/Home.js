import { Button } from 'flowbite-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className='align-items-center flex mt-4'>
        <Button  gradientDuoTone="greenToBlue">
           Welcome to dashboard
      </Button>
      <NavLink to={"/"}>
      <Button  className='ml-5' gradientDuoTone="greenToBlue" >
          logout
      </Button>
      </NavLink>
        </div>
    );
};

export default Home;