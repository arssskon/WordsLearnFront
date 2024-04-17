import React, { Fragment, MouseEventHandler, useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../modules-home/styles.module.css';
import { Panel, PanelHeader, Group, Div, TabbarItem, Tabbar, Epic, View, PanelHeaderBack, Placeholder, List } from '@vkontakte/vkui';
import { Icon28MessageOutline, Icon28NewsfeedOutline, Icon28UserCircleOutline, Icon56NewsfeedOutline } from '@vkontakte/icons';
import { useUnit } from 'effector-react';
import { $activeTab, setActiveTab } from '../../store/activeTab';
import Navigation from '../tabbar';
import Dictionary from '../dictionary';
import Profile from '../profile';
import ModulesChoice from '../modules-choice';
import Transcription from '../transcription-words';
import Stack from '../stack-cards';
import Choose from '../stack-choose'
import Control from '../test-write';
import Cards from '../test-cards';
import Lists from '../dictionary-list';
import Setting from '../profile-setting/indet';
import Error from '../error';

interface Props {
    id: string;
    go: MouseEventHandler<HTMLElement>;
}



const Modules: React.FC<Props> = ({ go, id }) => {
    const [text, setText] = useState<string>('one'); // Initialize text state with 'one'
    // const onStoryChange = (e: any) => setActiveStory(e.currentTarget.dataset.story);

   
    const activeStory = useUnit($activeTab)

    return (
        <Panel id={id}>            
            <Epic
                activeStory={activeStory}
                tabbar={
                    <Navigation/>
                } >
                <ModulesChoice key='one' id='one'/>
               
                <Dictionary key='two' id='two' go={go}/>
                
                <Profile key='three' id='three'/>  

                <Transcription id='transcription' go={go} />

                <Stack id='stack' go={go} />

                <Choose id='choose' go={go} />

                <Control id='control' go={go} writebar={undefined} />

                <Cards id='cards' go={go} />

                <Lists id='lists' go={go} />

                <Setting id='setting' go={go} />

                <Error id='error' go={go} />


            </Epic>
        </Panel>
    );
};

export default Modules;