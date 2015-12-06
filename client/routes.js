Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.route('/', {name: 'home', controller: 'MainController'});
Router.route('/map', {name: 'map', controller: 'MapController'});

MainController = RouteController.extend({
  action: function() {
  	this.render('home', {
	    data: function () {
	      return { posts: ['post red', 'post blue'] }
	    }
  	});
  }
});
MapController = RouteController.extend({
  action: function() {
  	this.render('map', {
	    data: function () {
	      return { posts: ['post red', 'post blue'] }
	    }
  	});
  }
});


Router.onBeforeAction('loading');