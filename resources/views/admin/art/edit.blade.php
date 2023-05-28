@extends('layouts.appBack')
@section('content')

<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          <h1>Edit artwork</h1>
        </div>
        <div class="card-body">
          <ul>
            <div class="row">
              <div class="col-8">
                <form action="{{route('arts-update', $art)}}" method="post" enctype="multipart/form-data">
                  <div class="form-group">
                    <label class="fw-bold" for="color_title">Title</label>
                    <input class="form-control" type="text" required name="title" value='{{$art->title}}'>
                    <label class="fw-bold" for="create_color_input">Description</label>
                    <input class="form-control" type="text" required name="description" value='{{$art->description}}'>
                    <label class="fw-bold" for="create_color_input">Price</label>
                    <input class="form-control" type="number" required name="price" value={{$art->price}}>
                    <label class="fw-bold" for="photoPath">Photo</label>
                    <input class="form-control" type="file" name="photoPath">
                    <label class="fw-bold" for="hoverPhotoPath">Hover photo</label>
                    <input class="form-control" type="file" name="hoverPhotoPath">
                  </div>
                  @csrf
                  @method('put')
                  <button class="btn btn-outline-primary mt-4" type="submit">Save</button>
                </form>
              </div>
              <div class="col-4">
                @if($art->photo_path)
                <div class="d-flex flex-column justify-content-center">
                  <label class="fw-bold">Main photo:</label>
                  <img class="rounded mt-2 w-100 h-100" src="{{$art->photo_path}}" alt="Main photo">
                </div>
                <div class="d-flex justify-content-center">
                  <form action="{{route('arts-delete-picture',$art)}}" method="post">
                    @csrf
                    @method('delete')
                    <button class="btn btn-outline-danger m-2" type="submit">Delete photo</button>
                  </form>
                </div>
                @endif
                @if($art->hover_photo_path)
                <div class="d-flex flex-column justify-content-center">
                  <label class="fw-bold">Hover photo:</label>
                  <img class="rounded mt-2 w-100 h-100" src="{{$art->hover_photo_path}}" alt="Main photo">
                </div>
                <div class="d-flex justify-content-center">
                  <form action="{{route('arts-delete-picture',$art)}}" method="post">
                    @csrf
                    @method('delete')
                    <button class="btn btn-outline-danger m-2" type="submit">Delete photo</button>
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
