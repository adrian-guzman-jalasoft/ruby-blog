class ArticlesController < ApplicationController
  def index
    @articles = Article.all
    @my_name = "Adrian"
  end

  def show
    @article = Article.find(params[:id])
  end
end
