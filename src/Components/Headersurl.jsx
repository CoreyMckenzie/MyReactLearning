import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Headerbar() {
    const navigate = useNavigate();
  return (
    <div className="border-b-8 border-Peach-new w-[100%]">
        <header>
        <h1 className={"text-center bg-white text-3xl cursor-pointer"} onClick={() => navigate("/")}>MyReactLearning</h1>
        </header>
    </div>
  )
}
