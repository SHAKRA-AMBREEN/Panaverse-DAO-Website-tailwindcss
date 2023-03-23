import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
<div className="underline-offset-0">
    <div className=' bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9CZjvXx6KgreJ1upF9OJajyOHdSmRnlKdngJ-aMJfdMaVarSgzwrVeqDXaVY1DP_yDD0&usqp=CAU")] bg-cover bg-fixed text-center md:px-44 px-3 md:py-40 py-28 rounded-b-[30%]'>
      <h1 className="text-black md:text-6xl text-3xl font-extrabold ">
        Prepare yourself for the Next Generation of Internet with Panaverse
      </h1>
      <p className="md:text-xl text-md mt-4 md:px-[80px] text-justify">
        One Year Panaverse DAO Earn as you Learn Program. Consolidating Web 3.0,
        Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient
        Computing/IoT Technologies
      </p>
      <button className="bg-blue-800 px-5 py-3 rounded-lg text-white mt-4">
        MORE INFO
      </button>
    </div>


    {/* <div  className="flex justify-center"> */}
        <div className="flex shadow-2xl w-[70%] justify-around md:py-[80px] py-[40px] space-y-12 items-center m-auto mt-[-80px]  bg-white rounded-3xl md:flex-row flex-col" >
            <Image src="/Logo.webp" alt="panaverselogo" width={"150"} height={"150"} />
            <Image src="/Logo2.svg" alt="panaverselogo" width={"150"} height={"150"} />
            <Image src="/saylaniLogo.webp" alt="panaverselogo" width={"150"} height={"150"} />
        </div>
    {/* </div> */}


    <div className="w-[70%] flex m-auto mt-10 md:flex-row flex-col" >
        <div className="md:w-1/2 ">
            <Image src="/metaverse-info3.webp" alt="metaverseinfo" width={300} height={300}/>
        </div>
        <div className="md:w-1/2 pt-10">
            <h1 className="text-black md:text-5xl text-3xl font-bold border-l-blue-700 border-l-[6px] pl-3">Program Of Studies</h1>
            <p className="md:text-md text-base mt-4 text-justify"> This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects. </p>
            <button className="bg-blue-800 px-5 md:py-3 py-2 rounded-lg text-white mt-4"> Read More </button>
        </div>
    </div>



    <div className="flex my-10 md:flex-row flex-col">
        <div className=' bg-[url("https://t4.ftcdn.net/jpg/02/13/63/49/240_F_213634957_T4gXoZJmbkkrQjz5myXPgE2OWnxQ5rpO.jpg")] bg-cover bg-center h-[10cm] md:w-1/2'>
          
        </div>
        <div className="md:w-1/2 bg-[url('https://img.freepik.com/premium-vector/abstract-triangular-background-gray-geometric-polygonal-pattern_434359-289.jpg')] bg-cover -my-6 md:p-20 p-7">
          <h1 className="text-black md:text-5xl text-4xl font-bold border-l-blue-700 border-l-[6px] pl-3  ">Bootcamp 2023</h1>
            <p className="md:text-md text-base mt-4 text-justify"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt officiis, labore perferendis eius eos recusandae voluptatum suscipit at, architecto impedit tempora excepturi nostrum odio, blanditiis numquam veniam fugiat voluptatem delectus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt officiis, labore perferendis eius eos recusandae voluptatum suscipit at, architecto impedit tempora excepturi nostrum odio, blanditiis numquam veniam fugiat voluptatem delectus! </p>
            <button className="bg-blue-800 px-5 py-3 rounded-lg text-white mt-4"> Read More </button></div>
    </div>


</div>
    </> 
  );
}
