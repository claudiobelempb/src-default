import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useContext } from 'react';
import { Layout } from '../../components/Layout';
import { TasksContextRocketseat } from '../../contexts/taskContextRocketseat';

import * as Style from './History.module';
import { StatusContainer } from './History.module';

export function HistoryPage() {
  const { tasks } = useContext(TasksContextRocketseat);
  return (
    <Layout>
      {/* <pre>{JSON.stringify(tasks, null, 2)}</pre>; */}
      <Style.HistoryContainer>
        <h1>History</h1>
        <Style.HistoryContent>
          <table>
            <thead>
              <tr>
                <th>Tarefa</th>
                <th>Duração</th>
                <th>Início</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {tasks?.map(task => {
                return (
                  <tr key={task.id}>
                    <td>{task.task}</td>
                    <td>{task.minutesAmmout} minutos</td>
                    <td>
                      {formatDistanceToNow(task.starDate, {
                        addSuffix: true,
                        locale: ptBR
                      })}
                    </td>
                    <td>
                      {task.finashedDate && (
                        <StatusContainer
                          variant={{
                            background: { index: `${'green'}`, value: 'v500' }
                          }}
                        >
                          Concluida
                        </StatusContainer>
                      )}
                      {task.interruptedDate && (
                        <StatusContainer
                          variant={{
                            background: { index: `${'red'}`, value: 'v500' }
                          }}
                        >
                          Interrompído
                        </StatusContainer>
                      )}
                      {!task.finashedDate && !task.interruptedDate && (
                        <StatusContainer
                          variant={{
                            background: { index: `${'yellow'}`, value: 'v500' }
                          }}
                        >
                          Em andamento
                        </StatusContainer>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Style.HistoryContent>
      </Style.HistoryContainer>
    </Layout>
  );
}
