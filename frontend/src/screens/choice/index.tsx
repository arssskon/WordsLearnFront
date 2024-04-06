import { Avatar, Button, Cell, Div, Group, Header, List, Panel, SimpleCell, Checkbox, View } from "@vkontakte/vkui";
import { MouseEventHandler } from "react";
import styles from '../choice/styles.module.css';
import { setActivePanel } from "../../store/activePanel";

interface Props {
    id: string;
    go: MouseEventHandler<HTMLElement>;
}



const Сhoice: React.FC<Props> = ({ go, id }) => (
    
    <Panel id={id} className={styles.screen}>

        <Group className={styles.groop}>
            <Div >
                <Group header={<Header>Выберите интересующие вас темы</Header>} >
                    <Cell Component="label"  after={<Checkbox />}>
                        Медицина
                    </Cell>
                    <Cell Component="label"  after={<Checkbox />}>
                        Фармаология
                    </Cell>
                    <Cell Component="label"  after={<Checkbox />}>
                        Ботаника
                    </Cell>
                    <Cell Component="label" after={<Checkbox />}>
                        Гистология
                    </Cell>
                    
                </Group>
            </Div>
            <Div>
                <Button stretched size="l" onClick={() => setActivePanel("time")} >
                    Дальше
                </Button>
            </Div>
        </Group>

    {/* style={{ margin: '100% 0px 0px 0px' }} */}
    </Panel>
    
);

export default Сhoice;


