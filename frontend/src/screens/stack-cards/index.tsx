import React, { Fragment, MouseEventHandler, useState, useRef } from 'react';
import styles from '../stack-cards/styles.module.css';
import { Panel, PanelHeader, Group, PanelHeaderBack, Caption, Title, Card, Checkbox, CardGrid, Button, Div } from '@vkontakte/vkui';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { EffectCards, FreeMode, Pagination } from 'swiper/modules';

interface Props {
    id: string;
    go: MouseEventHandler<HTMLElement>;
}

const Stack: React.FC<Props> = ({ go, id }) => {

    return (
        <Panel id={id} >
            <PanelHeader before={<PanelHeaderBack />}> Модуль 1</PanelHeader>
            <Group className={styles.stackBase} >
                <Div style={{ display: 'flex', alignItems: 'center' }}>
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards,]}
                        // direction={'vertical'}
                        slidesPerView={2}
                        // spaceBetween={3}
                        // modules={[FreeMode, Pagination]}
                        className={styles.mySwiper}

                    >
                        <SwiperSlide className={styles.swiperSlide} style={{ display: 'flex', alignItems: 'center' }}>ноги</SwiperSlide>
                        <SwiperSlide className={styles.swiperSlide} style={{ display: 'flex', alignItems: 'center' }}>руки</SwiperSlide>
                        <SwiperSlide className={styles.swiperSlide} style={{ display: 'flex', alignItems: 'center' }}>голова</SwiperSlide>
                        <SwiperSlide className={styles.swiperSlide} style={{ display: 'flex', alignItems: 'center' }}>тело</SwiperSlide>
                        <SwiperSlide className={styles.swiperSlide} style={{ display: 'flex', alignItems: 'center' }}>сердце</SwiperSlide>
                        <SwiperSlide className={styles.swiperSlide} style={{ display: 'flex', alignItems: 'center' }}>палец</SwiperSlide>
                        <SwiperSlide className={styles.swiperSlide} style={{ display: 'flex', alignItems: 'center' }}>печень</SwiperSlide>
                        <SwiperSlide className={styles.swiperSlide} style={{ display: 'flex', alignItems: 'center' }}>зубы</SwiperSlide>
                        <SwiperSlide className={styles.swiperSlide} style={{ display: 'flex', alignItems: 'center' }}>глаз</SwiperSlide>
                    </Swiper>
                </Div>



            </Group>
        </Panel>
    );
};

export default Stack;
