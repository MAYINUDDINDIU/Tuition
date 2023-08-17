import { Button } from 'flowbite-react';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Course = () => {
    const[course, SetCourse]=useState(['']);
    console.log(course)
    const handleCourse = event => {
        const url = 'https://api.ibrahimtuition.co.uk/api/course';
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
          
        })
        .then(Response => Response.json())
        .then(data => SetCourse(data?.courses));           
    }
    useEffect(() => {
        handleCourse();
      }, []);
    return (
        <div>
        <div className="flex justify-center mb-2 mt-3 ">
       <Button size="md" className='lg:w-72 w-96' gradientDuoTone="greenToBlue" >
           Course Schedule
       </Button>
       </div>

  

   {
       course.length!==0?
       <div class="flex flex-col ">
       <div class="overflow-x-auto  sm:-mx-6 lg:-mx-8 lg:px-10 px-5">
       <div class="inline-block min-w-full  py-2 sm:px-6 lg:px-20">
         <div class="overflow-hidden ">
                    <div class="grid gap-0   xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 px-24  mt-3 lg:mt-2">
             {course.map((sch, index) => (
                 <div className='justify-center flex'>
                
                <div className='shadow-xl p-2'>
                <Button color="failure" className='lg:w-96 w-96 mt-1 rounded'> {sch?.name}</Button>
                <Button color="success" className='lg:w-96 w-96  mt-1  rounded'> {sch?.subject_cover}</Button>
                <Button  color="success" className='lg:w-96 text-justify text-start w-96 h-80 mt-1  rounded'> {sch?.description}</Button>

                    </div>
                 </div>
                
       
              ))}
           
           </div>
         </div>
       </div>
     </div>
   </div>
       :
<p>Loading</p>
   }


   </div>
    );
};

export default Course;