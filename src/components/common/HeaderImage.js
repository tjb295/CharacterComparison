import React from 'react';
import { Image, View } from 'react-native';

const HeaderImage = ({imageUrl}) => {
    return(
        <View>
            <Image 
            style={styles.imageStyle}
            source={imageUrl} />
        </View>
    );
}

const styles = {
    imageStyle: {
        width: 100,
        height: 100,
        
    }
}

export {HeaderImage};