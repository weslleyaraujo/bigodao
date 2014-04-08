/*
 * @streaming
 *
 * Model for streaming process
 * */
Application.Models = Application.Models || {};
Application.Models.Streaming = Backbone.Model.extend({
	urlRoot: Application.Config.URL.streaming,
	defaults : {
		process_id: '',
		torrent_url: ''
	},

	url: function () {
		return this.urlRoot + '/?torrent_url=' + this.get('torrent_url');
	}
});
