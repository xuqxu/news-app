import React from 'react';
import { Text, StyleSheet, View, useColorScheme, Image } from 'react-native';

export default function ListItem({ imageUrl, title, author }) {
  const colorScheme = useColorScheme();

  const themeTextStyle =
    colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;

  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftContainer}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{
            uri: imageUrl,
          }}
        />
      </View>
      <View style={styles.rightContainer}>
        <Text numberOfLines={3} style={[styles.text, themeTextStyle]}>
          {title}
        </Text>
        <Text style={styles.SubText}>{author}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  lightThemeText: {
    color: '#242c40',
  },
  darkThemeText: {
    color: '#d0d0c0',
  },
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
  },
  SubText: {
    fontSize: 12,
    color: 'gray',
  },
});
