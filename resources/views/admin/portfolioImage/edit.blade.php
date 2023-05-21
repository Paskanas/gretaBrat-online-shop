@extends('layouts.appBack')
@section('content')

<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          <h1>Edit portfolio image</h1>
        </div>
        <div class="card-body">
          <ul>
            <div class="row">
              <div class="col-8">
                <form action="{{route('portfolioImages-update', $portfolioImage)}}" method="post" enctype="multipart/form-data">
                  <div class="form-group">
                    <label class="fw-bold" for="color_title">Title</label>
                    <input class="form-control" type="text" required name="title" value='{{$portfolioImage->title}}'>
                    <label class="fw-bold" for="create_color_input">Order</label>
                    <select class="form-control" name="order" default={{$portfolioImage->order}}>
                      <option value={{$portfolioImage->order}} selected>{{$portfolioImage->order}}</option>
                      <?php foreach ($availableOrders as $order) {
                        ?>
                      <option value=<?php echo $order ?>>
                        <?php if ($order === 0) 
                        {echo "Do not order";} 
                        else {echo $order;} ?>
                      </option>
                      <?php
                    }
                    ?>
                    </select>
                    <label class="fw-bold" for="photoPath">Photo</label>
                    <input class="form-control" type="file" name="photoPath">
                  </div>
                  @csrf
                  @method('put')
                  <button class="btn btn-outline-primary mt-4" type="submit">Save</button>
                  <a href="{{route('portfolioImages-index')}}" class="btn btn-outline-secondary mt-4">Back</a>
                </form>
              </div>
              <div class="col-4">
                @if($portfolioImage->photo_path)
                <div class="d-flex flex-column justify-content-center">
                  @if($portfolioImage->isImage)
                  <label class="fw-bold">Image:</label>
                  <img class="rounded mt-2 w-100 h-100" src="{{$portfolioImage->photo_path}}" alt={{$portfolioImage->description}}>
                  @elseif ($portfolioImage->isVideo)
                  <label class="fw-bold">Video:</label>
                  <video controls loop autoPlay muted class="rounded mt-2 w-100 h-100">
                    <source src="{{$portfolioImage->photo_path}}" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  @endif
                </div>
                <div class="d-flex justify-content-center">
                  <form action="{{route('portfolioImages-delete-picture',$portfolioImage)}}" method="post">
                    @csrf
                    @method('delete')
                    <button class="btn btn-outline-danger m-2" type="submit">Delete @if($portfolioImage->isImage)photo @elseif ($portfolioImage->isVideo)video @endif</button>

                  </form>
                </div>
                @endif
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
@endsection
