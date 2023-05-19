<!DOCTYPE html>
<html>
<head>
  <title>Contact Details</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
      background-color: #f4f4f4;
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #fff;
      padding: 20px;
      border-radius: 4px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    h1 {
      color: #333;
      margin-bottom: 20px;
      text-align: center;
    }

    .info-group {
      margin-bottom: 20px;
    }

    .info-label {
      font-weight: bold;
      margin-bottom: 5px;
      color: #555;
    }

    .info-value {
      color: #777;
    }

  </style>
</head>
<body>
  <div class="container">
    <h1>Contact Details</h1>
    <div class="info-group">
      <label class="info-label">Name:</label>
      <div class="info-value">{{ $name }}</div>
    </div>
    <div class="info-group">
      <label class="info-label">Surname:</label>
      <div class="info-value">{{ $surname }}</div>
    </div>
    <div class="info-group">
      <label class="info-label">Email:</label>
      <div class="info-value">{{ $email }}</div>
    </div>
    <div class="info-group">
      <label class="info-label">Message:</label>
      <div class="info-value">{{ $messages }}</div>
    </div>
  </div>
</body>
</html>
