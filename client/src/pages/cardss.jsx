import React, { useContext, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import video from '../assets/video.mp4';
import load from '../assets/load.jpg';
import { ThreeDots } from 'react-loader-spinner'
import { AiOutlineLeft,AiOutlineRight } from 'react-icons/ai';
import styled from 'styled-components';

import { useCookies } from 'react-cookie';
import Footer from './Footer';

  
export default function Cardss({telugu,english,hindi,upcoming}) {
    
    const navigate = useNavigate(); 

    const [ cookies ,setCookie , removeCookie ] = useCookies("movieId");

  return (
    <Container>
      <div>
       <div className="swiper">
       <h3 style={{marginTop:"3rem"}}>Upcoming Movies</h3>
          { 
          upcoming ? 

          <div className="swiper-body">
               
               <div  className='cardslider'>
                {
                  upcoming.map((movie,index) => (
                        
                          <div onClick={()=> (setCookie("movieId",movie.id),navigate("/watch"))}>
                             {  movie.poster ?
                              <img  key={index}  src={movie.poster} />:
                              <img key={index} src={load} />
                                }
                          </div>

                  )
                  )
                } 
              </div>
              <AiOutlineLeft className='left' />
              <AiOutlineRight className='right'/>
          </div>
          :
          <div className='loader'>
          <ThreeDots visible={true} height="80" width="80" color="#E50914" radius="9" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClass=""/>
          </div>
          
          
              }
          <div>
            </div>

          
          
        </div>
        <div className="swiper">
        <h3 style={{marginTop:"3rem"}}>Latest telugu</h3>
          { telugu ?
          <div className="swiper-body">
               
                <div  className='cardslider'>
                {
                  telugu.map((movie,index) => (
                          <div onClick={()=> (setCookie("movieId",movie.id),navigate("/watch"))} >
                              <img   key={movie.id}  src={movie.poster} />
                          </div>

                  )
                  )
                } 
              </div>
              <AiOutlineLeft className='left' />
              <AiOutlineRight className='right'/>
          </div> 
            : 
            <div className='loader'>
            <ThreeDots visible={true} height="80" width="80" color="#E50914" radius="9" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClass=""/>
            </div>
          
          }
        </div>
        <div className="swiper">
        <h3 style={{marginTop:"3rem"}}>Latest Hindi</h3>
          { hindi ?

          
          <div className="swiper-body">
               
               <div  className='cardslider'>
                {
                  hindi.map((movie,index) => (
                          <div onClick={()=> (setCookie("movieId",movie.id),navigate("/watch"))}>
                             <img  key={movie.id}  src={movie.poster} />
                          </div>

                  )
                  )
                } 
              </div>
              <AiOutlineLeft className='left' />
              <AiOutlineRight className='right'/>
          </div>
          :
          <div className='loader'>
          <ThreeDots visible={true} height="80" width="80" color="#E50914" radius="9" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClass=""/>
         </div>
          }
        </div>
        <div className="swiper">
        <h3 style={{marginTop:"3rem"}}>Recent English</h3>
          { english ?

          
          <div className="swiper-body">
               
               <div  className='cardslider'>
                {
                  english.map((movie,index) => (
                          <div onClick={()=> (setCookie("movieId",movie.id),navigate("/watch"))}>
                             <img  key={movie.id}  src={movie.poster} />
                          </div>

                  )
                  )
                } 
              </div>
              <AiOutlineLeft className='left' />
              <AiOutlineRight className='right'/>
          </div>
          :
          <div className='loader'>
          <ThreeDots visible={true} height="80" width="80" color="#E50914" radius="9" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClass=""/>
          </div>
          
          }
        </div>
        <div className='footerr'>
        <Footer/>
         </div>
      </div>
    </Container>
  )
}


const Container = styled.div`
   display:flex;
  flex-direction:column;
  height:100vh;
  gap:5rem;
  .swiper {
    h3 {
    margin-left:3rem;
  }
  .swiper-body {
    width:100%;
    height:300px;
    position:relative;
    .left {
     position:absolute;
     height:300px;
     width:2.5%; 
     background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 43%, rgba(0,0,0,0) 100%);
     top:0;
     left:0;
    }
     .cardslider {
      position:absolute;
      height:300px;
      width:100%;
      top:25px;
      padding-top:20px;
      left:2.5%;
      display:flex;
      flex-direction:row;
      overflow-x:auto;
      gap:3rem;
       img {

        height:250px;
        border:2px solid white;
        border-radius:20px;
        transition: 0.5s ease;
        z-index: 1;
        &:hover {
          transform:scale(1.1);
          z-index:1;
          border:2px solid red;
          
        }
      }
      div {
        
      }
     }
     .cardslider::-webkit-scrollbar {
      width:0px;
    }
     .right {
     position:absolute;
     height:300px;
     width:2.5%;
     background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50%);
     top:0;
     right:0;
     z-index:1;
    }
  }
  }
  .loader{
   height:15rem;
   display:flex;
   justify-content:center;
   align-items:center;
  
  }
`;

//img
          //  transition: 0.5s ease;
          //  z-index: 2;


//hover 
// transform:scale(1.1);
// z-index:7;
// border:2px solid red;