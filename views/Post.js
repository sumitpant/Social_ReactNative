import React from 'react'
import { StyleSheet, Text, View ,Image} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const Post = ({ name, moreinfo, text, img }) => {
    let image={uri:img}

    return (
        <View style={styles.post}>
            <View style={styles.logo}>
                <FontAwesomeIcon
                    icon={faUserCircle}
                    size={32}
                    color={"#bfbfbf"}
                    style={styles.icons}
                />
                <View>
                    <Text style={styles.name}>{name} </Text>
                    <Text style={styles.more}> {moreinfo}  </Text>
                </View>
            </View>    
                <View>
                    <Text>{text}</Text>
                </View>
                <View style={styles.img}>
                    <Image
                        // style={styles.tinyLogo}
                        source={image}
                        style = {{height: 200, resizeMode : 'cover', margin: 5 }}
                    />
                </View>
                <View style={styles.likes}>
                    <Text style={styles.reaction}>Like</Text>
                    <Text style={styles.reaction}>Comment</Text>
                    <Text style={styles.reaction}>Share</Text>

                </View>
           
        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    logo:{
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center',
       borderBottomWidth:1,
       borderBottomColor:'#a6a6a6',
       margin:5
    },
    post:{
        margin:10,
        backgroundColor:'#ffffff',
        padding:10
    },
    likes:{
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:10,
        borderTopWidth:1,
        borderTopColor:'#a6a6a6'
        

    },
    reaction:{
        color:'#a6a6a6',
        fontWeight:'bold',
        margin:10
    },
    more:{
        color:'#a6a6a6',
        marginBottom:5,
        marginLeft:1

    },
    name:{
        marginLeft:5
    }
})
