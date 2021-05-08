import * as React from 'react';

import { StyleSheet, View, Text, Image } from 'react-native';

export function SpinerOverlay({ visible }: any) {
  return (
        <View style={[styles.overlayContanier, visible === true ? {zIndex: 10, elevation: 1} : {zIndex: 0, elevation: 0} ]}>
            {visible && <Image 
                style={styles.loader}
                source={require('../assets/images/loader.gif')} />
            }
            
        </View>
    );
}

const styles = StyleSheet.create({
    overlayContanier: {
      position: 'absolute',
      zIndex: 10,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffffaa',
      elevation: 1,
    },
    loader: {
        width: 50,
        height: 50,
    },
});