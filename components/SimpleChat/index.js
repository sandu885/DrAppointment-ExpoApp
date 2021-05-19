import * as React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Image, View, TextInput, Text, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SimpleChat(params) {
  const {messages} = params;
  const [scrollViewRef, setScrollViewRef] = React.useState(null);
  const [messageArr, setMessageArr] = React.useState([]);
  const [newMessage, setNewMessage] = React.useState('');
  
  React.useEffect(() => {
    setMessageArr(messages);
    //
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => {
    if(scrollViewRef != null) {
      scrollViewRef.scrollToEnd({animated: true});
    }
  }
  const _keyboardDidHide = () => {
    if(scrollViewRef != null) {
      scrollViewRef.scrollToEnd({animated: true});
    }
  }

  const MessageItem = ({item}) => (
    item.userId == 1 
    ? <View style={styles.outMessage}>
        <Text style={styles.outMessageText}>{item.message}</Text>
      </View>
    : <View style={styles.inMessage}>
        <Image
          style={styles.profileImage}
          source={item.img}
        />
        <Text style={styles.inMessageText}>{item.message}</Text>
      </View>
  );

  const onSend = () => {
    if (!newMessage) {
      return;
    }
    console.log('> on send >', newMessage);
    let _msgs = messageArr;
    let _msgObj = {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      userId: 1,
      name: 'Jean Louis',
      summary: 'Dental Doctor',
      img: '',
      message: newMessage,
    };
    console.log('>>>>', _msgObj);
    setMessageArr([..._msgs, _msgObj]);
    setNewMessage('');
  }

  return(
    <View style={styles.container}>
      <ScrollView style={styles.messageBox}
        ref={ref => setScrollViewRef(ref)}
        onContentSizeChange={() => scrollViewRef.scrollToEnd({animated: true})}
      >
        {messageArr.map((item, index) => <MessageItem key={index} keyExtractor={index} item={item} />)}
      </ScrollView>
      <View style={[styles.inputBox, styles.shadow]}>
        <TextInput style={styles.input} 
          onChangeText={setNewMessage}
          value={newMessage}
        />
        <TouchableOpacity style={styles.sendButton}
          onPress={() => onSend()}
        >
          <Ionicons name="paper-plane" style={styles.buttonIcon} size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  messageBox: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inMessage: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 10,
  },
  inMessageText: {
    backgroundColor: '#c3c3c3',
    padding: 10,
    borderRadius: 5,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 5,
    borderWidth: 1,
    borderColor: '#3698d5',
  },
  outMessage: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 10,
  },
  outMessageText: {
    backgroundColor: '#3698d5',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  inputBox: {
    height: 60,
    backgroundColor: '#3698d5',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderTopColor: '#c3c3c3',
    borderTopWidth: 1,
  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    borderColor: '#c3c3c3',
    borderWidth: 1,
    marginLeft: 20,
    paddingHorizontal: 15,
  },
  sendButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  buttonIcon: {
    transform: [{rotateZ: '45deg'}]
  },
});
