import { registerRootComponent } from 'expo';
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import Constants from 'expo-constants';

// Retrieve the Gemini key from Expo Constants
const GEMINI_KEY = Constants.expoConfig.extra?.GEMINI_KEY;

// Register the App component with AppRegistry
AppRegistry.registerComponent('main', () => App);

// Create a wrapper component to pass the geminiKey prop
const AppWrapper = () => <App geminiKey={GEMINI_KEY} />;

// Render the App component using registerRootComponent with the wrapper component
registerRootComponent(AppWrapper);
