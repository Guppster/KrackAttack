import React from 'react';
import {Alert, ScrollView, View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';
import SearchBar from 'react-native-searchbar'

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

export default class SearchScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      items,
      results: [],
      search: false
    };
    this._handleResults = this._handleResults.bind(this);
    this.refreshWifiResults = this.refreshWifiResults.bind(this);
  }

  _handleResults(results) {
    this.setState({results});
  }

  refreshWifiResults() {
    this.setState({results: items})
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.screen}>
        <ScrollView style={[styles.avoidSearchBar, styles.resultsContainer]}>
          {
            this.state.results.map((result, i) => {
              return (
                <TouchableOpacity key={i} style={styles.entry} onPress={() => navigate('Exploit', { ssid: result})}>
                    <Text style={styles.entryText}>
                      {result.toString()}
                    </Text>
                </TouchableOpacity>
              );
            })
          }
        </ScrollView>

        <View style={styles.controlContainer}>
          <Button title={"Refresh"} onPress={() => this.refreshWifiResults()}/>
        </View>

        <SearchBar
          ref={(ref) => this.searchBar = ref}
          data={items}
          handleResults={this._handleResults}
          showOnLoad
          hideBack={true}/>
      </View>);
  }
}

const
  styles = StyleSheet.create({
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
  });
