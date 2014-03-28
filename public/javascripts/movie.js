(function ($, _, Backbone, Application) {
	'use-strict';

	var app, _private, elements;

	// Defines App routes
	_private = {
		collections: {
		},
		views: {
		},
		routes: Backbone.Router.extend({
		})
	};

	app = {
		initialize: function () {
			console.log('init movie');
			app.setElemets();

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
