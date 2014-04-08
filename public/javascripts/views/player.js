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
					id: this.model.get('MovieID')
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
		this.setStreaming();
		this.$el.html(this.template(this.model.toJSON()));
	},


	bindStream: function () {
		this.streaming.on('sync', function () {
			this.status = new Application.Models.Status();
			this.status.on('movie:done', function () {
				this.play();
			}.bind(this));
		}, this);
	},

	setStreaming: function () {
		if (!this.streaming) {
			this.streaming = new Application.Models.Streaming({
				torrent_url: this.model.get('TorrentUrl')
			});
			this.bindStream();
			this.streaming.fetch();
		}
	},

	play: function () {
		this.player = document.getElementById('video-player');
		if (this.player.paused) {
			this.player.counter = Application.Helpers.parser(this.player.src).counter || 1;
			this.player.src = this.player.src + '?counter=' + this.player.counter;
		}
	}
});
