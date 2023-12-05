const router= require('express').Router()
const bookController=require('../Controllers/bookController') 

router.get('/books',bookController.FindAllBooks) ;
router.post('/book',bookController.createBook) ; 
router.put('/book/:bookID',bookController.updateBook) ;
router.delete('/book/:bookID',bookController.deleteBook); 




module.exports=router 