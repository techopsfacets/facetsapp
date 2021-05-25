import React from 'react'
import '../../stylesheets/layout.scss'
import Button from '../../components/common/Button'

const Signup_Social = () => {
    return (
        <div className = 'signupPage'>
            <div className = 'signupBlock'>
                <div className = 'signupHeader'>
                    Let's Get Connected!
                </div>
                <div className = 'signupDesc'>
                    The next step to being the best creator you can be, is signing up! Start by picking the social {"\n"}
                    platforms that matter most to you OR you can get started with just an email. Whatever you {"\n"}
                    prefer! You’ll be able to add more connections later on too.{"\n"}
                </div>
                <div className = 'signupSocialButtonTypeBlock'>
                    <div className = 'signupSocialButtonType'>
                        <Button  text={'Facebook'} />
                    </div>
                    <div className = 'signupSocialButtonType'>
                        <Button  text={'Instagram'} />
                    </div>
                    <div className = 'signupSocialButtonType'>
                        <Button  text={'Twitter'} />
                    </div>
                    <div className = 'signupSocialButtonType'>
                        <Button  text={'TikTok'} />
                    </div>
                    <div className = 'signupSocialButtonType'>
                        <Button  text={'YouTube'} />
                    </div>
                </div>
                <div className = 'signupButtonNext'>
                    <Button  text={'NEXTSocial'} />
                </div>
            </div>
            <div className = 'signupFooter'>
                By signing up you are creating a facets account, and you {"\n"}
                agree to facet’s Term Of Use and Privacy Policy {"\n"}
            </div>
        </div>
    )
}

export default Signup_Social
