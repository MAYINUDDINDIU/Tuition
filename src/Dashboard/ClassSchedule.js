import { Button } from 'flowbite-react';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ClassSchedule = () => {
    const[classschedule, SetclassSchedule]=useState(['']);
    // console.log(classschedule)
    const handleClassSchedule = event => {
        const url = 'https://api.ibrahimtuition.co.uk/api/class-schedule';
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
          
        })
        .then(Response => Response.json())
        .then(data => SetclassSchedule(data?.class_schedules));           
    }
    useEffect(() => {
        handleClassSchedule();
      }, []);
  

    return (
        <div>
             <div className="flex justify-center mb-2 mt-3 ">
            <Button size="md" className='lg:w-72 w-96' gradientDuoTone="greenToBlue" >
                Class Schedule
            </Button>
            </div>

       

        {
            classschedule.length!==0?
            <div class="flex flex-col ">
            <div class="overflow-x-auto  sm:-mx-6 lg:-mx-8 lg:px-80 px-5">
            <div class="inline-block min-w-full  py-2 sm:px-6 lg:px-20">
              <div class="overflow-hidden shadow-xl">
                <table
                  class="min-w-full border text-center shadow text-sm font-light dark:border-neutral-500">
                  <thead class="border-b font-medium dark:border-neutral-500 bg-success text-white">
                    <tr>
                      <th
                        scope="col"
                        class="border-r px-3 py-2 dark:border-neutral-500">
                        CLASS DAY NAME
                      </th>
                      <th
                        scope="col"
                        class="border-r px-3 py-2 dark:border-neutral-500">
                       CLASS TIME
                      </th>
                   
                    </tr>
                  </thead>
                  <tbody>
                  {classschedule.map((sch, index) => (
                    <tr class="border-b dark:border-neutral-500">
                      <td
                        class="whitespace-nowrap border-r  px-3 py-3 font-medium dark:border-neutral-500">
                        {sch?.day_name}
                      </td>
                      <td
                        class="whitespace-nowrap border-r  px-3 py-3 font-medium dark:border-neutral-500">
                        {sch?.class_time}
                      </td>
                    </tr>
                   ))}
                  </tbody>
                </table>
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

export default ClassSchedule;