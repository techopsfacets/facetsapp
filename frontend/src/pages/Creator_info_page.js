import React from 'react'
import '../stylesheets/layout.scss'
import Footer from '../components/common/Footer'
import Button from '../components/common/Button'

const Creator_info_page = () => {
    return (
        <div>
            <div className = 'creatorinfoTopContainer'>
                <div className = 'creatorinfoTopContent'>   
                    <div className = 'landingHeaderTitle'>Increase your {"\n"}
                                                            impact and {"\n"}
                                                            grow as a {"\n"}
                                                            creator
                        <div className = 'landingHeaderText'>You are always in control.  Collaborate with brands {"\n"}
                                                                that actually resonate with your specific vibe and{"\n"}
                                                                audience.
                        </div>
                            <Button text={'SIGN UP'} />
                    </div>
                </div> 
                <div className = 'creatorinfoTopTextQuote'>"Thank you {"\n"}
                                                                facets"!{"\n"}
                        <div className = 'landingBodyTextQuoted'>Andrew July Scott (@themisterjuly) {"\n"}
                            <div className = 'landingBodyTextQuoteReview'>
                                                    Something about how we blah blah {"\n"}
                                                    stuff and ways platform ablah, {"\n"}
                                                    clever thoughts here. {"\n"}
                            </div>
                            <Button text={'SIGN UP'} />
                        </div> 
                </div>
            </div>
            <div className = 'landingBodycontainerblock'>

                <div className = 'creatorinfoMiddleContainer'>
                    <div className = 'creatorinfoMiddleContentHeader'>
                        Join our community today to find {"\n"} authentic collaborations and {"\n"}build your personal brand!
                    </div>
                    <div className = 'creatorinfoiconsone'>
                            <ul>
                            <li>
                                <img src={"https://facetswebsite.s3.us-east-2.amazonaws.com/assets/icon-brandsbest.png"}>
                                </img>
                            </li>
                            <li className = 'icontext'>
                                    Work with the right campaigns that {"\n"}
                                    you actually get passionate about!

                            </li>
                            <li className = 'icontext'>
                                <Button text={'SIGN UP'} /> 
                            </li> 
                        </ul>
                    </div>
                    <div className = 'creatorinfoiconstwo'>
                        <ul>
                            <li>
                                <img src={"https://facetswebsite.s3.us-east-2.amazonaws.com/assets/icon-developskills.png"}>
                                </img>
                            </li>
                            <li className = 'icontext'>
                                    Develop your skills in our Master Class {"\n"}
                                    Series.  We want you to succeed!

                            </li>
                            <li className = 'icontext'>
                                <Button text={'SIGN UP'} /> 
                            </li>
                        </ul>
                    </div>
                    <div className = 'creatorinfoiconsthree'>
                        <ul>
                            <li>
                                <img  src={"https://facetswebsite.s3.us-east-2.amazonaws.com/assets/icon-incomeincrease.png"}>
                                </img>
                            </li>
                            <li className = 'icontext'>
                                    Increase your income and learn about {"\n"}
                                    your own audience growth too.

                            </li>
                            <li className = 'icontext'>
                                <Button text={'SIGN UP'} /> 
                            </li>
                        </ul>
                    </div>
                </div>
                <div className = 'creatorinfoBottomContainer '>
                    <div className = 'creatorinfoBottonContent'>CREATE WITH {"\n"}
                                                                BRANDS YOU LOVE{"\n"}
                        <div className = 'landingBodyTextQuoteReview'>
                                                Work with brands that are an authentic fit to all of
                                                the things that make you special, so you can create
                                                content that you're proud of!{"\n"}
                        </div>
                        <Button text={'SIGN UP'} /> 
                        
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Creator_info_page
