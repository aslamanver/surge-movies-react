import {StyleSheet} from 'react-native';

export const listStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F111D',
  },
  itemRow: {
    flex: 1,
    backgroundColor: '#032541',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
    paddingBottom: 25,
    marginBottom: 10,
    flexDirection: 'row',
  },
  itemImage: {
    flex: 1,
    // height: 154,
    // width: 103,
    borderRadius: 20,
  },
  itemTextContainer: {
    flex: 2,
    color: '#fff',
    padding: 10,
  },
  itemTextTitleSub: {
    fontWeight: 'bold',
  },
  itemTextTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  itemViewAdult: {
    borderWidth: 1,
    paddingHorizontal: 3,
    borderColor: '#ccc',
  },
  itemTextOverview: {
    marginTop: 5,
  },
  loader: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
  appBar: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF3540',
    paddingVertical: 15,
  },
  appBarTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFFFFF',
  },
  flatList: {
    paddingTop: 10,
  },
  itemImageContainer: {
    position: 'relative',
    flex: 1,
    textAlign: 'center',
  },
  itemVote: {
    position: 'absolute',
    bottom: -15,
    left: '20%',
    fontWeight: 'bold',
    backgroundColor: '#032541',
    borderWidth: 5,
    borderRadius: 100,
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: 10,
    width: 50,
    height: 50,
    borderColor: '#499B58',
  },
});
