var express = require('express');
var router = express.Router();
var angryBirds = require('../modules/angry_birds');

router.get('/', function(request, response){
    var mustacheVariables = {
        angryBirdsList: angryBirds.birds
    }
    response.render('./angry_birds/index', mustacheVariables);
});

router.get('/:id', function(request, response){
    var angryBirdsId = request.params.id;
    var angrybirds = angryBirds.birds[angryBirdsId];
    var angryBirdsVariables = {
        id: angryBirdsId,
        name: angrybirds.name,
        abilities: angrybirds.abilities,
        image: angrybirds.image,
        group: angrybirds.group,
        species: angrybirds.species,
        feels: angrybirds.feels
    }
    response.render('./angry_birds/show', angryBirdsVariables);
})


module.exports = router;