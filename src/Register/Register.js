import React, { useEffect, useState } from "react";
import login from "../Assets/login_banner.jpg";
import filic from "../Assets/logo.png";
import { NavLink } from "react-router-dom";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";

const Register = () => {
  const [empData, SetEmpData] = useState([]);
  //   console.log(empData);
  const findData = empData?.find((data) => data);
  //   console.log(findData?.NAME);
  const Name = findData?.NAME;
  const Emp_code = findData?.EMP_CODE;
  const EMP_DESIG = findData?.EMP_DESIG;
  const EMP_DEPT = findData?.EMP_DEPT;
  const DEPT_CODE = findData?.DEPT_CODE;
  const success = findData?.success;

  const information = (event) => {
    event.preventDefault();
    const emp_id = event.target.emp_id.value;
    // console.log(emp_id);

    fetch(`http://202.164.213.67/leave/emp_info.php?EMP_CODE=${emp_id}`)
      .then((Response) => Response.json())
      .then((data) => SetEmpData(data));
  };

  //   useEffect(() => {
  //     if (success === "1") {
  //       //   console.log("success");
  //     } else {
  //       alert("Please type proper EMP Code");
  //     }
  //   });

  return (
    <div className="px-2 mt-12 lg:mt-32 lg:px-56 ">
      <Card className="shadow-lg">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 ">
          <div className="flex  items-center justify-center">
            <img className="" src={login} alt="" />
          </div>

          <div className="">
            <div className="flex justify-center mt-0 h-0 lg:h-24 ">
              <img
                className=" p-2"
                src={filic}
                alt=""
              />
            </div>

            <form onSubmit={information} className="">
              <div className="mt-3 flex">
                <input
                  type="number"
                  placeholder="Enter Employee Code"
                  name="emp_id"
                  class="input bg-primary h-10 input-bordered rounded  w-full max-w-lg"
                  required
                />
                <Button
                  className="ml-1 w-72 lg:ml-2"
                  color="success"
                  gradientDuoTone="greenToBlue"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </form>

            <div className="mt-3 flex grid grid-cols-1 lg:grid-cols-2">
              <input
                type="text"
                value={Name}
                name="Name"
                placeholder="Employee Name"
                class="input bg-primary h-10 input-bordered rounded input-primary  w-full max-w-lg"
                required
              />
              <input
                type="text"
                placeholder="Employee Code"
                value={Emp_code}
                name="DEPT"
                class="lg:ml-1 mt-2 lg:mt-0 input bg-primary   h-10 input-bordered rounded input-primary w-full max-w-lg"
                required
              />
            </div>

            <div className="mt-2 flex grid grid-cols-1 lg:grid-cols-2">
              <input
                type="text"
                placeholder="Designation"
                value={EMP_DESIG}
                name="Name"
                class="input bg-primary  h-10 input-bordered rounded input-primary  w-full max-w-lg"
                required
              />
              <input
                type="text"
                placeholder="Department"
                value={EMP_DEPT}
                name="DEPT"
                class="lg:ml-1 mt-2 lg:mt-0 input bg-primary    h-10 input-bordered rounded input-primary w-full max-w-lg"
                required
              />
            </div>
            <Button
              className="w-full mt-2"
              color="success"
              gradientDuoTone="greenToBlue"
              type="submit"
            >
              REGISTER
            </Button>
            <p className="mt-1">If you are already registered? </p>
            <div className="flex justify-center mt-0 ">
              <NavLink to={"/"}>
                <Button size="xs" gradientDuoTone="greenToBlue" outline>
                  Login now
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Register;
