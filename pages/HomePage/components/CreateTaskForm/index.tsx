import { useContext } from 'react';
import { useFormContext } from 'react-hook-form';
import { displayDefault } from '../../../../assets/themes/functions/utilsDefault';
import { BoxDefault } from '../../../../components/common/BoxDefault';
import { ButtonDefault } from '../../../../components/common/ButtonDefault';
import { ContainerDefault } from '../../../../components/common/ContainerDefault';
import { ContentDefault } from '../../../../components/common/ContentDefault';
import { InputDefault } from '../../../../components/common/InputDefault';
import { TextDefault } from '../../../../components/common/TextDefault';
import { TasksContextRocketseat } from '../../../../contexts/taskContextRocketseat';

export function NewTaskForm() {
  const { activeTask } = useContext(TasksContextRocketseat);
  const { register } = useFormContext();
  return (
    <ContainerDefault>
      <ContentDefault
        displayDefault={() => displayDefault('flex')}
        flexDirectionDefault={{ value: 'row' }}
        flexGapDefault={{ column: 0.5 }}
      >
        <BoxDefault>
          <InputDefault
            disabled={!!activeTask}
            list='task-suggetions'
            htmlFor='task'
            id='task'
            type='text'
            label='Vou trabalhar em'
            placeholder='Dê um nome para seu projeto'
            borderBottom={{
              width: 2,
              style: 'solid',
              variant: {
                border: { color: { index: 'gray', value: 'v500' } }
              }
            }}
            borderRadius={{ width: 0 }}
            flexGrowDefault={{ value: 1 }}
            {...register('task')}
          />
          <datalist id='task-suggetions'>
            <option value='Project 01' />
            <option value='Project 02' />
            <option value='Project 03' />
            <option value='Project 04' />
          </datalist>
        </BoxDefault>
        <BoxDefault
          displayDefault={() => displayDefault('flex')}
          alignItemsDefault={{ value: 'center' }}
          disabled={!!activeTask}
        >
          <TextDefault
            as={'span'}
            variant={{ color: { index: 'gray', value: 'v100' } }}
          >
            durante
          </TextDefault>
          <ButtonDefault
            borderBottom={{
              width: 2,
              style: 'solid',
              variant: {
                border: { color: { index: 'gray', value: 'v500' } }
              }
            }}
            borderRadius={{ width: 0 }}
          >
            -
          </ButtonDefault>

          <InputDefault
            disabled={!!activeTask}
            htmlFor='minutesAmmout'
            id='minutesAmmout'
            type='number'
            step={5}
            borderBottom={{
              width: 2,
              style: 'solid',
              variant: {
                border: { color: { index: 'gray', value: 'v500' } }
              }
            }}
            borderRadius={{ width: 0 }}
            widthStatic={{ value: 10, unit: 'rem' }}
            {...register('minutesAmmout', { valueAsNumber: true })}
          />
          <ButtonDefault
            disabled={!!activeTask}
            borderBottom={{
              width: 2,
              style: 'solid',
              variant: {
                border: { color: { index: 'gray', value: 'v500' } }
              }
            }}
            borderRadius={{ width: 0 }}
          >
            +
          </ButtonDefault>
          <TextDefault
            as={'span'}
            variant={{ color: { index: 'gray', value: 'v100' } }}
          >
            minutos
          </TextDefault>
        </BoxDefault>
      </ContentDefault>
    </ContainerDefault>
  );
}
