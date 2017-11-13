class API::LocationsController < ApiController
  before_action :set_location, only: [:show, :update, :destroy]

  def index
    locations = Location.all

    render json: locations
  end

  def show
    render json: location
  end

  def create
    location = Location.new(location_params)

    if location.save
      render json: location, status: :created, location: location
    else
      render json: location.errors, status: :unprocessable_entity
    end
  end

  def update
    if location.update(location_params)
      render json: location
    else
      render json: location.errors, status: :unprocessable_entity
    end
  end

  def destroy
    location.destroy
  end

  private
    def set_location
      location = Location.find(params[:id])
    end

    def location_params
      params.require(:location).permit(:main_street, :cross_street)
    end
end
