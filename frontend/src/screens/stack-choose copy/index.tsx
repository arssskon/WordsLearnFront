import React, { Fragment, MouseEventHandler, useState, useRef } from 'react';
import styles from '../stack-choose/styles.module.css';
import { Panel, PanelHeader, Group, PanelHeaderBack, Caption, Title, Card, Checkbox, CardGrid, Button, Div, FormItem } from '@vkontakte/vkui';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { EffectCards, FreeMode, Pagination } from 'swiper/modules';
import { setActiveTab } from '../../store/activeTab';
import { useUnit } from 'effector-react';
import data from '../../data';
import { $activeModule } from '../../store/activeModule';

interface Props {
    id: string;
    go: MouseEventHandler<HTMLElement>;
}

const Сhoose: React.FC<Props> = ({ go, id }) => {

    const activeModule = useUnit($activeModule)
   

    const currentData = data.find(el => el.id == activeModule)

    return (
        <Panel id={id}>
            {/* <PanelHeader before={<PanelHeaderBack />}> Модуль 1</PanelHeader> */}
            <PanelHeader
                // delimiter={"spacing"}
                before={<PanelHeaderBack onClick={() => setActiveTab('stack')} />}
            >
                {currentData?.title}
            </PanelHeader>
            <Group className={styles.stackBase} >
                <Div>
                    <CardGrid size="l">
                        <Card mode="shadow">
                            <div className={styles.text}>
                                <Title level="2" className={styles.title}>
                                    Череп
                                </Title>
                                <Caption level="1" className={styles.caption}>
                                    {/* Для транскрипции */}
                                </Caption>
                            </div>
                        </Card>
                    </CardGrid>

                    <Card mode="outline">
                        <div className={styles.choice1}>
                            <Title level="3" className={styles.caption}>
                                Chamaemelon
                            </Title>
                            <Checkbox style={{zIndex: 1}}/>
                        </div>
                    </Card>

                    <Card mode="outline">
                        <div className={styles.choice}>
                            <Title level="3" className={styles.caption}>
                                Auris
                            </Title>
                            <Checkbox style={{zIndex: 1}}/>
                        </div>
                    </Card>

                    <Card mode="outline">
                        <div className={styles.choice}>
                            <Title level="3" className={styles.caption}>
                                Ixia
                            </Title>
                            <Checkbox style={{zIndex: 1}}/>
                        </div>
                    </Card>

                    <Card mode="outline">
                        <div className={styles.choice}>
                            <Title level="3" className={styles.caption}>
                                Cranium
                            </Title>
                            <Checkbox style={{zIndex: 1}}/>
                        </div>
                    </Card>

                    <Card mode="outline">
                        <div className={styles.choice}>
                            <Title level="3" className={styles.caption}>
                                Caput
                            </Title>
                            <Checkbox style={{zIndex: 1}}/>
                        </div>
                    </Card>

                    <Div className={styles.btnEnd}>
                        <Button stretched size="l" onClick={() => setActiveTab("one")}>
                            Завершить
                        </Button>
                    </Div>
                </Div>
            </Group>
        </Panel>
    );
};

export default Сhoose;