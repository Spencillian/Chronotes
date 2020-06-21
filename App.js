/**
 * @author Spencillian
 * @author Good ideas are worth taking note of. Great ideas are a mix of your good idea.
 * 
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';

import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PropTypes from "prop-types";

import NoteList from './components/Views/NoteList'
import InsertNote from "./components/Views/InsertNote";

// TODO: Add view for EditNote.js

function NoteListView({ route, navigation }){
  return(
    <NoteList nav={navigation} route={route}/>
  )
}

function InsertNoteView({ navigation }){
  return(
    <InsertNote nav={navigation}/>
  ) 
}

// TODO: Add param checker for EditNoteView

NoteListView.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object
}

InsertNoteView.propTypes = {
  navigation: PropTypes.object.isRequired
}

const Stack = createStackNavigator()

// TODO: Add EditNoteView to Stack Navigator
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='NoteListView' 
          component={NoteListView}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='InsertNoteView'
          component={InsertNoteView}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App 
