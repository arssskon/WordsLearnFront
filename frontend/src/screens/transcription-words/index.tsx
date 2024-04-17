import React, { Fragment, MouseEventHandler, useState } from 'react';

import styles from '../transcription-words/style.module.css';

import { Panel, PanelHeader, Group, Div, TabbarItem, Tabbar, Epic, View, PanelHeaderBack, Placeholder, Caption, Title, Card, Checkbox, CardGrid, Button } from '@vkontakte/vkui';

import { useUnit } from 'effector-react';
import { $activeTab, setActiveTab } from '../../store/activeTab';
import Navigation from '../tabbar';
import { $activeModule, setActiveModule } from '../../store/activeModule';
// import { data }  from '../../data'
import data from '../../data'


interface Props {
    id: string;
    go: MouseEventHandler<HTMLElement>;
}



const Transcription: React.FC<Props> = ({ go, id }) => {
    const [text, setText] = useState<string>('one'); // Initialize text state with 'one'
    // const onStoryChange = (e: any) => setActiveStory(e.currentTarget.dataset.story);
    const activeModule = useUnit($activeModule)
    console.log(activeModule);

    const currentData = data.find(el => el.id == activeModule)


    return (
        <Panel id={id} >
            {/* <PanelHeader before={<PanelHeaderBack />}> {currentData?.title}</PanelHeader> */}
            <PanelHeader
                // delimiter={"spacing"}
                before={<PanelHeaderBack onClick={() => setActiveTab('one')} />}
            >
                {currentData?.title}
            </PanelHeader>
            <Group style={{ height: '1000px' }} >
                <CardGrid size="m">
                    {currentData?.cards.map(el => {
                        return (
                            <Card key={el.id}>
                                <div className={styles.cards}>
                                    <div className={styles.check}>
                                        <Checkbox />
                                    </div>
                                    <Title level="2" style={{ marginTop: '60px' }}>
                                        {el.title}
                                    </Title>
                                    <Caption level="2" style={{ marginTop: '5px' }}>
                                        {el.transcription}
                                    </Caption>
                                    <Caption level="1" style={{ marginTop: '10px' }}>
                                        {el.caption}
                                    </Caption>
                                </div>
                            </Card>
                        )
                    })}
                </CardGrid>

                <Div>
                    <Button stretched size="l" style={{ marginTop: '20px' }} onClick={() => setActiveTab("stack")}>
                        Дальше
                    </Button>
                </Div>

            </Group>
        </Panel>
    );
};

export default Transcription;