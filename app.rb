require 'sinatra'
require 'compass'

class App < Sinatra::Base
	get '/' do
		'Hello Bigodão'
	end
end

# rerun only
new App.run!
