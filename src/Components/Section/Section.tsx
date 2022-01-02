import React from 'react'
import './Section.css'

function Section() {
    return (
        <div className='section-container'>
            <div className='section-description'>
                <div className='section-container-left'>
                    <h2>Ready to grow with a digital marketing agency you can trust? Get your free <br />proposal today:</h2>
                    <div>Our digital marketing experts have put together thousands of successful digital marketing campaigns for businesses looking to increase leads, phone calls, transactions, and qualified website traffic. They’ll do the same for you. Request a free strategy proposal and get a game plan for elite revenue generation.</div>
                    <div className="button">
                        <input type="email" placeholder='Enter your E-mail'/>
                        <button>Book an Appointment Call</button>
                    </div>
                </div>
                <div className='section-container-right'>
                    <img src="Images/first-image.jpg" alt=''/>
                </div>
            </div>
        </div>
    )
}

export default Section
