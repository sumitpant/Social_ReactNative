import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
const CreatePost = () => {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>Create Post</Text>
            <TextInput placeholder='Write Your Story...'
            multiline
            numberOfLines={5}
            style={styles.input}
            />
            <Button
            title="Post"
            />

            
        </View>
    )
}

export default CreatePost

const styles = StyleSheet.create({
    input:{
        height:'50%',
        borderWidth:1,
        borderColor:'lightgray'
    },
    main:{
        margin:10
    },
    text:{
        fontWeight:'200',
        fontSize:20
    }
})
