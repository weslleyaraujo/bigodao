(function ($, _, Backbone, Application) {
	'use-strict';

	var app, _private, elements;

	// Defines App routes
	_private = {
		collections: {
			streaming: new Application.Collections.Streaming()
		},
		views: {
		},
		routes: Backbone.Router.extend({
			routes: {
				'': 'index',
				'*actions': 'index'
			},

			index: function () {
			}
		})
	};

	app = {
		initialize: function (props) {
			app.setElemets();

			_private.collections.streaming.fetch({
				data: {
					torrent_url: TORRENT_URL
				}
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
