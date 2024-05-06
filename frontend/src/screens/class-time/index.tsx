import 'swiper/swiper-bundle.css';
import styles from '../class-time/styles.module.css';
import { Panel, Div, PanelHeader, Button } from '@vkontakte/vkui';
import React, { MouseEventHandler, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { setActivePanel } from '../../store/activePanel';

interface Props {
    id: string;
    go: MouseEventHandler<HTMLElement>;
}

const Time: React.FC<Props> = ({ go, id }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleSlideChange = (swiper: any) => {
        setActiveIndex(swiper.activeIndex);
    };

    return (
        <Div className={styles.screen}>
            <Panel id={id}>
                <PanelHeader>Время занятий</PanelHeader>
                <Div style={{height: '100px', }}>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        onSlideChange={handleSlideChange}
                        modules={[FreeMode, Pagination]}
                        className={styles.mySwiper}
                    >
                        <SwiperSlide className={`${styles.swiperSlideNONE} ${activeIndex === -1 ? styles.activeSlide : styles.inactiveSlide}`}></SwiperSlide>
                        <SwiperSlide className={`${styles.swiperSlide} ${activeIndex === 0 ? styles.activeSlide : styles.inactiveSlide}`} style={{display: 'flex', alignItems: 'center', color: 'black'}}>5 мин</SwiperSlide>
                        <SwiperSlide className={`${styles.swiperSlide} ${activeIndex === 1 ? styles.activeSlide : styles.inactiveSlide}`} style={{display: 'flex', alignItems: 'center', color: 'black'}}>10 мин</SwiperSlide>
                        <SwiperSlide className={`${styles.swiperSlide} ${activeIndex === 2 ? styles.activeSlide : styles.inactiveSlide}`} style={{display: 'flex', alignItems: 'center', color: 'black'}}>15 мин</SwiperSlide>
                        <SwiperSlide className={`${styles.swiperSlide} ${activeIndex === 3 ? styles.activeSlide : styles.inactiveSlide}`} style={{display: 'flex', alignItems: 'center', color: 'black'}}>20 мин</SwiperSlide>
                        <SwiperSlide className={`${styles.swiperSlide} ${activeIndex === 4 ? styles.activeSlide : styles.inactiveSlide}`} style={{display: 'flex', alignItems: 'center', color: 'black'}}>25 мин</SwiperSlide>
                        <SwiperSlide className={`${styles.swiperSlide} ${activeIndex === 5 ? styles.activeSlide : styles.inactiveSlide}`} style={{display: 'flex', alignItems: 'center', color: 'black'}}>30 мин</SwiperSlide>
                        <SwiperSlide className={`${styles.swiperSlide} ${activeIndex === 6 ? styles.activeSlide : styles.inactiveSlide}`} style={{display: 'flex', alignItems: 'center', color: 'black'}}>35 мин</SwiperSlide>
                        <SwiperSlide className={`${styles.swiperSlide} ${activeIndex === 7 ? styles.activeSlide : styles.inactiveSlide}`} style={{display: 'flex', alignItems: 'center', color: 'black'}}>40 мин</SwiperSlide>
                        <SwiperSlide className={`${styles.swiperSlide} ${activeIndex === 8 ? styles.activeSlide : styles.inactiveSlide}`} style={{display: 'flex', alignItems: 'center', color: 'black'}}>45 мин</SwiperSlide>
                        <SwiperSlide className={`${styles.swiperSlideNONE} ${activeIndex === -1 ? styles.activeSlide : styles.inactiveSlide}`}></SwiperSlide>
                    </Swiper>
                </Div>
                <Div className={styles.group}>
                    <Button stretched size="l" onClick={() => setActivePanel("modules")} style={{ }}>
                        Дальше
                    </Button>
                </Div>
            </Panel>
        </Div>
    );
};

export default Time;
