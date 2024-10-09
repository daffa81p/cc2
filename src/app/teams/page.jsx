'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
export default function Page() {
   
const [dataUser,setDataUser] = useState([])
const onFetching = async() => {
    try {
        let res = await axios.get("https://randomuser.me/api/?results=6")
        setDataUser(res.data.results)
    } catch (error) {
        console.log(error)
    }
}
useEffect(()=>{
onFetching()
},[])

const softwareDeveloperPositions = [
    {
      title: "Software Engineer",
      description: 
      "John is a skilled developer with 5 years of experience in building scalable web applications and working with modern technologies like React and Node.js.",
    },
    {
      title: "Project Manager",
      description:
        "Jane is a certified project manager who excels at coordinating teams, managing budgets, and ensuring projects are delivered on time and within scope.",
    },
    {
      title: "UI/UX Designer",
      description:
        "Samuel has a keen eye for design and user experience, with expertise in creating visually appealing and user-friendly interfaces for various digital products.",
    },
    {
        title: "Software Engineer",
        description: 
        "John is a skilled developer with 5 years of experience in building scalable web applications and working with modern technologies like React and Node.js.",
      },
      {
        title: "Project Manager",
        description:
          "Jane is a certified project manager who excels at coordinating teams, managing budgets, and ensuring projects are delivered on time and within scope.",
      },
      {
        title: "UI/UX Designer",
        description:
          "Samuel has a keen eye for design and user experience, with expertise in creating visually appealing and user-friendly interfaces for various digital products.",
      }
]
    return (
        <>
        <div className="px-4 sm:px-8 md:px-12 lg:px-24 xl:px-44 grid grid-cols-1 sm:grid-cols-2 gap-7 py-10 pt-10 bg-white">
        {dataUser.map((item, index) => {
          return (
            <div
              className="card card-side bg-base-100 shadow-xl flex flex-col sm:flex-row"
              key={index}
            >
              <figure className="w-full sm:w-1/3">
                <Image
                  src={item.picture.large}
                  alt="Team member"
                  className="rounded-xl w-full h-full object-cover"
                  width={500}
                  height={500}
                />
              </figure>
              <div className="card-body p-4 sm:p-6">
                <h2 className="card-title text-lg sm:text-xl">
                  {item.name.first} {item.name.last}
                </h2>
                <p>{softwareDeveloperPositions[index].title}</p>
                <div className="flex items-center gap-2">
                  {/* <MdEmail /> */}
                  {item.email}
                </div>
                <div className="flex items-center gap-2">
                  {/* <IoPhonePortraitSharp /> */}
                  {item.phone}
                </div>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          );
        })}
      </div>
        </>
    );
}