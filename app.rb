require 'sinatra'
require 'compass'

class App < Sinatra::Base
	configure do
		set :sass, {:style => :compact, :debug_info => false}
		Compass.add_project_configuration(File.join(Sinatra::Application.root, 'config', 'compass.rb'))
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
