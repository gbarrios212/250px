class Api::CommentsController < ApplicationController
    def index 
        @comments = Comment.all 
        render :index
    end
    
    def create 
        @comment = Comment.new(comment_params)
        @comment.author_id = current_user.id
        @comment.photo_id = params[:id]
        if @comment.save 
            render :index
        else 
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def update
        # @comment = Comment.find
    end

    def destroy
    end

    private
    def comment_params
       params.require(:comment).permit(:body) 
    end
end
