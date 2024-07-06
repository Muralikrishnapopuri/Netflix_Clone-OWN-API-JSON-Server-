import React, {  useEffect, useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import Cardss from './cardss';
import Footer from './Footer';




export default function Swiper() {
  const [telugu,setTelugu] = useState([]);
  const [english,setEnglish] = useState([]);
  const [hindi,setHindi] = useState([]);
  const [upcoming,setUpcoming] = useState([]);
  
  

  useEffect(()=>{
    axios.get('https://krishdb.onrender.com/krishdb')
    .then(function(response){
      return response.data
    })
    .then(function(movies){
      movies.map(movie => {
        if(movie.lag==="Telugu"){
          setTelugu(telugu => [ ...telugu , movie ]);
        }
        else if(movie.lag==="English"){
          setEnglish(english => [ ...english , movie ]);
        }
        else if(movie.lag==="Hindi"){
          setHindi(hindi => [ ...hindi , movie ]);
        }
        else if(movie.new==="Upcoming"){
          setUpcoming(upcoming => [ ...upcoming , movie ]);
        }
      })
    })
   },[]);
   
   
    return (
      <Containter>
        
        <Cardss telugu={telugu} english={english} hindi={hindi} upcoming={upcoming} />
        
      </Containter>
    )
}

const Containter = styled.div`
  
`;