/*
 * @movies
 *
 * Collection for all movies
 * */
Application.Collections = Application.Collections || {};
Application.Collections.Movies = Backbone.Collection.extend({
	url: Application.Config.URL.movies,
	model: Application.Models.Movie,

	parse: function (response) {
		if (response.MovieList) {
			return response.MovieList;
		}
	}
});
