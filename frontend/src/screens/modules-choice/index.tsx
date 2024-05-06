import React, { Fragment, MouseEventHandler } from 'react';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, Image, Placeholder, PanelHeaderBack, CardGrid, Card, ContentCard, Title, Caption } from '@vkontakte/vkui';
import { UserInfo } from '@vkontakte/vk-bridge';
import { setActivePanel } from '../../store/activePanel';
import { Icon20EducationOutline, Icon56NewsfeedOutline } from '@vkontakte/icons';
import styles from '../modules-choice/styles.module.css';
import Transcription from '../transcription-words';
import { setActiveTab } from '../../store/activeTab';
import { setActiveModule } from '../../store/activeModule';
import data from '../../data'

interface Props {
    id: string;
    // go: MouseEventHandler<HTMLElement>;
}


const ModulesChoice: React.FC<Props> = ({ id }) => (

    <Panel id={id}>
        <PanelHeader>Модули</PanelHeader>
        <Group mode="plain" >
            {
                data.map(el => {
                    return (
                        <>
                            <CardGrid size="l" key={el.id}>
                                <Card className={styles.background} style={{ height: 96 }} onClick={() => {
                                    setActiveTab("transcription");
                                    setActiveModule(el.id);
                                }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div>
                                            <Title level="2" className={styles.title}>
                                                {el.title}
                                            </Title>
                                            <Caption level="1" className={styles.caption}>
                                                {el.description}
                                            </Caption>
                                        </div>
                                    </div>
                                </Card>
                                <ContentCard
                                    
                                    onClick={() => setActiveTab("control")}
                                    header={el.title2}
                                    caption={el.captionTest}
                                    maxHeight={500}>
                                    <div style={{ height: 96 }} />
                                </ContentCard>
                            </CardGrid>
                        </>
                    )
                })
            }
        </Group>
    </Panel>
);

export default ModulesChoice;


// import React, { Fragment, MouseEventHandler, useEffect, useState } from 'react';
// import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, Image, Placeholder, PanelHeaderBack, CardGrid, Card, ContentCard, Title, Caption } from '@vkontakte/vkui';
// import { UserInfo } from '@vkontakte/vk-bridge';
// import { setActivePanel } from '../../store/activePanel';
// import { Icon20EducationOutline, Icon56NewsfeedOutline } from '@vkontakte/icons';
// import styles from '../modules-choice/styles.module.css';
// import Transcription from '../transcription-words';
// import { setActiveTab } from '../../store/activeTab';
// import { setActiveModule } from '../../store/activeModule';
// import { fetchData } from '../api/api'; // Добавьте импорт fetchData

// interface Props {
//     id: string;
//     // go: MouseEventHandler<HTMLElement>;
// }

// interface ModuleData {
//   id: string;
//   title: string;
//   description: string;
//   title2: string;
//   captionTest: string;
// }

// const ModulesChoice: React.FC<Props> = ({ id }) => {
//   const [modules, setModules] = useState<ModuleData[]>([]);

//   useEffect(() => {
//     const fetchDataAsync = async () => {
//       try {
//         const result = await fetchData();
//         setModules(result);
//       } catch (error) {
//         console.error('Error fetching data: ', error);
//       }
//     };

//     fetchDataAsync();
//   }, []);

//   return (
//     <Panel id={id}>
//       <PanelHeader>Модули</PanelHeader>
//       <Group mode="plain">
//         {modules.map((el) => (
//           <>
//             <CardGrid size="l" key={el.id}>
//               <Card
//                 className={styles.background}
//                 style={{ height: 96 }}
//                 onClick={() => {
//                   setActiveTab("transcription");
//                   setActiveModule(el.id);
//                 }}
//               >
//                 <div style={{ display: "flex", justifyContent: "space-between" }}>
//                   <div>
//                     <Title level="2" className={styles.title}>
//                       {el.title}
//                     </Title>
//                     <Caption level="1" className={styles.caption}>
//                       {el.description}
//                     </Caption>
//                   </div>
//                 </div>
//               </Card>
//               <ContentCard
//                 onClick={() => setActiveTab("control")}
//                 header={el.title2}
//                 caption={el.captionTest}
//                 maxHeight={500}
//               >
//                 <div style={{ height: 96 }} />
//               </ContentCard>
//             </CardGrid>
//           </>
//         ))}
//       </Group>
//     </Panel>
//   );
// };

// export default ModulesChoice;
