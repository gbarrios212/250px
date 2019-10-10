class Api::PhotosController < ApplicationController
    def show 
        @photo = Photo.find(params[:id])
        render :show
    end

    def index 
        @photos = Photo.all 
        render :index
    end

    def create 
        photo = Photo.new(photo_params)
        photo.author_id = current_user.id
        if photo.save 
            render json: {message: "Neat!"}
        else 
            # console.log photo.errors.full_messages
            render json: photo.errors.full_messages, status: 422
        end
    end

    def update 
    end

    def delete
    end
    

    private 
    def photo_params 
        params.require(:photo).permit(:name, 
            :photoConnect, 
            :photoUrl,
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
            :description)
    end
end
