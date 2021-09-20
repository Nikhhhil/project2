const express=require('express')
const router=express.Router()
const Author=require('../models/author')
//all authors route
const urlencodedParser = express.urlencoded({
    limit: "10mb",
    extended: false,
  });
router.get('/',(req,res)=>{
    res.render('authors/index');
})
//new authors router
router.get('/new',(req,res)=>{
    res.render('authors/new',{ author:new Author() });
})
//create author route

router.post("/", urlencodedParser,(req, res) => {
    
    const author = new Author({
        name: req.body.name
      })

author.save((err,newAuthor)=>{
    if(err) 
    {
        res.render('authors/new', {
            author: author,
            errorMessage: 'Error creating Author'
        })
    }else{
       // res.redirect(`authors/${newAuthor,id}`)
       res.redirect(`authors`)
    }
})

  
  });
  
  
  
module.exports =router