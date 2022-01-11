import React, { useState } from 'react'
import './Accordian.css'

function Accordian() {
    
    const[show1, setShow1] = useState('block');
    const[show2, setShow2] = useState('none');
    const[show3, setShow3] = useState('none');
    const[show4, setShow4] = useState('none');
    const[show5, setShow5] = useState('none');
    const[show6, setShow6] = useState('none');

    function handleImage1(){
        setShow1('block');
        setShow2('none');
        setShow3('none');
        setShow4('none');
        setShow5('none');
        setShow6('none');
    }
    function handleImage2(){
        setShow2('block');
        setShow1('none');
        setShow3('none');
        setShow4('none'); 
        setShow5('none');
        setShow6('none');
    }
    function handleImage3(){
        setShow3('block');
        setShow1('none');
        setShow2('none');
        setShow4('none');
        setShow5('none');
        setShow6('none');
    }
    function handleImage4(){
        setShow4('block');
        setShow1('none');
        setShow2('none');
        setShow3('none');
        setShow5('none');
        setShow6('none');
    }
    function handleImage5(){
        setShow5('block');
        setShow1('none');
        setShow2('none');
        setShow3('none');
        setShow4('none');
        setShow6('none');
    }
    function handleImage6(){
        setShow6('block');
        setShow1('none');
        setShow2('none');
        setShow3('none');
        setShow4('none');
        setShow5('none');
    }
    return (
        <div>
        <div className='accordian-container'>
            <div role='group' className='button-container'>
                {show1 !== 'none' ? <button onClick={handleImage1} style={{backgroundColor : '#FE8F8F', color : '#eee'}} className='secondary-button left'>Website & Apps</button> : <button onClick={handleImage1} className='secondary-button left'>Website & Apps</button> }
                {show2 !== 'none' ? <button onClick={handleImage2} style={{backgroundColor : '#FE8F8F', color : '#eee'}} className='secondary-button left'>Digital Marketing & Strategy</button> : <button onClick={handleImage2} className='secondary-button left'>Digital Marketing & Strategy</button> }
                {show3 !== 'none' ? <button onClick={handleImage3} style={{backgroundColor : '#FE8F8F', color : '#eee'}} className='secondary-button'>Email Marketing</button> : <button onClick={handleImage3} className='secondary-button'>Email Marketing</button> }
                {show4 !== 'none' ? <button onClick={handleImage4} style={{backgroundColor : '#FE8F8F', color : '#eee'}} className='secondary-button'>Consulting- Go To Market</button> : <button onClick={handleImage4} className='secondary-button'>Consulting- Go To Market</button> }
                {show5 !== 'none' ? <button onClick={handleImage5} style={{backgroundColor : '#FE8F8F', color : '#eee'}} className='secondary-button'>Ecommerce</button> : <button onClick={handleImage5} className='secondary-button'>Ecommerce</button> }
                {show6 !== 'none' ? <button onClick={handleImage6} style={{backgroundColor : '#FE8F8F', color : '#eee'}} className='secondary-button'>Creative & Design</button> : <button onClick={handleImage6} className='secondary-button'>Creative & Design</button> }
            </div>
            <div style={{display: show1}} className='accordian-description-container' >
                <div className='accordian-description'>
                    <div className='accordian-container-left'>
                        <div>
                            <ul>
                                <li>Website Development</li>
                                <li>Wireframes</li> 
                                <li>UI/UX</li> 
                                <li>Ecommerce Apps</li> 
                                <li>and More…</li>
                            </ul>
                            </div>
                    </div>
                    <div className='accordian-container-right'>
                        <img src="Images/heart.png" alt=''/>
                    </div>
                </div>
            </div>
            <div style={{display: show2}} className='accordian-description-container' >
                <div className='accordian-description'>
                    <div className='accordian-container-left'>
                        <div>
                            <ul>
                                <li>Google Ads</li>
                                <li>Facebook Ads</li>
                                <li>Instagram Ads</li>
                                <li>LinkedIn Ads</li>
                                <li>Twitter Ads</li>
                                <li>SEO/SMO</li>
                                <li>Lead Generation</li>
                            </ul>
                        </div>
                    </div>
                    <div className='accordian-container-right'>
                        <img src="Images/ecg.png" alt=''/>
                    </div>
                </div>
            </div>
            <div style={{display: show3}} className='accordian-description-container' >
                <div className='accordian-description'>
                    <div className='accordian-container-left'>
                        <div>
                            <ul>
                                <li>Template Design & Development</li>
                                <li>Campaign Management</li>
                                <li>Email Automation</li>
                            </ul>
                        </div>
                    </div>
                    <div className='accordian-container-right'>
                        <img src="Images/oxygen.png" alt=''/>
                    </div>
                </div>
            </div>
            <div style={{display: show4}} className='accordian-description-container' >
                <div className='accordian-description'>
                    <div className='accordian-container-left'>
                        <div>
                            <ul>
                                <li>Sales & Distribution</li>
                                <li>Marketing & Brands</li>
                                <li>Manufacturing & Supply Chain</li>
                                <li>Business Strategy</li>
                            </ul>
                        </div>
                    </div>
                    <div className='accordian-container-right'>
                        <img src="Images/temperature.png" alt=''/>
                    </div>
                </div>
            </div>
            <div style={{display: show5}} className='accordian-description-container' >
                <div className='accordian-description'>
                    <div className='accordian-container-left'>
                        <div>
                            <ul>
                                <li>Digital Marketing</li>
                                <li>B2B lead Generation</li>
                                <li>B2B ER / VR Solutions</li>
                                <li>Online Market Placements</li>
                            </ul>
                        </div>
                    </div>
                    <div className='accordian-container-right'>
                        <img src="Images/glucose.png" alt=''/>
                    </div>
                </div>
            </div>
            <div style={{display: show6}} className='accordian-description-container' >
                <div className='accordian-description'>
                    <div className='accordian-container-left'>
                        <div>
                            <ul>
                                <li>Logo Creation</li>
                                <li>Social Media Posts</li>
                                <li>Videos and Animation</li>
                                <li>Website Designs</li>
                            </ul>
                        </div>
                    </div>
                    <div className='accordian-container-right'>
                        <img src="Images/glucose.png" alt=''/>
                    </div>
                </div>
            </div>
        </div>
            {/*<div className='description-container-1'>
                <h2>Manage your work better.</h2>
                <div className="description-2">Track you work from every angle. Always have an insight on what your team is working on and make every progress a success.</div>
                <div className="landing-button-2">GET MY INVITE</div>
    </div>*/}
        </div>
    )
}

export default Accordian