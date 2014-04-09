require 'sinatra'
require 'sinatra/assetpack'
require 'open-uri'
require 'uri'
require 'io/console'
require 'sinatra/json'
require 'json'
require 'timeout'
require 'net/http'

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
      '/javascripts/models/streaming.js',
      '/javascripts/models/status.js',

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

	# process
	def kill(process_id)
		IO.popen('kill -9 ' + process_id.to_s)
	end

	def play(torrent_url)
		IO.popen('peerflix ' + URI.escape(torrent_url.to_s) + ' -q')
	end

	# routes
  get '/' do
    erb :index
  end

	get '/play/' do
		process = play params[:torrent_url]
		json :process_id => (process.pid)
	end

	get '/kill' do
		# here we gonna killl them allllll
		json :status => true
	end

	get '/status' do
		begin
			bigodao = timeout(5) do
				bigode = Net::HTTP.get_response(URI.parse('http://localhost:8888'))
			end
		rescue Timeout::Error
			json :status => true
		end
	end

    get '/session' do
        'alan'
    end
end

# rerun only !!
new App.run!
