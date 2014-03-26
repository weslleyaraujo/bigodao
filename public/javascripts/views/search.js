/*
 * @search
 *
 * Search view for the form
 * */

Application.Views = Application.Views || {};
Application.Views.Search = Backbone.View.extend({
	el: "#search-movie",
	events: {
		'submit': 'onSubmit'
	},

	onSubmit: function (event) {
		event && event.preventDefault();
		Backbone.history.loadUrl('search/' + this.$el.find('[name="keywords"]').val());
	}

});
