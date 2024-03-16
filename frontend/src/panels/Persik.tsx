import React, { MouseEventHandler, useState } from 'react';

import { CellButton, Group, ModalRoot, Panel, PanelHeader, SplitCol, SplitLayout, View } from '@vkontakte/vkui';

import './Persik.css';
import Modal1 from '../modals/Modal1';
import Modal2 from '../modals/Modal2';

interface Props {
	id: string;
	go: MouseEventHandler<HTMLElement>;
}

const Persik: React.FC<Props> = ({ id, go }) => {

	const [activeModal, setActiveModal] = useState<string | null>(null);
	const [data, setData] = useState<number[]>([]);

	const changeActiveModal = (id: string | null) => {
		setActiveModal(id);
	};

	const openFiltersModal = (id: string, data?: number[]) => {
		changeActiveModal(id);

		if(data)
			setData(data);
	};

	const modal = (
		<ModalRoot activeModal={activeModal} onClose={() => changeActiveModal(null)}>
			{/* модальное окно-страница 1 */}
			<Modal1 id={'modal_1'} changeActiveModal={changeActiveModal} />

			{/* модальное окно-страница 2 */}
			<Modal2 id={'modal_2'} changeActiveModal={changeActiveModal} data={data} openFiltersModal={openFiltersModal}/>
		</ModalRoot>
	);

	return (
		<SplitLayout modal={modal}>
			<SplitCol>
				<View activePanel="modals">
					<Panel id="modals">
						<PanelHeader>Модальные окна</PanelHeader>
						<Group>
							<CellButton onClick={() => openFiltersModal('modal_1')}>
								Открыть модальную страницу 1
							</CellButton>
							<CellButton onClick={() => openFiltersModal('modal_2', [1,2,3,4,5])}>
								Открыть модальную страницу с массивом 1 2 3 4 5
							</CellButton>
							<CellButton onClick={() => openFiltersModal('modal_2', [2,20,25])}>
								Открыть модальную страницу с массивом 2 20 25
							</CellButton>
						</Group>
					</Panel>
				</View>
			</SplitCol>
		</SplitLayout>
	)
}

export default Persik;
