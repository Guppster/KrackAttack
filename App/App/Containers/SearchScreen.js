import React, { Component } from "react";
import {Platform, Alert, ScrollView, View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';
import { connect } from "react-redux";
import SearchBar from 'react-native-searchbar'

// Styles
import styles from "./Styles/SearchScreenStyle";

var wifi = require('react-native-android-wifi');

const items = [
  "ya",
  "dun",
  "even",
  "know",
  "fam",
  "mans",
  "international",
  "ya",
  "dun",
  "even",
  "know",
  "fam",
  "mans",
  "international"
];

class SearchScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      items,
      results: [],
      search: false,
      isWifiNetworkEnabled: null,
      ssid: null,
      pass: null,
      ssidExist: null,
      currentSSID: null,
      currentBSSID: null, 
      wifiList: null,
      modalVisible: false,
      status:null,
      level: null,
      ip: null,
    };
    this._handleResults = this._handleResults.bind(this);
    this.refreshWifiResults = this.refreshWifiResults.bind(this);
  }

  _handleResults(results) {
    this.setState({results});
  }

  refreshWifiResults() {

    if (Platform.OS == 'android'){
      // wifi.isEnabled((isEnabled) => {
      //   if (isEnabled) {
      //     console.log("wifi service enabled");
      //   } else {
      //     console.log("wifi service is disabled");
      //   }
      // });
       wifi.getBSSID((bssid) => {
         console.log(bssid);
       });
      // wifi.setEnabled(true);
      // console.log("ANDROID!");
      // wifi.setEnabled(true);
      
    }

    this.setState({results: items});
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.screen}>
        <ScrollView style={[styles.avoidSearchBar, styles.resultsContainer]}>
          {this.state.results.map((result, i) => {
            return (
              <TouchableOpacity
                key={i}
                style={styles.entry}
                onPress={() => navigate("Exploit", { ssid: result })}
              >
                <Text style={styles.entryText}>{result.toString()}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <View style={styles.controlContainer}>
          <Button title={"Refresh"} onPress={() => this.refreshWifiResults()} />
        </View>

        <SearchBar
          ref={ref => (this.searchBar = ref)}
          data={items}
          handleResults={this._handleResults}
          showOnLoad
          hideBack={true}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
