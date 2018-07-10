import React from 'react';
import { View } from 'react-native';

//doesn't need lifecycle events or data fetching
//no access to state
//we want to override the styles with what we passed into it as well
//if we pass in array of styles, any stype to the right will
//overwrite style to the left, fits our use case

const CardSection = (props) => {
    return (
        <View style={[styles.containerStyle, props.style]}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
    }
}

export { CardSection };
