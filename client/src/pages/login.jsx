
import React, { useState } from 'react'
import styled from "styled-components";
import Background from '../components/Background';
import Header from '../components/Header';
import {onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';
import { useNavigate } from 'react-router-dom';


export default function Login() {
    const navigate = useNavigate();
    const [formValues,setFormValues] = useState({
        email:"",
        password:"",
    });
    const handleLogin = async ()=> {
        try{
            const { email, password } = formValues;
            await signInWithEmailAndPassword(firebaseAuth,email,password);
        }
        catch(err){
            console.log(err);
            document.getElementById("error").style.display="block";
            document.getElementById("error").style.color = "red";
            document.getElementById("error").innerHTML="Invalid Email / Password";
            
        }
    };
    onAuthStateChanged(firebaseAuth,(currentUser) =>{
        if(currentUser){
            navigate("/netflix");
        }
        
    });

    return <Container >
        <Background/>
        <div className='content'>
            <Header/>
            <div className="form-container flex column a-center j-center">
                <div className="form flex column a-center j-center">
                    <div className="title">
                        <h3>Login</h3>
                    </div>
                    <div className="container flex column a-center j-center">
                        <input  type="text" placeholder='Enter address' name="email" value={formValues.email} onChange={(e) => setFormValues({...formValues,[e.target.name]:e.target.value,})} />
                        <input  type="password" placeholder='Password' name="password" value={formValues.password} onChange={(e) => setFormValues({...formValues,[e.target.name]:e.target.value,})} />
                        <span id="error"  ></span>
                        <button onClick={handleLogin}>Log In</button>
                    </div>
                </div>
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
    .form-container {
        gap:2rem;
        height:85vh;
        .form {
            padding:2rem;
            background-color:#000000b0;
            width:auto;
            gap:2rem;
            color:white;
            .container {
                gap:2rem;
                #error {
                  display:none;
                }
                input {
                    padding :0.5rem 1rem;
                    width:15rem;

                }
                button {
                    padding:0.5rem 1rem;
                    width:15rem;
                    background-color: #e50914;
                    border:none;
                    curser:pointer;
                    color:white;
                    border-radius:0.2rem;
                    font-weight:bolder;
                    font-size:1.05rem;
                }
            }
        }
    }
  }

`;