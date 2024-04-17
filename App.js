// import React from "react";
// import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
// import { GiftedChat } from "react-native-gifted-chat";
// import { queryAI } from "./utils/api";

// export default class App extends React.Component {
//   state = {
//     messages: [
//       {
//         _id: 1,
//         text: "Hello developer",
//         createdAt: new Date(),
//         user: {
//           _id: 1,
//           name: "AI"
//         }
//       }
//     ],
//     loading: true,
//     superfood: ""
//   };

//   async componentDidMount() {
//     await this.querySuperfood();
//   }

//   querySuperfood = async () => {
//     try {
//       const response = await queryAI("Give me a random superfood but not an orange");
//       this.setState({ superfood: response });
//       const newMessage = {
//         _id: 2,
//         text: response,
//         createdAt: new Date(),
//         user: {
//           _id: 1,
//           name: "AI"
//         }
//       };
//       this.setState(prevState => ({
//         loading: false,
//         messages: [newMessage, ...prevState.messages]
//       }));
//     } catch (error) {
//       console.error("Error fetching AI response:", error);
//       this.setState({ loading: false });
//     }
//   };

//   handleNewSuperfood = async () => {
//     this.setState({ messages: [] });
//     await this.querySuperfood();
//   };

//   onSend = async messages => {
//     const { superfood } = this.state;
//     const query = `${superfood}: ${messages[0].text}`;
//     const newMessage = {
//       _id: Math.random(),
//       text: messages[0].text,
//       createdAt: new Date(),
//       user: {
//         _id: 1,
//         name: "User"
//       }
//     };
//     this.setState(prevState => ({
//       messages: [newMessage, ...prevState.messages]
//     }));
//     try {
//       const response = await queryAI(query);
//       const aiMessage = {
//         _id: Math.random(),
//         text: response,
//         createdAt: new Date(),
//         user: {
//           _id: 1,
//           name: "AI"
//         }
//       };
//       this.setState(prevState => ({
//         messages: [aiMessage, ...prevState.messages]
//       }));
//     } catch (error) {
//       console.error("Error fetching AI response:", error);
//     }
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         {/* <TouchableOpacity style={styles.button} onPress={this.handleNewSuperfood}>
//           <Text style={styles.buttonText}>New Superfood</Text>
//         </TouchableOpacity> */}
//         <View style={styles.chatContainer}>
//           <GiftedChat
//             messages={this.state.messages}
//             isLoadingEarlier={this.state.loading}
//             onSend={messages => this.onSend(messages)}
//             user={{ _id: 1 }}
//             bottomOffset={70} // Adjust the space between chat and bottom
//           />
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "flex-end", // Align button to the bottom
//     paddingBottom: 10, // Add some padding to the bottom of the container
//   },
//   button: {
//     backgroundColor: "#007bff",
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 20,
//     alignSelf: "center",
//     marginBottom: 10,
//     marginTop: 50,
//   },
//   buttonText: {
//     color: "white",
//     fontWeight: "bold",
//     fontSize: 16
//   },
//   chatContainer: {
//     flex: 1,
//     marginVertical: 10,
//   }
// });


import React from "react";
import { StyleSheet, View } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { queryAI } from "./utils/api";
import Constants from 'expo-constants';

export default class App extends React.Component {
  state = {
    messages: [
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "AI"
        }
      }
    ],
    loading: true,
    superfood: "" // New state to store the superfood
  };

  async componentDidMount() {
    try {
      // Retrieving the GEMINI_KEY from Constants
     
  
      // Querying the AI service for a random superfood
      const superfoodResponse = await queryAI("Give me a random superfood");
  
      // Log the response from the AI service
      console.log("Superfood Response:", superfoodResponse);
  
      // Updating state with the received superfood response
      const newMessage = {
        _id: 2,
        text: superfoodResponse,
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "AI"
        }
      };
      this.setState({
        loading: false,
        superfood: superfoodResponse,
        messages: [newMessage, ...this.state.messages]
      });
    } catch (error) {
      // Log any errors that occur during the query
      console.error("Error querying AI:", error);
      this.setState({ loading: false });
    }
  }
  
  onSend = async (messages = []) => {
    try {
      if (!Constants.expoConfig) {
        console.error("expoConfig is null or undefined");
        return;
      }
  
      const geminiKey = Constants?.expoConfig?.extra?.GEMINI_KEY; // Retrieve the gemini key from Expo Constants
      console.log("GEMINI_KEY:", geminiKey); // Log the retrieved GEMINI_KEY
  
      // Remaining code...
    } catch (error) {
      console.error("Error fetching AI response:", error);
    }
  };
  

  // async componentDidMount() {
  //   // try {
  //   //   console.log("Constants:", Constants); // Log Constants object
  //   //   console.log("expoConfig:", Constants.expoConfig); // Log expoConfig from Constants
  //   //   console.log("extra:", Constants.expoConfig.extra); // Log extra field from expoConfig

  //   //   const geminiKey = Constants?.expoConfig?.extra?.GEMINI_KEY; // Retrieve the gemini key from Expo Constants
  //   //   console.log("GEMINI_KEY:", geminiKey); // Log the retrieved GEMINI_KEY
  //   //   const superfoodResponse = await queryAI("Give me a random superfood");
  //   //   const newMessage = {
  //   //     _id: 2,
  //   //     text: superfoodResponse,
  //   //     createdAt: new Date(),
  //   //     user: {
  //   //       _id: 1,
  //   //       name: "AI"
  //   //     }
  //   //   };
  //   //   this.setState({
  //   //     loading: false,
  //   //     superfood: superfoodResponse, // Save the superfood response in state
  //   //     messages: [newMessage, ...this.state.messages]
  //   //   });
  //   // } catch (error) {
  //   //   console.error("Error fetching AI response:", error);
  //   //   this.setState({ loading: false });
  //   // }
  // }

  // onSend = async (messages = []) => {
  //   const { superfood } = this.state;
  //   const queryText = `In the context of ${superfood}: ${messages[0].text}`; // Append superfood to the message text
  //   try {
  //     const geminiKey = Constants?.expoConfig?.extra?.GEMINI_KEY; // Retrieve the gemini key from Expo Constants
  //     const aiResponse = await queryAI(queryText);
  //     const newMessage = {
  //       _id: Math.round(Math.random() * 1000000),
  //       text: aiResponse,
  //       createdAt: new Date(),
  //       user: {
  //         _id: 1,
  //         name: "AI"
  //       }
  //     };
  //     this.setState(previousState => ({
  //       messages: GiftedChat.append(previousState.messages, newMessage)
  //     }));
  //   } catch (error) {
  //     console.error("Error fetching AI response:", error);
  //   }
  // };

  render() {
    return (
      <View style={styles.container}>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 2,
            name: "User"
          }}
          isLoadingEarlier={this.state.loading}
          placeholder="Type a message..."
          alwaysShowSend
          scrollToBottom
          showUserAvatar
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
