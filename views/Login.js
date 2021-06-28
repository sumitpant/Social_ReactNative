import React,{useState} from 'react'
import { StyleSheet, Text, View ,Alert,TouchableOpacity,} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import {connect} from 'react-redux'
import {userName} from '../redux/actions'


const Login = ({navigation,username}) => {
    const [email, setUsername] = useState();
const [password, setPassword] = useState();

    const click= async()=>{
     
        try{
            console.log("email",email);
            username(email);
            navigation.replace('Home')
        }
        catch(e){
            console.log(e.message);
        }   

    }
    const setValuesEmail=(e)=>{
        
         setUsername(e)
        

    }
    const setValuesPassword=(e)=>{
        setPassword(e);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login Page</Text>
            <View style={styles.form}>
                <TextInput
                 style={styles.input}
                 placeholder="Username..."
                 name="email"
                 onChangeText={(event)=>setValuesEmail(event)}
                />
                <TextInput
                 style={styles.input}
                 placeholder="Password..."
                 name="password"
                 onChangeText={(e)=>setValuesPassword(e)}
                />
                
            </View>
            <TouchableOpacity style={styles.btn} 
             onPress={()=>click()}

            >

                <Text style={styles.login}>Login</Text></TouchableOpacity>
                <Text> Forgot password ? </Text>
            
        </View>
    )
}

const mapStateToProps=(state)=>{
    console.log("state",state)
    return {
        username: state.reduce.username
    }

}
const mapDispatchToProps=(dispatch)=>{
 
    return {
        
        username:(name)=>dispatch(userName(name))
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(Login)

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#4267b2',
        width:'100%',
        height:'100%',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    text:{
        color:'#ffffff',
        fontSize:20,
        fontFamily:'Helvetica,Aerial'
    },
    input: {
        height: 50,
        margin: 12,
        borderRadius:20,
        backgroundColor:'#ffffff',
        padding:15
      },
      form:{
          width:'70%',
          
      },
      btn:{
         width:'25%',
         fontSize:25,
         borderRadius:10,
         backgroundColor:"#ffffff",
         padding:10,
         height:40,
         elevation:20,
         backgroundColor:'#ff9900'
         

      },login:{
          textAlign:'center',
          color:'#ffffff',

      }
})
