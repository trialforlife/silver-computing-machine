import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

import { FlatList} from 'react-native';


const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => {
          <Text style={styles.item}>{item.key}</Text>
        }
        

      }
      />
    </View>
  );
}


const SectionListBasics = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
          {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
        ]}
        renderItem={({item}) => 

        <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}
export default function App() {
  return (
    <ScrollView>
      <Trapezoid/><Trapezoid/><Trapezoid/><Trapezoid/><Trapezoid/><Trapezoid/><Trapezoid/><Trapezoid/><Trapezoid/><Trapezoid/><Trapezoid/><Trapezoid/><Trapezoid/><Trapezoid/>
    </ScrollView>
  );
}

const Trapezoid = () => {
  return <View>
        
        <View style={styles.trapezoid} >
          <Text>Some mojjjkwdnwkldwldnwlkdnwldndlwnre text</Text>
          <Text style={{ fontSize: 96, color:'red', zIndex: 9999}}>Scroll me plz</Text>

          <Image
            source={{
              uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
            }}
            style={{ width: 200, height: 200 }}
          />
          </View>
      </View>
};





const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
    container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "red",
  },  triangleDown: {
    transform: [{ rotate: "180deg" }],
  },
  trapezoid: {
    width: '100%',
    height: 60,
    borderBottomWidth: 220,
    borderBottomColor: "grey",
    borderLeftWidth: 20,
    borderLeftColor: "transparent",
    borderRightWidth: 20,
    borderRightColor: "transparent",
    borderStyle: "solid",
    transform: [{ rotate: "180deg" }],
    borderRadius: 13,
    opacity: 0.5

  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },  base: {},
  baseTop: {
    borderBottomWidth: 35,
    borderBottomColor: "red",
    borderLeftWidth: 50,
    borderLeftColor: "transparent",
    borderRightWidth: 50,
    borderRightColor: "transparent",
    height: 0,
    width: 0,
    left: 0,
    top: -35,
    position: "absolute",
  },
  baseBottom: {
    backgroundColor: "red",
    height: 55,
    width: 100,
  },
})

