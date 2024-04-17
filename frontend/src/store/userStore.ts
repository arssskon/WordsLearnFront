import { createStore } from "effector";
//import { GetCurrentUserFX, CreateUserFX } from "../api/server/user/user";
// import { IServerUser } from "../interfaces/interface";

export const $user = createStore({
  userId: '',
  vkid: '',
  city: '',
  name: '',
  surName: '',
});

// $user.on(CreateUserFX.doneData, (_, newUser) => newUser);

// $user.on(GetCurrentUserFX.doneData, (_, newUser) => {
//   return newUser
// });