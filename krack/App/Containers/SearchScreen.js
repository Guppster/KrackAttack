import React, { Component } from 'react'
import {Platform, Alert, ScrollView, View, Text, Button, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import SearchBar from 'react-native-searchbar'

// Styles
import styles from './Styles/SearchScreenStyle'

const wifi = require('react-native-android-wifi')

class SearchScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props)
    this.state = {
      results: [],
      search: false
    }
    this._handleResults = this._handleResults.bind(this)
    this.refreshWifiResults = this.refreshWifiResults.bind(this)
  }

  _handleResults (results) {
    this.setState({results})
  }

  refreshWifiResults () {
    if (Platform.OS === 'android') {
      wifi.reScanAndLoadWifiList((wifiStringList) => {
        var wifiArray = JSON.parse(wifiStringList)
        this.setState({results: wifiArray})
      }, (bad) => { Alert.alert('Opps', 'Something has gone VERY wrong. byebye') })
    } else {
      Alert.alert('Opps!', 'Sorry this functionality is only implemented for Android devices right now')
    }
  }

  render () {
    const { navigate } = this.props.navigation

    return (
      <View style={styles.screen}>
        <ScrollView style={[styles.avoidSearchBar, styles.resultsContainer]}>
          {this.state.results.map((result, i) => {
            return (
              <TouchableOpacity
                key={i}
                style={styles.entry}
                onPress={() => navigate('Exploit', { network: result })}
              >
                <Text style={styles.entryText}>{result.SSID}</Text>
              </TouchableOpacity>
            )
          })}
        </ScrollView>

        <View style={styles.controlContainer}>
          <Button title={'Refresh'}color={'#8b9dc3'} onPress={() => this.refreshWifiResults()} />
        </View>

        <SearchBar
          ref={ref => (this.searchBar = ref)}
          data={this.state.results}
          handleResults={this._handleResults}
          showOnLoad
          hideBack
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen)
