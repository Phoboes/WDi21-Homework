class ItemsController < ApplicationController

  def map

  end

  def index
    @all_items = Item.all


    if params[:search]

      if params[:distance]
        distance = params[:distance].to_i
        unfiltered_items = Item.search params[:search]
        @all_items = check_distance( unfiltered_items, distance )
      else
        @all_items =  Item.search params[:search]
      end
      # raise "hell"

    else
      @all_items = Item.all.order("created_at DESC")
    end
  end

  def show
    @item = Item.find_by(id: params['id'])
    @comment = Comment.new
    @comment.user == @current_user
  end

  def new
    @item = Item.new
  end

  def create
    item = Item.create( item_params )
    cloudinary = Cloudinary::Uploader.upload( params[ "item" ][ "link" ] )
    item.image = cloudinary["url"]
    item.user = @current_user
    item.save

    redirect_to "/items/#{item.id}"


  end

  def edit
    @item = Item.find_by( id: params['id'] )
  end

  def update
    item = Item.find_by( id: params['id'] )
    item.update( item_params )

    if params[:item][:link]
      cloudinary = Cloudinary::Uploader.upload( params[ "item" ][ "link" ] )
      item.image = cloudinary["url"]
    end
    item.save

    redirect_to "/items/#{item.id}"
  end

  def destroy
    item = Item.find_by( id: params['id'] )
    item.destroy
    redirect_to "/items"
  end

  private
  def item_params
    params.require(:item).permit(:user_id, :name, :description, :collected, :image)
  end

  def check_distance(items, distance = 5)
    output = []

    items.each do |item|
      user = item.user
      item_distance = Geocoder::Calculations.distance_between( "#{ @current_user.latitude }, #{ @current_user.longitude }", "#{ user.latitude }, #{ user.longitude }" )
      if item_distance <= distance
        output << item
      end
    end
    return output
  end
end
