import React from "react"
import {TextInput, View, TouchableWithoutFeedback, Keyboard } from "react-native"
import Form from '../Form'

export default function Main() {
    const closeKeyboard = () => {
        Keyboard.dismiss();
    }
    return(
        <TouchableWithoutFeedback onPress={closeKeyboard}>
        <View>
            <Form/>
        </View>
        </TouchableWithoutFeedback>
    );
}