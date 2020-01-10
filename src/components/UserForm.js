import React, { Component } from 'react'
import StoreType from './StoreType'

export class UserForm extends Component {
    state = {
        step: 1,
        firstOption: '',
        secondOption: '',
        thirdOption: '',
        fourthOption: '',
        fifthOption: ''
    }

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state
        this.setState({
            step: + 1
        })
    }

    // Go to previous step
    prevStep = () => {
        const { step } = this.state
        this.setState({
            step: - 1
        })
    }

    //Handle field change

    handleChange = input => e => {
        this.setState({[input]: e.target.value})
    }

    render() {
        const { step } = this.state
        const { firstOption, secondOption, thirdOption, fourthOption, fifthOption } = this.state
        const values = {firstOption, secondOption, thirdOption, fourthOption, fifthOption}
        
        switch(step){
            case 1: 
                return(
                <StoreType
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
                />
                )
            case 2:
                return <h1>Annual Sales</h1>
            case 3:
                return <h1>Net Profit</h1>
            case 4:
                return <h1>Last Years Product</h1>
            case 5:
                return <h1>Losing to Internet</h1>
            case 6:
                return <h1>Calculation</h1>
        }
    }
}

export default UserForm
