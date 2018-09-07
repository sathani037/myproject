import React, { Component } from 'react';
import { Button, Grid, GridColumn, GridRow } from 'semantic-ui-react';
export default class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            FirstName: "",
            LastName: "",
            password: "",
            SignUp: false,
            isVisible:true
        }
    }
    add = () => {
        console.log("add function")
        this.setState({
            isSignUp: false,
            FirstName: 'abc'
        })
        this.sub()
    }
    sub = () => {
        console.log("add function")
        this.setState({
            isSingUp: false,
            Password: 123456
          
        })
    }
    Visible=()=>{
        this.setState({
            isVisible: !this.state.isVisible,
        })
    }
    
    render() {
        return (
            <Grid> 
            {this.state.isVisible &&<div>
                <GridRow columns={1}>
                    <GridColumn>
                        <label>First Name </label>
                        <input placeholder='First Name' onChange={this.Firstname} />
                    </GridColumn>
                </GridRow> {this.state.FirstName}
                <GridRow columns={1}>
                    <GridColumn>
                        <label>Last Name </label>
                        <input placeholder='Last Name' />
                    </GridColumn>
                </GridRow>
                <GridRow columns={1}>
                    <GridColumn>
                        <label> password </label>
                        <input placeholder='Password' onChange={this.Password} />
                    </GridColumn>
                </GridRow>{this.state.Password}
                
                <Button onClick={this.Visibles} > SignUp </Button>
              </div>}
            </Grid>
        )
    }
}