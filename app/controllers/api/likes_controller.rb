class Api::LikesController < ApplicationController

    def create
        @like = Like.new()
        @like.user_id = current_user.id
        @like.photo_id = params[:photo_id]
        photo = @like.photo 

        if @like.save 
            # render json: photo, include: [:likes]
            render json: @like
        else 
            render json: @like.errors.full_messages, status: 422 
        end 
    end

    def destroy 
        # debugger
        @like = Like.find_by(user_id: current_user.id, photo_id: params[:photo_id])
        @photo = @like.photo
        @user = current_user
        @like.destroy 

        # render json: photo, include: [:likes]
        render :show
    end
end
