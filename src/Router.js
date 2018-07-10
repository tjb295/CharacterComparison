import React, { Component } from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';

import SearchDictionary from './components/SearchDictionary';
import LoginScreen from './components/LoginScreen';

const RouterComponent = () => {
    return (
        <Router
        style={{flex:1}}
        navigationBarStyle={styles.topBar}>
            <Scene key="root" hideNavBar>

                <Scene key="authScene">
                    <Scene key="login" title="Please Login" sceneStyle={{paddingTop: 64}} component={LoginScreen}/>
                </Scene>


                <Scene key="Services">
                    <Scene initial key="searchDictionary" component={SearchDictionary} />
                </Scene>

            </Scene>
        </Router>
    );
}

const styles = {
    topBar: {
        marginTop: 10,
        marginBottom: 10
    }
}
export default RouterComponent;


{/* <Scene key="TopMenu">
<Scene key="menu" />
</Scene>

<Scene key="Lessons">
<Scene key="lesson" />
</Scene> */}