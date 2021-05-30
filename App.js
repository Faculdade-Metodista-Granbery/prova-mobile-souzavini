import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  StatusBar,
} from "react-native";
import CardQuote from "./components/card/card.component";
import { Button } from "react-native-paper";

const notList = [
  {
    id: 1,
    task: "Suco de gratidão + clorofila",
    background:
      "https://image.freepik.com/free-vector/flat-night-sky-background_23-2148032671.jpg",
  },
  {
    id: 2,
    task: "Aplaudir o por do sol",
    background:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTevLH9vqcGBf4kYYXN1sEafET9xBaEjxUOMg&usqp=CAU",
  },
  {
    id: 3,
    task: "5 séries de namastê",
    background:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa6OUSY2144YwI6mFLlxCKdyvkmKn6yLEoLA&usqp=CAU",
  },
];

export default function App() {
  const [blackMode, SetBlackMode] = useState(true);

  function HandleBlackMode() {
    SetBlackMode(false);
    console.log("apertei blackMode");
  }
  function HandleBlackModeBack() {
    SetBlackMode(true);
    console.log("apertei blackModeRetorno");
  }

  return (
    <SafeAreaView>
      {blackMode ? (
        <View>
          <p>Clique para Black Mode</p>
          <Button
            icon="circle-outline"
            color="black"
            onPress={HandleBlackMode}
            labelStyle={{ fontSize: 80 }}
          />
          <SafeAreaView style={styles.container}>
            <StatusBar animated={true} backgroundColor="#c64242" />
            {notList.map((item) => (
              <CardQuote
                task={item.task}
                background={item.background}
                key={item.id}
              />
            ))}
          </SafeAreaView>
        </View>
      ) :<View>
        <p>Clique para voltar para Light Mode</p>
        <Button
          icon="circle-slice-8"
          color="white"
          style={styles.buttonBlackMode}
          onPress={HandleBlackModeBack}
          labelStyle={{ fontSize: 80 }}
        />  <SafeAreaView style={styles.containerBlack}>
        <StatusBar animated={true} backgroundColor="#c64242" />
        {notList.map((item) => (
          <CardQuote
            task={item.task}
            background={item.background}
            key={item.id}
          />
        ))}
      </SafeAreaView></View>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBF5F7",
    alignItems: "center",
    justifyContent: "center",
  },
  containerBlack: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonBlackMode:{
    backgroundColor: "black",
  },
  paragraph:{
    justifyContent: "center",
  }
});
