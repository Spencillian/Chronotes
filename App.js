/**
 * @author Spencillian
 * @summary Good ideas are worth taking note of. Great ideas are a mix of your good idea.
 * @format
 * @flow
 */
import 'react-native-gesture-handler';

import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PropTypes from "prop-types";

import NoteList from './components/Views/NoteList'
import InsertNote from "./components/Views/InsertNote";
import EditNote from "./components/Views/EditNote";

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

function EditNoteView({ route, navigation }){
  return(
    <EditNote nav={navigation} route={route}/>
  )
}

NoteListView.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object
}

InsertNoteView.propTypes = {
  navigation: PropTypes.object.isRequired
}

EditNoteView.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired
}

const Stack = createStackNavigator()

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
        <Stack.Screen
          name='EditNoteView'
          component={EditNoteView}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App 
