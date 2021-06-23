import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "../../stylesheets/layout.scss";
import Button from './Button';
import PropTypes from 'prop-types'


const Footer = ({footertype}) => {
    return (
        <div>
            <div className = 'landingfooter'>
            <ul className='footercolumn'>Brands & Agencies
                <li>      
                    <Link to="/">How It Works</Link>    
                </li>
                <li>
                    <Link to="/signupuser">Support</Link>    
                </li>
                <li>
                    <Link to="/signin">Sign In</Link>
                </li>
            </ul>     
            <ul className='footercolumn'>Creators & Models
                <li>
                    <Link to="/creatorinfo">Become a Creator</Link>
                </li>
                <li>
                    <Link to="/login">Creator Sign In</Link>
                </li>
            </ul>    
            <ul  className='footercolumn'>Learn
                <li>
                    <Link to="/login">Pricing</Link>    
                </li>
                <li>
                    <Link to="/login">Terms</Link>    
                </li>
                <li>
                    <Link to="/login">Privacy</Link>    
                </li>
                <li>
                    <Link to="/login">Help Center</Link>    
                </li>
            </ul>
            <ul  className='footercolumnright'>Contact
                <li>
                    <Link to="/login">Contact Us</Link>    
                </li>
                <li>
                    <Link to="/login">Facebook</Link>    
                </li>
                <li>
                    <Link to="/login">Linkedin</Link>    
                </li>
                <li>
                    <Link to="/login">Instagram</Link>    
                </li>
                <li>
                    <Link to="/login">Twitter</Link>    
                </li>
            </ul>
            </div>
            {(() => {
                switch(footertype)
                {
                    case 'creator' :
                        return (
                            <div className = 'landingcreatorfooterbar'>' '</div>
                        )
                    case 'agency':
                        return (
                            <div className = 'landingcampaignfooterbar'>' '</div>
                        )
                    default:
                        return (
                            <div className = 'landingfooterbar'></div>
                        )

                }
            })()}
        </div>          
    )
}


Footer.propTypes = {
    typeFooter: PropTypes.string,
}


export default Footer
