import * as React from "react";
import { View, Text, TextInput, StyleSheet, Dimensions, TouchableHighlight } from "react-native";

import PropTypes from "prop-types";

class InsertNote extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: '',
      text: '',
    }
  }

  render(){
    return(
      <View style={s.container}>
        <View style={s.titleContainer}>
          <Text style={s.titleText}>Add a Note</Text>
          <View style={{flex: 1}}/>
        </View>
        <View style={s.inputContainer}>
          <TextInput
            style={{...s.input, ...s.titleInput}}
            autoCapitalize='words'
            keyboardAppearance='dark'
            placeholder="What's your idea?"
            placeholderTextColor='#DDD'
            onChangeText={text => this.setState({ title: text })}
            defaultValue={this.state.title}
          />
          <TextInput
            style={{...s.input, ...s.textInput}}
            autoCapitalize='sentences'
            keyboardAppearance='dark'
            placeholderTextColor='#DDD'
            multiline
            placeholder='More details...'
            onChangeText={text => this.setState({ text: text })}
            defaultValue={this.state.text}
          />
        </View>
        
        <View style={s.buttonContainer}>
          <TouchableHighlight
            style={s.backButton}
            onPress={() => this.props.nav.navigate('NoteListView')}
            underlayColor='#300030'
          >
            <Text style={s.buttonText}>Cancel</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={s.addButton}
            onPress={() => {
              this.props.nav.navigate('NoteListView', {note: {title: this.state.title, text: this.state.text}, mode: 'insert'})
            }}
            underlayColor='#300030'
          >
            <Text style={s.buttonText}>Add</Text>
          </TouchableHighlight>
        </View>

      </View>
    )
  }
}

InsertNote.propTypes = {
  nav: PropTypes.object
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  titleContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(20, 20, 20, 1)',
  },
  titleText: {
    flex: 1.25,
    fontSize: Dimensions.get("window").width * .09,
    color: '#FFF',
    textAlign: 'center',
    paddingVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  backButton: {
    flex: 1,
    backgroundColor: '#480048',
    borderRadius: 10,
    marginHorizontal: 25
  },
  addButton: {
    flex: 1,
    backgroundColor: '#750075',
    borderRadius: 10,
    marginHorizontal: 25
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    paddingVertical: 15,
    fontSize: Dimensions.get("window").width * .05,
  },
  inputContainer: {
    marginVertical: 15
  },
  input: {
    color: '#FFF',
    backgroundColor: '#111',
    borderWidth: 4,
    borderRadius: 10,
    borderColor: '#590059',
    paddingHorizontal: 15
  },
  titleInput: {
    marginBottom: 5,
    fontSize: Dimensions.get("window").width * .06
  },
  textInput: {
    fontSize: Dimensions.get("window").width * .045
  }
})

export default InsertNote