/*
 * @application
 *
 * The application object to serve models, collections, views and helpers
 * */

var Application = Application || {};

Application.Models = {};
Application.Views = {};
Application.Collections = {};
Application.Helpers = {};
Application.Config = {
	URL: {
		movies: 'http://yts.re/api/list.json',
		movie: 'http://yts.re/api/movie.json'
	}
};

// Template helper
Application.Helpers.template = function (selector) {
	return _.template($(selector).html());
};

// setting underscore delimiters
_.templateSettings = {
	interpolate: /\{\{(.+?)\}\}/g
};

// Events helper
Application.Helpers.events = _.extend({}, Backbone.Events);
