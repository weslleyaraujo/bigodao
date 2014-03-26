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

// Template helper
Application.Helpers.template = function (selector) {
	return _.template($(selector).html());
};

// setting underscore delimiters
_.templateSettings = {
	interpolate: /\{\{(.+?)\}\}/g
};
