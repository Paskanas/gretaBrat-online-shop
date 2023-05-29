@extends('layouts.appBack')

@section('content')
<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-8">
      <div class="card">
        <div class="card-header">
          <h1>New portfolio image</h1>
        </div>
        <div class="card-body">
          <ul>
            <form action="{{route('portfolioImages-store')}}" method="post" enctype="multipart/form-data">
              <label for="title">Title</label>
              <input class="form-control" type="text" required name="title">
              <label for="order">Order</label>
              <select class="form-control" name="order">
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
              <label for="photoPath">Image</label>
              <input class="form-control" type="file" name="photoPath">
              @csrf
              <button class="btn btn-outline-primary mt-4" type="submit">Add new portfolio image</button>
            </form>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
@endsection
