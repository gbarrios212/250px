Rails.application.routes.draw do
  root to: 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :show] do 
      resources :photos, only: [:create, :update, :delete]
    end
    resource :session, only: [:create, :destroy]
    resources :photos, only: [:index, :show]
  end
end
