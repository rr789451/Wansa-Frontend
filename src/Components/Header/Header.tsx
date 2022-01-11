import React, { useState } from 'react'
import './Header.css'

function Header() {
    const [addClass, setAddClass] = useState<boolean>(false);

    function showOverlay(){
        setAddClass(!addClass);
    }

    return (
        <div className='header'>
            <div className="stats">
                <p>Reach Us</p>
            </div>
            <div className={addClass ? 'search overlay' : 'search'} onClick={showOverlay}>
                <button className={addClass ? 'none' : 'block'}>Suggestions</button>
                {
                    addClass ?
                        <div className="suggest-container">
                            <div className='heading'>Suggestions For You</div>
                            <div className="suggestions">jbvajdvbkavnklanv</div>
                            <div className="suggestions">jbvajdvbkavnklanv</div>
                            <div className="suggestions">jbvajdvbkavnklanv</div>
                            <div className="suggestions">jbvajdvbkavnklanv</div>
                            <div className="suggestions">jbvajdvbkavnklanv</div>
                            <i className="fas fa-times" onClick={showOverlay}></i>
                        </div>
                        :
                        ''
                }
            </div>
            <div className="login-register">
                <div><i className="fas fa-user"></i> Client Onboarding / Partner Onboarding</div>
            </div>
            {/* <div className="number">
                888-601-5359
            </div> */}
        </div>
    )
}

export default Header