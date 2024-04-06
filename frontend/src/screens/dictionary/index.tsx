import React, { Fragment, MouseEventHandler } from 'react';
import styles from '../dictionary/styles.module.css';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, Image, Placeholder, PanelHeaderBack, Card, CardGrid, Title, Caption } from '@vkontakte/vkui';


interface Props {
    id: string;

}


const Dictionary: React.FC<Props> = ({ id }) => (

    <Panel id={id}>
        <PanelHeader> Словарь</PanelHeader>
        <Group style={{ height: '1000px' }}>
            <CardGrid size="m">
                {/* сделать разные маштабы с или м при разной адоптации */}
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
                <Card>
                    <div className={styles.cards}>
                        <Title level="2" style={{ marginTop: '60px' }}>
                            Медицина
                        </Title>
                        <Caption level="1" style={{ marginTop: '10px' }}>
                            50
                        </Caption>
                    </div>
                </Card>
                <Card>
                    <div className={styles.cards}>
                        <Title level="2" style={{ marginTop: '60px' }}>
                            Мышцы 
                        </Title>
                        <Caption level="1" style={{ marginTop: '10px' }}>
                            50
                        </Caption>
                    </div>
                </Card>
                <Card>
                    <div className={styles.cards}>
                        <Title level="2" style={{ marginTop: '60px' }}>
                            Фармакология
                        </Title>
                        <Caption level="1" style={{ marginTop: '10px' }}>
                            50
                        </Caption>
                    </div>
                </Card>
                <Card>
                    <div className={styles.cards}>
                        <Title level="2" style={{ marginTop: '60px' }}>
                            Ботаника
                        </Title>
                        <Caption level="1" style={{ marginTop: '10px' }}>
                            50
                        </Caption>
                    </div>
                </Card>
                <Card>
                    <div className={styles.cards}>
                        <Title level="2" style={{ marginTop: '60px' }}>
                            Эмбриология
                        </Title>
                        <Caption level="1" style={{ marginTop: '10px' }}>
                            50
                        </Caption>
                    </div>
                </Card>
                <Card>
                    <div className={styles.cards}>
                        <Title level="2" style={{ marginTop: '60px' }}>
                            Гистология
                        </Title>
                        <Caption level="1" style={{ marginTop: '10px' }}>
                            50
                        </Caption>
                    </div>
                </Card>
                <Card>
                    <div className={styles.cards}>
                        <Title level="2" style={{ marginTop: '60px' }}>
                            Кости
                        </Title>
                        <Caption level="1" style={{ marginTop: '10px' }}>
                            50
                        </Caption>
                    </div>
                </Card>
                <Card>
                    <div className={styles.cards}>
                        <Title level="2" style={{ marginTop: '60px' }}>
                            Хирургия
                        </Title>
                        <Caption level="1" style={{ marginTop: '10px' }}>
                            50
                        </Caption>
                    </div>
                </Card>
                <Card>
                    <div className={styles.cards}>
                        <Title level="2" style={{ marginTop: '60px' }}>
                            Гененетика 
                        </Title>
                        <Caption level="1" style={{ marginTop: '10px' }}>
                            50
                        </Caption>
                    </div>
                </Card>
                <Card>
                    <div className={styles.cards}>
                        <Title level="2" style={{ marginTop: '60px' }}>
                            Паталогия
                        </Title>
                        <Caption level="1" style={{ marginTop: '10px' }}>
                            50
                        </Caption>
                    </div>
                </Card>
                <Card>
                    <div className={styles.cards}>
                        <Title level="2" style={{ marginTop: '60px' }}>
                            Анестезиология
                        </Title>
                        <Caption level="1" style={{ marginTop: '10px' }}>
                            50
                        </Caption>
                    </div>
                </Card>
            </CardGrid>
        </Group>
    </Panel>

);

export default Dictionary;