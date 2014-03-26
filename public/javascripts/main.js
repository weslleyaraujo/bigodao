(function ($, _, Backbone, Application) {
	'use-strict';

	var app, _private, elements;

	// Defines App routes
	_private = {
		collections: {
			movies: new Application.Collections.Movies(),
		},
		views: {
			search: new Application.Views.Search()
		},
		routes: Backbone.Router.extend({
			routes : {
				'' : 'search',
				'search/:keywords' : 'search'
			},

			search: function (keywords) {
				_private.views.movies.getMovies(keywords);
			}
		})
	};

	app = {
		initialize: function () {
			app.setElemets();

			// movies view
			_private.views.movies = new Application.Views.Movies({
				collection: _private.collections.movies
			});
			
			// Router init
			new _private.routes();
			Backbone.history.start();
		},

		setElemets: function () {
			elements = elements || {};
		}
	};

	return app;

} (jQuery, _, Backbone, Application).initialize());
