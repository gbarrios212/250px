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
    end

    def update 
    end

    def delete
    end
    

    private 
    def photo_params 
        params.require(:photo).permit(:name)
    end
end
