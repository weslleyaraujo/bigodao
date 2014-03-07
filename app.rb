require 'sinatra'
require 'compass'

class App < Sinatra::Base
	configure do
		Compass.configuration do |config|
			config.project_path = File.dirname(__FILE__)
			config.sass_dir = 'public/stylesheets'
		end

		set :sass, Compass.sass_engine_options
	end

	get '/stylesheets/:name.css' do
		content_type 'text/css', :charset => 'utf-8'
		sass :"stylesheets/#{params[:name]}", Compass.sass_engine_options
	end

	get '/' do
		'Hello Bigodão'
	end
end

# rerun only
new App.run!
