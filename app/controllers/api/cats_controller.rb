class API::CatsController < ApiController

  def index
    cats = Cat.all

    render json: cats, status: 200
  end

  def show
    cat = Cat.find(params[:id])
    render json: cat, status: 200
  end

  def create
    cat = Cat.create(cat_params)

    if cat.save
      render json: cat, status: 200
    else
      render json: cat.errors, status: :unprocessable_entity
    end
  end

  def update
    cat = Cat.find(params[:id])
    if cat.update(cat_params)
      render json: cat, status: 200
    else
      render json: cat.errors, status: :unprocessable_entity
    end
  end

  private
    def set_cat
      cat = Cat.find(params[:id])
    end

    def cat_params
      params.require(:cat).permit(:color, :age, :details, :photo, :address, :likes)
    end
end
