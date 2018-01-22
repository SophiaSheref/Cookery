import React from 'react';
import {View, Image} from 'react-native';
const Header = ( ) => {
  return <View>
  <View style={{
               
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 270,
                paddingBottom: 10,
              }}>
        <Image
          style={styles.logo}
          source={require('./cookery.png')}
        />
      </View>
      </View>
};
const styles= {
    logo: {
    alignItems: 'center',
    justifyContent: 'center',
    }
}
export default Header;