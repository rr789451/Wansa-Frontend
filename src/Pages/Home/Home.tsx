import React from 'react'
import './Home.css'
import Navigation from '../../Components/Navigation/Navigation'
import Accordian from '../../Components/Accordian/Accordian'
import Section from '../../Components/Section/Section'
import SectionTwo from '../../Components/Section-2/SectionTwo'
import Card from '../../Components/Card/Card'
import Typewriter from 'typewriter-effect'

function Home() {
    return (
        <div>
            <Navigation />
            <div className="hero">
                <div className="description">
                    <div className="heading">
                        We Provide <Typewriter 
                            options={{
                                strings: ['Marketing', 'Web Development', 'Influencers', 'Services'],
                                autoStart: true,
                                loop: true
                            }}
                        />
                    </div>
                    <div className="content">
                        Choose WebFX as your digital marketing agency and propel your business to new heights with our award-winning digital marketing services and technology platform.
                    </div>
                    <div className="button">
                        <input type="email" placeholder='Enter your E-mail'/>
                        <button>Book an Appointment Call</button>
                    </div>
                </div>
                <div className="services">
                    <div className="card">
                        Service1
                    </div>
                    <div className="card">
                        Service2
                    </div>
                    <div className="card">
                        Service3
                    </div>
                    <div className="card">
                        Service4
                    </div>
                    <div className="card">
                        Service5
                    </div>
                    <div className="card">
                        Service6
                    </div>
                </div>
            </div>
            <Accordian />
            <Section />
            <SectionTwo />
            <Card />
        </div>
    )
}

export default Home
