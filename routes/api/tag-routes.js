const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

 // find all tags
router.get('/', async(req, res) => {
  Tag.findAll({
    include: [{model:Product}]
  }).then(tags=>{
    res.json(tags);
  }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"Error Dummy",err});
  });
});

// find a single tag by its `id`
router.get('/:id', async(req, res) => {
  Tag.findByPk(req.params.id,{
    include: [{model:Product}]
  }).then(tag=>{
    res.json(tag);
  }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"Error Dummy",err});
  });
});

// create a new tag
router.post('/', async(req, res) => {
  Tag.create({
    tag_name: req.body.tag_name,
  }).then(newTag=>{
    res.json({msg: "new tag created",newTag});
  }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"Error Dummy",err});
  });
});

 // update a tag's name by its `id` value
router.put('/:id', async(req, res) => {
  Tag.update({tag_name: req.body.tag_name}, {
    where: {
      id: req.params.id
    }
  }).then(updTag=>{
    res.json({msg: "tag updated",updTag});
  }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"Error Dummy",err});
  });
});

// delete on tag by its `id` value
router.delete('/:id', async(req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then(delTag=>{
    res.json({msg: "tag deleted",delTag});
  }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"Error Dummy",err});
  });
});

module.exports = router;
