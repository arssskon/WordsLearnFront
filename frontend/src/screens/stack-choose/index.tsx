import React, { MouseEventHandler, useState, useEffect } from 'react';
import styles from '../stack-choose/styles.module.css';
import { Panel, PanelHeader, Group, PanelHeaderBack, Caption, Title, Card, Checkbox, CardGrid, Button, Div } from '@vkontakte/vkui';
import { setActiveTab } from '../../store/activeTab';
import { useUnit } from 'effector-react';
import data from '../../data';
import { $activeModule } from '../../store/activeModule';

interface Props {
    id: string;
    go: MouseEventHandler<HTMLElement>;
}

const Choose: React.FC<Props> = ({ go, id }) => {
    const activeModule = useUnit($activeModule);
    const [currentData, setCurrentData] = useState(data.find(el => el.id === activeModule));
    const [firstWord, setFirstWord] = useState<string>(''); // State to hold the first word
    const [checkboxes, setCheckboxes] = useState(() => new Array(currentData?.cards.length).fill(false)); // State to hold checkbox states
    const [shuffledCards, setShuffledCards] = useState(currentData?.cards || []); // State to hold shuffled cards

    useEffect(() => {
        setCurrentData(data.find(el => el.id === activeModule));
        setFirstWord(getRandomWord()); // Initialize the first word when module changes
        setCheckboxes(() => new Array(currentData?.cards.length).fill(false)); // Reset checkboxes
        setShuffledCards(currentData?.cards || []); // Reset shuffled cards
    }, [activeModule]);

    const handleAnswerSelection = (selectedTitle: string, index: number) => {
        if (selectedTitle === firstWord) { // Check if the selected word matches the first word
            const newFirstWord = getRandomWord(); // Generate a new first word
            setCurrentData((prevData) => ({ ...prevData!, caption: newFirstWord }));
            setFirstWord(newFirstWord); // Update the first word state
            setCheckboxes((prevCheckboxes) => prevCheckboxes.map(() => false)); // Reset all checkboxes
            setShuffledCards(shuffleArray(currentData?.cards || [])); // Shuffle the cards
        } else {
            setCheckboxes((prevCheckboxes) => {
                const newCheckboxes = [...prevCheckboxes];
                newCheckboxes[index] = !prevCheckboxes[index];
                return newCheckboxes;
            }); // Toggle the checkbox
        }
    };

    const getRandomWord = () => {
        const randomIndex = Math.floor(Math.random() * shuffledCards.length); // Get a random index
        return shuffledCards[randomIndex].title; // Return the word at that index
    };

    const shuffleArray = (array: any[]) => {
        // Shuffle the array randomly
        // Fisher-Yates algorithm implementation
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    return (
        <Panel id={id}>
            <PanelHeader before={<PanelHeaderBack onClick={() => setActiveTab('stack')} />}>
                {currentData?.title}
            </PanelHeader>
            <Group className={styles.stackBase}>
                <Div>
                    <CardGrid size="l" style={{marginBottom: '80px'}}>
                        <Card mode="shadow">
                            <div className={styles.text}>
                                <Title level="2" className={styles.title}>
                                    {firstWord}
                                </Title>
                            </div>
                        </Card>
                    </CardGrid>
                    {shuffledCards && shuffledCards.map((el, index) => (
                        <CardGrid size="l" key={el.id}>
                            <Card mode="outline">
                                <div className={styles.choice1}>
                                    <Title level="3" className={styles.caption}>
                                        {el.caption}
                                    </Title>
                                    <Checkbox
                                        style={{ zIndex: 1 }}
                                        onChange={() => handleAnswerSelection(el.title, index)}
                                        checked={checkboxes[index]}
                                    />
                                </div>
                            </Card>
                        </CardGrid>
                    ))}
                    <Div className={styles.btnEnd}>
                        <Button stretched size="l" onClick={() => setActiveTab('one')}>
                            Завершить
                        </Button>
                    </Div>
                </Div>
            </Group>
        </Panel>
    );
};

export default Choose;
