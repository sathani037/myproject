import React, { Component } from 'react';
import { Button, Grid, GridColumn, GridRow, } from 'semantic-ui-react';
export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            UserName: "",
            Password: "",
            isLogin: false,
            isPassword: false,
            isEmail: false,
            isvisible: true,
        }
    }
    div = () => {
        this.setState({
            isLogin: true
        })
    }
    UserName = (e) => {
        console.log(e.target.value)
        this.setState({
            UserName: e.target.value
        })
    }
    visible=()=>{
        this.setState({
            isvisible : !this.state.isvisible,
        })
    }
    render() {
        return (
            <Grid>
                <GridRow columns={3}>
                {this.state.isvisible && <div> 
                <GridColumn>
                        <label >UserName </label>
                        <input placeholder='UserName' onChange={this.UserName} />
                    </GridColumn>
                    <GridColumn>
                        {this.state.isLogin && this.state.UserName}
                        <label>Password </label>
                        <input placeholder='Password' onChange={this.Password} />
                    </GridColumn>
                </div>}
                   
                    <GridColumn>
                        <Button onClick={this.visible}>Login </Button>
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn><label> Name </label></GridColumn>
                    <GridColumn> <input placeholder='Name' /></GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn><label> Last Name </label></GridColumn>
                    <GridColumn> <input placeholder=' Last Name' /></GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn> <label> Email </label></GridColumn>
                    <GridColumn><input placeholder='Email' /> </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn> <label> Password </label> </GridColumn>
                    <GridColumn><input placeholder='Password' /></GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn><label> Retype Password </label></GridColumn>
                    <GridColumn><input placeholder='Password' /></GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn><label> contact </label></GridColumn>
                    <GridColumn><input placeholder='Number' /></GridColumn>
                </GridRow>
                <Button>Sign Up </Button>
            </Grid>
        )
    }

}