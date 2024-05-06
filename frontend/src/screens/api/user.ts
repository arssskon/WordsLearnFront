import bridge from "@vkontakte/vk-bridge";


export const fetchUser = async () => {
    console.log('hello user');
    const user = await bridge.send('VKWebAppGetUserInfo');
    console.log(user);
    
    return user;
    
  }

  export default fetchUser;