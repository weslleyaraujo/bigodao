(function ($, _, Backbone, Application) {
	'use-strict';

	var app, _private, elements;

	// Defines App routes
	_private = {
		collections: {
			movies: new Application.Collections.Movies()
		},
		views: {
			search: new Application.Views.Search()
		},
		routes: Backbone.Router.extend({
			routes : {
				'' : 'search',
				'search/:keywords' : 'search',
				'movie/:movie_id' : 'movie'
			},

			search: function (keywords) {
				_private.views.movies.getMovies(keywords);
			},

			movie: function (movie_id) {
				_private.models = _private.models || {};

				// do we have this movie already?
				if (_private.collections.movies.length) {
					_private.models.movie = _private.collections.movies.findWhere({
						'MovieID': movie_id
					});

				}
				else {
					_private.models.movie = new Application.Models.Movie({
						MovieID: movie_id
					});
				}
				debugger;
				// Start player main view
				_private.views.player = new Application.Views.Player({
					model: _private.models.movie
				});
			}
		})
	};

	app = {
		initialize: function () {
			// movies view
			_private.views.movies = new Application.Views.Movies({
				collection: _private.collections.movies
			});
			
			// Router init
			new _private.routes();
			Backbone.history.start();
		}
	};

	return app;

} (jQuery, _, Backbone, Application).initialize());
