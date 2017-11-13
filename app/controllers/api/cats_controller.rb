class API::CatsController < ApiController
  before_action :set_cat, only: [:show, :update, :destroy]

  def index
    cats = Cat.all

    render json: cats, status: 200
  end

  def show
    render json: cat
  end

  def create
    cat = Cat.new(cat_params)

    if cat.save
      render json: cat
    else
      render json: cat.errors, status: :unprocessable_entity
    end
  end

  def update
    if cat.update(cat_params)
      render json: cat
    else
      render json: cat.errors, status: :unprocessable_entity
    end
  end

  def destroy
    cat.destroy
  end

  private
    def set_cat
      cat = Cat.find(params[:id])
    end

    def cat_params
      params.require(:cat).permit(:color, :age, :details, :photo)
    end
end
