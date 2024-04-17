import React, { Fragment, MouseEventHandler, useState } from 'react';
import styles from '../dictionary-list/styles.module.css';
import { Icon16LikeOutline } from '@vkontakte/icons';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, Image, Placeholder, PanelHeaderBack, Card, CardGrid, Title, Caption, IconButton } from '@vkontakte/vkui';
import dataWord from '../../data-words';
import { useUnit } from 'effector-react';
import { $activeModule } from '../../store/activeModule';
import { setActiveTab } from '../../store/activeTab';


interface Props {
    id: string;
    go: MouseEventHandler<HTMLElement>;
}


const Lists: React.FC<Props> = ({ id, go }) => {


    const [text, setText] = useState<string>('one'); // Initialize text state with 'one'
    // const onStoryChange = (e: any) => setActiveStory(e.currentTarget.dataset.story);
    const activeModule = useUnit($activeModule)
    console.log(activeModule);

    const currentData = dataWord.find(el => el.id == activeModule)


    return (
        <Panel id={id} >
            {/* <PanelHeader before={<PanelHeaderBack />}> {currentData?.title}</PanelHeader> */}
            <PanelHeader
                // delimiter={"spacing"}
                before={<PanelHeaderBack onClick={() => setActiveTab('two')} />}
            >
                {currentData?.title}
            </PanelHeader>
            <Group style={{ height: '1000px' }} >
                <CardGrid size="l">
                    {currentData?.cards.map(el => {
                        return (
                            <Card key={el.id} style={{height: '30px'}}>
                                <div className={styles.cards} >
                                    <Title style={{ marginLeft: '10px' }}>
                                        {el.title}
                                    </Title>
                                    
                                    <IconButton style={{ width: '21px', height: '21px', marginRight: '10px' }}>
                                        <Icon16LikeOutline width={20} height={20} style={{ marginRight: '10px' }} />
                                    </IconButton>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', zIndex: '2', justifyContent: 'center', marginTop: '-20px' }}>
                                        <Caption level="2" className={styles.caption}>
                                            {el.caption}
                                        </Caption>
                                    </div>
                            </Card>
                        )
                    })}
                </CardGrid>
            </Group>
        </Panel>

    );
};

export default Lists;