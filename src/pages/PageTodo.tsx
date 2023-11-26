import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
} from 'react-native';
import CompTask from '../components/CompTask';
import React, {useState} from 'react';
import ITask from '../models/ClassTasks';

interface IPropTasks {
  currentTask: ITask;
}

const PageTodo = (currentTask: ITask) => {
  const [task, setTask] = useState(currentTask);
  const [taskItems, setTaskItems] = useState<ITask[]>([]);
  const taskSubmitHander = () => {
    // console.log(task?.taskName);
    setTaskItems([...taskItems, task]);
    setTask({id: 0, taskName: '', status: true});
    Keyboard.dismiss();
  };
  const handleInputChange = (text: string) => {
    setTask({id: taskItems.length, taskName: text, status: true});
  };
  const completedTaskHandler = (index: number) => {
    let taskItemsCopy = [...taskItems];
    taskItemsCopy.splice(index, 1);
    setTaskItems(taskItemsCopy);
  };
  return (
    <View style={styles.container}>
      {/* Current Tasks */}
      <View style={styles.wrapper}>
        <Text style={styles.pageTitle}>Current Task</Text>
        <View style={styles.items}>
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => completedTaskHandler(index)}>
                <CompTask
                  id={item.id}
                  taskName={item.taskName}
                  status={item.status}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* Task Input */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'height' : 'padding'}
        style={styles.inputTaskWrapper}>
        <TextInput
          style={styles.inputTask}
          placeholder="Write a Task"
          onChangeText={handleInputChange}
          onSubmitEditing={taskSubmitHander}
          value={task.taskName}></TextInput>
        <TouchableOpacity onPress={taskSubmitHander}>
          <View style={styles.addBtnWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#e8eaed',
    height: '100%',
  },
  wrapper: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#414141',
  },
  items: {
    marginTop: 20,
  },
  inputTaskWrapper: {
    position: 'absolute',
    paddingHorizontal: 10,
    bottom: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  inputTask: {
    width: 250,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    // textAlign: 'center',
    borderColor: '#c0c0c0',
    color: '#55bcf6',
  },
  addBtnWrapper: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
  addText: {},
});

export default PageTodo;
