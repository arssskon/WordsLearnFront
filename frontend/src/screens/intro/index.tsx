import React, { Fragment, MouseEventHandler } from 'react';
import PropTypes from 'prop-types';
import logo from '../../../src/logo/logo.png';
import styles from '../intro/styles.module.css';


import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, Image } from '@vkontakte/vkui';
import { UserInfo } from '@vkontakte/vk-bridge';

interface Props {
	id: string;
	go: MouseEventHandler<HTMLElement>;
}


const Intro: React.FC<Props> = ({ go, id  }) => (
	<Panel id={id}  className={styles.screen} style={{margin: 'auto 0 0'}}>
		
			<Group className={styles.groop}>
				<Div >
					<img
						className={styles.logo}
						src={logo}
					/>
				</Div>
				<Div>
					<Button className={styles.btn} stretched size="l" mode="secondary" onClick={go} data-to="persik" appearance='accent'>
						Дальше
					</Button>
				</Div>
			</Group>
		
	</Panel>
);

export default Intro;