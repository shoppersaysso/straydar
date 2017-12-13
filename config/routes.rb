Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  namespace :api do
    resources :cats, only: [:index, :create, :show, :update]
  end

  # get 'embed_json' => 'application#options', :via => [:options]


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
