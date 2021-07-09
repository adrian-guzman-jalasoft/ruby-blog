class ArticlesController < ApplicationController
  def index
    @articles = Article.all
    @my_name = "Adrian"
  end
end
