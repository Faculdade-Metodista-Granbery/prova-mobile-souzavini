import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Card, Paragraph, Button } from "react-native-paper";

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f9e7e1",
    margin: 10,
    borderRadius: 20,
    flex: 1,
    width: "50vh",
    overflow: "hidden",
    borderBottomColor:'#f9e7e1',
    
  },
  content: {
    backgroundColor: "#FAE8E2",
  },
  cover: {
    height: 220,
  },
  action: {
    justifyContent: "center",
    borderBottomColor: '#d7abad',
    borderBottomWidth: 5,
    marginBottom: 30,
  },
  actionLoaded:{
    justifyContent: "center",
    borderBottomColor: '#9c2130',
    borderBottomWidth: 5,
    marginBottom: 30,
  },
  paragraph: {
    fontSize: 18,
    color: "#432f2a",
    fontWeight: 800,
  },loading:{
      
  }
});

const CardQuote = ({ task, background }) => {
  const [playButton, SetplayButton] = useState(false);

  function HandlePlayButton() {
    SetplayButton(true);
  }

  function HandlePauseButton(){
    SetplayButton(false);
  }

  return (
    <Card style={styles.card}>
      <Card.Cover
        style={styles.cover}
        resizeMode={`cover`}
        source={{ uri: background }}
      />
      <Card.Content style={styles.content}></Card.Content>
      {playButton ? (
        <Button
          icon="drag-vertical-variant"
          color="#4c1318"
          onPress={HandlePauseButton}
          labelStyle={{ fontSize: 80 }}
        />
      ) : (
        <Button
          icon="arrow-right-drop-circle-outline"
          onPress={HandlePlayButton}
          color="#4c1318"
          labelStyle={{ fontSize: 80 }}
        />
      )}
     { playButton ?  <Card.Actions style={styles.actionLoaded}>
        <Paragraph style={styles.paragraph}>{task}</Paragraph>
      </Card.Actions> : <Card.Actions style={styles.action}>
        <Paragraph style={styles.paragraph}>{task}</Paragraph>
      </Card.Actions>}
    </Card>
  );
};

export default CardQuote;
