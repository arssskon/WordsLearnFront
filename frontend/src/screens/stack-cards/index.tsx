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

    const activeModule = useUnit($activeModule)
    const [isFlipped, setIsFlipped] = useState(false)
    const [dataState, setDataState] = useState(data.find(el => el.id == activeModule))

    const currentData = data.find(el => el.id == activeModule)

    const handleFlip = (i: number) => {
        const copyData = dataState;
        console.log(i)
  
        if (copyData?.cards[i].isFlipped) {
            console.log(copyData?.cards[i].isFlipped)
            copyData.cards[i].isFlipped = true;
        }
        
        setDataState(copyData)
    }   
    return (

        <Panel id={id} >
            {/* <PanelHeader before={<PanelHeaderBack />}> {currentData?.title}</PanelHeader> */}
            <PanelHeader
                // delimiter={"spacing"}
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
                            {dataState?.cards.map((el, i) => {
                                return (
                                    
                                    <SwiperSlide key={el.id} onClick={() => handleFlip(i)} >
                                       <ReactCardFlip containerStyle={{height: '100%'}} flipDirection="vertical" isFlipped={!el.isFlipped} >
                                            <div className={styles.swiperSlide} style={{ display: 'flex', alignItems: 'center' }}>{el.title}</div>
                                            <div className={styles.swiperSlide} style={{ display: 'flex', alignItems: 'center' }}>ntgdfg</div>
                                        </ReactCardFlip>
                                    </SwiperSlide>
                                )
                            })}

                        </Swiper>
                        <Div className={styles.btnFurther}>
                        <Button stretched size="l" mode="tertiary" style={{ backgroundColor: 'white' }} onClick={() => setActiveTab("choose")}>
                            Дальше
                        </Button>
                    </Div>
                    </Div>

                    
                
            </Group>
        </Panel>
    );
};

export default Stack;

