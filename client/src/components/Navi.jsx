import React, { useState } from 'react'
import {FaPowerOff} from 'react-icons/fa'
import logo from "../assets/logo.png";
import styled from 'styled-components';
import {GiHamburgerMenu} from 'react-icons/gi';
import './Navi.css';
import { firebaseAuth } from '../utils/firebase-config';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';

export default function Navi({isScrolled}) {
  
    const links = [
        { name : "Home", link : "/"},
        { name : "Up Coming" ,link : "/upcoming"},
        { name : "Telugu" ,link : "/telugu"},
        { name : "English", link : "/english"},
        { name : "Hindi", link : "/hindi"},

    ];
    
    onAuthStateChanged(firebaseAuth,(currentUser) =>{
        if(!currentUser) navigate("/login");
    });
    var count = 0;
     function openMenu(){
        
        if(count===0){
            document.getElementById("pop").style.display="block";
            count=1;
        }
        else{
            document.getElementById("pop").style.display="none";
            count=0;
        }


        
        
     }

  return (
    <Container >
      <nav className="flex" >
            <div id="pop">
            <ul>
                    {
                        links.map(({name,link}) =>{
                            return (
                                <li key={name}><Link to={link}>{name}</Link></li>
                                
                            )
                        })
                    }
                </ul>
            </div>
            <div className="left flex a-center">
                 <div className="menu">
                    <GiHamburgerMenu onClick={openMenu}/>
                 </div>
                <div className="logoo">
                    <img src={logo} width="140px" />
                </div>
                <div className="menu-links">
                <ul>
                    {
                        links.map(({name,link}) =>{
                            return (
                                <li key={name}><Link to={link}>{name}</Link></li>
                                
                            )
                        })
                    }
                </ul>
                </div> 
            </div>
            <div className="right flex a-center">
                <button onClick={() => signOut(firebaseAuth)}>
                    <FaPowerOff />
                </button>
            </div>

       </nav>
       
    </Container>
  )
}
const Container = styled.div`
        a{
   
   text-decoration:none;
 }

  position:relative;
nav {
  position:relative;
   backdrop-filter:blur(10px);
   position :sticky;
    top:0;
    height:6.5rem;
    width:100%;
    justify-content:space-between;
    align-items:center;
    position:fixed;
    z-index:2;
    padding:0 4rem;
    align-items:center;
    transition :0.3s ease-in-out;
    #pop {
      display:none;
      position:absolute;
      top:5rem;
      left:50px;
      border:1px solid red;
      border-radius:20px;
      padding-right:20px;
      background-color:black;
      box-shadow:2px 2px 7px black , -2px -2px 7px black;
      ul {

       li {
        padding:10px;
         font-weight:bold;
         a{
          color:white;
          &:hover {
           color:#E50914;
          }
         }
       }
      }
    }
    .left {
     .menu {
       svg {
        font-size:2rem;
        color:white;
        
       }
     }
     .menu-links {

      ul {

       list-style-type:none;
       display:flex;
       gap:2rem;
       font-weight:bold;
       li {
        a{
          color:white;
          transition:0.4s ease;
          &:hover {
           color:#E50914;
           font-size:1.4rem;
           
          }
         }
       }

      }
     }
    }
    .right {
     button {
      border:none;
      background-color:transparent;
      color:#E50914;
      svg {
       font-size:2rem;
       &:hover {
        padding-bottom:4px;
        transition:0.3s ;
       }
      }
     }
    }
}
 
 
`;
