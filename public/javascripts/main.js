var MovieFinder = (function ($, _, Backbone, Application) {
	'use-strict';
	var app, _private, elements;

	// Defines App routes
	_private = {
		movies: new Application.Collections.Movies(),
		search: new Application.Views.Search(),
		routes: Backbone.Router.extend({
			routes : {
				'' : 'search',
				'search/:keywords' : 'search'
			},

			search: function (keywords) {
				console.log('init routs', keywords);
			}

		})
	};

	app = {
		initialize: function () {
			app.setElemets();
			app.bind();
			
			// Router init
			new _private.routes();
			Backbone.history.start();
		},

		setElemets: function () {
			elements = elements || {};
		},

		bind: function () {

		}

	};

	return app;

} (jQuery, _, Backbone, Application).initialize());
