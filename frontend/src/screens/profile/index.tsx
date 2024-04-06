import React, { Fragment, MouseEventHandler } from 'react';


import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, Image, Placeholder, PanelHeaderBack } from '@vkontakte/vkui';
import { UserInfo } from '@vkontakte/vk-bridge';
import { setActivePanel } from '../../store/activePanel';
import { Icon20UserOutline, Icon56NewsfeedOutline } from '@vkontakte/icons';

interface Props {
    id: string;

}


const Profile: React.FC<Props> = ({ id }) => (

    <Panel id={id}>
        <PanelHeader before={<PanelHeaderBack />}>Профиль</PanelHeader>
        <Group style={{ height: '1000px' }}>
            <Placeholder icon={<Icon20UserOutline width={56} height={56} />} />
        </Group>
    </Panel>

);

export default Profile;
