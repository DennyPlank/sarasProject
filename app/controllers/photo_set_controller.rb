class PhotoSetController < ApplicationController

    def index
    render json: PhotoSet.all
    end

end
