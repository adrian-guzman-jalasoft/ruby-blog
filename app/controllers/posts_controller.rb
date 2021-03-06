class PostsController < ApplicationController
    def index
        @user = User.find(params[:user_id])
        
        if @user
            respond_to do |format|
                format.json {
                    render json: @user.posts 
                }
                format.html
            end
        end
    end

    def new
       @user = User.find(params[:user_id])
       @post = Post.new
    end
    
    def create
        @user = User.find(params[:user_id])
        @post = @user.posts.create(post_params)
        redirect_to user_path(@user)
    end

    private
        def post_params
            params.require(:post).permit(:title, :content)
        end
end
