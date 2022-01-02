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
                {show1 !== 'none' ? <button onClick={handleImage1} style={{backgroundColor : '#141641', color : 'white'}} className='secondary-button left'>Pulse</button> : <button onClick={handleImage1} className='secondary-button left'>Pulse</button> }
                {show2 !== 'none' ? <button onClick={handleImage2} style={{backgroundColor : '#141641', color : 'white'}} className='secondary-button left'>ECG</button> : <button onClick={handleImage2} className='secondary-button left'>ECG</button> }
                {show3 !== 'none' ? <button onClick={handleImage3} style={{backgroundColor : '#141641', color : 'white'}} className='secondary-button'>Oxygen</button> : <button onClick={handleImage3} className='secondary-button'>Oxygen</button> }
                {show4 !== 'none' ? <button onClick={handleImage4} style={{backgroundColor : '#141641', color : 'white'}} className='secondary-button'>Temperature</button> : <button onClick={handleImage4} className='secondary-button'>Temperature</button> }
                {show5 !== 'none' ? <button onClick={handleImage5} style={{backgroundColor : '#141641', color : 'white'}} className='secondary-button'>Glucose</button> : <button onClick={handleImage5} className='secondary-button'>Glucose</button> }
                {show6 !== 'none' ? <button onClick={handleImage6} style={{backgroundColor : '#141641', color : 'white'}} className='secondary-button'>Six</button> : <button onClick={handleImage6} className='secondary-button'>Six</button> }
            </div>
            <div style={{display: show1}} className='accordian-description-container' >
                <div className='accordian-description'>
                    <div className='accordian-container-left'>
                        <div>Right from your happiest moments to saddest, relaxed to stressed, your Health got our back. <br />Pulse being one among our important priorities, We wholeHEARTedly accept your HEARTbeat with atmost care.</div>
                    </div>
                    <div className='accordian-container-right'>
                        <img src="Images/heart.png" alt=''/>
                    </div>
                </div>
            </div>
            <div style={{display: show2}} className='accordian-description-container' >
                <div className='accordian-description'>
                    <div className='accordian-container-left'>
                        <div>We keenly observe your heart's rhythm and beautifully depict it to you. <br />We believe these ELECTRICAL signals of heart are more important than the ELECTRONIC Gadgets you daily use 😉
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
                        <div>In this world full of pollution, the oxygen levels in the air you breathe are uncertain, but the oxygen levels in your body measured by SfUIT are certain.</div>
                    </div>
                    <div className='accordian-container-right'>
                        <img src="Images/oxygen.png" alt=''/>
                    </div>
                </div>
            </div>
            <div style={{display: show4}} className='accordian-description-container' >
                <div className='accordian-description'>
                    <div className='accordian-container-left'>
                        <div>What if you could have a check on your body temperature without using traditional thermometers, Interesting right? <br /> This is now possible using SfUIT.</div>
                    </div>
                    <div className='accordian-container-right'>
                        <img src="Images/temperature.png" alt=''/>
                    </div>
                </div>
            </div>
            <div style={{display: show5}} className='accordian-description-container' >
                <div className='accordian-description'>
                    <div className='accordian-container-left'>
                        <div>Ever bothered about your blood glucose level, Afraid? 
                            <br />Naa, you need not be. 
                            <br />SfUIT has a CGM (Continuous Glucose Monitoring) system which reminds you of your glucose levels.
                            <br /><strong>Here's a secret</strong> 🤫,
                            <br /><strong>No more pricking your finger for checking glucose</strong> 😉
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
                        <div>Ever bothered about your blood glucose level, Afraid? 
                            <br />Naa, you need not be. 
                            <br />SfUIT has a CGM (Continuous Glucose Monitoring) system which reminds you of your glucose levels.
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