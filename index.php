<!DOCTYPE html>
<html lang="en">
    <?php include_once "header.html"; ?>
  
<body>
  <div class="tables" id="tables"><a href="table.php">Go to table</a></div>
  <script>
    var socket = io("http://localhost:3000");
    socket.on("welcome", message => {
      console.log(message);
    })
  </script>
</body>
</html>