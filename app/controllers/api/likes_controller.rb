class Api::LikesController < ApplicationController
    def create
        @like = Like.new()
        @like.user_id = current_user.id
        @like.photo_id = params[:id]
        photo = @like.photo 

        if @like.save 
            render json: photo, include: [:likes]
        else 
            render json: @like.errors.full_messages, status: 422 
        end 
    end

    def destroy 
        @like = Like.find(params[:id])
        photo = @like.photo
        @like.destroy 

        render json: photo, include: [:likes]
    end
end
