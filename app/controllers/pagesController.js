var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var pagesController = new Controller();

pagesController.main = function() {
  this.title = 'Locomotive';
  this.projectName = 'RailGaadi powered by LocomotiveJS!';
  this.render();
}

module.exports = pagesController;
