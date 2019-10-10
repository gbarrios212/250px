class Api::PhotosController < ApplicationController
    def show 
        @post = Post.find(params[:id])
        render :show
    end
end
