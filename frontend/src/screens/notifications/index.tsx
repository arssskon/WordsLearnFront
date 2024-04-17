import 'swiper/swiper-bundle.css'; // Импортируем стили Swiper

import styles from '../class-time/styles.module.css';
import { Panel, Div, PanelHeader, Button } from '@vkontakte/vkui';
import React, { MouseEventHandler, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { setActivePanel } from '../../store/activePanel';



interface Props {
    id: string;
    go: MouseEventHandler<HTMLElement>;
}

const Notifications: React.FC<Props> = ({ go, id }) => {
    return (
        <Div className={styles.screen}>
            <Panel id={id}>
                <PanelHeader>Уведомления</PanelHeader>
                <Div style={{ zIndex: '1', backgroundColor: '#F5F5F5', height: '40px', width: '100%', opacity: '70%', marginTop: '80px'}}>

                </Div>
                <Div className={styles.timers} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', zIndex: '2', marginTop: '-80px'}}>
                    <Div>
                        <Swiper
                            // direction={'vertical'}
                            // //slidesPerView={3}
                            // spaceBetween={30}
                            // modules={[FreeMode, Pagination]}
                            // className={styles.mySwiper}
                            direction={'vertical'}
                            slidesPerView={5}
                            // spaceBetween={3}
                            modules={[FreeMode, Pagination]}
                            className={styles.mySwiper}


                        >
                            <SwiperSlide className={styles.swiperSlide} style={{display: 'flex' ,alignItems: 'center'}}>5 мин</SwiperSlide>
                            <SwiperSlide className={styles.swiperSlide} style={{display: 'flex' ,alignItems: 'center'}}>10 мин</SwiperSlide>
                            <SwiperSlide className={styles.swiperSlide} style={{display: 'flex' ,alignItems: 'center'}}>15 мин</SwiperSlide>
                            <SwiperSlide className={styles.swiperSlide} style={{display: 'flex' ,alignItems: 'center'}}>20 мин</SwiperSlide>
                            <SwiperSlide className={styles.swiperSlide} style={{display: 'flex' ,alignItems: 'center'}}>25 мин</SwiperSlide>
                            <SwiperSlide className={styles.swiperSlide} style={{display: 'flex' ,alignItems: 'center'}}>30 мин</SwiperSlide>
                            <SwiperSlide className={styles.swiperSlide} style={{display: 'flex' ,alignItems: 'center'}}>35 мин</SwiperSlide>
                            <SwiperSlide className={styles.swiperSlide} style={{display: 'flex' ,alignItems: 'center'}}>40 мин</SwiperSlide>
                            <SwiperSlide className={styles.swiperSlide} style={{display: 'flex' ,alignItems: 'center'}}>45 мин</SwiperSlide>
                        </Swiper>
                    </Div>
                    <Div >
                        <Swiper
                            direction={'vertical'}
                            // slidesPerView={3}
                            spaceBetween={30}
                            freeMode={true}
                            modules={[FreeMode, Pagination]}
                            className={styles.mySwiper}

                        >
                            <SwiperSlide className={styles.swiperSlide} style={{display: 'flex' ,alignItems: 'center'}}>5 мин</SwiperSlide>
                            <SwiperSlide className={styles.swiperSlide} style={{display: 'flex' ,alignItems: 'center'}}>10 мин</SwiperSlide>
                            <SwiperSlide className={styles.swiperSlide} style={{display: 'flex' ,alignItems: 'center'}}>15 мин</SwiperSlide>
                            <SwiperSlide className={styles.swiperSlide} style={{display: 'flex' ,alignItems: 'center'}}>20 мин</SwiperSlide>
                            <SwiperSlide className={styles.swiperSlide} style={{display: 'flex' ,alignItems: 'center'}}>25 мин</SwiperSlide>
                            <SwiperSlide className={styles.swiperSlide} style={{display: 'flex' ,alignItems: 'center'}}>30 мин</SwiperSlide>
                            <SwiperSlide className={styles.swiperSlide} style={{display: 'flex' ,alignItems: 'center'}}>35 мин</SwiperSlide>
                            <SwiperSlide className={styles.swiperSlide} style={{display: 'flex' ,alignItems: 'center'}}>40 мин</SwiperSlide>
                            <SwiperSlide className={styles.swiperSlide} style={{display: 'flex' ,alignItems: 'center'}}>45 мин</SwiperSlide>
                        </Swiper>
                    </Div>
                </Div>
                <Div className={styles.group}>
                    <Button stretched size="l" onClick={() => setActivePanel("modules")} style={{}}>
                        Дальше
                    </Button>
                </Div>
            </Panel>
        </Div>
    );
};

export default Notifications;