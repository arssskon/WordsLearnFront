import { createEvent, createStore } from "effector";

export const $activePanel = createStore<string>('intro');
export const setActivePanel = createEvent<string>();

$activePanel.on(setActivePanel, (_, newPanel) => newPanel);
