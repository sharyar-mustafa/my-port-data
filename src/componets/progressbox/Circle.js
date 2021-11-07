import React from 'react'
import "./progress.css"
import git from "../Pic/Git.png"
import boostrap from "../Pic/bost.png"
import js from "../Pic/js.png"
import mi from "../Pic/mi.png"
import html from "../Pic/htlm.png"
import css from "../Pic/css.png"
import sass from "../Pic/sass.png"
import nodejs from "../Pic/nodejs.png"
import git1 from "../Pic/git5.png"
import react from "../Pic/rec2.png"
import play from "../Pic/play.png"
import and from "../Pic/and.png"

export default function Circle() {
    return (
        <div className="main-div">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Lates Project's</h1>
                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>


            <div className="probar">
                <h4>HTML5</h4>
                <div className="progress" >
                    <div className="progress-bar " role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{ width: '100%' }}>
                        100%
                    </div>
                </div>
                <h4>CSS</h4>
                <div className="progress" >
                    <div className="progress-bar active" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{ width: '90%' }}>
                        90%
                    </div>
                </div>
                <h4>REACT</h4>
                <div className="progress" >
                    <div className="progress-bar active" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{ width: '80%' }}>
                        80%
                    </div>
                </div>
                <h4>JAVA SCRIPT</h4>
                <div className="progress" >
                    <div className="progress-bar active" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{ width: '60%' }}>
                        60%
                    </div>
                </div>
                <h4>PYTHON</h4>
                <div className="progress" >
                    <div className="progress-bar active" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{ width: '40%' }}>
                        40%
                    </div>
                </div>


            </div >

            <div className="p-2">
                <img src={mi} alt="" />
                <img src={boostrap} alt="" />
                <img src={js} alt="" />
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={git} alt="" />
                <img src={sass} alt="" />
                <img src={nodejs} alt="" />
                <img src={git1} alt="" />
                <img src={react} alt="" />
                <img src={play} alt="" />
                <img src={and} alt="" />
            </div>
        </div>

    )
}
// https://portfo-project-git-main-ojjomedia.vercel.app/