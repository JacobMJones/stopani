const allImages = {};

const importImages = (path, type) => {
  path.keys().map((item, index) => {
    allImages[type]
      ? allImages[type].push(item.replace('./', ''))
      : allImages[type] = [item.replace('./', '')]
  });

}

//* Ideally we wouldn't need all these importImages but require.context doesn't accept variables
importImages(require.context('../images/noseBottom', false, /\.(png|jpe?g|svg|gif)$/), 'noseBottom');
importImages(require.context('../images/topEye', false, /\.(png|jpe?g|svg|gif)$/), 'topEye');



console.log('all Images', allImages)

export default allImages

//***Why this doesnt work, require.context cannot accept variables for the path, something to do with webpack compiling or something */
// const makeAllImages = (folderNames)=>{

//   for (const type of folderNames) {
//    importImages(require.context(`../images/${type}`, false), type)
//   //  importImages(require.context('../images/topEye', false), type)
//   } 
// }

// const getFolderNames = () => {

//   let folderNames = require.context('../images', true).keys().map(item => { return item.split('/')[1] })
//   folderNames = folderNames.filter((a, b) => folderNames.indexOf(a) === b)
//   console.log(folderNames)
// makeAllImages(folderNames)
// return folderNames

// }


