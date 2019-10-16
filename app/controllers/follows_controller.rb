class FollowsController < ApplicationController

    def create
        @follow = Follow.new()
        @follow.follower_id = current_user.id
        @follow.following_id = params[:user_id]

        if @follow.save 
            render json: @follow
        else 
            render json: @follow.errors.full_messages, status: 422 
        end 
    end

    def destroy 
        @follow = Follow.find_by(follower_id: current_user.id, following_id: params[:user_id])
        @following = User.find(params[:user_id])
        @follower = current_user
        @users = [@following, @follower]
        @follow.destroy 

        render :show
    end
end
