require 'sinatra'
require 'sinatra/assetpack'

class App < Sinatra::Base
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
      '/javascripts/models/*.js',
      '/javascripts/collections/*.js',
      '/javascripts/views/*.js',
      '/javascripts/main.js',
    ]

    css :application, [
      '/stylesheets/base/*.css',
      '/stylesheets/layout/*.css',
      '/stylesheets/module/*.css',
      '/stylesheets/no-modular/*.css',
      '/stylesheets/main.css',
    ]

    js_compression  :jsmin
    css_compression :simple
  }

  get '/' do
    erb :index
  end
end

# rerun only
new App.run!
