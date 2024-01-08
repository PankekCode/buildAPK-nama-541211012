import React, {useCallback} from 'react';
import { Text, ScrollView, StyleSheet, View, Image, ImageAlert, Button, Linking, Alert, TouchableOpacity } from 'react-native';
import MyButton2 from './components/Button2';
// You can import supported modules from npm
import { Card } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.overviewheading}>
        Overview
      </Text>
      <Card style={styles.card}>
        <View style={styles.inner_card}>
          <View style={{position:'relative', height:100}}>
            <Image style={{width:98, height:140, position:'absolute', bottom:-18, left:-8}} source={require('./assets/myphoto.png')} />
          </View>
          <View style={{flex:1, marginLeft:104}}>
            <Text style={styles.pb1}>
              Ahmad Zaidan
            </Text>
            <Text style={[styles.pb3, styles.textleft]}>
              Hidup tidak selamanya
            </Text>
          </View>
        </View>
      </Card>
      <View
        style={{
          marginVertical:16,
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <Text style={styles.projectheading}>
        Coding
      </Text>
      <View>
        <View style={{marginBottom:14}}>
          <Card style={styles.card}>
            <View style={styles.inner_card2}>
              <View style={{flexDirection: 'row',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            justifyContent: 'flex-start',}}>
                    <FontAwesome name="gitlab" size={42} color="#404040" style={{marginRight:10}} />
                  <Text style={styles.pb1}>
                    Gitlab
                  </Text>
              </View>
              <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent:'center'}}>
                  <MyButton2 url="https://gitlab.com/PankekCode" />
              </View>
            </View>
          </Card>
        </View>
        <View style={{marginBottom:14}}>
          <Card style={styles.card}>
            <View style={styles.inner_card2}>
            <View style={{flexDirection: 'row',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            justifyContent: 'flex-start',}}>
                <AntDesign name="github" size={42} color="#404040"  style={{marginRight:10}}/>
                  <Text style={styles.pb1}>
                    Github
                  </Text>
              </View>
              <View>
                  <MyButton2 url="https://github.com/Pankekcode" />
              </View>
            </View>
          </Card>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    backgroundColor:'#DDDDDD',
  },
  overviewheading: {
    paddingTop:52,
    marginBottom: 4,
    fontSize: 24,
    fontWeight: 'bold',
  },
  projectheading: {
    marginBottom: 4,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    position:'relative',
    padding:18,
    backgroundColor: '#EEEEEE',
  },
  inner_card: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  inner_card1: {
    textAlign:'center',
  },
  inner_card2: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  marginbottomcard: {
    marginBottom:10,
  },
  textcenter: {
    textAlign:'center',
  },
  textleft: {
    textAlign:'left',
  },
  textright: {
    textAlign:'right',
  },
  // p1: {
  //   fontSize: 20,
  // },
  pb1: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  // p2: {
  //   fontSize: 16,
  // },
  pb2: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  p3: {
    fontSize: 14,
  },
  pb3: {
    fontSize: 14,
  fontWeight: 'bold',
  },
});