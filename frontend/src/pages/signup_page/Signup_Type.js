import React from 'react'
import '../../stylesheets/layout.scss'
import Button from '../../components/common/Button'

const Signup_Type = () => {
    return (
        <div className = 'signupPage'>
            <div className = 'signupBlock'>
                <div className = 'signupHeader'>
                    Sign Up
                </div>
                <div className = 'signupDesc'>
                    We service models, influencers, and creators of all types! So to make sure we help you set up the {"\n"}
                    best possible account, which one would you consider yourself to be? Creators differ from just a {"\n"}
                    pure influencer!{"\n"}
                </div>
                <div className = 'signupButtonTypeBlock'>
                    <div className = 'signupButtonType'>
                        <Button  text={'CREATOR'} />
                    </div>
                    <div className = 'signupButtonType'>
                        <Button  text={'MODEL'} />
                    </div>
                    <div className = 'signupButtonType'>
                        <Button  text={'INFLUENCER'} />
                    </div>
                </div>
                <div className = 'signupButtonNext'>
                    <Button  text={'NEXTType'} />
                </div>
            </div>
            <div className = 'signupFooter'>
                By signing up you are creating a facets account, and you {"\n"}
                agree to facet’s Term Of Use and Privacy Policy {"\n"}
            </div>
        </div>
    )
}

export default Signup_Type
