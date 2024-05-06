import React, { Fragment, MouseEventHandler, useState, useRef } from 'react';
import styles from '../stack-cards/styles.module.css';
import { Panel, PanelHeader, Group, PanelHeaderBack, Caption, Title, Card, Checkbox, CardGrid, Button, Div } from '@vkontakte/vkui';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import data from '../../data'
import { EffectCards, FreeMode, Pagination } from 'swiper/modules';
import { setActiveTab } from '../../store/activeTab';
import { useUnit } from 'effector-react';
import { $activeModule } from '../../store/activeModule';
import ReactCardFlip from 'react-card-flip';

interface Props {
    id: string;
    go: MouseEventHandler<HTMLElement>;
}

const Stack: React.FC<Props> = ({ go, id }) => {

    const activeModule = useUnit($activeModule);
    const [isFlipped, setIsFlipped] = useState(false);
    const [dataState, setDataState] = useState(data.find(el => el.id === activeModule)?.cards || []);

    const currentData = data.find(el => el.id === activeModule);

    const handleFlip = (i: number) => {
        setDataState(prevState => {
            const newDataState = [...prevState];
            newDataState[i].isFlipped = !newDataState[i].isFlipped;
            return newDataState;
        });
    };

    return (
        <Panel id={id} >
            <PanelHeader
                before={<PanelHeaderBack onClick={() => setActiveTab('transcription')} />}
            >
                {currentData?.title}
            </PanelHeader>
            <Group className={styles.stackBase} >
                <Div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        slidesPerView={1}
                        className={styles.mySwiper}
                    >
                        {dataState.map((el, i: number) => (
                            <SwiperSlide key={el.id} onClick={() => handleFlip(i)}>
                                <ReactCardFlip containerStyle={{ height: '100%' }} flipDirection="vertical" isFlipped={!el.isFlipped}>
                                    <div className={styles.swiperSlide} style={{ display: 'flex', alignItems: 'center', color: 'black' }}>
                                        <Title level="2">
                                            {el.title}
                                        </Title>
                                    </div>

                                    <div className={styles.swiperSlide} style={{ display: 'flex', alignItems: 'center', color: 'black' }}>     
                                        <Title level="2">
                                            {el.caption}
                                        </Title>
                                    </div>
                                </ReactCardFlip>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Div className={styles.btnFurther}>
                        <Button stretched size="l" mode="tertiary" style={{ backgroundColor: 'white', color: '#2975CC' }} onClick={() => setActiveTab("choose")}>
                            Дальше
                        </Button>
                    </Div>
                </Div>
            </Group>
        </Panel>
    );
};

export default Stack;
