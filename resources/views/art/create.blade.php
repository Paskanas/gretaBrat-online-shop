@extends('layouts.appBack')

@section('content')
<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-8">
      <div class="card">
        <div class="card-header">
          <h1>New artwork</h1>
        </div>
        <div class="card-body">
          <ul>
            <form action="{{route('arts-store')}}" method="post" enctype="multipart/form-data">
              <label for="title">Title</label>
              <input class="form-control" type="text" required name="title">
              <label for="description">Description</label>
              <input class="form-control" type="text" required name="description">
              <label for="price">Price &euro;</label>
              <input class="form-control" type="number" required name="price">
              <label for="photoPath">Photo</label>
              <input class="form-control" type="file" name="photoPath">
              <label for="hoverPhotoPath">Hover photo</label>
              <input class="form-control" type="file" name="hoverPhotoPath">
              @csrf
              <button class="btn btn-outline-primary mt-4" type="submit">Add new artwork</button>
            </form>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
@endsection
