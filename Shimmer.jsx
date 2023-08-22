import React from 'react';
import { View, StyleSheet } from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';

const ShimmerCard = () => {
  return (
    <View style={styles.cardContainer}>
      <ShimmerPlaceholder style={styles.cardImageShimmer} />
      <ShimmerPlaceholder style={styles.cardTitleShimmer} />
      <ShimmerPlaceholder style={styles.cardBodyShimmer} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    elevation: 2,
  },
  cardImageShimmer: {
    width: '100%',
    height: 200, // Set the image height
    marginBottom: 8,
  },
  cardTitleShimmer: {
    width: '60%',
    height: 20,
    marginBottom: 8,
  },
  cardBodyShimmer: {
    width: '100%',
    height: 14,
  },
});

export default ShimmerCard;
