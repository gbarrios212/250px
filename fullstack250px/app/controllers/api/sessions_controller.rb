class Api::SessionsController < ApplicationController
    def create 
    end

    def destroy 
    end

end


def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
    #   need method
      render "api/users/show"
    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
    #   need method
      render "api/users/show"
    else
      render json: ["Nobody signed in"], status: 404
    end
  end