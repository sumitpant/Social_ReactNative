import React,{useState} from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import {useDispatch,useSelector} from 'react-redux';
import {post} from '../redux/actions'
const CreatePost = ({navigation}) => {
    const dispatch=useDispatch();
    const [postCreate, setPost] = useState('');
    const [image,setImage]=useState('');
    const state = useSelector(state => state.reduce.post);
   
    const caputreText=(data)=>{
        setPost(data);
        
    }
    const captureImage=(data)=>{
        setImage(data);
    }
    const  create=()=>{
       
        const payload={postCreate,image}
        dispatch(post(1,payload))
        console.log(state);
        navigation.navigate('Home')

    }
    return (
        <View style={styles.main}>
            <Text style={styles.text}>Create Post</Text>
            <TextInput placeholder='Write Your Story...'
            multiline
            numberOfLines={5}
            style={styles.input}
            onChangeText={(data)=>{caputreText(data)}}
            />

            <View style={styles.imageblock}>
            <TextInput
            placeholder='Enter image Url'
            onChangeText={(data)=>{captureImage(data)}}

            />

            </View>
           

          
            <Button
            title="Post" onPress={()=>create()}
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
    },
    imageblock:{
        borderWidth:1,
        borderColor:'lightgray',
        marginTop:10,
        marginBottom:10
    }
})
