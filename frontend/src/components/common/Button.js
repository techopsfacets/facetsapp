import React from 'react'
import '../../stylesheets/module.scss'
import PropTypes from 'prop-types'
import {Route, Link } from "react-router-dom";

// Button for Sign up and Learn more on the Landing Page

const Button = ({text}) => {
    let btnType = ''
    let btnRoute = '/'
    switch(text)
    {
        case 'SIGN UP':
            btnType = 'btn_signup'
            btnRoute = '/signupuser'
            break;
        case 'LEARN MORE':
            btnType = 'btn_learnmore'
            btnRoute = '/learnmore'
            break;
        case 'CREATOR':
            btnType = 'btn_userbtn '
            btnRoute = '/learnmore'
            break;
        case 'MODEL':
            btnType = 'btn_userbtn '
            btnRoute = '/learnmore'
            break;
        case 'INFLUENCER':
            btnType = 'btn_userbtn '
            btnRoute = '/learnmore'
            break;
        case 'Facebook':
            btnType = 'btn_social '
            btnRoute = '/learnmore'
            break;
        case 'Instagram':
            btnType = 'btn_social '
            btnRoute = '/learnmore'
            break;
        case 'Twitter':
            btnType = 'btn_social '
            btnRoute = '/learnmore'
            break;
        case 'TikTok':
            btnType = 'btn_social '
            btnRoute = '/learnmore'
            break;
        case 'YouTube':
            btnType = 'btn_social '
            btnRoute = '/learnmore'
            break;
        case 'Email Address':
            btnType = 'btn_social '
            btnRoute = '/learnmore'
            break;            
        case 'Beauty':
            btnType = 'btn_category '
            btnRoute = '/learnmore'
            break;            
        case 'Fitness':
            btnType = 'btn_category '
            btnRoute = '/learnmore'
            break;           
        case 'Nutrition':
            btnType = 'btn_category '
            btnRoute = '/learnmore'
            break;
        case 'Fashion':
            btnType = 'btn_category '
            btnRoute = '/learnmore'
            break;
        case 'NEXTUser':
            btnType = 'btn_signup'
            btnRoute = '/signuptype'
            text = 'NEXT'
            break;
        case 'NEXTType':
            btnType = 'btn_signup'
            btnRoute = '/signupsocial'
            text = 'NEXT'
            break;
        case 'NEXTSocial':
            btnType = 'btn_signup'
            btnRoute = '/signupdesc'
            text = 'NEXT'
            break;
        case 'NEXTDesc':
            btnType = 'btn_signup'
            btnRoute = '/signupcat'
            text = 'NEXT'
            break;
        case 'NEXTCat':
            btnType = 'btn_signup'
            btnRoute = '/signupcat'
            text = 'NEXT'
            break;   
        case 'SKIPDesc':
            btnType = 'btn_skip'
            btnRoute = '/signupcat'
            text = 'SKIP'
            break;  
        case 'SKIPCat':
            btnType = 'btn_skip'
            btnRoute = '/signupcat'
            text = 'SKIP'
            break;                    
}

    return (
        <Link to = {btnRoute}>
        <button className = {btnType}>
            {text}
        </button>
        </Link>
    )
    
}

Button.propTypes = {
    text: PropTypes.string,
}

export default Button
