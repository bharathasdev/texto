import React from 'react'
import { FlatList, Text, ImageBackground} from 'react-native'
import { useRoute} from "@react-navigation/native"

import chatRoomData from "./../data/Chat"
import ChatMessage from "../components/chatMessage"


 const ChatRoomScreen = () => {
    const route = useRoute();

    console.log(route.params)
    return (
       
       <FlatList data={chatRoomData.messages} renderItem={({item })=> <ChatMessage message={item} />}
       inverted/>

      
    )
}

export default ChatRoomScreen;
