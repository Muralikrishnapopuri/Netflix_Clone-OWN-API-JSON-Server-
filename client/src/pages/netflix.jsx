import React, { useEffect, useState } from 'react'

import background from '../assets/home.jpg'
import Movielogo from '../assets/homeTitle.webp'

import './netflix.css';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Swiper from './swiper';
import { firebaseAuth } from '../utils/firebase-config';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Navi from '../components/Navi';
import { FaPlay } from 'react-icons/fa6';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import Footer from './Footer';


export default function  Netflix() {
    const navigate = useNavigate();



   
    onAuthStateChanged(firebaseAuth,(currentUser) =>{
        if(!currentUser) navigate("/login");
    });

 
  return (
    <Container>
       
       <Navi/>
        <div className='hero'>
            <img src={background} alt="background" className='background-image' />
        
        <div className='container'>
            <div className='logo'>
                <img src={Movielogo} alt="Movie Logo" />
            </div>
            <div className="buttons flex">
                <button id="fa" className="flex a-center j-center" onClick={()=>navigate("/player")}><FaPlay />Play</button>
                <button id="mo" className="flex a-center j-center"><AiOutlineInfoCircle />More Info</button>

            </div>
        </div>
        </div>
      <Swiper />
      
      
    </Container>
  )
}

const Container = styled.div`
height:100vh;

.hero{
 position:relative;
 .background-image {
    opacity:80%;
    
    }
.container {
  position:absolute;

}
}

`;