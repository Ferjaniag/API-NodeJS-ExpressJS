
const Book=require("../Models/book")

// List of books 
 
 const FindAllBooks = ((req,res)=>{
    
     
 Book.find({})
        .then(books => res.status(200).json({ books }))
        .catch(error => res.status(500).json({msg: error}))
})

// Create new Book 

const createBook= ((req,res)=> {

    console.log(" body : ",req.body)
   
      const newBook=new Book() 
      newBook.id=req.body.id ;
    newBook.title=req.body.title ; 
    newBook.author=req.body.author; 
    newBook.price=req.body.price; 
      
       newBook.save().then(
      res.status(201).send({sucess:"true",message:"Book created"}) ) .catch(
 
      res.status(500).send({sucess:"false",message:error.message})  )
  
  
  
      })

  const deleteBook = ((req, res) => {

        findOneAndDelete({ _id: req.params.bookID })
        .then(  res.status(200).json({sucess:"true",message:"Book deleted"}) )
        .catch((error) => res.status(404).json({message: 'Book not found' }))



})



const updateBook = ((req, res) => {
    Book.findOneAndUpdate({ _id: req.params.bookID }, req.body, { new: true, runValidators: true })
        .then(result => res.status(200).json({ success:"true",message:result }))
        .catch((error) => res.status(404).json({msg: 'Book not found' }))
})


module.exports={FindAllBooks,createBook,updateBook,deleteBook}