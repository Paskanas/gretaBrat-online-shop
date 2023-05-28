@extends('layouts.appBack')

@section('content')
<div class="container mt-4 w-80">
  <div class="row justify-content-center">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          <h1>Artworks</h1>
        </div>
        <div class="card-body">
          <ul class="list-group">
            @forelse($arts as $art)
            <li class="list-group-item">
              <div class="row">
                <div class="col-5">
                  <label class="fw-bold" for="title">Title:</label>
                  <p name='title'>{{$art->title}}</p>
                  <label class="fw-bold" for="description">Description:</label>
                  <p name='description'>{{$art->description}}</p>
                  <label class="fw-bold" for="price">Price &euro;:</label>
                  <p name='price'>{{$art->price}}</p>
                </div>
                <div class="col-4 d-flex flex-column align-items-center justify-content-center">
                  @if($art->photo_path)
                  <div class="d-flex flex-column">
                    <label class="fw-bold">Main photo:</label>
                    <img class="rounded w-100 h-100" src="{{$art->photo_path}}" alt="Main photo">
                  </div>
                  @endif
                  @if($art->hover_photo_path)
                  <div class="d-flex flex-column justify-content-end">
                    <label class="fw-bold">Hover photo:</label>
                    <img class="rounded w-100 h-100" src="{{$art->hover_photo_path}}" alt="Hover photo">
                  </div>
                  @endif
                </div>
                <div class="col-3 d-flex align-items-center justify-evenly">
                  <div class="d-flex flex-column w-100">
                    <a class="btn btn-outline-primary m-2" href="{{route('arts-show', $art->id)}}">SHOW</a>
                    {{-- not need if different page --}}
                    @if(Auth::user()?->role??0 >9)
                    <a class="btn btn-outline-success m-2" href="{{route('arts-edit', $art)}}">EDIT</a>
                    <form class="" action="{{route('arts-delete', $art)}}" method="post">
                      @csrf
                      @method('delete')
                      <div class="d-grid gap-2">
                        <button class="btn btn-outline-primary m-2" type="submit">DELETE</button>
                      </div>
                    </form>
                    @endif
                  </div>
                </div>
              </div>
            </li>
            @empty
            <li class="list-group-item">No arts yet</li>
            @endforelse
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
@endsection
