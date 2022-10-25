import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Lessons() {
  const navigate = useNavigate();
  return (
    <div>
      <ol>
        <li className="cursor-pointer"> OOP - Object Orientated Programming</li>
        <li className="cursor-pointer" onClick={() => navigate("/props")}>React - Props</li>
        <li className="cursor-pointer" onClick={() => navigate("/dvt")}>React - DVT</li>

      </ol>
    </div>
  )
}
