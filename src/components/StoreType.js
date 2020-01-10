import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import { RadioGroup } from '@material-ui/core'
import RaisedButton from 'material-ui/RaisedButton'
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';


export class StoreType extends Component {
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }
    render() {
        const { values, handleChange } = this.props 
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='What type of retail store do you have?'/>
                    <TextField 
                    // hintText='Select Store Type'
                    // floatingLabelText='store type'
                    onChange={handleChange('firstOption')}
                    defaultValue={values.firstOption}/>
                    <br></br>
                    <FormControl component="fieldset" >
                    <RadioGroup onChange={handleChange('firstOption')} defaultValue={values.firstOption}>
                        <FormControlLabel value="Ski Shop" control={<Radio color="primary"/>} label="Ski Shop" />
                        <FormControlLabel value="Snowboard Shop" control={<Radio color="primary"/>} label="Snowboard Shop" />
                        <FormControlLabel value="Ski and Snowboard Shop" control={<Radio color="primary"/>} label="Ski and Snowboard Shop" />
                    </RadioGroup>
                    </FormControl>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default StoreType
