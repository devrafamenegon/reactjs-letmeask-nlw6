import { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Switch from 'react-switch';

import logoImg from '../../assets/images/logo.svg';
import deleteImg from '../../assets/images/delete.svg';
import checkImg from '../../assets/images/check.svg';
import answerImg from '../../assets/images/answer.svg';

import { Button } from '../../components/Button/index';
import { Question } from '../../components/Question';
import { RoomCode } from '../../components/RoomCode/index';
import { useRoom } from '../../hooks/UseRoom';
import { database } from '../../services/firebase';

import { PageRoom } from '../../styles/room';
import { ThemeContext } from 'styled-components';

type RoomParams = {
  id: string,
}

interface Props {
  toggleTheme(): void;
}

export function AdminRoom(props: Props) {
  const history = useHistory();
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { title, questions } = useRoom(roomId);
  const { colors, titleTheme } = useContext(ThemeContext);
  const { toggleTheme } = props;

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    })

    history.push('/')
  }

  async function handleDeleteQuestion(questionId: string) {
    if(window.confirm('Tem certeza que você deseja excluir esta pergunta?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    });
  }

  async function handleHighlightQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    });
  }
  
  return(
    <PageRoom>
      <header>
        <div className="content">
          <div>
            <img src={logoImg} alt="Letmeask" />
            <Switch 
              onChange={toggleTheme}
              checked={titleTheme === 'dark'}
              checkedIcon={false}
              uncheckedIcon={false}
              height={10}
              width={40}
              handleDiameter={20}
              onHandleColor={colors.pink500}
              offHandleColor={colors.purple800}
              offColor="#e6e8eb"
              onColor={colors.gray200}
            /> 
          </div>
          
          <div>
            <RoomCode code={roomId}/>
            <Button isOutlined onClick={handleEndRoom}>Encerrar sala</Button>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          { questions.length > 0 && <span>{questions.length} perguntas</span> }
        </div>

        <div className="question-list">
          {questions.map(question => {
            return (
              <Question 
                key={question.id} 
                content={question.content} 
                author={question.author}
                isAnswered={question.isAnswered}
                isHighlighted={question.isHighlighted}>
                  
                {!question.isAnswered && (
                  <>
                    <button type="button" onClick={() => handleCheckQuestionAsAnswered(question.id)}>
                      <img src ={checkImg} alt="Marcar pergunta como respondido"/>
                    </button>

                    <button type="button" onClick={() => handleHighlightQuestion(question.id)}>
                      <img src ={answerImg} alt="Dar destaque à pergunta"/>
                    </button>
                  </>
                )}
                
                <button type="button" onClick={() => handleDeleteQuestion(question.id)}>
                  <img src ={deleteImg} alt="Remover pergunta"/>
                </button>
              </Question>
            );
          })}
        </div>
      </main>
    </PageRoom>
  );
}