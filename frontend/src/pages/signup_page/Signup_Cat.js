import React from 'react'
import '../../stylesheets/layout.scss'
import Button from '../../components/common/Button'

const Signup_Cat = () => {
    return (
        <div className = 'signupPage'>
            <div className = 'signupBlock'>
                <div className = 'signupHeader'>
                    Let's talk Categories
                </div>
                <div className = 'signupDesc'>
                    We aren’t into labels, but we ARE into making sure you are matched with campaigns that you  {"\n"}
                    actually want to work on. So to help us out, pick from the list below! {"\n"}
                </div>
                <div className = 'signupButtonCatBlock'>
                    <div className = 'signupButtonCat'>
                        <Button  text={'Beauty'} />
                    </div>
                    <div className = 'signupButtonCat'>
                        <Button  text={'Fitness'} />
                    </div>
                    <div className = 'signupButtonCat'>
                        <Button  text={'Nutrition'} />
                    </div>
                    <div className = 'signupButtonCat'>
                        <Button  text={'Fashion'} />
                    </div>
                </div>
                <div className = 'signupButtonNext'>
                    <Button  text={'SKIPCat'} />
                    <Button  text={'NEXTCat'} />
                </div>
            </div>
            <div className = 'signupFooter'>
                By signing up you are creating a facets account, and you {"\n"}
                agree to facet’s Term Of Use and Privacy Policy {"\n"}
            </div>
        </div>
    )
}

export default Signup_Cat
