import React, {FC, useEffect} from 'react';
import {FlatList, Text, View, SafeAreaView, RefreshControl} from 'react-native';

import {listStyles as styles} from './src/styles/styles';

import {useAppDispatch, useAppSelector} from './src/app/hooks/index';
import {fetchAsync, selectMovies} from './src/features/counter/movieSlice';
import {MovieRow, MovieRowFooter} from './src/components';

const App: FC = () => {
  //
  const movies = useAppSelector(selectMovies);
  const status = useAppSelector(state => state.movie.status);
  const page = useAppSelector(state => state.movie.page);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAsync(1));
  }, []);

  const handleLoadMore = () => dispatch(fetchAsync(page + 1));

  const handleOnRefresh = () => dispatch(fetchAsync(1));

  const keyExtractor = (item: any, index: number) => index.toString();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>
          ({movies.length}) Top Rated Movies
        </Text>
      </View>
      <FlatList
        style={styles.flatList}
        data={movies}
        renderItem={MovieRow}
        keyExtractor={keyExtractor}
        ListFooterComponent={<MovieRowFooter status={status} />}
        onEndReachedThreshold={0}
        onEndReached={handleLoadMore}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={handleOnRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default App;
