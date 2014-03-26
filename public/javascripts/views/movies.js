/*
 * @movies
 *
 * List of movies
 * */

Application.Views = Application.Views || {};
Application.Views.Movies = Backbone.View.extend({
	el: '#movie-list',
	initialize: function (props) {
		props = props || {};
		this.bind();
	},

	bind: function () {
		this.collection.on('sync', this.render, this);
		this.collection.on('reset', this.render, this);
		this.collection.on('error', this.onError, this);
	},

	getMovies: function (keywords) {
		console.log('get movies', keywords);
		this.collection.fetch({
			data: {
				keywords: keywords
			}
		});
	},

	render: function () {
		this.$el.html('');
		this.collection.each(function (model) {
			this.addOne(model);
		}, this);
	},

	addOne: function (model) {
		var movie = new Application.Views.Movie({
			model: model
		});

		this.$el.append(movie.el);
	},

	onError: function () {
		console.log('nada encontrado');
	}
});
