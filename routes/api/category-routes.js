const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// All of of them
router.get('/', async (req, res) => {
  Category.findAll({
    include: [{model:Product}]
  }).then(categories=>{
    res.json(categories);
  }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"Error Dummy",err});
  });
});

//  Just to find one
router.get('/:id', async(req, res) => {
  Category.findByPk(req.params.id,{
    include: [{model:Product}]
  }).then(category=>{
    res.json(category);
  }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"Error Dummy",err});
  });
});

// create a new category
router.post('/', async(req, res) => {
  Category.create({
    category_name: req.body.category_name,
  }).then(newCategory=>{
    res.json({msg: "new category created",newCategory});
  }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"Error Dummy",err});
  });
});

 // update a category by its `id` value
router.put('/:id', async(req, res) => {
  Category.update({category_name: req.body.category_name}, {
    where: {
      id: req.params.id
    }
  }).then(updCategory=>{
    res.json({msg: "category updated",updCategory});
  }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"Error Dummy",err});
  });
});

 // delete a category by its `id` value
router.delete('/:id', async(req, res) => { 
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then(delCategory=>{
    res.json({msg: "category deleted",delCategory});
  }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"Error Dummy",err});
  });
});

module.exports = router;
