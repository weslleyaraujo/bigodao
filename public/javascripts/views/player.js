/*
 * @movie player
 *
 * Movie full item
 * */

Application.Views = Application.Views || {};
Application.Views.Player = Backbone.View.extend({
	el: '#main-player',
	template: Application.Helpers.template('#player'),

	initialize: function () {
		// bind events
		this.bind();

		// Is this model fetched already?
		if (_.isEmpty(this.model.get('TorrentUrl'))) {
			this.model.fetch({
				data: {
					MovieID: this.model.get('MovieID')
				}
			});
		}
		else {
			this.render();
		}
	},

	bind: function () {
		this.model.on('sync', this.render, this);
		this.model.on('reset', this.render, this);
	},

	render: function () {
		this.$el.html(this.template(this.model.toJSON()));
	}
});
