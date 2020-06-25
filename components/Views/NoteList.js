import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, YellowBox, TouchableOpacity } from "react-native";
import { SwipeListView } from 'react-native-swipe-list-view';

import ActionButton from "react-native-action-button";
import PropTypes from "prop-types";

import Note from '../Note/Note';

YellowBox.ignoreWarnings(['Warning: componentWillReceiveProps has been renamed, and is not recommended for use.'])

class NoteList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      notes: [],
      count: 0,
    }
  }

  static getDerivedStateFromProps(props, state){
    if(props.route.params && props.route.params.mode === 'insert'){
      console.log("Adding Note")
      console.log(props.route.params.note)
      return({
        notes: [...state.notes, {...props.route.params.note, ...{id: state.count}}],
        count: state.count + 1
      })
    }else if(props.route.params && props.route.params.mode === 'edit'){
      const newData = state.notes.map(item => props.route.params.note.id === item.id ? props.route.params.note : item)
      console.log(newData)
      return { notes: newData }
    }
    return null
  }

  deleteItem(rowMap, rowKey){
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
    const newData = this.state.notes.filter(item => item.id !== rowKey)
    // TODO: Check the possibilities of animating this
    this.setState({ notes: newData })
  }

  render() {
    this.props.route.params = undefined
    return(
      <View style={s.containerView}>
        <View style={s.titleContainer}>
          <Text style={s.titleText}>Notes</Text>
          <View style={{flex: 1}}/>
        </View>
        <SwipeListView
          data={this.state.notes}
          renderItem={({ item }) => (
            <Note title={item.title} text={item.text}/>
          )}
          renderHiddenItem={(data, rowMap) => (
            <View style={s.listItemContainer}>
              <TouchableOpacity 
                style={s.listItemEditButton}
                onPress={() => this.props.nav.navigate('EditNoteView', {...data.item})}>
                <Text style={s.listItemEditButtonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={s.listItemDeleteButton}
                onPress={() => this.deleteItem(rowMap, data.item.id)}>
                <Text style={s.listItemDeleteButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => `${item.title}${item.text}${item.id}`}
          rightOpenValue={-75}
          leftOpenValue={75}
          previewRowKey={'0'}
          previewOpenValue={-40}
          previewOpenDelay={3000}
        />
        <ActionButton buttonColor='#590059' onPress={() => this.props.nav.navigate('InsertNoteView')}/>
      </View>
    )
  }
}

NoteList.propTypes = {
  nav: PropTypes.object,
  route: PropTypes.object
}

const s = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: '#000',
  },
  titleContainer:{
    flexDirection: 'row',
    backgroundColor: 'rgba(20, 20, 20, 1)',
    borderBottomWidth: 4,
    borderBottomColor: '#590059',
  },
  titleText: {
    flex: .55,
    fontSize: Dimensions.get("window").width * .09,
    color: '#FFF',
    textAlign: 'center',
    paddingVertical: 10,
  },
  listItemContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  listItemDeleteButton: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: 75,
    flex: 1,
    backgroundColor: '#690069',
    right: 0,
    top: 15,
    bottom: 15,
    borderRadius: 12,
  },
  listItemDeleteButtonText: {
    color: '#FFF',
    fontSize: Dimensions.get("window").width * .04,
  },
  listItemEditButton: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: 75,
    flex: 1,
    backgroundColor: '#990099',
    left: 0,
    top: 15,
    bottom: 15,
    borderRadius: 12,
  },
  listItemEditButtonText: {
    color: '#FFF',
    fontSize: Dimensions.get("window").width * .04,
  }
})

export default NoteList