const express = require ('express'); 
const path = require ('path'); 

const rootDir = require('../util/path'); 

const router = express.Router(); 
//create router object

router.get('/', (req, res, next) => {
    //res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));  
    res.sendFile(path.join(rootDir,'views', 'shop.html' ))
      
 })

module.exports = router; 

/**
 without the path module, 
 res.sendFile('/views/shop.html')  
 We think that the above line would work. It is the absolute file path standing
 from the app.js point. However, it will not work, because we need absolute path 
 standing from the root directory of our operating system. 
 Thus we need another module: path module. 
 It is a node internal module. 

 __dirname holds the absolute path of our operating system standing in the working folder
   in our case /users/desktop/understandjs/69 creating html page/routes  
    thats why we have to add ../

   path.join will also detect you operating system, and concatenate with path from 
   the argument (path component) with the right slash and backslach. 
   As in linux we have slash: user/desktop/file1
   and in windows we have backslash: user\desktop\file1
 */