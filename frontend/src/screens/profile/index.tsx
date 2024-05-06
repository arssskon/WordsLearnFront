import React, { Fragment, MouseEventHandler } from 'react';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, Image, Placeholder, PanelHeaderBack, SimpleCell } from '@vkontakte/vkui';
import { UserInfo } from '@vkontakte/vk-bridge';
import { setActivePanel } from '../../store/activePanel';
import { Icon20UserOutline, Icon24CupOutline, Icon24StatisticsOutline, Icon28PaletteOutline, Icon28SettingsOutline, Icon28UserOutline, Icon56NewsfeedOutline } from '@vkontakte/icons';
import { setActiveTab } from '../../store/activeTab';
import { fetchUser } from '../api/user'

interface Props {
    id: string;
    fetchedUser: UserInfo;
}

const Profile: React.FC<Props> = ({ id, fetchedUser }) => (
    <Panel id={id}>
        <PanelHeader>Профиль</PanelHeader>
        <Group style={{ height: '1000px' }}>
            <Group>
                <SimpleCell before={<Avatar size={96}
                    src={fetchedUser?.photo_100 || ''} alt=''/>}>
                    {fetchedUser?.first_name} {fetchedUser?.last_name}
                </SimpleCell>
            </Group>
            <Group>
                <SimpleCell
                    onClick={() => setActiveTab('setting')}
                    before={<Icon28SettingsOutline />}
                >
                    Настройки
                </SimpleCell>
                <SimpleCell
                    onClick={() => setActiveTab('achievements')}
                    before={<Icon24CupOutline />}
                >
                    Достижения
                </SimpleCell>
                <SimpleCell
                    onClick={() => setActiveTab('progress')}
                    before={<Icon24StatisticsOutline />}
                >
                    Прогресс
                </SimpleCell>
            </Group>
        </Group>
    </Panel>
);

export default Profile;
