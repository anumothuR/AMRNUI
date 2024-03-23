// // ChatDetailsPage.tsx

// import React, { useState } from 'react';
// import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, Modal, Button } from 'react-native';
// import ImagePicker from 'react-native-image-picker';
// import { Ionicons } from '@expo/vector-icons';

// interface Props {
//   route: any; // or use appropriate route type from React Navigation
// }

// interface Message {
//   id: string;
//   sender: string;
//   text: string;
// }

// const ChatDetailsPage: React.FC<Props> = ({ route }) => {
//   const { chatId } = route.params;

//   const [chatMessages, setChatMessages] = useState<Message[]>([
//     { id: '1', sender: 'John', text: 'Hi there!' },
//     { id: '2', sender: 'Alice', text: 'Hey, how are you?' },
//     { id: '3', sender: 'John', text: 'I am doing good, thanks!' },
//     { id: '4', sender: 'Alice', text: 'That\'s great to hear!' },
//   ]);

//   const [messageInput, setMessageInput] = useState('');
//   const [modalVisible, setModalVisible] = useState(false);

//   const renderItem = ({ item }: { item: Message }) => (
//     <View style={item.sender === 'John' ? styles.messageSent : styles.messageReceived}>
//       <Text style={styles.messageText}>{item.text}</Text>
//     </View>
//   );

//   const sendMessage = () => {
//     if (messageInput.trim() !== '') {
//       setChatMessages([
//         ...chatMessages,
//         { id: String(chatMessages.length + 1), sender: 'John', text: messageInput },
//       ]);
//       setMessageInput('');
//     }
//   };

//   const openImagePicker = () => {
//     setModalVisible(true);
//     // Add code to open image picker modal here
//   };

//   const handleImageUpload = () => {
//     // Add code to handle image upload here
//     setModalVisible(false);
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={chatMessages}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         contentContainerStyle={{ flexGrow: 1 }}
//       />
//       <View style={styles.inputContainer}>
//         <TouchableOpacity onPress={openImagePicker} style={styles.attachmentButton}>
//           <Ionicons name="image-outline" size={24} color="black" />
//         </TouchableOpacity>
//         {/* Add icons for other options like uploading files, text, invoice, etc. */}
//         {/* Example: <TouchableOpacity onPress={openFilePicker}><Ionicons name="document-outline" size={24} color="black" /></TouchableOpacity> */}
//         <TextInput
//           style={styles.input}
//           value={messageInput}
//           onChangeText={setMessageInput}
//           placeholder="Type a message..."
//           multiline
//         />
//         <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
//           <Text style={styles.sendButtonText}>Send</Text>
//         </TouchableOpacity>
//       </View>
//       <Modal
//         visible={modalVisible}
//         transparent={true}
//         animationType="slide"
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <View style={styles.modalContainer}>
//           <TouchableOpacity style={styles.modalOption} onPress={handleImageUpload}>
//             <Ionicons name="image-outline" size={24} color="black" />
//             <Text style={styles.modalOptionText}>Upload Image</Text>
//           </TouchableOpacity>
//           {/* Add other options similarly */}
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 20,
//   },
//   messageSent: {
//     alignSelf: 'flex-end',
//     backgroundColor: '#DCF8C6',
//     borderRadius: 8,
//     padding: 10,
//     marginBottom: 10,
//   },
//   messageReceived: {
//     alignSelf: 'flex-start',
//     backgroundColor: '#E5E5EA',
//     borderRadius: 8,
//     padding: 10,
//     marginBottom: 10,
//   },
//   messageText: {
//     fontSize: 16,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderTopWidth: 1,
//     borderTopColor: '#ccc',
//     paddingVertical: 10,
//   },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     paddingVertical: 8,
//     marginRight: 10,
//   },
//   attachmentButton: {
//     paddingHorizontal: 10,
//   },
//   sendButton: {
//     backgroundColor: '#007AFF',
//     borderRadius: 8,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//   },
//   sendButtonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(255, 255, 255, 0.8)',
//   },
//   modalOption: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     paddingVertical: 20,
//     paddingHorizontal: 40,
//     borderRadius: 8,
//     marginBottom: 10,
//   },
//   modalOptionText: {
//     marginLeft: 10,
//   },
// });

// export default ChatDetailsPage;
