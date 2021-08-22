import { Button, TextField,Checkbox, FormLabel } from "@material-ui/core";
import { classes } from "istanbul-lib-coverage";
import React, { Component } from "react";
import {Tab, Tabs,TabList,TabPanel} from "react-tabs";
import {makeStyles} from "@material-ui/core/styles"
// import { FormControl,FormControlLabel,Radio,RadioGroup} from "@material-ui/core";
import 'react-tabs/style/react-tabs.css';

class LoginForm extends Component {
    render(){
       return(
        <div>
            <Tabs>
                <TabList>
                    <Tab>Log In</Tab>
                    <Tab>Sign Up</Tab>
                </TabList>
                <TabPanel>
                    <form className = {classes.root} noValidate autoComplete = "off">
                        <h2>Login</h2>
                        <TextField
                        id = "standard-basic"
                        label = "Email/Mobile No."
                        /><br />
                        <TextField
                        id = "standard-password-input"
                        label = "Password"
                        type = "password"
                        autoComplete = "current-password"
                        />
                        <br />
                        <Checkbox
                            defaultChecked
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                        /><spam>Keep me signed in</spam>
                        <br />
                        <Button
                        color = "primary"
                        variant = "contained"
                        >
                            Login
                        </Button>
                    </form>
                </TabPanel>
                <TabPanel>
                    <h2>Sign Up</h2>
                    <TextField
                        id = "standard-basic"
                        label = "First Name"
                    v/><br />
                    <TextField
                        id = "standard-basic"
                        label = "Last Name"
                    /><br />
                    <TextField
                        id = "standard-basic"
                        label = "Email/Mobile No."
                    /><br />
                    <TextField
                        id = "standard-password-input"
                        type = "password"
                        label = "Password"
                    /><br />
                    {/* <FormControl component = "fieldset">
                        <FormLabel component = "legend">
                            Gender
                        </FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                           
                        </RadioGroup>
                    </FormControl> */}

                    <Button
                    variant = "contained"
                    color = "primary"
                    >
                        Sign Up
                    </Button>
                </TabPanel>
            </Tabs>
        </div>
       ) 
}
}

export default LoginForm;