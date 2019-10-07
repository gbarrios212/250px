class Api::UsersController < ApplicationController
    def create 
        @user = User.new(user_params)

        if @user.save 
            # login(@user)
            #add login method 
            render 'api/users/show'
        else 
            render json: @user.errors.full_messages, status: 422
    end

    # def show 
    # end

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end
