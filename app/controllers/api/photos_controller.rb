class Api::PhotosController < ApplicationController
    def show 
        @photo = Photo.find(params[:id])
        render :show
    end

    def index 
        @photos = Photo.all 
        render :index
    end

    private 
    def photo_params 
        params.require(:photo).permit(:name)
    end
end
