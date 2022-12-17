import { differenceInSeconds } from 'date-fns';
import { useContext, useEffect } from 'react';
import { BoxDefault } from '../../../../components/common/BoxDefault';
import { ContainerDefault } from '../../../../components/common/ContainerDefault';
import { ContentDefault } from '../../../../components/common/ContentDefault';
import { TextDefault } from '../../../../components/common/TextDefault';
import { TasksContextRocketseat } from '../../../../contexts/taskContextRocketseat';

export function CountDown() {
  const {
    activeTask,
    taskActiveId,
    markCurrentTaskAsFinishedContext,
    amountSecondsPassed,
    setAmountSecondsPassedContext
  } = useContext(TasksContextRocketseat);

  const totalSeconds = activeTask ? activeTask.minutesAmmout * 60 : 0;

  const currentSeconds = activeTask ? totalSeconds - amountSecondsPassed : 0;
  const minuntesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minuntes = String(minuntesAmount).padStart(2, '0');
  const seconds = String(secondsAmount).padStart(2, '0');

  useEffect(() => {
    if (activeTask) {
      document.title = `${minuntes}:${seconds}`;
    } else {
      document.title = 'Ignite Timer';
    }
  }, [minuntes, seconds, activeTask]);

  useEffect(() => {
    let interval: number;
    if (activeTask) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeTask.starDate
        );
        setAmountSecondsPassedContext(secondsDifference);
        if (secondsDifference >= totalSeconds) {
          markCurrentTaskAsFinishedContext();
          setAmountSecondsPassedContext(totalSeconds);
          clearInterval(interval);
        } else {
          setAmountSecondsPassedContext(secondsDifference);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [
    activeTask,
    totalSeconds,
    taskActiveId,
    setAmountSecondsPassedContext,
    markCurrentTaskAsFinishedContext
  ]);

  return (
    <>
      <ContainerDefault>
        <ContentDefault
          flexDirectionDefault={{ value: 'row' }}
          justifyContentDefault={{ value: 'center' }}
        >
          <BoxDefault
            display='flex'
            flexDirectionDefault={{ value: 'row' }}
            flexGapDefault={{ column: 1 }}
          >
            <TextDefault
              variant={{
                background: { index: 'gray', value: 'v300' },
                color: { index: 'gray', value: 'v100' }
              }}
              as={'span'}
              fontSizeDynamic={{ value: 1.6 }}
              borderRadius={{ width: 0.08 }}
              paddingX={{ valueLeft: 1, valueRight: 1 }}
              fontFamily={'Roboto Mono'}
            >
              {minuntes[0]}
            </TextDefault>
            <TextDefault
              variant={{
                background: { index: 'gray', value: 'v300' },
                color: { index: 'gray', value: 'v100' }
              }}
              as={'span'}
              fontSizeDynamic={{ value: 1.6 }}
              borderRadius={{ width: 0.08 }}
              paddingX={{ valueLeft: 1, valueRight: 1 }}
              fontFamily={'Roboto Mono'}
            >
              {minuntes[1]}
            </TextDefault>

            <TextDefault
              variant={{
                color: { index: 'green', value: 'v500' }
              }}
              as={'span'}
              fontSizeDynamic={{ value: 1.6 }}
              borderRadius={{ width: 0.08 }}
              paddingX={{ valueLeft: 0.5, valueRight: 0.5 }}
              fontFamily={'Roboto Mono'}
            >
              :
            </TextDefault>

            <TextDefault
              variant={{
                background: { index: 'gray', value: 'v300' },
                color: { index: 'gray', value: 'v100' }
              }}
              as={'span'}
              fontSizeDynamic={{ value: 1.6 }}
              borderRadius={{ width: 0.08 }}
              paddingX={{ valueLeft: 1, valueRight: 1 }}
              fontFamily={'Roboto Mono'}
            >
              {seconds[0]}
            </TextDefault>
            <TextDefault
              variant={{
                background: { index: 'gray', value: 'v300' },
                color: { index: 'gray', value: 'v100' }
              }}
              as={'span'}
              fontSizeDynamic={{ value: 1.6 }}
              borderRadius={{ width: 0.08 }}
              paddingX={{ valueLeft: 1, valueRight: 1 }}
              fontFamily={'Roboto Mono'}
            >
              {seconds[1]}
            </TextDefault>
          </BoxDefault>
        </ContentDefault>
      </ContainerDefault>
    </>
  );
}
