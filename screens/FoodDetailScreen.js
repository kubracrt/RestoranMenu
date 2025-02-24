import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    Pressable,
  } from 'react-native';
  import React from 'react';
  import { useLayoutEffect } from 'react';
  import { Ionicons } from '@expo/vector-icons';
  import { FOODS } from '../data/dummy-data';
  import FoodIngredients from '../components/FoodIngredients';
  
  export default function FoodDetailScreen({ route, navigation }) {
    const foodId = route.params.foodId;
    const selectedFood = FOODS.find((food) => food.id === foodId);
    console.log(selectedFood);
  
    const pressHandler = () => {
      console.log('Tıklandı!');
    };
  
    useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => {
          return (
            <Pressable
              onPress={pressHandler}
              style={({ pressed }) => (pressed ? styles.pressed : null)}
            >
              <Ionicons name="ios-star-half" size={24} color="white" />
            </Pressable>
          );
        },
      });
    }, [navigation]);
  
    return (
      <ScrollView style={styles.rootContainer}>
        <Image style={styles.image} source={{ uri: selectedFood.imageUrl }} />
        <Text style={styles.title}>{selectedFood.title}</Text>
        <View style={styles.details}>
          <Text style={styles.detailItem}>{selectedFood.complexity}</Text>
          <Text style={styles.detailItem}>{selectedFood.affordability}</Text>
        </View>
        <View style={styles.listContainer}>
          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>İçindekiler</Text>
          </View>
          <FoodIngredients data={selectedFood.ingredients} />
        </View>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    rootContainer: {
      marginBottom: 50,
    },
    image: {
      width: '100%',
      height: 300,
    },
    title: {
      textAlign: 'center',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 8,
      color:"#8b8386"
    },
    details: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
      color:"#eee0e5"
    },
    detailItem: {
      marginHorizontal: 8,
      fontSize: 12,
      color: '#8b8386',
      marginTop:10
    },
    listContainer: {
      width: '100%',
      paddingHorizontal: 10,
    },
    subTitleContainer: {
      alignItems: 'center',
      borderBottomWidth: 2,
      borderBottomColor: '#8b8386',
      marginVertical: 5,
    },
    subTitle: {
      color: '#8b8386',
      fontSize: 24,
      fontWeight: 'bold',
      paddingBottom:8
    },
    pressed: {
      opacity: 0.5,
    },
  });
  