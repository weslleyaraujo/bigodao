/*
 * @status
 *
 * Model to get video status
 * */

Application.Models = Application.Models || {};
Application.Models.Status = Backbone.Model.extend({
	urlRoot: Application.Config.URL.status,
	defaults : {
		status: false
	},

	initialize: function () {
		this.start();
	},

	start: function () {
		this.interval = setInterval(function () {
			this.fetch().done(function (data) {
				this.interval = clearInterval(this.interval);
				this.trigger('movie:done');
			}.bind(this)).error(function (data) {
				console.log('error', data);

			}.bind(this));

		}.bind(this), 10 * 1000);
	}
});
