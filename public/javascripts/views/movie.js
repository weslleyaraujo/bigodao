/*
 * @movie
 *
 * One movie item
 * */

Application.Views = Application.Views || {};
Application.Views.Movie = Backbone.View.extend({
	template: Application.Helpers.template('#movie-item'),
	tagName: 'li',

	initialize: function () {
		this.render();
	},

	render: function () {
		this.$el.html(this.template(this.model.toJSON()));
	}
});
