import React, { useEffect, useState } from 'react'
import Navi from '../components/Navi'
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner'
import { useCookies } from 'react-cookie';
import './netflix.css';
export default function English() {
    const [ cookies ,setCookie , removeCookie ] = useCookies("movieId");
    const [english,setEnglish] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get('https://krishdb.onrender.com/krishdb')
        .then(function(response){
          return response.data
        })
        .then(function(movies){
          movies.map(movie => {
            if(movie.lag==="English"){
              setEnglish(english => [ ...english , movie ]);
            }
          })
        })
       },[]);
  return (
    <Container>
      <Navi/>
      <div>
           
           { english[0] ?
 
           
           <div className="data-body">
                <h3>English</h3>
                <div  className='contentt'>
                 {
                   english.map((movie,index) => (
                           <div onClick={()=> (setCookie("movieId",movie.id),navigate("/watch"))} >
                              <img   key={movie.id}  src={movie.poster} />
                           </div>
 
                   )
                   )
                 } 
               </div>
           </div>
            :
            <div className='loader' style={{display:"flex",justifyContent:"center",marginTop:"7rem"}}>
            <ThreeDots visible={true} height="80" width="80" color="#E50914" radius="9" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClass=""/>
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