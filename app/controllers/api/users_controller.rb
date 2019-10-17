class Api::UsersController < ApplicationController
    def create 
        @user = User.new(user_params)

        if @user.save 
            login(@user)
            render 'api/users/show'
        else 
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show 
        @user = User.includes(:photos).find(params[:id])
        render 'api/users/show'
    end

    def index 
        @users = User.all
        render :index
    end

    def update
        @user = User.includes(:photos).find(params[:id])
        if @user.update(user_params) 
            render :show
        else 
            render json: @user.errors.full_messages, status: 422
        end

    end

    def user_params
        params.require(:user).permit(
            :username,
            :email,
            :password,
            :profilePicture,
            :profilePictureUrl,
            :bio,
            :gender,
            :city,
            :state,
            :country,
            :cameras,
            :lenses,
            :first_name,
            :last_name,
            :birthday
        )
    end
end
