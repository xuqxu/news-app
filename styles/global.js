import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
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
  container: {
    flex: 1,
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
