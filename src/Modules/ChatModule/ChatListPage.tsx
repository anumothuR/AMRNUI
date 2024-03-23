// // ChatListPage.tsx

// import React from 'react';
// import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

// interface ChatItem {
//   id: string;
//   name: string;
//   lastMessage: string;
//   profilePic: string;
//   unreadCount: number;
// }

// interface Props {
//   navigation: any; // or use appropriate navigation type from React Navigation
// }

// const ChatListPage: React.FC<Props> = ({ navigation }) => {
//   // Dummy data for chat list
//   const chatListData: ChatItem[] = [
//     { id: '1', name: 'John Doe', lastMessage: 'Hello there!', profilePic: 'john.jpg', unreadCount: 2 },
//     { id: '2', name: 'Jane Smith', lastMessage: 'How are you?', profilePic: 'jane.jpg', unreadCount: 0 },
//     { id: '3', name: 'Alice', lastMessage: 'Good morning!', profilePic: 'alice.jpg', unreadCount: 5 },
//     // Add more chat items as needed
//   ];

//   const renderItem = ({ item }: { item: ChatItem }) => (
//     <TouchableOpacity
//       style={styles.chatItem}
//       onPress={() => navigation.navigate('ChatDetails', { chatId: item.id })}
//     >
//       <Image source={{ uri: item.profilePic }} style={styles.profilePic} />
//       <View style={styles.chatItemDetails}>
//         <Text style={styles.name}>{item.name}</Text>
//         <Text style={styles.lastMessage}>{item.lastMessage}</Text>
//       </View>
//       {item.unreadCount > 0 && (
//         <View style={styles.unreadCountContainer}>
//           <Text style={styles.unreadCount}>{item.unreadCount}</Text>
//         </View>
//       )}
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={chatListData}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 20,
//   },
//   chatItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   profilePic: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 10,
//     backgroundColor: "#52ff52",
//   },
//   chatItemDetails: {
//     flex: 1,
//   },
//   name: {
//     fontWeight: 'bold',
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   lastMessage: {
//     color: '#888',
//   },
//   unreadCountContainer: {
//     backgroundColor: 'red',
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: 20,
//     height: 20,
//   },
//   unreadCount: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });

// export default ChatListPage;
