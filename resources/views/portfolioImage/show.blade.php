@extends('layouts.appBack')

@section('content')
<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-10">
      <div class="card">
        <div class="card-header">
          <h4 name='title' class="nice">{{$portfolioImage->title}}</h4>
        </div>
        <div class="card-body">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-12">
                  <label for="title">Title</label>
                  <h4 name='title' class="nice">{{$portfolioImage->title}}</h4>
                  <label for="order">Order no:</label>
                  <h4 name='title' class="nice">{{$portfolioImage->order}}</h4>
                  {{-- @if($portfolioImage->isImage) --}}
                  <label class="fw-bold" for="order">Width:</label>
                  <p name='order'>{{$portfolioImage->imageDimentions[0]}}px</p>
                  <label class="fw-bold" for="order">Length:</label>
                  <p name='order'>{{$portfolioImage->imageDimentions[1]}}px</p>
                  {{-- @endif --}}
                  @if($portfolioImage->photo_path)
                  <div class="d-flex flex-column" style="max-width: {{$portfolioImage->imageDimentions[0]}}px; height:auto">
                    @if($portfolioImage->isImage)
                    <label class="fw-bold">Image:</label>
                    <div class="d-flex justify-content-center w-100">
                      <img {{--class="rounded w-100 h-100"--}} width="{{$portfolioImage->imageDimentions[0]}}" height="{{$portfolioImage->imageDimentions[1]}}" src="{{$portfolioImage->photo_path}}" alt="Image">
                    </div>
                    @elseif ($portfolioImage->isVideo)
                    <label class="fw-bold">Video:</label>
                    {{-- <div class="d-flex justify-content-center"> --}}
                    <video controls loop muted {{--width="{{$portfolioImage->imageDimentions[0]}}" height="{{$portfolioImage->imageDimentions[1]}}" --}} {{--class="rounded w-100 h-100"--}}>
                      <source src="{{$portfolioImage->photo_path}}" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    {{-- </div> --}}
                    @endif
                  </div>
                  @endif
                  {{-- <label for="city">City</label>
                  <h4 name='city' class="nice">{{$restorant->city}}</h4>
                  <label for="address">Address</label>
                  <h4 name='address' class="nice">{{$restorant->address}}</h4>
                  <label for="working_time">Working time</label>
                  <h4 name='working_time' class="nice">{{$restorant->working_time}}</h4> --}}
                </div>
                <a href="{{ URL::previous() }}" class="btn btn-outline-secondary mt-4">Back</a>
                {{-- <div class="col-4 d-flex align-items-center justify-center">

                  @if(Auth::user()->role>9)
                  <div class="d-grid gap-3 w-100">
                    <a class="btn btn-outline-success" href="{{route('restorants-edit', $restorant)}}">EDIT</a>
                <form class="delete" action="{{route('restorants-delete', $restorant)}}" method="post">
                  @csrf
                  @method('delete')
                  <div class="d-grid w-100">
                    <button class="btn btn-outline-danger" type="submit">Destroy</button>
                  </div>
                </form>
              </div>
              @endif
            </div> --}}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
@endsection
