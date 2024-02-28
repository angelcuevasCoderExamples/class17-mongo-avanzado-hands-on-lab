const {Router} = require('express');
const estudianteModel = require('../models/estudiante');

const viewsRouter = Router();

viewsRouter.get('/students', async (req, res)=>{

    let page = req.query.page || 1
    let limit = req.query.limit || 5
    let opt = {}

    if(req.query.query){
        // opt = {
        //     //description : req.query.query
        //     $or: [{description:req.query.query }, {categoria: req.query.query} ]
        // }
        //opt = JSON.parse(req.qurey.query)
    }

    let result = await estudianteModel.paginate(opt,{limit: limit, page: page, lean:true}) 
    let students = result.docs


    let nextLink =  rest.hasNextPage ? `/students?page=${rest.nextPage}` : null
    let prevLink =  rest.hasPrevPage ? `/students?page=${rest.prevPage}` : null 

    res.render('students',{students, ...result,  nextLink, prevLink})

})


module.exports = viewsRouter; 