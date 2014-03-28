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
		this.collection.on('error', this.onError, this);
		Application.Helpers.events.on('beforeFetch', this.loading, this);
	},

	getMovies: function (keywords) {
		Application.Helpers.events.trigger('beforeFetch');
		this.collection.fetch({
			data: {
				keywords: keywords
			}
		});
	},

	render: function () {
		this.$el.html('');
		if (this.collection.length) {
			this.collection.each(function (model) {
				this.addOne(model);
			}, this);
		}

		else {
			this.error();
		}
	},

	addOne: function (model) {
		var movie = new Application.Views.Movie({
			model: model
		});

		this.$el.append(movie.el);
	},

	error: function () {
		var notFound = new Application.Views.NotFound();
		this.$el.html('');
		this.$el.append(notFound.el);
	},

	loading: function () {
		var loading = Application.Helpers.template('#loading');
		this.$el.html(loading());
	}
});
