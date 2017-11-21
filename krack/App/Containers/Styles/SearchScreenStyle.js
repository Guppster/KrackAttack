import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
  },
  avoidSearchBar: {
    paddingTop: 65
  },
  controlContainer: {
    flex: 0.1,
    backgroundColor: '#fff'
  },
  resultsContainer: {
    flex: 0.9,
    backgroundColor: '#fff'
  },
  entry: {
    backgroundColor: '#a67ae2',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 5,
    paddingVertical: 10,
  },
  entryText: {
    fontSize: 20,
    paddingLeft: 10,
  }
})
