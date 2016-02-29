<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="static/styles.css">
  <link rel="stylesheet" type="text/css" href="static/jquery.pagepiling.css">
  <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
  <script type="text/javascript" src="static/jquery.pagepiling.js"> </script>
  <script type="text/javascript" src="static/jquery.mousewheel.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
  <script type="text/javascript" src="static/scripts.js"></script>
</head>

<body>

  <div class="container">
      <ul id="myMenu">
      <?php
          $names = array("About Me", "Events & Traditions", "Daily Life");
          for ($i=0; $i<count($names); $i++) {
              $sectionId = "page" . (string) $i;
              echo "<li data-menuanchor='" . $sectionId . "'><a href='#" . $sectionId . "'>" . $names[$i] . "</a></li>";
          }
        ?>
      </ul>
  <div id="pagepiling" background="static/images/fresh_snow_@2X.jpg">

  </div>
  </div>
    
</body>

</html>
