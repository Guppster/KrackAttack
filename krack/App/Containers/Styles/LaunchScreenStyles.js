import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f2f4',
  },
  contentContainer: {
    paddingTop: 30,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  image: {
    width: 400,
    height: 300,
    resizeMode: 'stretch',
  },
  titleContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  title: {
    fontSize: 25,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    margin: 2
  },
  dangerText: {
    color: 'red', 
    fontSize: 15,
    fontWeight: 'bold'
  },
  warning: {
    alignItems: 'center',
    marginTop: 20
  }
})
