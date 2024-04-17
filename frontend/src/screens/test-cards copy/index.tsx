import React, { Fragment, MouseEventHandler } from 'react';
import styles from '../test-cards/styles.module.css';

import { Panel, PanelHeader, Button, Group, Div, PanelHeaderBack, Title, Card, } from '@vkontakte/vkui';
import { setActiveTab } from '../../store/activeTab';
import { useUnit } from 'effector-react';
import { $activeModule } from '../../store/activeModule';
import data from '../../data';


// cards = [
//     {
//         id: 1,
//         title: 'Череп',
//         checked: false,
//     },
//     {
//         id: 2,
//         title: 'Череп 2',
//         checked: true,
//     },
// ]


interface Props {
    id: string;
    go: MouseEventHandler<HTMLElement>;
}


const Cards: React.FC<Props> = ({ id }) => {

    const activeModule = useUnit($activeModule)


    const currentData = data.find(el => el.id == activeModule)


    return (
        <Panel id={id}>
            {/* <PanelHeader before={<PanelHeaderBack />}> Контрольная 1</PanelHeader> */}
            <PanelHeader
                // delimiter={"spacing"}
                before={<PanelHeaderBack onClick={() => setActiveTab('control')} />}
            >
                {currentData?.title3}
            </PanelHeader>
            <Group style={{}}>
                <Div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div>
                        {/* {
                        cards.map(card => {
                            return (
                            < Card key = { card.id } className={styles.pressing} style = { checked ? { backgroundColor: 'red' } : {backgroundColor: 'white'} }>{card.title}</Card>
                            )
                            })
                    } */}

                        <Card mode="shadow" style={{ marginTop: '30px' }} className={styles.pressing}>
                            <div className={styles.cards}>
                                <Title level="2" style={{}}>
                                    Череп
                                </Title>
                            </div>
                        </Card>

                        <Card mode="shadow" style={{ marginTop: '30px' }} className={styles.pressing}>
                            <div className={styles.cards}>
                                <Title level="2" style={{}}>
                                    Череп
                                </Title>
                            </div>
                        </Card>

                        <Card mode="shadow" style={{ marginTop: '30px' }} className={styles.pressing}>
                            <div className={styles.cards}>
                                <Title level="2" style={{}}>
                                    Череп
                                </Title>
                            </div>
                        </Card>

                        <Card mode="shadow" style={{ marginTop: '30px' }} className={styles.pressing}>
                            <div className={styles.cards}>
                                <Title level="2" style={{}}>
                                    Череп
                                </Title>
                            </div>
                        </Card>

                        <Card mode="shadow" style={{ marginTop: '30px' }} className={styles.pressing}>
                            <div className={styles.cards}>
                                <Title level="2" style={{}}>
                                    Череп
                                </Title>
                            </div>
                        </Card>
                    </div>

                    <div>
                        {/* сделать разные маштабы с или м при разной адоптации */}
                        <Card mode="shadow" style={{ marginTop: '30px' }} className={styles.pressing}>
                            <div className={styles.cards}>
                                <Title level="2" style={{}}>
                                    Череп
                                </Title>
                            </div>
                        </Card>

                        <Card mode="shadow" style={{ marginTop: '30px' }} className={styles.pressing}>
                            <div className={styles.cards}>
                                <Title level="2" style={{}}>
                                    Череп
                                </Title>
                            </div>
                        </Card>

                        <Card mode="shadow" style={{ marginTop: '30px' }} className={styles.pressing}>
                            <div className={styles.cards}>
                                <Title level="2" style={{}}>
                                    Череп
                                </Title>
                            </div>
                        </Card>

                        <Card mode="shadow" style={{ marginTop: '30px' }} className={styles.pressing}>
                            <div className={styles.cards}>
                                <Title level="2" style={{}}>
                                    Череп
                                </Title>
                            </div>
                        </Card>

                        <Card mode="shadow" style={{ marginTop: '30px' }} className={styles.pressing}>
                            <div className={styles.cards}>
                                <Title level="2" style={{}}>
                                    Череп
                                </Title>
                            </div>
                        </Card>

                        <Card mode="shadow" style={{ marginTop: '30px' }} className={styles.pressing}>
                            <div className={styles.cards}>
                                <Title level="2" style={{}}>
                                    Череп
                                </Title>
                            </div>
                        </Card>
                    </div>
                </Div>
                <Div className={styles.btnEnd}>
                    <Button stretched size="l" onClick={() => setActiveTab("one")}>
                        Завершить
                    </Button>
                </Div>

            </Group>
        </Panel >
    )

};

export default Cards;