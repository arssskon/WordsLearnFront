import React, { Fragment, MouseEventHandler } from 'react';
import styles from '../profile-setting/styles.module.css';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, PanelHeaderBack, SimpleCell, Switch, Caption } from '@vkontakte/vkui';
import { UserInfo } from '@vkontakte/vk-bridge';
import { setActivePanel } from '../../store/activePanel';
import { setActiveTab } from '../../store/activeTab';

interface Props {
    id: string;
    go: MouseEventHandler<HTMLElement>;
}



const Setting: React.FC<Props> = ({ id }) => (



    <Panel id={id}>
        <PanelHeader before={<PanelHeaderBack onClick={() => setActiveTab('three')} />}>Настройки</PanelHeader>
        <Group style={{ height: '1000px' }}>
            <Group header={<Header mode="secondary">Настройки</Header>}>
                <SimpleCell
                    onClick={() => setActivePanel('nothing')}
                    //expandable="auto"
                    indicator="Русский"
                >
                    Язык
                </SimpleCell>
            </Group>
            <Group header={<Header mode="secondary">Специальные возможности</Header>}>
                <SimpleCell Component="label" disabled after={<Switch disabled/>}>
                    Озвучивание текста
                </SimpleCell>
                <SimpleCell
                    onClick={() => setActivePanel('nothing')}
                    //expandable="auto"
                    indicator="Русский"
                >
                    Язык озвучивания
                </SimpleCell>
            </Group>
            <Group header={<Header mode="secondary">Уведомления</Header>}>
                <SimpleCell Component="label" disabled after={<Switch disabled/>}>
                    Уведомления
                </SimpleCell>
                <Div>
                    <Caption level="2" className={styles.caption} >
                        Уведомление о прохождении новых модулей
                    </Caption>
                </Div>
            </Group>
        </Group>
    </Panel>

);

export default Setting;