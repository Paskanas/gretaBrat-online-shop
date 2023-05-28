@extends('layouts.appBack')

@section('content')
<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-10">
      <div class="card">
        <div class="card-header">
          <h1>New achievement</h1>
        </div>
        <div class="card-body">
          <ul>
            <form action="{{route('achievements-store')}}" method="post">
              <label class="fw-bold" for="achievement">Achievement:</label>
              <textarea class="form-control" rows="4" required name="achievement"></textarea>
              @csrf
              <button class="btn btn-outline-primary mt-4" type="submit">Add new achievement</button>
            </form>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
@endsection
