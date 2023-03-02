@extends('layouts.appBack')

@section('content')

<div class="container mt-4 w-80">
  <div class="row justify-content-center">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          <h1>Achievements</h1>
        </div>
        <div class="card-body">
          <ul class="list-group">
            @forelse($achievements as $achievement)
            <li class="list-group-item">
              <div class="row">
                <div class="col-10">
                  <form class="" action="{{route('achievements-update', $achievement)}}" method="post">
                    @csrf
                    @method('PUT')
                    <label class="fw-bold" for="achievement">Achievement:</label>
                    <textarea class="form-control" rows="4" required name="achievement">{{$achievement->achievement}}</textarea>
                    <div class="d-grid gap-2">
                      <button class="btn btn-outline-primary m-2" type="submit">UPDATE</button>
                    </div>
                  </form>
                </div>
                <div class="col-2 d-flex align-items-center justify-evenly">
                  <div class="d-flex flex-column w-100">
                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#confirm-delete-modal{{ $achievement->id}}" data-item-id="{{ $achievement->id}}">
                      Delete
                    </button>

                    <!-- Modal -->
                    <div class="modal fade" id="confirm-delete-modal{{ $achievement->id}}" tabindex="-1" aria-labelledby="confirm-delete-modal-label" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="confirm-delete-modal-label">Confirm Delete</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            Are you sure you want to delete this achievement?
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <form method="POST" action="{{route('achievements-delete',$achievement)}}">
                              @csrf
                              @method('DELETE')
                              <button type="submit" class="btn btn-danger">Delete</button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            @empty
            <li class="list-group-item">No achievements yet</li>
            @endforelse
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
@endsection
