/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {GluestackUIProvider, SafeAreaView, Text} from '@gluestack-ui/themed';
import {config} from './config/gluestack-ui.config';
import {View} from '@gluestack-ui/config/build/theme';

function App() {
  return (
    <GluestackUIProvider config={config}>
      <SafeAreaView>
        <Text>Hello World</Text>
      </SafeAreaView>
    </GluestackUIProvider>
  );
}

export default App;
