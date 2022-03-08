import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import styles from './styles'

import { Feather as Icon } from '@expo/vector-icons';

// Fonts
import { useFonts } from 'expo-font';
import SSLight from '../../../assets/fonts/source-sans-pro.light.ttf';
import SSRegular from '../../../assets/fonts/source-sans-pro.regular.ttf';
import SSBold from '../../../assets/fonts/source-sans-pro.bold.ttf';

function Photos({ photos }) {
  const imgWidth = Dimensions.get('screen').width * 0.33333;
  return (
    <View style={{}}>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
        }}
      >
        {/* {photos.map((photo, index) => ( */}
          <View>
            {/* <Image
              style={{ width: imgWidth, height: imgWidth }}
              source={{
                uri: `https://picsum.photos/200/300?random=${index + 1}`,
              }}
            /> */}
            <Text>3andek rendez vous sa3a  6 </Text>
           
          </View>
        {/* ))}
         */}
      </View>
    </View>
  );
}





export default function ProfileScreen1() {
  const [loaded] = useFonts({
    SSLight,
    SSRegular,
    SSBold,
  });

  const [showContent, setShowContent] = useState('Photos');

  if (!loaded) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <>
          <View>
            <Image
              style={styles.coverImage}
              source={{ uri: 'https://picsum.photos/500/500?random=211' }}/// coverture
            />
          </View>
          <View style={styles.profileContainer}>
            {/* Profile Details */}
            <View>
              {/* Profile Image */}
              <View style={styles.profileImageView}>
                <Image
                  style={styles.profileImage}
                  source={{
                    uri: 'https://scontent.ftun4-1.fna.fbcdn.net/v/t1.6435-9/80772247_2462935760593775_8383374698313940992_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TixX3ght1xIAX_1m9iQ&_nc_ht=scontent.ftun4-1.fna&oh=00_AT-wJmdsHdm8YRcjDqQSFjH15RgTInJAoaSCmv9aebrwGw&oe=6240EE13',
                  }}
                />
              </View>
              {/* Profile Name and Bio */}
              <View style={styles.nameAndBioView}>
                <Text style={styles.userFullName}>{'Oussema hmaied'}</Text>
                
              </View>
             
             
            </View>
            {/* Profile Content */}
            <View style={{ marginTop: 20 }}>
              <View style={styles.profileContentButtonsView}>
                <TouchableOpacity
                  style={{
                    ...styles.showContentButton,
                    borderBottomWidth: showContent === 'Photos' ? 2 : 0,
                  }}
                  onPress={() => setShowContent('Photos')}
                >
                  <Text style={styles.showContentButtonText}>INFOS</Text>
                </TouchableOpacity>
 
              </View>
              {showContent === 'Photos' ? (
                <Photos photos={new Array(13).fill(1)} />
              ) :null}
            </View>
          </View>
        </>
      </ScrollView>
    </View>
  );
}

