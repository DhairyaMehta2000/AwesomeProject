import React from 'react';
import { View, Button, ScrollView, StyleSheet, Text, Image } from 'react-native';
import ShimmerCard from './Shimmer';
import DataFetcher from './DataFetcher';

const App = () => {
  return (
    <View style={styles.container}>
      <DataFetcher>
        {({ data, isLoading, fetchData }) => (
          <>
            <Button title="Search" onPress={fetchData} />
            <ScrollView>
              {isLoading
                ? Array.from({ length: 10 }).map((_, index) => (
                    <ShimmerCard key={index} />
                  ))
                : data.map((item) => (
                    <View key={item.id} style={styles.card}>
                      <Image source={{ uri: item.urls.regular }} style={styles.cardImage} />
                      <Text style={styles.cardTitle}>{item.alt_description}</Text>
                      <Text style={styles.cardAuthor}>By: {item.user.username}</Text>
                      <Text style={styles.cardLikes}>Likes: {item.likes}</Text>
                    </View>
                  ))}
            </ScrollView>
          </>
        )}
      </DataFetcher>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 40,
  },
  card: {
    backgroundColor: '#fff',
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    elevation: 2,
  },
  cardImage: {
    width: '100%',
    height: 200, // Set the image height
    marginBottom: 8,
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default App;
