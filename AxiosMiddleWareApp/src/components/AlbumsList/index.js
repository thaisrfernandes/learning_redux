import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {
  Text,
  FlatList,
  View,
  TouchableOpacity,
  ListItem,
  StyleSheet,
} from 'react-native';
import {listAlbums, selectAlbum} from '../../store/reducers/albums';

const AlbumsList = ({listAlbums, selectAlbum, albums}) => {
  useEffect(() => {
    listAlbums('darthverde');
  }, []);

  return (
    <FlatList
      style={styles.container}
      data={albums}
      renderItem={({item}) => (
        <View style={styles.listItem}>
          <Text style={styles.rank}>{item['@attr'].rank}</Text>
          <Text style={styles.title}>{item.name}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => selectAlbum(item)}>
            <Text style={styles.btnText}>See more</Text>
          </TouchableOpacity>
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f6fd',
    height: '100%',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  title: {
    width: '65%',
    color: '#1E1F23'
  },
  rank: {
    color: '#A4AAB5',
    fontSize: 15
  },
  btnText: {
    color: '#fff',
    fontSize: 10,
  },
  button: {
    backgroundColor: '#D1424F',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
});

const mapStateToProps = state => ({
  albums: state.albums,
});

const mapDispatchToProps = {
  listAlbums,
  selectAlbum,
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsList);
