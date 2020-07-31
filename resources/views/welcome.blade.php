<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link href="/img/favicon.ico" rel="shortcut icon" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/img/apple-touch-favicon.png"/>
        <title>Bekken Partners</title>
        <link rel="stylesheet" type="text/css" href="/css/app.css">
    </head>
    <body>

    @include('components.head')

    @yield('body')

    @include('components.footer')

     <script src="js/app.js"></script>
    </body>
</html>
