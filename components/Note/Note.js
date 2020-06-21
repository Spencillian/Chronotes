import * as React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import PropTypes from "prop-types";

class Note extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: props.title,
      text: props.text,
    }
  }

  render(){
    return(
      <View style={s.noteContainer}>
        <Text style={s.noteTitle}>{this.state.title}</Text>
        <Text style={s.noteText}>{this.state.text}</Text>
      </View>
    )
  }
}

Note.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

const s = StyleSheet.create({
  noteContainer: {
    borderColor: '#590059',
    borderRadius: 10,
    borderWidth: 4,
    marginVertical: 10,
  },
  noteTitle: {
    fontSize: Dimensions.get("window").width * .07,
    borderBottomWidth: 1,
    borderBottomColor: '#590059',
    paddingBottom: 15,
    paddingTop: 10,
    color: '#EEE',
    backgroundColor: 'rgba(10, 10, 10, 1)',
    paddingHorizontal: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  noteText: {
    fontSize: Dimensions.get("window").width * .05,
    color: '#EEE',
    backgroundColor: 'rgba(1, 1, 1, 1)',
    paddingBottom: 15,
    paddingTop: 10,
    paddingHorizontal: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  }
})

export default Note