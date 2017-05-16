Rails.application.routes.draw do

  root :to => 'pages#home'

    # STATIC ROUTES
    # request_type route => controller#action
    get '/home' => 'pages#home'

    get '/albums' => 'pages#albums'

    # get '/album/create' => 'pages#createalbum'

    # # DYNAMIC ROUTES WITH VARIABLE BITS IN PARAMS (JUST LIKE SINATRA)
    # get '/albums/:color' => 'albums#color'

  end
