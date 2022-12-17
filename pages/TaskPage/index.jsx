import React, { Component } from 'react';
import { FaEdit, FaPlus, FaWindowClose } from 'react-icons/fa';
import './Task.css';
export default class TaskPage extends Component {
  state = {
    inputTask: '',
    tasksState: ['Fazer café', 'Beber água', 'Estudar'],
    id: -1,
  };

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (!tasks) return;
    this.setState({
      tasksState: tasks,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tasksState } = this.state;
    if (tasksState === prevState.tasksState) return;
    localStorage.setItem('tasks', JSON.stringify(tasksState));
  }

  handleChange = (e) => {
    this.setState({
      inputTask: e.target.value,
    });
  };

  handleCreateTask = (e) => {
    e.preventDefault();
    const { tasksState, id } = this.state;
    let { inputTask } = this.state;
    inputTask = inputTask.trim();
    // if (tasks.includes(inputTask)) return;
    if (inputTask === '') return;
    if (tasksState.indexOf(inputTask) !== -1) return;

    const tasks = [...tasksState];
    if (id === -1) {
      this.setState({
        tasksState: [...tasks, inputTask],
        inputTask: '',
      });
    } else {
      tasks[id] = inputTask;
      this.setState({
        tasksState: [...tasks],
        id: -1,
      });
    }
  };

  handreEditTask = (e, index) => {
    const { tasksState, id } = this.state;
    this.setState({
      id: index,
      inputTask: tasksState[index],
    });
  };

  handreDeleteTask = (index) => {
    const { tasksState } = this.state;
    const tasks = [...tasksState];
    tasks.splice(index, 1);

    this.setState({
      tasksState: [...tasks],
    });
  };

  render() {
    const { inputTask, tasksState } = this.state;
    // console.log(tasks);
    // console.log(inputTask);
    return (
      <div className="main">
        <h1>Lista de tarefas</h1>
        <form onSubmit={this.handleCreateTask} className="form">
          <input value={inputTask} onChange={this.handleChange} type="text" />
          <button type="submit">
            <FaPlus />
          </button>
        </form>
        <div className="tasks">
          <ul>
            {tasksState.map((task, index) => {
              return (
                <li key={index}>
                  {task}{' '}
                  <div className="btn-container">
                    <button
                      onClick={(e) => this.handreEditTask(e, index)}
                      className="blue"
                    >
                      <FaEdit />
                    </button>{' '}
                    <button
                      onClick={() => this.handreDeleteTask(index)}
                      className="red"
                    >
                      <FaWindowClose />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
