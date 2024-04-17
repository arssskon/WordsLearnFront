import React, { Fragment, MouseEventHandler } from 'react';
import styles from '../test-cards/styles.module.css';

import { Panel, PanelHeader, Button, Group, Div, PanelHeaderBack, Title, Card, } from '@vkontakte/vkui';
import { setActiveTab } from '../../store/activeTab';
import { useUnit } from 'effector-react';
import { $activeModule } from '../../store/activeModule';
import data from '../../data';

interface Props {
    id: string;
    go: MouseEventHandler<HTMLElement>;
}


const Cards: React.FC<Props> = ({ id }) => {
    const activeModule = useUnit($activeModule)
    const currentData = data.find(el => el.id === activeModule)

    return (
        <Panel id={id}>
            <PanelHeader
                before={<PanelHeaderBack onClick={() => setActiveTab('control')} />}
            >
                {currentData?.title3}
            </PanelHeader>
            <Group style={{}}>
                <Div>
                    {currentData?.cards.map(el => (
                        <Div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <div>
                            <Card key={el.id} mode="shadow" style={{ marginTop: '30px' }} className={styles.pressing}>
                                <div className={styles.cards}>
                                    <Title level="2" style={{}}>
                                        {el.title}
                                    </Title>
                                </div>
                            </Card>
                            </div>
                            
                            <div>
                            <Card key={el.id} mode="shadow" style={{ marginTop: '30px' }} className={styles.pressing}>
                                <div className={styles.cards}>
                                    <Title level="2" style={{}}>
                                        {el.caption}
                                    </Title>
                                </div>
                            </Card>
                            </div>
                        </Div>
                    ))}
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
