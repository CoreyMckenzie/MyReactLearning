import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Headerbar() {
    const navigate = useNavigate();
  return (
    <div className="border-b-4 bg-secondary border-b-third w-[100%]">
        <header className="flex justify-between">
        <h1 className={"text-3xl text-white cursor-pointer"} onClick={() => navigate("/")}>MyReactLearning</h1>
        <nav>
          <ul>
            <li className="mx-auto text-3xl text-white cursor-pointer" onClick={() => navigate("/Lessons")}>Lessons</li>
          </ul>
        </nav>
        </header>
    </div>
  )
}
