import React from 'react';
import './Button.css';
import { Link } from "react-router-dom";

export function Button(){
    return (
        <div>
           <a href="#about" className='btn'>About me</a>
        </div>
    );
}