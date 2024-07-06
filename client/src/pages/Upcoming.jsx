import React, { useEffect, useState } from 'react'
import Navi from '../components/Navi'
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import './netflix.css';
export default function Upcoming() {
    const [ cookies ,setCookie , removeCookie ] = useCookies("movieId");
    const [upcoming,setUpcoming] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get('https://krishdb.onrender.com/krishdb')
        .then(function(response){
          return response.data
        })
        .then(function(movies){
          movies.map(movie => {
            if(movie.new==="Upcoming"){
              setUpcoming(upcoming => [ ...upcoming , movie ]);
            }
          })
        })
       },[]);
  return (
    <Container>
      <Navi/>
      <div>
           
           { upcoming && 
 
           
           <div className="data-body">
                <h3>Up Coming...</h3>
                <div  className='contentt'>
                 {
                   upcoming.map((movie,index) => (
                           <div onClick={()=> (setCookie("movieId",movie.id),navigate("/watch"))} >
                              <img   key={movie.id}  src={movie.poster} />
                           </div>
 
                   )
                   )
                 } 
               </div>
           </div>
           
           }
         </div>
    </Container>
  )
}
const Container =styled.div`
 .data-body {

   margin-top:120px;
    text-align:center;
    .contentt {

     div {

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
     }
     

    }
   
 }
`;