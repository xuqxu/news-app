import React from 'react';
import { Text, StyleSheet, View, useColorScheme, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ListItem from './components/ListItem';
import article from './dummies/articles.json';

export default function App() {
  const items = article.map((article, index) => {
    return (
      <ListItem
        imageUrl={article.urlToImage}
        title={article.title}
        auther={article.author}
        key={index}
      />
    );
  });
  const colorScheme = useColorScheme();

  const themeTextStyle =
    colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <StatusBar style="auto" />
      {items}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightContainer: {
    backgroundColor: '#f5f5fa',
  },
  darkContainer: {
    backgroundColor: '#191b22',
  },
  lightThemeText: {
    color: '#242c40',
  },
  darkThemeText: {
    color: '#d0d0c0',
  },
});
