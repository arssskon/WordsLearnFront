import { createEvent, createStore } from "effector";

export const $activeModule = createStore<any>(0);
export const setActiveModule = createEvent<any>();

$activeModule.on(setActiveModule, (_, newModule) => newModule);