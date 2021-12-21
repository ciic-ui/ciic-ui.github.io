// 生成components json 文件
const glob = require('glob');
const fs = require('fs')

const list = {};

async function makeList(dirPath, list) {
    const files = glob.sync(`${dirPath}/**/index.js`);
    for (let file of files) {
        const component = file.split(/[/.]/)[2];
        if (component != 'index') {
            list[component] = `./${file}`
        }
    }
}

makeList('components/lib', list)

fs.writeFile('./components.json', JSON.stringify(list), (err) => {
    if (err) throw err;
});
