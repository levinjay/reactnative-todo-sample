import {StyleSheet, Task, Text, TouchableOpacity, View} from 'react-native';
import ITask from '../models/ClassTasks';

interface IPropTasks {
  currentTask: ITask;
}

const CompTask = (currentTask: ITask) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftSlice}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.itemText}>{currentTask.id} - {currentTask.taskName}</Text>
      </View>
      <View style={styles.rightSlice}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  leftSlice: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55bcf6',
    opacity: 0.6,
    borderRadius: 5,
    marginRight: 10
  },
  itemText: {
    maxWidth: '80%',

  },
  rightSlice: {
    width: 12,
    height: 12,
    borderColor: '#55bcf6',
    borderWidth: 2,
    borderRadius: 10,
  },
});

export default CompTask;
