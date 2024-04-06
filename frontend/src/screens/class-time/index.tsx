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

const Time: React.FC<Props> = ({ go, id }) => {
    return (
        <Div className={styles.screen}>
            <Panel id={id}>
                <PanelHeader>Время занятий</PanelHeader>
                <Div >
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        modules={[FreeMode, Pagination]}
                        className={styles.mySwiper}
                        
                    >
                        <SwiperSlide className={styles.swiperSlide} style={{display: 'flex', alignItems: 'center'}}>5 мин</SwiperSlide>
                        <SwiperSlide className={styles.swiperSlide} style={{display: 'flex', alignItems: 'center'}}>10 мин</SwiperSlide>
                        <SwiperSlide className={styles.swiperSlide} style={{display: 'flex', alignItems: 'center'}}>15 мин</SwiperSlide>
                        <SwiperSlide className={styles.swiperSlide} style={{display: 'flex', alignItems: 'center'}}>20 мин</SwiperSlide>
                        <SwiperSlide className={styles.swiperSlide} style={{display: 'flex', alignItems: 'center'}}>25 мин</SwiperSlide>
                        <SwiperSlide className={styles.swiperSlide} style={{display: 'flex', alignItems: 'center'}}>30 мин</SwiperSlide>
                        <SwiperSlide className={styles.swiperSlide} style={{display: 'flex', alignItems: 'center'}}>35 мин</SwiperSlide>
                        <SwiperSlide className={styles.swiperSlide} style={{display: 'flex', alignItems: 'center'}}>40 мин</SwiperSlide>
                        <SwiperSlide className={styles.swiperSlide} style={{display: 'flex', alignItems: 'center'}}>45 мин</SwiperSlide>
                    </Swiper>
                </Div>
                <Div className={styles.group}>
				<Button stretched size="l" onClick={() => setActivePanel("notifications")} style={{ }}>
					Дальше
				</Button>
			</Div>
            </Panel>
        </Div>
    );
};

export default Time;




