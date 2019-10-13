class Api::LikesController < ApplicationController
    def create
        @like = Like.new()
        @like.user_id = current_user.user_id
        @like.photo_id = params[:id]
    end

    def destroy 
        @like = Like.find(params[:id])
        photo = @like.photo
        @like.destroy 

        render json: photo
    end
end
