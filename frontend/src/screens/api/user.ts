import bridge from "@vkontakte/vk-bridge";


export const fetchVkUser = async () => {
    console.log('hello user');
    const user = await bridge.send('VKWebAppGetUserInfo');
    console.log(user);
    
    return user;
    
  }