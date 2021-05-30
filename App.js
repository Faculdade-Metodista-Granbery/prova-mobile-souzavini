import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  StatusBar,
} from "react-native";
import databaseFactory from "./Factories/databaseFactory";
import { useList } from "react-firebase-hooks/database";
import CardQuote from "./components/card/card.component";
import { Button } from "react-native-paper";

export default function App() {
  const [blackMode, SetBlackMode] = useState(true);
  const [cards, loading, erro] = useList(
    databaseFactory.createDatabaseService("firebase")
  );

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
            {cards.map((item) => (
              <CardQuote
                task={item.val().task}
                background={item.val().profile}
                key={item.val().id}
              />
            ))}
          </SafeAreaView>
        </View>
      ) : (
        <View>
          <p>Clique para voltar para Light Mode</p>
          <Button
            icon="circle-slice-8"
            color="white"
            style={styles.buttonBlackMode}
            onPress={HandleBlackModeBack}
            labelStyle={{ fontSize: 80 }}
          />{" "}
          <SafeAreaView style={styles.containerBlack}>
            <StatusBar animated={true} backgroundColor="#c64242" />
            {cards.map((item) => (
              <CardQuote
                task={item.val().task}
                background={item.val().profile}
                key={item.val().id}
              />
            ))}
          </SafeAreaView>
        </View>
      )}
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
  buttonBlackMode: {
    backgroundColor: "black",
  },
  paragraph: {
    justifyContent: "center",
  },
});
