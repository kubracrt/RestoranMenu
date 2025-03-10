import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGrid from '../components/CategoryGrid';
import { useNavigation } from '@react-navigation/native';

export default function CategoriesScreen() {
  
  const navigation = useNavigation();

  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("Foods",{
        categoryId:itemData.item.id
      })
  
    }
    console.log(itemData.item);
    return (
      <CategoryGrid
       title={itemData.item.title}
       color={itemData.item.color}
       pressFood={pressHandler} />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({});
