import { Card } from 'flowbite-react';
import React from 'react';
import std_info from '../Assets/student.png';
import attendance from '../Assets/attendance.png';
import payment from '../Assets/payment.png';
import classschedule from '../Assets/class_schedule.png';
import exam from '../Assets/result.png';
import course from '../Assets/course_info.png';
import { Link } from 'react-router-dom';
const Dashboar = () => {
    return (

        <div class="grid gap-0   xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 lg:px-10  mt-3 lg:mt-5">
            <div className='p-2'>
             <Link to={'/studentinfo'}>
            <Card
                className="max-w-sm lg:max-w-lg  hover:none"
                href="#">
                   
                   <div className="flex flex-col items-center pb-0">
                   <img
                    alt="Bonnie image"
                    className="mb-3 xs:w-14 h-12  lg:w-32 lg:h-32"
                    src={std_info}
                    />
              </div>
            
                <h5 className="xs:text-xs lg:text-2xl font-bold tracking-tight text-dark dark:text-white">
                    <p>
                        Student Information
                    </p>
                </h5>
            
            </Card>
            </Link>
            </div>

            <div className='p-2'>
            <Card
                className="max-w-sm lg:max-w-lg  hover:none"
                href="#">
                   
                   <div className="flex flex-col items-center pb-0">
                   <img
                    alt="Bonnie image"
                    className="mb-3 xs:w-14 h-12  lg:w-32 lg:h-32"
                    src={classschedule}
                    />
              </div>
            
                <h6 className="xs:text-xs xs:text-start lg:text-center mt-0 lg:text-2xl font-bold tracking-tight text-dark dark:text-white">
                    <p>
                    Class Schedule
                    </p>
                </h6>
            
            </Card>
            </div>
          
            <div className='p-2'> 
            <Card
                className="max-w-sm lg:max-w-lg  hover:none"
                href="#">
                   
                   <div className="flex flex-col items-center pb-0">
                   <img
                    alt="Bonnie image"
                    className="mb-3 xs:w-14 h-12  lg:w-32 lg:h-32"
                    src={payment}
                    />
              </div>
            
                 <p className="xs:text-xs  lg:text-center mt-0 lg:text-2xl font-bold tracking-tight text-dark dark:text-white">
                    <p>
                    Payment Information
                    </p>
                </p>
            
            </Card>
            </div>

            <div className='p-2'> 
            <Card
                className="max-w-sm lg:max-w-lg  hover:none"
                href="#">
                   
                   <div className="flex flex-col items-center pb-0">
                   <img
                    alt="Bonnie image"
                    className="mb-3 xs:w-14 h-12  lg:w-32 lg:h-32"
                    src={attendance}
                    />
              </div>
            
                <h6 className="xs:text-xs xs:text-start lg:text-center mt-0 lg:text-2xl font-bold tracking-tight text-dark dark:text-white">
                    <p>
                    Attendance & Home Work
                    </p>
                </h6>
            
            </Card>
            </div>

      
            <div className='p-2'> 
            <Card
                className="max-w-sm lg:max-w-lg  hover:none"
                href="#">
                   
                   <div className="flex flex-col items-center pb-0">
                   <img
                    alt="Bonnie image"
                    className="mb-3 xs:w-14 h-12  lg:w-32 lg:h-32"
                    src={exam}
                    />
              </div>
         
                <h6 className="xs:text-xs xs:text-start lg:text-center mt-0 lg:text-2xl font-bold tracking-tight text-dark dark:text-white">
                    <p>
                    Exam And Result
                    </p>
                </h6>
            
            </Card></div>
            <div className='p-2'> 
            <Card
                className="max-w-sm lg:max-w-lg  hover:none"
                href="#">
                   
                   <div className="flex flex-col items-center pb-0">
                   <img
                    alt="Bonnie image"
                    className="mb-3 xs:w-14 h-12  lg:w-32 lg:h-32"
                    src={course}
                    />
                  </div>
            
                <h6 className="xs:text-xs xs:text-start lg:text-center mt-0 lg:text-2xl font-bold tracking-tight text-dark dark:text-white">
                    <p>
                       Course Information
                    </p>
                </h6>
            
            </Card>
            </div>

        </div>




    );
};

export default Dashboar;