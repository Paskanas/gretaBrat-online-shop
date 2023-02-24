@extends('layouts.appBack')

@section('content')
<div class="container mt-4 w-80">
  <div class="row justify-content-center">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          <h1>Portfolio images</h1>
        </div>
        @if(fmod($maxOrder[0],2)==1)
        <div class="card-body text-danger">
          <h2>Image not showing because of image number is odd</h2>
          <ul class="list-group">
            <li class="list-group-item">
              <div class="row">
                <div class="col-5">
                  <label class="fw-bold" for="title">Title:</label>
                  <p name='title'>{{$portfolioImages[$maxOrder[1]]->title}}</p>
                  <label class="fw-bold text-danger" for="order">Order number:</label>
                  <h3 class="text-danger" name='order'>{{$portfolioImages[$maxOrder[1]]->order}}</h3>
                  <label class="fw-bold" for="order">Width:</label>
                  <p name='order'>{{$portfolioImages[$maxOrder[1]]->imageDimentions[0]}}px</p>
                  <label class="fw-bold" for="order">Length:</label>
                  <p name='order'>{{$portfolioImages[$maxOrder[1]]->imageDimentions[1]}}px</p>
                </div>
                <div class="col-4 d-flex flex-column align-items-center justify-content-center">
                  @if($portfolioImages[$maxOrder[1]]->photo_path)
                  <div class="d-flex flex-column">
                    @if($portfolioImages[$maxOrder[1]]->isImage)
                    <label class="fw-bold">Image:</label>
                    <img class="rounded w-100 h-100" src="{{$portfolioImages[$maxOrder[1]]->photo_path}}" alt="Image">
                    @elseif ($portfolioImages[$maxOrder[1]]->isVideo)
                    <label class="fw-bold">Video:</label>
                    <video controls loop muted class="rounded w-100 h-100">
                      <source src="{{$portfolioImages[$maxOrder[1]]->photo_path}}" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    @endif
                  </div>
                  @endif
                </div>
                <div class="col-3 d-flex align-items-center justify-evenly">
                  <div class="d-flex flex-column w-100">
                    <a class="btn btn-outline-primary m-2" href="{{route('portfolioImages-show', $portfolioImages[$maxOrder[1]]->id)}}">SHOW</a>
                    <a class="btn btn-outline-success m-2" href="{{route('portfolioImages-edit', $portfolioImages[$maxOrder[1]])}}">EDIT</a>
                    <form class="" action="{{route('portfolioImages-delete', $portfolioImages[$maxOrder[1]])}}" method="post">
                      @csrf
                      @method('delete')
                      <div class="d-grid gap-2">
                        <button class="btn btn-outline-primary m-2" type="submit">DELETE</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        @endif
        <div class="card-body">
          <ul class="list-group">
            @forelse($portfolioImages as $portfolioImage)
            <li class="list-group-item">
              <div class="row">
                <div class="col-5">
                  <label class="fw-bold" for="title">Title:</label>
                  <p name='title'>{{$portfolioImage->title}}</p>
                  <label class="fw-bold" for="order">Order number:</label>
                  <p name='order'>{{$portfolioImage->order}}</p>
                  {{-- @if($portfolioImage->isImage) --}}
                  <label class="fw-bold" for="order">Width:</label>
                  <p name='order'>{{$portfolioImage->imageDimentions[0]}}px</p>
                  <label class="fw-bold" for="order">Length:</label>
                  <p name='order'>{{$portfolioImage->imageDimentions[1]}}px</p>
                  {{-- @endif --}}
                </div>
                <div class="col-4 d-flex flex-column align-items-center justify-content-center">
                  @if($portfolioImage->photo_path)
                  <div class="d-flex flex-column">
                    @if($portfolioImage->isImage)
                    <label class="fw-bold">Image:</label>
                    <img class="rounded w-100 h-100" src="{{$portfolioImage->photo_path}}" alt="Image">
                    @elseif ($portfolioImage->isVideo)
                    <label class="fw-bold">Video:</label>
                    <video controls loop muted class="rounded w-100 h-100">
                      <source src="{{$portfolioImage->photo_path}}" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    @endif
                  </div>
                  @endif
                </div>
                <div class="col-3 d-flex align-items-center justify-evenly">
                  <div class="d-flex flex-column w-100">
                    <a class="btn btn-outline-primary m-2" href="{{route('portfolioImages-show', $portfolioImage->id)}}">SHOW</a>
                    <a class="btn btn-outline-success m-2" href="{{route('portfolioImages-edit', $portfolioImage)}}">EDIT</a>
                    <form class="" action="{{route('portfolioImages-delete', $portfolioImage)}}" method="post">
                      @csrf
                      @method('delete')
                      <div class="d-grid gap-2">
                        <button class="btn btn-outline-primary m-2" type="submit">DELETE</button>
                      </div>
                    </form>

                  </div>
                </div>
              </div>
            </li>
            @empty
            <li class="list-group-item">No portfolioImages yet</li>
            @endforelse
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
@endsection
