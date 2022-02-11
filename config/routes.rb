Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  resources :photo_set, only: [:index, :show]
end
