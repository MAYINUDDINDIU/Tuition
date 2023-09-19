import { Button, Card } from 'flowbite-react';
import React, { useState } from 'react';
import { Circles } from 'react-loader-spinner';

const Studentinfo = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userdetails=user.user;
    const userid=userdetails?.std_no;
    // console.log(userid);
    const[userinfo,setUserinfo]=useState(['']);
    const[daily_activities,setDailyactivities]=useState([]);
    console.log(daily_activities);

    const handleStudeninfo = event => {
      
        // event.preventDefault();
        const std_no=userid;

        const data={
            std_no
        }
        // console.log(std_no);
    
        const url = 'https://api.ibrahimtuition.co.uk/api/student-info';
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        
            .then(Response => Response.json())
            .then(data => setUserinfo(data?.student_info));           
    }
    const handleDailyactivities = event => {
      
        // event.preventDefault();
        const std_no=userid;

        const data={
            std_no
        }
        // console.log(std_no);
    
        const url = 'https://api.ibrahimtuition.co.uk/api/daily-activities';
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        
            .then(Response => Response.json())
            .then(data => setDailyactivities(data?.daily_activities));           
    }

    handleStudeninfo();
    handleDailyactivities();
 
    

    return (
        
        <div className='flex flex-col items-center pb-0 mt-2 p-5'>
             <div className="flex justify-center mb-2 ">
                  <Button className='lg:w-96'  size="md" gradientDuoTone="greenToBlue" >
                    Student Information
                  </Button>
              </div>
            {
                 userinfo.length===0 ?  <p>loading.........</p>
              : 
              userinfo.map((info, index) => (
            
                <div
                
                className="max-w-sm lg:max-w-lg bg-success text-white lg:w-96 rounded p-5"
                href="#">
                <h5 className="xs:text-xs lg:text-xl font-bold tracking-tight text-dark dark:text-white">
                 {info?.name} ({info?.std_no}) 
                </h5>
                <h6 className="xs:text-xs lg:text-lg  tracking-tight text-dark dark:text-white">
                 Admit Year: {info?.admit_year}
                </h6>
                <h6 className="xs:text-xs lg:text-lg  tracking-tight text-dark dark:text-white">
                Gender:  {info?.gender}
                </h6>
            
                <h6 className="xs:text-xs lg:text-lg  tracking-tight text-dark dark:text-white">
                 Subject: {info?.subject}
                </h6>
                <h6 className="xs:text-xs lg:text-lg  tracking-tight text-dark dark:text-white">
                 Address: {info?.address}
                </h6>
                </div>
     
                  ))
             
                     
            }

               <div className="grid gap-2  xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2  max-w-sm lg:max-w-lg bg-success text-white lg:w-96 rounded mt-2 p-5"
                href="#">   
                <h6 className='text-white  w-50'> HOME WORK</h6>
                <Button className='rounded-full btn btn-danger'  size="sm" >
                (09-04-2023) DONE
                </Button>
                <h6 className='text-white  w-50'> HOME WORK</h6>
                <Button className='rounded-full btn btn-danger'  size="sm" >
                (09-04-2023) DONE
                </Button>
               </div>

           
           
           
        
    
        </div>
    );
};

export default Studentinfo;