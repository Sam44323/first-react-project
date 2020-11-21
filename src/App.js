import { React, Component } from 'react';

import TaskComponent from './components/ListComponent/ListComponent';

class FirstApp extends Component {
  state = {
    tasks: [
      {
        id: 1,
        title: 'Task 1',
        task: 'Do the react app',
      },
      {
        id: 2,
        title: 'Task 2',
        task: 'Do the angular app',
      },
      {
        id: 3,
        title: 'Task 3',
        task: 'Do the django app',
      },
    ],
  };

  deleteTask(taskId) {
    const updatedTask = this.state.tasks.filter((task) => task.id !== taskId);
    this.setState({ tasks: updatedTask });
  }

  render() {
    let values = this.state.tasks.map((task) => {
      return (
        <TaskComponent
          key={task.id}
          title={task.title}
          task={task.task}
          clickFunction={() => this.deleteTask(task.id)}
        />
      );
    });
    if (this.state.tasks.length === 0) {
      values = (
        <div>
          <h1
            style={{
              textAlign: 'center',
              marginTop: '100px',
              background: 'grey',
              borderRadius: '40px',
              padding: '100px',
              color: 'white',
            }}
          >
            No tasks left!
          </h1>
        </div>
      );
    }
    return <div>{values}</div>;
  }
}

export default FirstApp;
