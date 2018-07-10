import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({toPress, children}) => {
	return (
		<TouchableOpacity 
			onPress={toPress}
			style={styles.buttonStyle}>
			<Text style={styles.textStyle}>{children}</Text>
		</TouchableOpacity>  
	);  
};

const styles = {

	textStyle: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '200',
		paddingTop: 10,
		paddingBottom: 10
	},

	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5,
	}
}

export { Button };