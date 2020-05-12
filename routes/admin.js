const express = require('express'); 
const path = require('path'); 

const rootDir = require ('../util/path.js')

const router = express.Router(); 
//notice that express.Router() has to have higher case R

 router.get('/add-product', (req, res, next) => {
    //res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html')) 
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    console.log(rootDir);   
 })
 //use router.get instead of router.use because we only want to render user the form when the client
 //send me GET request. 
 
 router.post('/add-product', (req, res, next)=>{
     //notice the post path is what the 'action' in html specifies.
     console.log(req.body); //js object with key and value pair. 
     console.log('redirect');
     res.redirect('/');
 }); 

module.exports=router; 

/**
 we can not call 
 router.use()
 router.get()
 router.post()
 etc...
 */

 /**
  if the routes in this file all have the parts like this
  'admin/add-product'
  'admin/product'

  we can either specify here in this file in every middleware, or we 
  can specify this in app.js
  app.use('/admin', adminRoutes);
  so the first parameter here is a filter. it makes sre that the 
  cursor only enters adminRoutes when it has 'admin' in the request.

  */