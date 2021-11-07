import React from 'react'
import "./Hedding.css"
import pic1 from "./Pic/A.jpg"
import Typewriter from "typewriter-effect";


export default function Hedding() {
    return (
        <div className="hedding">
            
            <div className="h-h1">
                <div className="h-div">
                    <h1>Hi</h1>
                    <h2> I am</h2>
                    <h4>SHARYAR MALIK</h4>
                 
                    <div className="type">
                        <Typewriter

                            onInit={(typewriter) => {

                                typewriter
                                    .typeString("Full stack developer")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("React js")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("Mobile application development")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("Rract native developer")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("Founder of A.SM Lab")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("Ready to develop your Application")
                                    .start(1000);
                                }}
                        />
                    </div>
                    {/* <button className="button-h">CV</button> */}
                </div>
            </div>

            <div className="D-img">
                < img src={pic1} alt="" />
            </div>

        </div>
    )
}



