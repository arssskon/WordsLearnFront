import React, { Fragment, MouseEventHandler } from 'react';
import PropTypes from 'prop-types';
import logo from '../../../src/logo/logo.png';
import styles from '../intro/styles.module.css';


import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, Image } from '@vkontakte/vkui';
import { UserInfo } from '@vkontakte/vk-bridge';
import { setActivePanel } from '../../store/activePanel';

interface Props {
	id: string;
	go: MouseEventHandler<HTMLElement>;
}


const Intro: React.FC<Props> = ({ go, id }) => (
	<Div className={styles.screen}>
	<Panel id={id}  >
		<Group>
			<Div >
				<img
					className={styles.logo}
					src={logo}
				/>
			</Div>
			<Div className={styles.group}>
				<Button stretched size="l" onClick={() => setActivePanel("choice")} style={{ }}>
					Дальше
				</Button>
			</Div>
		</Group>
	</Panel>
	</Div>
);

export default Intro;