import React, { Fragment, MouseEventHandler } from 'react';


import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, Image, Placeholder, PanelHeaderBack, SimpleCell } from '@vkontakte/vkui';
import { UserInfo } from '@vkontakte/vk-bridge';
import { setActivePanel } from '../../store/activePanel';
import { Icon20UserOutline, Icon24CupOutline, Icon24StatisticsOutline, Icon28PaletteOutline, Icon28SettingsOutline, Icon28UserOutline, Icon56NewsfeedOutline } from '@vkontakte/icons';
import { setActiveTab } from '../../store/activeTab';

interface Props {
    id: string;

}



const Profile: React.FC<Props> = ({ id }) => (

    

    <Panel id={id}>
        <PanelHeader before={<PanelHeaderBack />}>Профиль</PanelHeader>
        <Group style={{ height: '1000px' }}>
            <Group>
                <SimpleCell before={<Avatar size={96} />}>Имя фамилия</SimpleCell>
            </Group>
            <Group>
                <SimpleCell
                    onClick={() => setActiveTab('setting')}
                    //expandable="auto"
                    before={<Icon28SettingsOutline />}
                >
                    Настройки
                </SimpleCell>
                <SimpleCell
                    onClick={() => setActiveTab('error')}
                    //expandable="auto"
                    before={<Icon24CupOutline />}
                >
                    Достижения
                </SimpleCell>
                <SimpleCell
                    onClick={() => setActiveTab('error')}
                    // expandable="auto"
                    before={<Icon24StatisticsOutline />}
                >
                    Прогресс
                </SimpleCell>
            </Group>
        </Group>
    </Panel>

);

export default Profile;
