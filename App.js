import React, { useState, useEffect } from 'react';
import { useColorScheme, FlatList, SafeAreaView } from 'react-native';
import { globalStyles } from './styles/global';
import { StatusBar } from 'expo-status-bar';
import ListItem from './components/ListItem';
import dummyArticles from './dummies/articles.json';
import Constants from 'expo-constants';

export default function App() {
  const colorScheme = useColorScheme();

  const themeContainerStyle =
    colorScheme === 'light'
      ? globalStyles.lightContainer
      : globalStyles.darkContainer;

  const [articles, setArticles] = useState([]);
  useEffect(() => {
    alert(Constants.manifest.extra.newsApiKey);
    const timer = setTimeout(() => {
      setArticles(dummyArticles);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <SafeAreaView style={[globalStyles.container, themeContainerStyle]}>
      <StatusBar style="auto" />
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}
