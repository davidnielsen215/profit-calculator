import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import { RadioGroup } from '@material-ui/core'
import RaisedButton from 'material-ui/RaisedButton'
// import FormLabel from '@material-ui/core/FormLabel';
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
                    
                    <br></br>
                    <FormControl component="fieldset" >
                    <RadioGroup onChange={handleChange('storeType')} defaultValue={values.storeType}>
                        <FormControlLabel value="Ski Shop" control={<Radio color="primary"/>} label="Ski Shop" />
                        <FormControlLabel value="Snowboard Shop" control={<Radio color="primary"/>} label="Snowboard Shop" />
                        <FormControlLabel value="Ski and Snowboard Shop" control={<Radio color="primary"/>} label="Ski and Snowboard Shop" />
                    </RadioGroup>
                    </FormControl>
                    <br/>
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
    }
}

export default StoreType
