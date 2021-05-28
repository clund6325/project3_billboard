class ArtistsController < ApplicationController

  before_action :set_billboard
  before_action :set_artist, only: {:show, :edit, :update, :destroy}

  def index
    @artists = billboard.artists
    render component: 'Artists', props: {artists: @artists, billboard: @billboard}
  end

  def show
    render component: 'Artist', props: {artist: @artist, billboard: @billboard}
  end

  def new
    @artist = @billboard.artist.new(artist_params)
    if @artist.save
      redirect_to root_path
    else
      render component: 'ArtistNew', props: {artist: @artist, billboard: @billboard}
    end
  end

  def create
    @artist = @billboard.artist.new
    render component: 'ArtistNew', props: {artist: @artist, billboard: @billboard}
  end

  def edit
    render component: 'ArtistEdit', props: {artist: @artist, billboard: @billboard}
  end

  def update
    if @artist.update(artist_params)
      redirect_to root_path
    else
      render component: 'ArtistEdit', props: {artist: @artist, billboard: @billboard}
    end
  end

  def destroy
    @artist.destroy
    redirect_to root_path
  end
  private
    def set_billboard
      @billboard = Billboard.find(params[:billboard_id])
    end
    def set_artist
      @artist = Artist.find(params[:id])
    end
    def artist_params
      params.require(:artist).permit(:name)
    end
end
