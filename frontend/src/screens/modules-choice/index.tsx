import React, { Fragment, MouseEventHandler } from 'react';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, Image, Placeholder, PanelHeaderBack, CardGrid, Card, ContentCard, Title, Caption } from '@vkontakte/vkui';
import { UserInfo } from '@vkontakte/vk-bridge';
import { setActivePanel } from '../../store/activePanel';
import { Icon20EducationOutline, Icon56NewsfeedOutline } from '@vkontakte/icons';
import styles from '../modules-choice/styles.module.css';

interface Props {
    id: string;
    // go: MouseEventHandler<HTMLElement>;
}


const ModulesChoice: React.FC<Props> = ({ id }) => (

    <Panel id={id}>
        <PanelHeader>Модули</PanelHeader>
        <Group mode="plain" >
            <CardGrid size="l">
                <Card className={styles.background} style={{ height: 96, }} onClick={() => setActivePanel("transcription")}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                        <Title level="2" className={styles.title}>
                            Модуль 1
                        </Title>
                        <Caption level="1" className={styles.caption}>
                            Правила чтения в латинском языке. Начальные слова.
                        </Caption>
                        </div>
                        <Button size="s" style={{ height: '35px',  marginTop: '50px', marginRight: '20px' }}>
                            Начать
                        </Button>

                    </div>

                </Card>
            </CardGrid>

            <CardGrid size="l">
                <ContentCard
                    header="Контрольная по 1 модулю"
                    caption="Для открытия необходимо пройти модуль 1"
                    maxHeight={500}>
                    <div style={{ height: 96 }} />
                </ContentCard>
            </CardGrid>

            <CardGrid size="l">
                <Card className={styles.background} style={{ height: 96, }}>
                    <div>
                        <Title level="2" className={styles.title}>
                            Модуль 2
                        </Title>
                        <Caption level="1" className={styles.caption}>
                            Правила чтения в латинском языке. Начальные слова.
                        </Caption>
                    </div>
                </Card>
            </CardGrid>

            <CardGrid size="l">
                <ContentCard
                    header="Контрольная по 2 модулю"
                    caption="Для открытия необходимо пройти модуль 2"
                    maxHeight={500}>
                    <div style={{ height: 96 }} />
                </ContentCard>
            </CardGrid>

            <CardGrid size="l">
                <Card className={styles.background} style={{ height: 96, }}>
                    <div>
                        <Title level="2" className={styles.title}>
                            Модуль 3
                        </Title>
                        <Caption level="1" className={styles.caption}>
                            Правила чтения в латинском языке. Начальные слова.
                        </Caption>
                    </div>
                </Card>
            </CardGrid>

            <CardGrid size="l">
                <ContentCard
                    header="Контрольная по 3 модулю"
                    caption="Для открытия необходимо пройти модуль 3"
                    maxHeight={500}>
                    <div style={{ height: 96 }} />
                </ContentCard>
            </CardGrid>

            <CardGrid size="l">
                <Card className={styles.background} style={{ height: 96, }}>
                    <div>
                        <Title level="2" className={styles.title}>
                            Модуль 4
                        </Title>
                        <Caption level="1" className={styles.caption}>
                            Правила чтения в латинском языке. Начальные слова.
                        </Caption>
                    </div>
                </Card>
            </CardGrid>

            <CardGrid size="l">
                <ContentCard
                    header="Контрольная по 4 модулю"
                    caption="Для открытия необходимо пройти модуль 4"
                    maxHeight={500}>
                    <div style={{ height: 96 }} />
                </ContentCard>
            </CardGrid>

            <CardGrid size="l">
                <Card className={styles.background} style={{ height: 96, }}>
                    <div>
                        <Title level="2" className={styles.title}>
                            Модуль 5
                        </Title>
                        <Caption level="1" className={styles.caption}>
                            Правила чтения в латинском языке. Начальные слова.
                        </Caption>

                    </div>
                </Card>
            </CardGrid>

            <CardGrid size="l">
                <ContentCard
                    header="Контрольная по 5 модулю"
                    caption="Для открытия необходимо пройти модуль 5"
                    maxHeight={500}>
                    <div style={{ height: 96 }} />
                </ContentCard>
            </CardGrid>
        </Group>
    </Panel>

);

export default ModulesChoice;