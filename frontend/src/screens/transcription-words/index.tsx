import React, { Fragment, MouseEventHandler, useState } from 'react';

import styles from '../transcription-words/style.module.css';

import { Panel, PanelHeader, Group, Div, TabbarItem, Tabbar, Epic, View, PanelHeaderBack, Placeholder, Caption, Title, Card, Checkbox, CardGrid, Button } from '@vkontakte/vkui';

import { useUnit } from 'effector-react';
import { $activeTab, setActiveTab } from '../../store/activeTab';
import Navigation from '../tabbar';



interface Props {
    id: string;
    go: MouseEventHandler<HTMLElement>;
}



const Transcription: React.FC<Props> = ({ go, id }) => {
    const [text, setText] = useState<string>('one'); // Initialize text state with 'one'
    // const onStoryChange = (e: any) => setActiveStory(e.currentTarget.dataset.story);
    // const activeStory = useUnit($activeTab)

    return (
        <Panel id={id} >
            <PanelHeader before={<PanelHeaderBack />}> Модуль 1</PanelHeader>
            <Group style={{ height: '1000px' }} >
                <CardGrid size="m">
                    {/* сделать разные маштабы с или м при разной адоптации */}
                    <Card>
                        <div className={styles.cards}>
                            <div className={styles.check}>
                                <Checkbox />
                            </div>
                            <Title level="2" style={{ marginTop: '60px' }}>
                                Ixia
                            </Title>
                            <Caption level="2" style={{ marginTop: '5px' }}>
                                ɪkˈsɪə
                            </Caption>
                            <Caption level="1" style={{ marginTop: '10px' }}>
                                Иксия
                            </Caption>
                        </div>
                    </Card>
                    <Card>
                        <div className={styles.cards}>
                            <div className={styles.check}>
                                <Checkbox />
                            </div>
                            <Title level="2" style={{ marginTop: '60px' }}>
                                Cranium
                            </Title>
                            <Caption level="2" style={{ marginTop: '5px' }}>
                                ˈkreɪnɪəm
                            </Caption>
                            <Caption level="1" style={{ marginTop: '10px' }}>
                                череп
                            </Caption>
                        </div>
                    </Card>
                    <Card>
                        <div className={styles.cards}>
                            <div className={styles.check}>
                                <Checkbox />
                            </div>
                            <Title level="2" style={{ marginTop: '60px' }}>
                                Caput
                            </Title>
                            <Caption level="2" style={{ marginTop: '5px' }}>
                                'ka.put
                            </Caption>
                            <Caption level="1" style={{ marginTop: '10px' }}>
                                Голова
                            </Caption>
                        </div>
                    </Card>
                    <Card>
                        <div className={styles.cards}>
                            <div className={styles.check}>
                                <Checkbox />
                            </div>
                            <Title level="2" style={{ marginTop: '60px' }}>
                                Auris
                            </Title>
                            <Caption level="2" style={{ marginTop: '5px' }}>
                                au̯.rɪs
                            </Caption>
                            <Caption level="1" style={{ marginTop: '10px' }}>
                                Ухо
                            </Caption>
                        </div>
                    </Card>
                    <Card>
                        <div className={styles.cards}>
                            <div className={styles.check}>
                                <Checkbox />
                            </div>
                            <Title level="2" style={{ marginTop: '60px' }}>
                                Cor
                            </Title>
                            <Caption level="2" style={{ marginTop: '5px' }}>
                                kor
                            </Caption>
                            <Caption level="1" style={{ marginTop: '10px' }}>
                                Сердце
                            </Caption>
                        </div>
                    </Card>
                    <Card>
                        <div className={styles.cards}>
                            <div className={styles.check}>
                                <Checkbox />
                            </div>
                            <Title level="2" style={{ marginTop: '60px' }}>
                                Corpus
                            </Title>
                            <Caption level="2" style={{ marginTop: '5px' }}>
                                'kor.pus
                            </Caption>
                            <Caption level="1" style={{ marginTop: '10px' }}>
                                Тело
                            </Caption>
                        </div>
                    </Card>
                    <Card>
                        <div className={styles.cards}>
                            <div className={styles.check}>
                                <Checkbox />
                            </div>
                            <Title level="2" style={{ marginTop: '60px' }}>
                                Cruor
                            </Title>
                            <Caption level="2" style={{ marginTop: '5px' }}>
                                'kru.or
                            </Caption>
                            <Caption level="1" style={{ marginTop: '10px' }}>
                                Кровь
                            </Caption>
                        </div>
                    </Card>
                    <Card>
                        <div className={styles.cards}>
                            <div className={styles.check}>
                                <Checkbox />
                            </div>
                            <Title level="2" style={{ marginTop: '60px' }}>
                                Crus
                            </Title>
                            <Caption level="2" style={{ marginTop: '5px' }}>
                                krus
                            </Caption>
                            <Caption level="1" style={{ marginTop: '10px' }}>
                                Нога
                            </Caption>
                        </div>
                    </Card>
                    <Button stretched size="l" style={{ marginTop: '20px' }} onClick={() => setActiveTab("stack")}>
                        Дальше
                    </Button>
                </CardGrid>
            </Group>
        </Panel>
    );
};

export default Transcription;