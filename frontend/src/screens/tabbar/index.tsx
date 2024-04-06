import { Icon20BookSpreadOutline, Icon20EducationOutline, Icon20UserOutline } from "@vkontakte/icons";
import { Epic, Panel, Tabbar, TabbarItem } from "@vkontakte/vkui";
import { $activeTab, setActiveTab } from "../../store/activeTab";
import { useUnit } from "effector-react";
import { MouseEventHandler, useState } from "react";


const Navigation = () => {
    


    const activeStory = useUnit($activeTab)

    return (


        <Tabbar>
            <TabbarItem onClick={(e) => setActiveTab(e.currentTarget.dataset.story)}
                selected={activeStory === 'one'}
                data-story="one" text="Модули">
                <Icon20EducationOutline />
            </TabbarItem>
            <TabbarItem selected={activeStory === 'two'} onClick={(e) => setActiveTab(e.currentTarget.dataset.story)} data-story="two" text="Словарь">
                <Icon20BookSpreadOutline />
            </TabbarItem>
            <TabbarItem selected={activeStory === 'three'} onClick={(e) => setActiveTab(e.currentTarget.dataset.story)} data-story="three" text="Профиль">
                <Icon20UserOutline />
            </TabbarItem>
        </Tabbar>
    );
};

export default Navigation;