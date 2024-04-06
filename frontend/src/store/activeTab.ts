import { createEvent, createStore } from "effector";

export const $activeTab = createStore<any>('one');
export const setActiveTab = createEvent<any>();

$activeTab.on(setActiveTab, (_, newTab) => newTab);