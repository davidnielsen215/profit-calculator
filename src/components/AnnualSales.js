import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import { RadioGroup } from '@material-ui/core'
import RaisedButton from 'material-ui/RaisedButton'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';

export class AnnualSales extends Component {
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }

    back = e =>{
        e.preventDefault()
        this.props.prevStep()
    }
    render() {
        const { values, handleChange } = this.props 
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title= "Select range for store's annual sales"/>
                    
                    <FormControl component="fieldset" >
                    <RadioGroup onChange={handleChange('annualSales')} defaultValue={values.annualSales}>
                        <FormControlLabel value="625,000" control={<Radio color="primary"/>} label="500K - 750K" />
                        <FormControlLabel value="875,000" control={<Radio color="primary"/>} label="750K - 1M" />
                        <FormControlLabel value="1,250,000" control={<Radio color="primary"/>} label="1M - 1.5M" />
                        <FormControlLabel value="1,750,000" control={<Radio color="primary"/>} label="1.5M - 2M" />
                        <FormControlLabel value="2,500,000" control={<Radio color="primary"/>} label="2M - 3M" />
                        <FormControlLabel value="4,000,000" control={<Radio color="primary"/>} label="3M - 5M" />
                        <FormControlLabel value="7,500,000" control={<Radio color="primary"/>} label="5M - 10M" />
                    </RadioGroup>
                    </FormControl>
                    <br/>
                    <RaisedButton 
                    label='previous'
                    // primary='true'
                    style={styles.button}
                    onClick={this.back}
                    />
                    <RaisedButton 
                    label='continue'
                    primary='true'
                    style={styles.button}
                    onClick={this.continue}
                    />
                
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15,
    },
    button2: {
        margin: 5
    }
}

export default AnnualSales
