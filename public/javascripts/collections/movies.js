/*
 * @movies
 *
 * Collection for all movies
 * */
Application.Collections = Application.Collections || {};
Application.Collections.Movies = Backbone.Collection.extend({
	url: 'http://yts.re/api/list.json',
	model: Application.Models.Movie,

	parse: function (response) {
		if (response.MovieList) {
			return response.MovieList;
		}
	}
});
