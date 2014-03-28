require 'sinatra'
require 'sinatra/assetpack'
require 'open-uri'
require 'json'
require 'uri'
require 'io/console'
require "sinatra/json"

class App < Sinatra::Base
	# sinatra json
	helpers Sinatra::JSON

  # asset pack config
	set :root, File.dirname(__FILE__) # You must set app root

  register Sinatra::AssetPack

  assets {
    serve '/javascripts',	from: 'public/javascripts'
    serve '/stylesheets',	from: 'public/stylesheets'

    js :deps, [
      '../components/jquery/jquery.js',
      '../components/underscore/underscore.js',
      '../components/backbone/backbone.js'
    ]

    js :app, [
      '/javascripts/application.js'
    ]

    js :index, [
      '/javascripts/models/movie.js',

      '/javascripts/collections/movies.js',

      '/javascripts/views/movie.js',
      '/javascripts/views/movies.js',
      '/javascripts/views/notfound.js',
      '/javascripts/views/search.js',
      '/javascripts/index.js'
    ]

    css :application, [
      '/stylesheets/base/*.css',
      '/stylesheets/layout/*.css',
      '/stylesheets/module/*.css',
      '/stylesheets/no-modular/*.css',
      '/stylesheets/main.css'
    ]

    js_compression  :jsmin
    css_compression :simple
  }

	def get(movie_id)
		JSON.parse(open('http://yts.re/api/movie.json?id=' + movie_id.to_s).read)
	end

	def play(torrent_url)
		IO.popen('peerflix ' + URI.escape(torrent_url.to_s) + ' -q >/dev/null 2>&1')
	end

  get '/' do
		@page_js = 'index'
    erb :index
  end

  get '/movie/:movie_id' do
		@page_js = 'movie'
		@movie = get(params[:movie_id])
    erb :movie
  end

	get '/play' do
		process = play params[:torrent_url]
		json :process_id => (process.pid + 1)
	end
end

# rerun only !!
new App.run!
