Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.route('/', {name: 'home', controller: 'MainController'});
Router.route('/tmp', {name: 'tmp1', controller: 'MapController'});

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
  	this.render('loading', {
	    data: function () {
	      return { posts: ['post red', 'post blue'] }
	    }
  	});
  }
});