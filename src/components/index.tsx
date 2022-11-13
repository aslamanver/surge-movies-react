import React, {FC} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {MovieRowProps} from '../app/types';
import {listStyles as styles} from '../styles/styles';

export const MovieRow: FC<MovieRowProps> = props => (
  <View style={styles.itemRow}>
    <View style={styles.itemImageContainer}>
      <FastImage
        resizeMode={FastImage.resizeMode.cover}
        style={styles.itemImage}
        source={{
          uri: `http://image.tmdb.org/t/p/w154/${props.item.poster_path}`,
          cache: FastImage.cacheControl.immutable,
        }}
      />
      <Text style={styles.itemVote}>{props.item.vote_average * 10}%</Text>
    </View>
    <View style={styles.itemTextContainer}>
      <Text style={styles.itemTextTitle}>
        #{props.index + 1} {props.item.original_title}
      </Text>
      <Text style={styles.itemTextTitleSub}>({props.item.title})</Text>
      <Text>
        {props.item.release_date} ({props.item.original_language}) .{' '}
        <View style={styles.itemViewAdult}>
          <Text>{props.item.adult ? '' : 'All'}</Text>
        </View>
      </Text>
      <Text numberOfLines={4} style={styles.itemTextOverview}>
        {props.item.overview}
      </Text>
    </View>
  </View>
);

export const MovieRowFooter: FC<{status: string}> = props => (
  <View style={styles.loader}>
    {['loading', 'idle'].includes(props.status) ? (
      <ActivityIndicator size="large" />
    ) : (
      <Text>Something went wrong, please try again.</Text>
    )}
  </View>
);
