import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
    },
    formContext: {
        width:"85%",
        height:"auto",
        bottom:0,
        backgroundColor:"#e0e5e5",
        alignItems:"center",
        justifyContent:'center',
        borderRadius:30,
    },
    form:{
        alignItems:'center',
        width:"100%",
        height:"auto",
        marginTop:15,
        marginBottom:10,
    },
    formLabel:{
        marginRight:'86%',
        color:"#000000",
        fontSize:18,
        paddingLeft:20,
    },
    input:{
        width:"90%",
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        height:40,
        margin:10,
        paddingLeft:15,
    },
    ButtonCalcular:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#7A58F9",
        paddingTop:14,      
        paddingBottom:14,
        marginTop:15,
        marginBottom:10,
    },
    textButtonCalcular:{
        fontSize:20,
        color:"#FFF",
    }
});

export default styles