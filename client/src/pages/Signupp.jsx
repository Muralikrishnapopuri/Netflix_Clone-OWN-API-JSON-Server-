
import React, { useState } from 'react'
import styled from "styled-components";
import Background from '../components/Background';
import Header from '../components/Header';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';
import { useNavigate } from 'react-router-dom';
import {useFormik} from 'formik';



export default function Signupp() {
    //----------formik auth--------------




    
    //--------------------------------------firebae auth---------
    const [showPassword,setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [formValues,setFormValues] = useState({
        email:"",
        password:"",
    });
    const handleSignIn = async ()=> {
        try{
            const { email, password } = formValues;
            await createUserWithEmailAndPassword(firebaseAuth,email,password);
        }
        catch(err){
            console.log(err);
        }
    };
    onAuthStateChanged(firebaseAuth,(currentUser) =>{
        if(currentUser) navigate("/netflix");
    });

    return <Container showPassword={showPassword}>
        <Background/>
        <div className="content">
                <Header login/>
                <div className='body flex column a-center j-center'>
                    <div className="text flex column">
                        <h1>Unlimited movies , TV shows and more</h1>
                        <h4>Watch anywhere. Cancle anytime.</h4>
                        <h6>
                            Ready to watch? Enter your email to create or restart membership
                        </h6>
                    </div>
                    <div className='formm'>
                        <input type="text" placeholder='Enter address' name="email" value={formValues.email} onChange={(e) => setFormValues({...formValues,[e.target.name]:e.target.value,})} />
                        {showPassword && (
                          <input type="password" placeholder='Password' name="password" value={formValues.password} onChange={(e) => setFormValues({...formValues,[e.target.name]:e.target.value,})} />
                        )} 
                        {!showPassword && (
                          <button onClick={() => setShowPassword(true)}>get Started</button>
                        )
                        }

                    </div>
                    <button onClick={handleSignIn}>Sign Up</button>
                </div>
        </div>
        
    </Container>;
}

const Container = styled.div`
  position: relative;
  .content {
    position:absolute;
    top:0;
    left:0;
    background-color: rgba(0,0,0,0.5);
    height:100vh;
    width: 100vw;
    display:grid;
    grid-template-rows:15vh 85vh;

  }
  .body{
    gap:1rem;
    .text {
        gap: 1rem;
        text-align:center;
        font-size:2rem;
        h1{
            // padding:0 10rem;
        }
    }
  }
  .formm{
    display:gird;
       display:flex;
       flex-direction:row;
       
       justify-content:center;

    input {
        color:black;
        border:none;
        padding:1.5rem;
        font-size:1.2rem;
        border:1px solid black;
        height:1.3rem;
        
        &:focus {
            outline:none;
        }
    }
    button {
        padding:0.5rem 1rem;
        background-color: #e50914;
        border:none;
        curser:pointer;
        color:white;
        font-weight:bolder;
        font-size:1.05rem;
    }
  }
  button {
    padding:0.5rem 1rem;
    background-color: #e50914;
    border:none;
    curser:pointer;
    color:white;
    border-radius:0.2rem;
    font-weight:bolder;
    font-size:1.05rem;
  }
`;