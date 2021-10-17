import CiicIcon from "./ciic-icon";

const components = {
    CiicIcon
}
const install = function(Vue){
    if(install.installed) return;
    Object.key(components).forEach(key=>{
        Vue.component(components[key].name,components[key]);
    })
}

export default install;