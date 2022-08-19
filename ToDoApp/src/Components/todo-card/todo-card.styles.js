import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  counterContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 15,
  },
  counterText: {
    color: '#EF5B0C',
    fontWeight: 'bold',
    fontSize: 20,
  },
  touchableContainer: {
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
  },
  notDoneText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'normal',
  },
  isDoneText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'normal',
    opacity: 0.3,
    textDecorationLine: 'line-through',
  },
  notDoneButton: {
    backgroundColor: '#1C3879',
    padding: 15,
    borderRadius: 10,
  },
  isDoneButton: {
    backgroundColor: 'gray',
    padding: 15,
    borderRadius: 10,
    opacity: 0.7,
  },
});
