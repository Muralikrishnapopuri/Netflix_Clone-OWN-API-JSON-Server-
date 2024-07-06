import React from 'react'
import styled from 'styled-components';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { SiNetflix } from "react-icons/si";
import { PiTelevisionFill, PiTelevisionSimple, PiTelevisionSimpleFill } from "react-icons/pi";
import { TiTick } from "react-icons/ti";

export default function Purchase() {




  return <Container>
    <div className="purchase">
        <div className="card-main">
            
            <h1><SiNetflix />Choose Your Plan</h1>
            
            <div className="row cards">
                    <div className="col-lg-4 d-flex justify-content-center col-sm-12">
                        <div className="card w-75">
                            <div className="card-head">
                                <h3 className="card-title"><PiTelevisionSimple />Basic</h3>
                                <p>Rs 199</p>
                            </div>
                            <div className="card-body">
                                    <ul role="list" className="card__bullets flow">
                                    <li><TiTick />Ad-free access to all Netflix content.</li>
                                    <li><TiTick />720p streaming quality (HD).</li>
                                    <li><TiTick />Watch on 1 screen at a time.</li>
                                    <li><TiTick />Access on mobile, tablet, laptop and TV.</li>
                                    <li><TiTick />Download on 1 supported device at a time.</li>
                                </ul>
                            </div>
                            <button onClick={()=>alert("sir ..This Is Netflix Clone api project Only \n here No Payment method not implemented..thank you")}>Get started</button>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex justify-content-center">
                    <div className="card w-75">
                            <div className="card-head">
                                <h3 className='card-title'><PiTelevisionSimpleFill />Standard</h3>
                                <p>Rs 499</p>
                            </div>
                            <div className="card-body">
                                    <ul role="list" className="card__bullets flow">
                                    <li><TiTick />Ad-free access to all Netflix content.</li>
                                    <li><TiTick />1080p streaming quality (Full HD).</li>
                                    <li><TiTick />Watch on 2 screen at a time.</li>
                                    <li><TiTick />Access on mobile, tablet, laptop and TV.</li>
                                    <li><TiTick />Download on 2 supported device at a time.</li>
                                </ul>
                                
                            </div>
                            <button onClick={()=>alert("sir ..This Is Netflix Clone api project Only \n here No Payment method not implemented..thank you")}>Upgrade to Pro</button>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex justify-content-center">
                        <div className="card w-75">
                            <div className="card-head">
                                <h3 className='card-title'><PiTelevisionFill />Premium</h3>
                                <p>Rs 649</p>
                            </div>
                            <div className="card-body">
                                    <ul role="list" className="card__bullets flow">
                                    <li><TiTick />Ad-free access to all Netflix content.</li>
                                    <li><TiTick />4k streaming quality (HD).</li>
                                    <li><TiTick />Watch on 4 screen at a time.</li>
                                    <li><TiTick />Access on mobile, tablet, laptop and TV.</li>
                                    <li><TiTick />Download on 6 supported device at a time.</li>
                                    <li><TiTick />Download on 6 supported device at a time.</li>
                                    <li><TiTick />Support for Netflix Spatial Audio.</li>
                                    
                                </ul>
                                
                            </div>
                            <button onClick={()=>alert("sir ..This Is Netflix Clone api project Only \n here No Payment method not implemented..thank you")}>Get Ultimate</button>
                        </div>
                    </div>
            </div>
    </div>
</div>
    </Container>
}

const Container = styled.div`
  .purchase {
    background-color:#343434;
    width:100%;
   
    .card-main { 
       padding-top:100px;
       h1 {
        text-align:center;
       }
        .cards {
        padding-top:10px;
          .card {
           padding:20px;
           border: 2px solid #fff;
           border-bottom: 2px solid rgba(255, 255, 255, 0.5);
           border-right: 2px solid rgba(255, 255, 255, 0.5);
           border-radius: 20px;
           margin-bottom:35px;
           background-color:rgba(255, 255, 255, 0.0) ;
           backdrop-filter: blur(10px);
           color:white;
           &:hover {
             background-color:rgba(255, 255, 255, 0.10) ;
           }
            .card-head {
              font-size:1.3rem;
              font-weight:bold;

              .card-title {
                 
                svg {
                    color:red;
                }
    
              
              }
            }
            .card-body {
              ul {
                list-style-type:none;
              }
              svg {
              color:#AAFF00;
        
              }
              padding-left:0px;
            }   
           button {
            border:0;
            border-radius:50px;
            font-weight:bold;
            padding:10px;
            cursor:pointer;
            &:hover {
              background-color:#e50914;
              color:white;
            }
           }
          }
        }
    }
`;