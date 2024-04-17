import React, { Fragment, MouseEventHandler } from 'react';
import styles from '../dictionary/styles.module.css';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, Image, Placeholder, PanelHeaderBack, Card, CardGrid, Title, Caption } from '@vkontakte/vkui';
import { setActiveTab } from '../../store/activeTab';
import dataWord from '../../data-words';
import { setActiveModule } from '../../store/activeModule';


interface Props {
    id: string;
    go: MouseEventHandler<HTMLElement>;
}


const Dictionary: React.FC<Props> = ({ id, go }) => (

    <Panel id={id}>
        <PanelHeader> Словарь</PanelHeader>
        <Group style={{ height: '1000px' }}>

            {
                dataWord.map(el => {

                    return (
                        <CardGrid size="m" key={el.id}>
                            <Card>
                                <div className={styles.cards}>
                                    <Title level="2" style={{ marginTop: '60px' }}>
                                        Избранное
                                    </Title>
                                    <Caption level="1" style={{ marginTop: '10px' }}>
                                        150
                                    </Caption>
                                </div>
                            </Card>
                            <Card >
                                <div className={styles.cards} onClick={() => {
                                    setActiveTab("lists"); 
                                    setActiveModule(el.id);
                                    }}>
                                    <Title level="2" style={{ marginTop: '60px' }}>
                                        {el.title}
                                    </Title>
                                    {/* <Caption level="1" style={{ marginTop: '10px' }}>
                                        50
                                    </Caption> */}
                                </div>
                            </Card>
                        </CardGrid>
                    )
                }
                )

            }

        </Group>
    </Panel>

);

export default Dictionary;