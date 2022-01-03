import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import './Navigation.css'

function Navigation() {
    return (
        <div>
            <Header />
            <div className='navigation'>
                <div className='logo'><img src="./Images/wansa.png" alt=''/></div>
                <ul className='nav-items'>
                    <li className="nav-item">
                        SEO & Lead Generation <i className="fas fa-chevron-down"></i>
                        <ul className="sub-list-1">
                            <ul className="list">
                                <div className='list-1'>
                                    <div>Heading1</div>
                                    <li className="list-item">List1</li>
                                    <li className="list-item">List2</li>
                                    <li className="list-item">List3</li>
                                    <li className="list-item">List4</li>
                                    <li className="list-item">List5</li>
                                    <li className="list-item">List6</li>
                                </div>
                            </ul>
                            <ul className="list">
                                <div className='list-2'>
                                    <div>Heading1</div>
                                    <li className="list-item">List1</li>
                                    <li className="list-item">List2</li>
                                    <li className="list-item">List3</li>
                                    <li className="list-item">List4</li>
                                    <li className="list-item">List5</li>
                                    <li className="list-item">List6</li>
                                </div>
                            </ul>
                            <ul className="list">
                                <div className='list-3'>
                                    <div>Heading1</div>
                                    <li className="list-item">List1</li>
                                    <li className="list-item">List2</li>
                                    <li className="list-item">List3</li>
                                    <li className="list-item">List4</li>
                                    <li className="list-item">List5</li>
                                    <li className="list-item">List6</li>
                                </div>
                            </ul>
                            <ul className="list">
                                <div className='list-4'>
                                    <div>Heading1</div>
                                    <li className="list-item">List1</li>
                                    <li className="list-item">List2</li>
                                    <li className="list-item">List3</li>
                                    <li className="list-item">List4</li>
                                    <li className="list-item">List5</li>
                                    <li className="list-item">List6</li>
                                </div>
                            </ul>
                        </ul>
                    </li>
                    <li className="nav-item">Ecommerce <i className="fas fa-chevron-down"></i>
                    <ul className="sub-list-2">
                            <ul className="list">
                                <div className='list-1'>
                                    <div>Heading2</div>
                                    <li className="list-item">List1</li>
                                    <li className="list-item">List2</li>
                                    <li className="list-item">List3</li>
                                    <li className="list-item">List4</li>
                                    <li className="list-item">List5</li>
                                    <li className="list-item">List6</li>
                                </div>
                            </ul>
                            <ul className="list">
                                <div className='list-2'>
                                    <div>Heading2</div>
                                    <li className="list-item">List1</li>
                                    <li className="list-item">List2</li>
                                    <li className="list-item">List3</li>
                                    <li className="list-item">List4</li>
                                    <li className="list-item">List5</li>
                                    <li className="list-item">List6</li>
                                </div>
                            </ul>
                            <ul className="list">
                                <div className='list-3'>
                                    <div>Heading2</div>
                                    <li className="list-item">List1</li>
                                    <li className="list-item">List2</li>
                                    <li className="list-item">List3</li>
                                    <li className="list-item">List4</li>
                                    <li className="list-item">List5</li>
                                    <li className="list-item">List6</li>
                                </div>
                            </ul>
                            <ul className="list">
                                <div className='list-4'>
                                    <div>Heading2</div>
                                    <li className="list-item">List1</li>
                                    <li className="list-item">List2</li>
                                    <li className="list-item">List3</li>
                                    <li className="list-item">List4</li>
                                    <li className="list-item">List5</li>
                                    <li className="list-item">List6</li>
                                </div>
                            </ul>
                        </ul>
                    </li>
                    <li className="nav-item">UX & Interactive <i className="fas fa-chevron-down"></i>
                    <ul className="sub-list-3">
                            <ul className="list">
                                <div className='list-1'>
                                    <div>Heading3</div>
                                    <li className="list-item">List1</li>
                                    <li className="list-item">List2</li>
                                    <li className="list-item">List3</li>
                                    <li className="list-item">List4</li>
                                    <li className="list-item">List5</li>
                                    <li className="list-item">List6</li>
                                </div>
                            </ul>
                            <ul className="list">
                                <div className='list-2'>
                                    <div>Heading3</div>
                                    <li className="list-item">List1</li>
                                    <li className="list-item">List2</li>
                                    <li className="list-item">List3</li>
                                    <li className="list-item">List4</li>
                                    <li className="list-item">List5</li>
                                    <li className="list-item">List6</li>
                                </div>
                            </ul>
                            <ul className="list">
                                <div className='list-3'>
                                    <div>Heading3</div>
                                    <li className="list-item">List1</li>
                                    <li className="list-item">List2</li>
                                    <li className="list-item">List3</li>
                                    <li className="list-item">List4</li>
                                    <li className="list-item">List5</li>
                                    <li className="list-item">List6</li>
                                </div>
                            </ul>
                            <ul className="list">
                                <div className='list-4'>
                                    <div>Heading3</div>
                                    <li className="list-item">List1</li>
                                    <li className="list-item">List2</li>
                                    <li className="list-item">List3</li>
                                    <li className="list-item">List4</li>
                                    <li className="list-item">List5</li>
                                    <li className="list-item">List6</li>
                                </div>
                            </ul>
                        </ul>
                    </li>
                    <li className="nav-item">Our Technology <i className="fas fa-chevron-down"></i>
                    <ul className="sub-list-4">
                            <ul className="list">
                                <div className='list-1'>
                                    <div>Heading4</div>
                                    <li className="list-item">List1</li>
                                    <li className="list-item">List2</li>
                                    <li className="list-item">List3</li>
                                    <li className="list-item">List4</li>
                                    <li className="list-item">List5</li>
                                    <li className="list-item">List6</li>
                                </div>
                            </ul>
                            <ul className="list">
                                <div className='list-2'>
                                    <div>Heading4</div>
                                    <li className="list-item">List1</li>
                                    <li className="list-item">List2</li>
                                    <li className="list-item">List3</li>
                                    <li className="list-item">List4</li>
                                    <li className="list-item">List5</li>
                                    <li className="list-item">List6</li>
                                </div>
                            </ul>
                            <ul className="list">
                                <div className='list-3'>
                                    <div>Heading4</div>
                                    <li className="list-item">List1</li>
                                    <li className="list-item">List2</li>
                                    <li className="list-item">List3</li>
                                    <li className="list-item">List4</li>
                                    <li className="list-item">List5</li>
                                    <li className="list-item">List6</li>
                                </div>
                            </ul>
                            <ul className="list">
                                <div className='list-4'>
                                    <div>Heading4</div>
                                    <li className="list-item">List1</li>
                                    <li className="list-item">List2</li>
                                    <li className="list-item">List3</li>
                                    <li className="list-item">List4</li>
                                    <li className="list-item">List5</li>
                                    <li className="list-item">List6</li>
                                </div>
                            </ul>
                        </ul>
                    </li>
                    <li className="nav-item">Who We Are <i className="fas fa-chevron-down"></i>
                    <ul className="sub-list-5">
                            <ul className="list">
                                <div className='list-1'>
                                    <div>Heading5</div>
                                    <li className="list-item">List1</li>
                                    <li className="list-item">List2</li>
                                    <li className="list-item">List3</li>
                                    <li className="list-item">List4</li>
                                    <li className="list-item">List5</li>
                                    <li className="list-item">List6</li>
                                </div>
                            </ul>
                            <ul className="list">
                                <div className='list-2'>
                                    <div>Heading5</div>
                                    <li className="list-item">List1</li>
                                    <li className="list-item">List2</li>
                                    <li className="list-item">List3</li>
                                    <li className="list-item">List4</li>
                                    <li className="list-item">List5</li>
                                    <li className="list-item">List6</li>
                                </div>
                            </ul>
                            <ul className="list">
                                <div className='list-3'>
                                    <div>Heading5</div>
                                    <li className="list-item">List1</li>
                                    <li className="list-item">List2</li>
                                    <li className="list-item">List3</li>
                                    <li className="list-item">List4</li>
                                    <li className="list-item">List5</li>
                                    <li className="list-item">List6</li>
                                </div>
                            </ul>
                            <ul className="list">
                                <div className='list-4'>
                                    <div>Heading5</div>
                                    <li className="list-item">List1</li>
                                    <li className="list-item">List2</li>
                                    <li className="list-item">List3</li>
                                    <li className="list-item">List4</li>
                                    <li className="list-item">List5</li>
                                    <li className="list-item">List6</li>
                                </div>
                            </ul>
                        </ul>
                    </li>
                    <Link to="/proposal" className='tdn'><li className="nav-item button">Get a Proposal</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Navigation
