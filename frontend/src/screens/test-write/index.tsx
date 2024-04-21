import React, { Fragment, MouseEventHandler, useState, useRef, useEffect } from 'react';
import styles from '../test-write/styles.module.css';
import { Panel, PanelHeader, Group, PanelHeaderBack, Caption, Title, Card, Checkbox, CardGrid, Button, Div, FormItem, WriteBar, IconButton } from '@vkontakte/vkui';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { EffectCards, FreeMode, Pagination } from 'swiper/modules';
import { setActiveTab } from '../../store/activeTab';
import { Icon12ArrowDownCircle } from '@vkontakte/icons';
import { useUnit } from 'effector-react';
import data from '../../data';
import { $activeModule } from '../../store/activeModule';

interface Props {
  id: string;
  go: MouseEventHandler<HTMLElement>;
  writebar: any;
}

interface DataType {
  id: number;
  title: string;
  description: string;
  cards: {
    id: string;
    title: string;
    transcription: string;
    caption: string;
    isFlipped: boolean;
  }[];
  title2: string;
  captionTest: string;
  title3: string;
}



const Control: React.FC<Props> = ({ go, id, writebar }) => {
    const currentData = data.find(el => el.id == $activeModule.getState()) as DataType;
  const activeModule = useUnit($activeModule);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [shuffledCards, setShuffledCards] = useState<typeof currentData.cards>([]);

  useEffect(() => {
    if (currentData) {
      const shuffled = [...currentData.cards].sort(() => 0.5 - Math.random());
      setShuffledCards(shuffled);
    }
  }, [currentData]);

  const handleAnswerSubmit = () => {
    if (userAnswer.trim().toLowerCase() === shuffledCards[currentCardIndex].caption.trim().toLowerCase()) {
      setCorrectAnswers(correctAnswers + 1);
      setCurrentCardIndex(currentCardIndex + 1);
    }

    setUserAnswer('');
  };

  const handleUserAnswerChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserAnswer(event.target.value);
  };

  const currentCard = shuffledCards[currentCardIndex];

  const handleNextButtonClick = () => {
    if (correctAnswers === 1) {
      setActiveTab("cards");
    }
  };

  return (
    <Panel id={id}>
      <PanelHeader before={<PanelHeaderBack onClick={() => setActiveTab('one')} />}>
        {currentData?.title3}
      </PanelHeader>
      <Group className={styles.stackBase}>
        <Div>
          <CardGrid size="l">
            <Card mode="shadow">
              <div className={styles.text}>
                <Title level="2" className={styles.title}>
                  {currentCard?.title}
                </Title>
                <Caption level="1" className={styles.caption}>
                  {currentCard?.transcription}
                </Caption>
              </div>
            </Card>
          </CardGrid>
        </Div>
        <Div>
          <Card mode="outline">
            <div className={styles.choice}>
              <WriteBar value={userAnswer} onChange={handleUserAnswerChange} placeholder="перевод" style={{ zIndex: 1, marginLeft: '5px' }} />
              <IconButton style={{ zIndex: 2 }} onClick={handleAnswerSubmit}>
                <Icon12ArrowDownCircle width={30} height={30} style={{ zIndex: 1, transform: 'rotate(180deg)', color: '#2D81E0' }} />
              </IconButton>
            </div>
          </Card>
        </Div>
        <Div className={styles.btnFurther}>
          <Button stretched size="l" disabled={correctAnswers < 1} onClick={handleNextButtonClick}>
            Дальше
          </Button>
        </Div>
      </Group>
    </Panel>
  );
};

export default Control;
