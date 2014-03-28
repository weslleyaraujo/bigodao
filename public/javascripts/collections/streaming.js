/*
 * @streaming
 *
 * Collection for start video streaming
 * */
Application.Collections = Application.Collections || {};
Application.Collections.Streaming = Backbone.Collection.extend({
	url: Application.Config.URL.streaming,
	model: Application.Models.Process
});
