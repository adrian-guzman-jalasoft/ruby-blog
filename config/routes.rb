Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "articles#index"

  #articles
  # get "/articles", to: "articles#index"
  # get "/articles/:id", to: "articles#show"
  resources :articles do
    resources :comments
  end

  #users
  # get "/users", to: "users#index"
  # get "/users/:id", to: "users#show"
  resources :users do
    resources :posts
  end
end
