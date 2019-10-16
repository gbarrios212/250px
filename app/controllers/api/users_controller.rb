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
        @user = User.find(params[:id])
        render 'api/users/show'
    end

    def update
        @user = User.find(params[:id])
        @user.profilePicture.purge
        if @user.update(user_params) 
            # render json: {message: "Neat!"}
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
