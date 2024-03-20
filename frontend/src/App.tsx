import React, { useState, useEffect, ReactNode, MouseEventHandler } from 'react';
import bridge, { UserInfo } from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Start_screen from './screens/intro'
import Intro from './screens/intro';

interface Data {
    [key: string]: any;
}

const ROUTES = {
	INTRO: 'intro',
	HOME: 'home'
}

const STOREGE_KEYS = {
	STATUS: 'status',
}



const App = () => {
	const [activePanel, setActivePanel] = useState('intro');
	const [fetchedUser, setUser] = useState<UserInfo | undefined>();
	const [popout, setPopout] = useState<ReactNode | null>(<ScreenSpinner size='large' />);
	const [UserHasSeanIntro, setUserHasSeanIntro] = useState(false);


	useEffect(() => {
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			const storageData = await bridge.send('VKWebAppStorageGet', {
				keys: Object.values(STOREGE_KEYS)
			});
			console.log(storageData);
			const data: Data = {};
			// const data = {};
			storageData.keys.forEach( ({ key, value}) => {
				try {
					data[key] = value ? JSON.parse(value) : {};
					switch (key) {
						case STOREGE_KEYS.STATUS:
							if (data[key].hasSeanIntro) {
								setActivePanel(ROUTES.HOME);
								setUserHasSeanIntro(true)
							}
							break;
						default:
							break;
					}
				} catch(error) {
					console.log(error);
				}
					
			})
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go: MouseEventHandler<HTMLElement> = e => {
		setActivePanel(e.currentTarget.dataset.to ?? 'intro');
	};

	const viewIntro = async function () {
		try {
			await bridge.send('VKWebAppStorageSet', {
				key: STOREGE_KEYS.STATUS,
				value: JSON.stringify({
					hasSeenInrto: true
				})
			});
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<ConfigProvider>
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout popout={popout}>
						<SplitCol>
							<View activePanel={activePanel}>
								<Intro id={ROUTES.INTRO} go={go} />
								
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
