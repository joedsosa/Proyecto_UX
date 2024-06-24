import React from 'react';
import { View } from 'react-native';
import WebView from 'react-native-webview';

const VideoPlayerScreen = ({ route }) => {
  const { videoUrl } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <WebView
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{ uri: videoUrl }}
      />
    </View>
  );
};

export default VideoPlayerScreen;
