import React, { Component } from 'react'
import {
  Image,
  ScrollView,
  Text,
  View,
  Alert,
  Linking,
  Button
} from 'react-native'
import { connect } from 'react-redux'
import { Images } from '../Themes'
import PopupDialog from 'react-native-popup-dialog'
import DeviceInfo from 'react-native-device-info'

// Styles
import styles from './Styles/LaunchScreenStyles'

class LaunchScreen extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    exploitText: 'PATCHED'
  }

  _check = () => {
    if (DeviceInfo.getBrand() === 'samsung') {
      this.state.exploitText = 'VULNERABLE'
    }
  }

  render () {

    this._check()

    return (
      <View style={styles.container}>
        <PopupDialog ref={(popupDialog) => { this.popupDialog = popupDialog }}>
          <View style={styles.screen}>
            <ScrollView style={styles.infoContainer}>

              <View style={styles.entry}>
                <Text style={styles.entryLabel}>
                  Brand
                </Text>
                <Text style={[styles.entryValue, styles.entryValueText]}>
                  {DeviceInfo.getBrand()}
                </Text>
              </View>

              <View style={styles.entry}>
                <Text style={styles.entryLabel}>
                  Model
                </Text>
                <Text style={[styles.entryValue, styles.entryValueText]}>
                  {DeviceInfo.getModel()}
                </Text>
              </View>

              <View style={styles.entry}>
                <Text style={styles.entryLabel}>
                  OS
                </Text>
                <Text style={[styles.entryValue, styles.entryValueText]}>
                  {DeviceInfo.getSystemName()}
                </Text>
              </View>

              <View style={styles.entry}>
                <Text style={styles.entryLabel}>
                  Version
                </Text>
                <Text style={[styles.entryValue, styles.entryValueText]}>
                  {DeviceInfo.getSystemVersion()}
                </Text>
              </View>

              <View style={styles.entry}>
                <Text style={styles.entryLabel}>
                  Krack Exploit
                </Text>
                <Text style={[styles.entryValue, styles.entryValueText]}>
                  {this.state.exploitText}
                </Text>
              </View>
            </ScrollView>
          </View>
        </PopupDialog>

        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <Image source={Images.krack} style={styles.image}
            />
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>/krack-it</Text>
          </View>

          <View style={styles.warning}>
            <Text style={styles.dangerText}> USE ON YOUR OWN NETWORK AT YOUR OWN RISK! </Text>
          </View>
        </ScrollView>

        <Button
          onPress={() => this.popupDialog.show()}
          title='Check Your Device'
          color='#3b5998'
          accessibilityLabel='Check Your Device'
        />

        <Button
          onPress={this.onPressDonate}
          title='Donate ;)'
          color={'#8b9dc3'}
          accessibilityLabel='Help out with the Development of this application'
        />

        <Button
          onPress={this.onPressAbout}
          title='About'
          color='#3b5998'
          accessibilityLabel='Learn more about the application'
        />

      </View>
    )
  }

  // Change this to a modal maybe?
  onPressAbout () {
    Alert.alert('About', 'Krack App lets you search for your network and verify if it is susceptible to a KrackAttack by attempting an attack.', [{text: 'To learn more about Krack, visit: www.krackattacks.com/', onPress: ()=>{ Linking.openURL('https://www.krackattacks.com')}}])
  }

  // Change this to a modal maybe?
  onPressDonate () {
    Alert.alert('Donation', 'Thanks for showing your support to raise awareness about Krack Attacks', [{text: 'Send bitcoin to 1LegaJgwBryjnfJXTQ7cm71QENEr9A9xou'}])
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
