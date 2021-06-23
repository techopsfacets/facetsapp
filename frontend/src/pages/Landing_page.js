import React from 'react'
import '../stylesheets/layout.scss'
import Footer from './../components/common/Footer'
import Button from './../components/common/Button'

const Landing_page = () => {
    return (
        <div>
            <div className = 'landingHeadercontainer'>
                <div className = 'landingHeadercontainerblock'>   
                    <div className = 'landingHeaderTitle'>The Future {"\n"}
                                                            of Influencer {"\n"}
                                                            Marketing {"\n"}
                                                            is Here
                        <div className = 'landingHeaderText'>Get consumers talking about your brand and buying {"\n"}
                                                                your products with creator marketing.{"\n"}{"\n"}
                            <Button text={'LEARN MORE'} />
                        </div>
                    </div>
                </div> 

                
            </div>
            <div className = 'landingBodycontainerblock'>
                <div className = 'landingBodyContainerTop'>
                    <div className = 'landingBodyContentTop'>
                        <div className = 'landingBodyTitle'>Only {"\n"}
                                                            Authentic{"\n"}
                                                            Matches
                            <div className = 'landingBodyTextTop'>Reaching new audiences and increasing ROI from your {"\n"}
                                                        brand campaigns is at the heart of what we do.  Quickly {"\n"}
                                                        match to thousands of influencers based on their {"\n"}
                                                        passions and lifestyles, ensuring and authentic expression {"\n"}
                                                        of your brand that drives new customer sales.{"\n"}{"\n"}
                                <Button text={'LEARN MORE'} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className = 'landingBodyContainerMiddle'>
                    <div className = 'landingiconsone'>
                            <ul>
                            <li>
                                <img src={"https://facetswebsite.s3.us-east-2.amazonaws.com/assets/InfluencerIcon.png"}>
                                </img>
                            </li>
                            <li className = 'icontext'>
                                    Work with the right influencers and {"\n"}
                                    experience authenticity at work.

                            </li>
                            <li className = 'icontext'>
                                <Button text={'LEARN MORE'} /> 
                            </li> 
                        </ul>
                    </div>
                    <div className = 'landingiconstwo'>
                        <ul>
                            <li>
                                <img src={"https://facetswebsite.s3.us-east-2.amazonaws.com/assets/OptimizeIcon-home.png"}>
                                </img>
                            </li>
                            <li className = 'icontext'>
                                    Optimize your influencer relationships and {"\n"}
                                    management strategies!

                            </li>
                            <li className = 'icontext'>
                                <Button text={'LEARN MORE'} /> 
                            </li>
                        </ul>
                    </div>
                    <div className = 'landingiconsthree'>
                        <ul>
                            <li>
                                <img  src={"https://facetswebsite.s3.us-east-2.amazonaws.com/assets/ReportingIcon-home.png"}>
                                </img>
                            </li>
                            <li className = 'icontext'>
                                    Analyze your sales conversions, click {"\n"}
                                    through rates, impressions, and more.

                            </li>
                            <li className = 'icontext'>
                                <Button text={'LEARN MORE'} /> 
                            </li>
                        </ul>
                    </div>
                </div>
                <div className = 'landingBodyContainerBot'>
                    <div className = 'landingBodyTextQuote'>"A true disruptor {"\n"}
                                                                in the industry"{"\n"}
                        <div className = 'landingBodyTextQuoted'>Joe Smith, Head of Marketing {"\n"}
                            <div className = 'landingBodyTextQuoteReview'>
                                                    Something about how we stand out for pros {"\n"}
                                                    in the marketing world. Saving them time, {"\n"}
                                                    money, and increasing ROI. {"\n"}{"\n"}
                            </div>
                            <Button text={'LEARN MORE'} /> 
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Landing_page
