Rails.application.routes.draw do
  resources :locations

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  namespace :api do
    namespace :v1 do
      resources :cats
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
