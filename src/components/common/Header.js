//import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

//make a component always name same as the file name
const Header = (props) => {

    const {textStyle, viewStyle} = styles;

    return(
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
}

//js objects that have certain property to set properties 
const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {width: 1, height: 2},
        shadowOpacity: 0.9,
        elevation: 3,
        position: 'relative',
    },
    textStyle: {
        fontSize: 20,
    }
}

//make the component available to other parts of the app
//want other files within this project make use of this
export { Header };