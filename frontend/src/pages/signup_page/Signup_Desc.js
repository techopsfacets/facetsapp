import React from 'react'
import '../../stylesheets/layout.scss'
import Button from '../../components/common/Button'

const Signup_Desc = () => {
    return (
        <div className = 'signupPage'>
            <div className = 'signupBlock'>
                <div className = 'signupHeader'>
                    What's your story?
                </div>
                <div className = 'signupDesc'>
                    Let’s get to know each other! How would you describe yourself as a creator? The better we get to {"\n"} 
                    know you, the better campaign matches we can match you with. {"\n"}
                </div>
                <div className = 'signupDescFormBlock'>
                    <input type="text" className = 'signupDescForm'>

                    </input>
                </div>
                <div className = 'signupButtonNext'>
                    <Button  text={'SKIPDesc'} />
                    
                    <Button  text={'NEXTDesc'} />
                </div>
            </div>
            <div className = 'signupFooter'>
                By signing up you are creating a facets account, and you {"\n"}
                agree to facet’s Term Of Use and Privacy Policy {"\n"}
            </div>
        </div>
    )
}

export default Signup_Desc
