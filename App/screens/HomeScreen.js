import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert,
  Button,
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <Image source={require('../assets/images/krack.jpg')} style={styles.image}
            />
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>/krack-it</Text>
          </View>

        </ScrollView>

        <View style={styles.button}>
          <Button
            onPress={this.onPressAbout}
            title="About"
            color="#a67ae2"
            accessibilityLabel="Learn more about the application"
          />
        </View>

        <View style={styles.button}>
          <Button
            onPress={this.onPressDonate}
            title="Donate ;)"
            color="#a67ae2"
            accessibilityLabel="Help out with the Development of this application"
          />
        </View>
      </View>
    );
  }

  //Change this to a modal maybe?
  onPressAbout() {
    Alert.alert('About','This is a pretty cool app fam. wat dat wifi do')
  }

  //Change this to a modal maybe?
  onPressDonate() {
    Alert.alert('Donation','Thanks for showing your support to raise awareness about Krack Attacks', [{text : 'Send bitcoin to 1LegaJgwBryjnfJXTQ7cm71QENEr9A9xou'}])
  }

}

const styles = StyleSheet.create({
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
});
