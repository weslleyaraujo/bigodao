require 'sinatra'
require 'sinatra/assetpack'
require 'open-uri'
require 'uri'
require 'io/console'
require 'sinatra/json'
require 'json'

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
      '/javascripts/application.js',

      '/javascripts/models/movie.js',

      '/javascripts/collections/movies.js',

      '/javascripts/views/movie.js',
      '/javascripts/views/movies.js',
      '/javascripts/views/notfound.js',
      '/javascripts/views/search.js',
      '/javascripts/views/player.js',

      '/javascripts/main.js'
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

	def kill(process_id)
		IO.popen('kill -9 ' + process_id.to_s)
	end

	def play(torrent_url)
		IO.popen('peerflix ' + URI.escape(torrent_url.to_s) + ' -q')
	end

  get '/' do
    erb :index
  end

	get '/play' do
		process = play params[:torrent_url]
		json :process_id => (process.pid + 1)
	end

	get '/kill' do
		kill params[:process_id]
		json :status => true
	end
end

# rerun only !!
new App.run!
