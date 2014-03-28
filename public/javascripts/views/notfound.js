/*
 * @not found
 *
 * view for handler not found movies
 * */

Application.Views = Application.Views || {};

Application.Views.NotFound = Backbone.View.extend({
	template: Application.Helpers.template('#not-found'),
	tagName: 'li',

	initialize: function () {
		this.render();
	},

	render: function () {
		this.$el.html(this.template());
	}
});
