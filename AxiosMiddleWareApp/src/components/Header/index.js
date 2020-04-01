import React from 'react';
import {connect} from 'react-redux';
import {Text, StyleSheet, View, Image} from 'react-native';

const Header = ({activeAlbum}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Top Albums</Text>
      {activeAlbum && (
        <View style={styles.details}>
          <Image
            source={{uri: activeAlbum.image[3]['#text']}}
            style={styles.image}
          />
          <View style={styles.description}>
            <Text style={styles.title}>{activeAlbum.name}</Text>
            <Text style={styles.text}>{activeAlbum.artist.name}</Text>
            <Text style={styles.text}>
              Played {activeAlbum.playcount} times
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f6fd',
    padding: 20,
  },
  header: {
    color: '#D1424F',
    fontWeight: 'bold',
    fontSize: 15,
  },
  image: {
    width: 130,
    height: 130,
    resizeMode: 'cover',
    marginRight: 10,
  },
  title: {
    color: '#D1424F',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 30
  },
  text: {
    color: '#3F464F',
    lineHeight: 30
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20
  },
  description: {
    flexDirection: 'column',
    shadowColor: '#000',
  },
});

const mapStateToProps = state => ({
  activeAlbum: state.activeAlbum,
});

export default connect(mapStateToProps)(Header);
