import React from 'react';
import selfie from "./ProfilePictureMaker.png";

export default function home() {
  return (
      <section className="flex items-center justify-center mt-10">
        <img src={selfie} alt="Selfie Of Corey Mckenzie" className=" h-[10rem]"/>
        <hr className="w-4 pl-20 rotate-90"/>
        <p> “Tell me and I forget, teach me and I may remember, involve me and I learn.” - Benjamin Franklin</p>
      </section>
  )
}
