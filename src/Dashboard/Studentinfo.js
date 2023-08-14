import { Card } from 'flowbite-react';
import React, { useState } from 'react';
import { Circles } from 'react-loader-spinner';

const Studentinfo = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userdetails=user.user;
    const userid=userdetails?.std_no;
    // console.log(userid);
    const[userinfo,setUserinfo]=useState(['']);
    console.log(userinfo);

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
    handleStudeninfo();
 
    

    return (
        
        <div className='flex flex-col items-center pb-0'>

            {
                 userinfo.length===0 ?  <p>loading.........</p>
              : 
              userinfo.map((info, index) => (
            
                <Card
                
                className="max-w-sm lg:max-w-lg bg-success text-white w-full  hover:none"
                href="#">
                <h5 className="xs:text-xs lg:text-2xl font-bold tracking-tight text-dark dark:text-white">
                 {info?.name}  {info?.std_no}
                </h5>
                <h6 className="xs:text-xs lg:text-2xl font-bold tracking-tight text-dark dark:text-white">
                 {info?.admit_year}
                </h6>
                <h6 className="xs:text-xs lg:text-2xl font-bold tracking-tight text-dark dark:text-white">
                 {info?.gender}
                </h6>
            
                <h6 className="xs:text-xs lg:text-2xl font-bold tracking-tight text-dark dark:text-white">
                 {info?.subject}
                </h6>
                <h6 className="xs:text-xs lg:text-2xl font-bold tracking-tight text-dark dark:text-white">
                 {info?.address}
                </h6>
            </Card>
     
                  ))
             
                     
            }
           
           
        
    
        </div>
    );
};

export default Studentinfo;