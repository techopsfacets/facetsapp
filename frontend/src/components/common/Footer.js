import React from 'react';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import '../../stylesheets/layout.scss';
import Button from './Button';
import PropTypes from 'prop-types'


const Footer = ({footertype}) => {
    return (
        <div>
            <div className = 'landingfooter'>
            <ul className='footercolumn'>Brands & Agencies
                <li>      
                    <Link component={RouterLink} to="/">How It Works</Link>    
                </li>
                <li>
                    <Link component={RouterLink} to="/signupuser">Support</Link>    
                </li>
                <li>
                    <Link component={RouterLink} to="/signin">Sign In</Link>
                </li>
            </ul>     
            <ul className='footercolumn'>Creators & Models
                <li>
                    <Link component={RouterLink} to="/creatorinfo">Become a Creator</Link>
                </li>
                <li>
                    <Link component={RouterLink} to="/login">Creator Sign In</Link>
                </li>
            </ul>    
            <ul  className='footercolumn'>Learn
                <li>
                    <Link component={RouterLink} to="/dashboard">Pricing</Link>    
                </li>
                <li>
                    <Link component={RouterLink} to="/dashboard">Terms</Link>    
                </li>
                <li>
                    <Link component={RouterLink} to="/dashboard">Privacy</Link>    
                </li>
                <li>
                    <Link component={RouterLink} to="/dashboard">Help Center</Link>    
                </li>
            </ul>
            <ul  className='footercolumnright'>Contact
                <li>
                    <Link component={RouterLink} to="/dashboard">Contact Us</Link>    
                </li>
                <li>
                    <Link component={RouterLink} to="/dashboard">Facebook</Link>    
                </li>
                <li>
                    <Link component={RouterLink} to="/dashboard">Linkedin</Link>    
                </li>
                <li>
                    <Link component={RouterLink} to="/dashboard">Instagram</Link>    
                </li>
                <li>
                    <Link component={RouterLink} to="/dashboard">Twitter</Link>    
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
