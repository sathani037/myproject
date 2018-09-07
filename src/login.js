import React, { Component } from 'react';
import { Button, Grid, GridColumn, GridRow } from 'semantic-ui-react';
export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            UserName: "",
            password: "",
            isLogin: false,
        }
    }
    add = () => {
        console.log("add fubction called")
        this.setState({
            isLogin: true
        })
        this.sub
    }
    //  sub=()=>{
    //  console.log("add function called")
    //   this.setState({})
    
    // UserName = (e) => {
    //     console.log(e.target.value)
    //     this.setState({
    //         UserName: e.target.value
    //     })
    // }
    render() {
        return (
            <Grid>
                <GridRow columns={1}>
                    <GridColumn>
                        <label>UserName </label>

                        <input placeholder='UserName' onChange={this.UserName} />
                    </GridColumn>
                </GridRow>
                {this.state.isLogin && this.state.UserName}

                <GridRow columns={1}>
                    <GridColumn>
                        <label> Password </label>
                        <input placeholder='Password' />
                    </GridColumn>
                </GridRow>
                <Button onClick={this.add} > Login </Button>
            </Grid>
    
        )
    }

     }