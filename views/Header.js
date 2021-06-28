import React from 'react'
import { StyleSheet, Text, View ,Alert} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserCircle,faSearch ,faCommentDots} from '@fortawesome/free-solid-svg-icons'
import { TextInput } from 'react-native-gesture-handler'



const Header = ({nav}) => {
   
    return (
        <View style={styles.header}>
            <View>
              
                <FontAwesomeIcon
                    icon={faUserCircle}
                    size={32}
                    color={"#bfbfbf"}
                    style={styles.icons}
                    // onPress={()=>{
                    //     nav.replace('Details');
                    // }}
                   
                />
               

            </View>
            <View style={styles.search}>
                <FontAwesomeIcon
                icon={faSearch}
                />
                <TextInput  style={styles.textbox} placeholder="Search"/>
            </View>
            <View>
                <FontAwesomeIcon
                icon={faCommentDots}
                color={"#a6a6a6"}
                style={styles.icons}
                size={25}
                 />
            </View>


        </View>
    )
}

export default  Header

const styles = StyleSheet.create({
    header: {
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      margin:10,
      backgroundColor:"white",
      padding:5
    },
    search: {
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"#f9fbfd",
        padding:3,
        height:45,
        borderRadius:5
    },
    textbox:{
        width:"65%",
        
    }
    ,
    icons:{
        margin:10
    }
})
