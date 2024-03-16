import { CellButton, Div, ModalPage, ModalPageHeader, PanelHeaderBack, Text } from '@vkontakte/vkui'
import React from 'react'

type Props = {
    changeActiveModal: (id: string | null) => void
    id: string
    data?: any
    openFiltersModal?: any
}

const Modal2 = ({ id, changeActiveModal, data, openFiltersModal }: Props) => {
    return (
        <ModalPage
            id={id}
            onClose={() => changeActiveModal(null)}
            header={
                <ModalPageHeader
                    before={<PanelHeaderBack label="Назад" onClick={() => changeActiveModal(null)} />}
                >
                    Не фильтры
                </ModalPageHeader>
            }
        >
            <Div>
                <CellButton onClick={() => openFiltersModal('modal_1')}>
                    Открыть модальную страницу 1
                </CellButton>
                {
                    data && data.map((el: number) => <Text key={el}>{el}</Text>)
                }
            </Div>
        </ModalPage>
    );
}

export default Modal2;