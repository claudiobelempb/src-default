import { reducerActionType } from '../../types/reducerActionType';

export type Task = {
  id: string;
  task: string;
  minutesAmmout: number;
  starDate: Date;
  interruptedDate?: Date;
  finashedDate?: Date;
};

export type CreateTaskDate = {
  task: string;
  minutesAmmout: number;
};

export type TaskStateType = {
  tasks: Task[];
  taskActiveId: string | null;
  activeTask?: Task | undefined;
  amountSecondsPassed?: number;
  markCurrentTaskAsFinished?: () => void;
  setAmountSecondsPassedProps?: (seconds: number) => void;
  createNewTask?: (data: CreateTaskDate) => void;
  interruptCurrentTask?: () => void;
};

export const TaskInitialState: TaskStateType = {
  tasks: [
    {
      id: '1',
      minutesAmmout: 5,
      task: 'Projeto 01',
      starDate: new Date(),
      finashedDate: new Date(),
      interruptedDate: new Date()
    }
  ],
  activeTask: {
    id: '1',
    minutesAmmout: 5,
    task: 'Projeto 01',
    starDate: new Date(),
    finashedDate: new Date(),
    interruptedDate: new Date()
  },
  taskActiveId: '1',
  amountSecondsPassed: 5
};

export enum ActionsType {
  ADD_NEW_TASK = 'ADD_NEW_TASK',
  MARK_CURRENT_TASK_AS_FINISHED = 'MARK_CURRENT_TASK_AS_FINISHED',
  INTERRUPT_CURRENT_TASK = 'INTERRUPT_CURRENT_TASK'
}

export const TaskReducerB7web = (
  state: TaskStateType,
  action: reducerActionType
) => {
  switch (action.type) {
    case ActionsType.ADD_NEW_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload.newTask],
        taskActiveId: action.payload.newTask.id
      };
    case ActionsType.INTERRUPT_CURRENT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === state.taskActiveId) {
            return { ...task, interruptedDate: new Date() };
          } else {
            return task;
          }
        }),
        taskActiveId: null
      };
    case ActionsType.MARK_CURRENT_TASK_AS_FINISHED:
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === state.taskActiveId) {
            return { ...task, finashedDate: new Date() };
          } else {
            return task;
          }
        }),
        taskActiveId: null
      };
    default:
      return state;
  }
};
