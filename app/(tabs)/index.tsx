import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

const fortunes = [
  "A felicidade está dentro de você.",
  "Boas notícias estão por vir.",
  "Seu sorriso ilumina o dia de alguém.",
  "Hoje é um dia perfeito para começar algo novo.",
  "Tira-ra 10 na nota",
  "O professor é o cara",
  "A sorte está do seu lado",
];

const App = () => {
  const [isCookieOpened, setIsCookieOpened] = useState(false);
  const [currentFortune, setCurrentFortune] = useState("");

  
  const breakCookie = () => {
    setIsCookieOpened(true);
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    setCurrentFortune(randomFortune);
  };

  
  const resetCookie = () => {
    setIsCookieOpened(false);
    setCurrentFortune("");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={isCookieOpened ? resetCookie : breakCookie}>
      <Image
          source={isCookieOpened ? require('./biscoitos/biscoito2.png') : require('./biscoitos/Biscoito1.png')}
          style={styles.cookieImage}
        />
      </TouchableOpacity>
      <Text style={styles.fortuneText}>
        {isCookieOpened ? currentFortune : 'Toque no biscoito para quebrá-lo!'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DB9428',
  },
  cookieImage: {
    width: 200,
    height: 200,
  },
  fortuneText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;