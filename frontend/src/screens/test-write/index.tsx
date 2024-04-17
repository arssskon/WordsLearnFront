import React, { Fragment, MouseEventHandler, useState, useRef } from 'react';
import styles from '../test-write/styles.module.css';
import { Panel, PanelHeader, Group, PanelHeaderBack, Caption, Title, Card, Checkbox, CardGrid, Button, Div, FormItem, WriteBar, IconButton } from '@vkontakte/vkui';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
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

const Control: React.FC<Props> = ({ go, id, writebar }) => {

    const activeModule = useUnit($activeModule)
   

    const currentData = data.find(el => el.id == activeModule)

    return (
        <Panel id={id} >
            {/* <PanelHeader before={<PanelHeaderBack />}> Контрольная 1</PanelHeader> */}
            <PanelHeader
                // delimiter={"spacing"}
                before={<PanelHeaderBack onClick={() => setActiveTab('one')} />}
            >
                {currentData?.title3}
            </PanelHeader>
            <Group className={styles.stackBase} >
                <Div>
                    <CardGrid size="l">
                        <Card mode="shadow">
                            <div className={styles.text}>
                                <Title level="2" className={styles.title}>
                                    Cranium
                                </Title>
                                <Caption level="1" className={styles.caption}>
                                    ˈkreɪnɪəm
                                </Caption>
                            </div>
                        </Card>
                    </CardGrid>
                </Div>
                <Div>
                    <Card mode="outline">
                        <div className={styles.choice}>
                            <WriteBar placeholder="перевод" style={{ zIndex: 1, marginLeft: '5px' }} />
                            <IconButton style={{ zIndex: 2}}>
                                <Icon12ArrowDownCircle width={30} height={30} style={{ zIndex: 1, transform: 'rotate(180deg)', color: '#2D81E0' }} />
                            </IconButton>
                        </div>
                    </Card>
                </Div>

                <Div className={styles.btnFurther}>
                    <Button stretched size="l" onClick={() => setActiveTab("cards")}>
                        Дальше
                    </Button>
                </Div>
            </Group>
        </Panel>
    );
};

export default Control;