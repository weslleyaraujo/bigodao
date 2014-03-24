var MovieFinder = (function ($, _, Backbone, Application) {
	var app, _private, elements;

	_private = {
		movies: new Application.Collections.Movies(),
		search: new Application.Views.Search()
	};

	app = {
		init: function () {
			app.setElemets();
			app.bind();
		},

		setElemets: function () {
			elements = elements || {};
		},

		bind: function () {

		}
	};

	return app;

} (jQuery, _, Backbone, Application));
