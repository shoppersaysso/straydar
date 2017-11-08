Rails.application.routes.draw do
  resources :locations
  resources :cats
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  scope '/api' do
    resources :cats
    resources :locations
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end