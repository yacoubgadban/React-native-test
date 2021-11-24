import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
    const config = await createExpoWebpackConfigAsync(env, argv);
    config.output.publicPath = '/';
    config.devServer = {
        ...config.devServer,
        historyApiFallback: true,
    };
    return config;
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Yacoub App</Text>
      <Text>Coming soon!</Text>
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
