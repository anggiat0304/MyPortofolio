import React from 'react'
import { linkedin, whatsapp } from '../images'
import './Profile.css'
function Profile() {
    return (
        <div className="profile">
            <div className="profile-content">
            <div className="profile-title">
                <h1>Profile</h1>
            </div>
            <div className="profile-data">
            <div className="profile-left">
                <h2>Anggiat Pangaribuan</h2>
                <p>28 Maret 2001</p>
                <p><a href="https://www.linkedin.com/in/anggiat-pangaribuan/"><img src={linkedin} style={{marginRight:'5px',width:'20px',height:'20px'}} />LinkedIn</a></p>
                <p><img src={whatsapp} style={{marginRight:'5px',width:'20px',height:'22px'}} />082164462644</p>
            </div>
            <div className="profile-right">
                <p>I am a fresh graduate. I have an IT education background. 
                I am interested in working in the IT field.</p>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Profile
