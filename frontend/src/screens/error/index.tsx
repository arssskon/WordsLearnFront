import React, { Fragment, MouseEventHandler } from 'react';
import styles from '../error/styles.module.css';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, Text, PanelHeaderBack, SimpleCell, Switch, Caption, AdaptivityProvider, Title } from '@vkontakte/vkui';
import { UserInfo } from '@vkontakte/vk-bridge';
import { setActivePanel } from '../../store/activePanel';

interface Props {
    id: string;
    go: MouseEventHandler<HTMLElement>;
}



const Error: React.FC<Props> = ({ id }) => (



    <Panel id={id}>
        <PanelHeader before={<PanelHeaderBack />}>Страница не найдена или не создана</PanelHeader>
        <Group style={{ height: '100px' }}>
            <AdaptivityProvider>
                <Div>
                    <Title>Такой странички еще нет, но есть смешное эмодзи с бобром🦦</Title>
                </Div>
                
            </AdaptivityProvider>
        </Group>
    </Panel>

);

export default Error;