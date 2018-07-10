import React, { Component } from 'react';
import { Card, CardSection, HeaderImage, Header, Input, Button } from './common';

class LoginScreen extends Component {
    
    render(){
        return(
            <Card>
                
                <CardSection>
                    <Header headerText="Character Search and Lessons" />
                    <HeaderImage imageUrl='hey'/>
                </CardSection>

                <CardSection>
                    <Input 
                        label="Email"
                        placeholder="email"
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        secureTextEntry
                        label="password"
                        placeholder="password"
                        value={this.props.password}
                    />
                </CardSection>
                <CardSection>
                    <Button> Login </Button>
                </CardSection>
            </Card>
        );
    };
};

export default LoginScreen;