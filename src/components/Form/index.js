import React, {useState} from "react"
import { View, TextInput, Text, TouchableOpacity } from "react-native"
import ResultIMC from "../ResultIMC";
import styles from "./style";

export default function Form() {

const [height, setHeight]= useState(null)
const [weight, setWeight]= useState(null)
const [messageIMC, setMessageIMC]= useState("Preencha o peso e altura")
const [imc, setImc]= useState(null)
const [textButton, setTextButton]= useState("Calcular")
const [infoIMC, setInfoIMC] = useState(null)



function validationImc(){
    if(weight != null && height != null){
        const IMCValue = ((weight/(height*height)).toFixed(2))
        setImc(IMCValue)

        if (IMCValue < 18.5) {
            setInfoIMC("Abaixo do peso");
        
         } else if (IMCValue >= 18.50 && IMCValue < 24.90) {
             setInfoIMC("Peso normal");
         } else if (IMCValue >= 25 && IMCValue < 29.9) {
             setInfoIMC("Sobrepeso");
         } else if (IMCValue >= 30 && IMCValue < 34.9) {
             setInfoIMC("Obesidade Grau 1");
         } else if (IMCValue >= 35 && IMCValue < 39.9) {
             setInfoIMC("Obesidade Grau 2");
          } else {
                setInfoIMC("Obesidade Grau 3");
            }

        setHeight(null)
        setWeight(null)
        
        setMessageIMC("Seu IMC é igual: ")
        setTextButton("Calcular Novamente")
        return
    }
    setInfoIMC(null)
    setImc(null)
    setTextButton("Calcular")
    setMessageIMC("Preencha peso e altura")
}

    return(
        <View style={styles.formContext}>
        <View style={styles.form}>
            <Text style={styles.formLabel}>Altura</Text>
            <TextInput style={styles.input} onChangeText={setHeight} value={height} placeholder="Ex. 1.75 m" keyboardType="numeric"/>
            <Text style={styles.formLabel}>Peso</Text>
            <TextInput style={styles.input} onChangeText={setWeight} value={weight} placeholder="Ex. 67.23 kg" keyboardType="numeric"/>
            <TouchableOpacity
            style={styles.ButtonCalcular}
                onPress={() => {
                validationImc()
                }}>
                <Text style={styles.textButtonCalcular}>{textButton}</Text>
            </TouchableOpacity>
        </View>

        <View>
            <ResultIMC messageResultIMC={messageIMC} ResultIMC={imc} informationIMC={infoIMC} />
        </View>

        <View></View>
        </View>
    );
}