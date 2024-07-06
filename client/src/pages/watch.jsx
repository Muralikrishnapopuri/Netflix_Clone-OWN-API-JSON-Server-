import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components';
import video from '../assets/video.mp4';
import { PiVideoCameraFill } from "react-icons/pi";
import  ReactPlayer from 'react-player';
import axios from 'axios';
import {Cookies, useCookies} from 'react-cookie';
import { FaPlay } from "react-icons/fa6"; 
import{AiOutlinePlus} from 'react-icons/ai';
import Purchase from './purchase';

export default function Watch() {

  const [cookie,setCookie,removeCookie] = useCookies("movieId");

  const [currentMovieData,setCurrentMovieData] = useState([]);

   useEffect(()=>{
        axios.get("https://krishdb.onrender.com/krishdb")
        .then(function(response){
         return response.data
       })
       .then(function(movies){
         movies.map(movie => {
           if(movie.id === cookie["movieId"]  ){
             setCurrentMovieData(movie);
           }
 
         })
       })

       
   },[]);


  return (
    <Container>
      <div className="player-body">
        <div className="movie">
          <div className="movie-details">
            <div className='main'>
              <img className='back-poster' src={currentMovieData.poster} />
              <div className='blur'></div>
                <div className='main-sub'>
                  <img className='poster' src={currentMovieData.poster} />
                  <div className="details">
                      <h3>{currentMovieData.name}</h3>
                      <h6 className='h6-1'>Release date - {currentMovieData.date}</h6>
                      {
                        currentMovieData.lag && <h6 className='h6-2'>Language - {currentMovieData.lag}</h6>
                      }
                      {
                        currentMovieData.new && <h6 className='h6-2'>U/A - {currentMovieData.new}</h6>
                      }
                      <h6 className='h6-4'>Director - {currentMovieData.director}</h6>
                  </div>
                  </div>

            </div>
            <div className='bottom'> <a className='bottom-red' href="#purchase" ><FaPlay/>Watch Full Movie</a><div id="bottom-black" className='bottom-black' onClick={()=>document.getElementById("bottom-black").style.backgroundColor="darkgreen"}><AiOutlinePlus/>Add to WatchList</div> </div>
 
                
          </div>
        </div>

        <div className="plot">
              <h3>Movie Plot - </h3>{currentMovieData.plot}
        </div>
        
        <div className="player">
          <div>
          <button>Trailer<PiVideoCameraFill />
          </button>
          <ReactPlayer className="video" controls url={currentMovieData.trailer} light={true} />
          </div>

        </div>
          <div id="purchase">
            
          </div>
          <Purchase className="d-none" />
          
      </div>
    </Container>
  )
}
const Container = styled.div`
#html {

    scroll-behavior: smooth !important;
}
.movie-details { 
    .main {
      width:100%;
      height:500px;
      position:relative;
    .back-poster {
      width:100%;
      height:500px;
      opacity:50%
      }
    .blur {
     position:absolute;
     backdrop-filter:blur(10px);
     width:100%;
     height:500px;
     top:0;
     left:0;
     z-index:1;
    }
     .main-sub {
       position:absolute;
       width:100%;
       height:500px;
       top:0;
       left:0;
      .poster {
        position:absolute;
        width:200px;
        z-index:2;
        top:20%;
        left:10%;
        border:2px solid white;
        border-radius:30px;
        box-shadow:7px 7px 10px black;
     }
      .details {
       font-size:1rem;
       z-index:2;
       
       h3 {
        position:absolute;
        z-index:3;
        top:20%;
        left:18%;
        font-size:2rem;
        text-shadow:2px 2px 7px black , -2px -2px 7px black;
       }
        .h6-1 {
         position:absolute;
         z-index:3;
         top:60%;
         left:45%;
        }
         .h6-2 {
         position:absolute;
         z-index:3;
         top:52%;
        left:45%;
         }
       .h6-4 {
         position:absolute;
         z-index:3;
         top:56%;
         left:45%;
         }
        .h6-1, .h6-2, .h6-3 , .h6-4 {
          font-size:1rem;
          color:white;
          text-shadow:2px 2px 7px black , -2px -2px 7px black;
   
        }
    



      }
     }


   }
    .bottom {
      width:100%;
      display:flex;
      a {
        color:white;
        text-decoration: none;
        width:50%;
        background-color:#E50914;
        height:50px;
        display:flex;
        justify-content:center;
        align-items:center;
        cursor:pointer;
        font-size:1rem;
       font-weight:600;
        gap:0.7rem;
        &:hover {
         background-color:red;
        }
        
      }
      .bottom-black {
        width:50%;
        background-color:#2B303A;
        text-align:center;
        height:50px;
        display:flex;
        justify-content:center;
        align-items:center;
        cursor:pointer;
        font-size:1rem;
       font-weight:600;
       &:hover {
         background-color:#36454F;
       }
        
      }
      
    }
}
.plot {
  padding:4rem;
  background-color:#343434;
}

.player-body {
  #purchase {
     scroll-behavior: smooth !important;
  }
  width:100%;
  .player {
    display:flex;
    text-align:center;
    justify-content:center;
    background-color:#343434;
    padding:1rem;
    width:100%;
    position:relative;
    div {
     button { 
        background-color: #e50914;
        border:none;
        color:white;
        font-weight:bolder;
        font-size:1.5rem;
        align-items:center;
        padding:0.5rem;
        svg {
        font-size:1rem;
       
        gap:1rem;
          font-size:1rem;
          align-items:center;
        }
     }
    }
  

    }
   }
  
 }
`;

