import React from 'react';
import {Text,View,Image,StyleSheet,Linking} from 'react-native';
 
import Card from './Card';
import Cardsection from './CardSection';
import Button from './Button'

const AlbumDetail= (props) => {
    return(
   <Card> 
       <Cardsection>
       <View style={styles.thumbnailContainerStyle}>
           <Image 
           style={styles.thumbnailStyle}
           source = {{uri:props.album.thumbnail_image}}/>
       </View>
       <View style={styles.headerContentStyle}>
       <Text style={styles.headerTextStyle}>   
          {props.album.title}</Text>
         <Text> {props.album.artist}</Text>
       </View>
       </Cardsection>
       <Cardsection>
           <Image
               source={{uri:props.album.image}}
               style={styles.imageStyle}
           />
       </Cardsection>
       <Cardsection>
           <Button onPress={()=>Linking.openURL(props.album.url)}/>
       </Cardsection>
   </Card>
    )};
    const styles = StyleSheet.create({
        headerContentStyle: {
             flexDirection: 'column',
             justifyContent:'space-around'
        },
        headerTextStyle:{
            fontSize: 18,
        },
        thumbnailStyle:{
            height:50,
            width:50
        },
        thumbnailContainerStyle:{
          
            marginRight: 10,
            marginLeft: 10,
        },
        imageStyle:{
            height:300,
            flex:1,
            width:null,
        }
    });
export default AlbumDetail;