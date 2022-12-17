import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FaPlay, FaStop } from 'react-icons/fa';
import * as zod from 'zod';
import { ButtonDefault } from '../../components/common/ButtonDefault';
import { ContainerDefault } from '../../components/common/ContainerDefault';
import { ContentDefault } from '../../components/common/ContentDefault';
import { FormDefault } from '../../components/common/FormDefault';
import { Layout } from '../../components/Layout';
import { TasksContextRocketseat } from '../../contexts/taskContextRocketseat';
import { CountDown } from './components/CountDown';
import { NewTaskForm } from './components/CreateTaskForm';

const newTaskFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa!'),
  minutesAmmout: zod
    .number()
    .min(5, 'O intervalor precisa de ser no minimo de 5 minutos.')
    .max(60, 'O intervalor precisa ser no máximo de 60 minutos.')
});

type CreateData = Zod.infer<typeof newTaskFormValidationSchema>;

export function HomePage() {
  const zodCreateTaskProps = useForm<CreateData>({
    resolver: zodResolver(newTaskFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmmout: 0
    }
  });

  const { activeTask, interruptCurrentTaskContext, createNewTaskContext } =
    useContext(TasksContextRocketseat);

  const { handleSubmit, watch, reset } = zodCreateTaskProps;

  function handleCreateNewTask(data: CreateData) {
    createNewTaskContext(data);
    reset();
  }

  const taskWatch = watch('task');
  const isSubmitDisabled = !taskWatch;

  return (
    <Layout>
      <FormDefault onSubmit={handleSubmit(handleCreateNewTask)}>
        <FormProvider {...zodCreateTaskProps}>
          <NewTaskForm />
        </FormProvider>
        <CountDown />

        <ContainerDefault>
          <ContentDefault>
            {activeTask ? (
              <ButtonDefault
                type='button'
                widthDynamic={{ value: 10 }}
                variant={{ background: { index: 'red', value: 'v500' } }}
                disabled={!isSubmitDisabled}
                onClick={interruptCurrentTaskContext}
              >
                <FaStop /> Interronper
              </ButtonDefault>
            ) : (
              <ButtonDefault
                type='submit'
                widthDynamic={{ value: 10 }}
                variant={{ background: { index: 'green', value: 'v500' } }}
                disabled={isSubmitDisabled}
              >
                <FaPlay /> Começar
              </ButtonDefault>
            )}
          </ContentDefault>
        </ContainerDefault>
      </FormDefault>
    </Layout>
  );
}
