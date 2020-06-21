import * as React from 'react';
import { View } from "react-native";

class EditNote extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      notes: [],
      // May be useful to change this to index value to keep spacial consistency
      noteID: '',
    }
  }

  // TODO: Change textboxes to match the props from the NoteList
  static getDerivedStateFromProps(props, state){

  }

  // TODO: Write function to replace note object with the edited note
  replaceObj(){

  }

  render(){
    // TODO: Navigate back to NoteList with edited notes list or just cancel action
    return(
      <View>

      </View>
    )
  }
}

export default EditNote