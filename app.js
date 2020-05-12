const express = require ('express'); 
const bodyParser = require ('body-parser'); 
const path = require ('path'); 


const app = express(); 

const adminRoutes = require('./routes/admin'); 
const shopRoutes = require('./routes/shop'); 

app.use(bodyParser.urlencoded({extended: false})); 
app.use(express.static(path.join(__dirname, 'public'))); 

app.use('/', (req, res, next) => {
   console.log("This always runs!");
   next(); 
   
})

 app.use(adminRoutes); 

 app.use(shopRoutes); 

 app.use((req, res, next)=> {
   res.status(404).sendFile(path.join(__dirname, 'views', '404.html')); 
 })
 //notice how the method can chain. 

 app.listen(3000); 




/**
     <link rel="stylesheet" href="/css/main.css">
     this is the tag in html file. 
     the path is not /public/css/main.css
     because this line
      app.use(express.static(path.join(__dirname, 'public')));
      will direct the path directly to folder of public. 
      So the path in the link shall be parts which comes after public, 
      but not pulic.  
 */
