import React, { Component } from 'react'
import StoreType from './StoreType'
import AnnualSales from './AnnualSales'
import NetProfit from './NetProfit'
import LastYear from './LastYear'
import LoseInternet from './LoseInternet'

export class UserForm extends Component {
    state = {
        step: 1,
        storeType: '',
        annualSales: '',
        netProfit: '',
        lastYear: '',
        LoseInternet: ''
    }

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state
        this.setState({
          step: step + 1
        })
    }

    // Go to previous step
    prevStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        })
    }

    //Handle field change

    handleChange = input => e => {
        this.setState({[input]: e.target.value})
    }

    render() {
        const { step } = this.state
        const { storeType, annualSales, netProfit, lastYear, loseInternet } = this.state
        const values = {storeType, annualSales, netProfit, lastYear, loseInternet}
        
        switch (step) {
            case 1: 
                return(
                    <StoreType
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}/>
                )
            case 2:
                return(
                    <AnnualSales 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}/>
                )
            case 3:
                return (
                    <NetProfit 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}/>
                )
            case 4:
                return (
                    <LastYear 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}/>
                )
            case 5:
                return (
                    <LoseInternet 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                )
            case 6:
                return <h1>Calculation</h1>
            }
    }
}

export default UserForm
