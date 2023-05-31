
const router = require('express').Router();

const chefRoutes =  require('./views/chefRouter');
// const plateRoutes = require('./views/plateRouter');
// const recipeRoutes = require('./views/recipeRouter');
// const restaurantRoutes = require('./views/restaurantRouter');

router.use('/chef', chefRoutes);
// router.use('/', plateRoutes);
// router.use('/', recipeRoutes);
// router.use('/', restaurantRoutes);

module.exports = router;