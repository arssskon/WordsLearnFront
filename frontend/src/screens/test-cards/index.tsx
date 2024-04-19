import React, { Fragment, MouseEventHandler, useState } from 'react';
import styles from '../test-cards/styles.module.css';
import shuffle from 'lodash/shuffle';
import { useEffect } from 'react';

import { Panel, PanelHeader, Button, Group, Div, PanelHeaderBack, Title, Card, } from '@vkontakte/vkui';
import { setActiveTab } from '../../store/activeTab';
import { useUnit } from 'effector-react';
import { $activeModule } from '../../store/activeModule';
import data from '../../data';

interface Props {
    id: string;
    go: MouseEventHandler<HTMLElement>;
}

interface Card {
    id: string;
    title: string;
    caption: string;
}

const Cards: React.FC<Props> = ({ id }) => {
    const activeModule = useUnit($activeModule)
    const currentData = data.find(el => el.id === activeModule)
    const [selectedCard, setSelectedCard] = useState<Card | null>(null);
    const [leftCards, setLeftCards] = useState<Card[]>([]);
    const [rightCards, setRightCards] = useState<Card[]>([]);

    const handleCardClick = (card: Card) => {
        setSelectedCard(card);
    };

    const handleAnswerClick = (answer: Card) => {
        if (selectedCard && selectedCard.caption === answer.caption) {
            setSelectedCard(null);
            setLeftCards(leftCards.filter(card => card.id !== selectedCard.id));
            setRightCards(rightCards.filter(card => card.id !== answer.id));
        }
    };

    useEffect(() => {
        if (currentData) {
            const shuffledCards = shuffle(currentData.cards);
            setLeftCards(shuffledCards.slice(0, shuffledCards.length / 2));
            setRightCards(shuffledCards.slice(shuffledCards.length / 2));
        }
    }, [currentData]);

    return (
        <Panel id={id}>
            <PanelHeader
                before={<PanelHeaderBack onClick={() => setActiveTab('control')} />}
            >
                {currentData?.title3}
            </PanelHeader>
            <Group style={{}}>
                <Div>
                    <div>
                        {leftCards.map(el => (
                            <Card key={el.id} mode="shadow" style={{ marginTop: '30px' }} className={styles.pressing} onClick={() => handleCardClick(el)}>
                                <div className={styles.cards}>
                                    <Title level="2" style={{}}>
                                        {el.title}
                                    </Title>
                                </div>
                            </Card>
                        ))}
                    </div>
                    <div>
                        {rightCards.map(el => (
                            <Card key={el.id} mode="shadow" style={{ marginTop: '30px' }} className={styles.pressing} onClick={() => handleAnswerClick(el)}>
                                <div className={styles.cards}>
                                    <Title level="2" style={{}}>
                                        {el.caption}
                                    </Title>
                                </div>
                            </Card>
                        ))}
                    </div>
                </Div>
                <Div className={styles.btnEnd}>
                    <Button stretched size="l" onClick={() => setActiveTab("one")}>
                        Завершить
                    </Button>
                </Div>
            </Group>
        </Panel>
    )
};

export default Cards;
