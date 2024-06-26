import React, { useState } from "react";
import Postcode from '@actbase/react-daum-postcode';
import { Dimensions, SafeAreaView } from "react-native";

const { width, height } = Dimensions.get('window');

const Post = ({navigation}) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Postcode
        style={{ width: width, height: height }}
        jsOptions={{ animation: true }}
        onSelected={data => {
          console.log('data ========> ', data.address);
          navigation.navigate('Main', {
            newLocation : data.address,
            showModal : true
          })
        }} 
      />
    </SafeAreaView>
  
  )
}

export default Post;