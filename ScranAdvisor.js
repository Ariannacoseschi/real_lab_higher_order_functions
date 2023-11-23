const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
}
// finding the number of restaurants 

ScranAdvisor.prototype.number0fRestaurants = () => this.restaurants.length; 

//find a restaurant just by its name 
ScranAdvisor.prototype.findRestaurantsByName = name => this.restaurants.find(restaurant => restaurant.name === name );

//find array that return array of restaurants 

ScranAdvisor.prototype.findRestaurantNames = () => this.restaurants.map(restaurant => restaurant.name);

//find restaurants from Glasgow
ScranAdvisor.prototype.findRestaurantsFromGlasgow = () => this.restaurants.filter(restaurant => restaurant.location.town === 'Glasgow');

module.exports = ScranAdvisor;