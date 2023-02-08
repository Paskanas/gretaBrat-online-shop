<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title inertia>{{ config('app.name', 'Laravel') }}</title>

  <!-- Fonts -->
  {{-- <link rel="stylesheet" href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap"> --}}
  {{-- <link rel="preconnect" href="https://fonts.googleapis.com"> --}}
  {{-- <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> --}}
  {{-- <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap" rel="stylesheet"> --}}
  {{-- <link href="https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300&family=Playfair+Display:ital@0;1&display=swap" rel="stylesheet"> --}}
  {{-- <link rel="stylesheet" href=".\css\fonts\fonts.css"> --}}
  <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
  <link rel="stylesheet" type="text/css" href="https://common.olemiss.edu/_js/sweet-alert/sweet-alert.css">

  <!-- Scripts -->
  @routes
  @viteReactRefresh
  @vite('resources/js/app.jsx')
  @inertiaHead
</head>
<body class="font-sans antialiased">
  @inertia
</body>
</html>
