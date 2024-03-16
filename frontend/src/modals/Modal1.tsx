import { Div, ModalPage, ModalPageHeader, PanelHeaderBack, Text } from '@vkontakte/vkui'
import React from 'react'

type Props = {
    changeActiveModal: (id: string | null) => void
    id: string
}

const Modal1 = ({ id, changeActiveModal }: Props) => {
    return (
        <ModalPage
            id={id}
            onClose={() => changeActiveModal(null)}
            header={
                <ModalPageHeader
                    before={<PanelHeaderBack label="Назад" onClick={() => changeActiveModal(null)} />}
                >
                    Фильтры
                </ModalPageHeader>
            }
        >
            <Div
            >
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
                <Text>Какой то текст</Text>
            </Div>
        </ModalPage>
    );
}

export default Modal1;