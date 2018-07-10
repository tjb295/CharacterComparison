import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import { axios } from  'axios';

class SearchDictionary extends Component {
    state = {
        dictionaryResult : [],
        noteText: "",
    };

    renderResults(){
        return this.state.dictionaryResult.map(result => 
            <Text key={result}> {result.japanese.word} </Text>
        )
    }

    render(){
        return(
            <View>
                <Text>
                    Please Search a Term to yield a Kanji for it!
                </Text>
                <TextInput placeholder="Enter a word"
                OnChangeText={(noteText) => this.setState({noteText})}
                onSubmitEditing={this.searchTerm.bind(this)}>

                </TextInput>
                <View>

                </View>
            </View>
        );
    
    }

    searchTerm(){
        axios.get("https://jisho.org/api/v1/search/words?keyword=" + this.state.noteText)
        .then(response => this.setState({dictionaryResult: response.data}));
    }
}


export default SearchDictionary;

const styles = {

};