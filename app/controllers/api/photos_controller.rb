class Api::PhotosController < ApplicationController
    def show 
        @photo = Photo.find(params[:id])
        render :show
    end

    def index 
        @photos = Photo.includes(:comments).all 
        render :index
    end

    def create 
        @photo = Photo.new(photo_params)
        @photo.author_id = current_user.id
        if @photo.save 
            # render json: {message: "Neat!"}
            render :show
        else 
            render json: @photo.errors.full_messages, status: 422
        end
    end

    def update 
        @photo = Photo.find(params[:id])
        if @photo.update(photo_params) 
            # render json: {message: "Neat!"}
            render :show
        else 
            render json: @photo.errors.full_messages, status: 422
        end

    end

    def destroy
        @photo = Photo.find(params[:id])
        @photo.destroy
        
        render :show
    end
    

    private 
    def photo_params 
        params.require(:photo).permit(:name, 
            :photoConnect, 
            :photoUrl,
            :category,
            :location, 
            :lat, 
            :long, 
            :date_taken, 
            :camera, 
            :lens, 
            :focal_length, 
            :aperture, 
            :shutter_speed, 
            :iso, 
            :description
        )
    end
end
