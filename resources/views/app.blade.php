<!DOCTYPE html>
<html lang="{{str_replace('_', '-', app()->getLocale())}}">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="{{mix('css/app.css')}}" rel="stylesheet">
    <title>{{env('APP_NAME')}}</title>
</head>
<body>
    <noscript>
      <strong>We're sorry but {{env('APP_NAME')}} doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
    <script src="{{mix('js/app.js')}}"></script>
</body>
</html>