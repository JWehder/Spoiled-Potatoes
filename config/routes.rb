Rails.application.routes.draw do
  resources :reviews
  resources :movies, only: [:index, :show, :create]
  resources :users, only: [:update]
  resources :reviews, only: [:create, :update, :destroy]
  get "/search", to: "movies#search"
  post "/signup", to: "users#create"
  get "/user", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/forgot_password", to: "users#forgot_password"
  post "/reset_password", to: "users#reset_password"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
