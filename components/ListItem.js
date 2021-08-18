import React from 'react';
import { Text, View, useColorScheme, Image } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ListItem({ imageUrl, title, author }) {
  const colorScheme = useColorScheme();

  const themeTextStyle =
    colorScheme === 'light'
      ? globalStyles.lightThemeText
      : globalStyles.darkThemeText;

  return (
    <View style={globalStyles.itemContainer}>
      <View style={globalStyles.leftContainer}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{
            uri: imageUrl,
          }}
        />
      </View>
      <View style={globalStyles.rightContainer}>
        <Text numberOfLines={3} style={[globalStyles.text, themeTextStyle]}>
          {title}
        </Text>
        <Text style={globalStyles.SubText}>{author}</Text>
      </View>
    </View>
  );
}
