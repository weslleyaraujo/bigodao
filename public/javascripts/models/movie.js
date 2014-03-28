/*
 * @movie
 *
 * Model for one movie
 * */

Application.Models = Application.Models || {};
Application.Models.Movie = Backbone.Model.extend({
	MovieID: '',
	State: '',
	MovieUrl: '',
	MovieTitle: '',
	MovieTitleClean: '',
	MovieYear: '',
	DateUploaded: '',
	DateUploadedEpoch: '',
	Quality: '',
	CoverImage: '',
	ImdbCode: '',
	ImdbLink: '',
	Size: '',
	SizeByte: '',
	MovieRating: '',
	Genre: '',
	Uploader: '',
	UploaderUID: '',
	Downloaded: '',
	TorrentSeeds: '',
	TorrentPeers: '',
	TorrentUrl: '',
	TorrentHash: '',
	TorrentMagnetUrl: ''
});
