
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="https://pagination.js.org/dist/2.1.4/pagination.css"/>
  <link rel="stylesheet" href="style.css">

</head>
<?php 
// write your code 

require_once 'API.php';
$data = new API("mamun");
$newData = $data->getApiData();

?>


<body>

<div class="container">
<h2>Basic test</h2>    
<div class="row">
  <div class="col-md-6">
    
  </div>
  <div class="col-md-6">
    <input type="text" class="form-control" id="search" placeholder="Search For..">
  </div>
</div>
 <table id="dtBasicExample" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
  <thead>
    <tr>
      <th class="th-sm">ID </th>
      <th class="th-sm">User ID </th>
      <th class="th-sm">Title </th>
      <th class="th-sm">Action </th>
    </tr>
  </thead>
  <tbody class="items">
	<!-- wirte your code -->
  <?php foreach ($newData as $value){ ?>
          <tr>
            <td><?php echo $value->id;?></td>
            <td><?php echo $value->userId;?></td>
            <td><?php echo $value->title;?></td>
            <td>
              <button  type="button" class="btn btn-primary" data-id="<?php echo $value->id;?>" id="details" data-toggle="modal" data-target="#exampleModalCenter">Details</button>
            </td>
           
          </tr>
  <?php }?>

  </tbody>
   
</table>
   
  
<!-- <div id="list"><div class="wrapper"></div></div> -->
	<div id="box">
     <div class="wrapper"></div>
  </div>
 
  
</div>

</body>



  
  <!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1"  role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Details of information</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" id="modal_details_data">
        Please wait...
      </div>
      <div class="modal-footer">
        
        <button type="button" class="btn btn-primary" data-dismiss="modal">Close </button>
      </div>
    </div>
  </div>
</div>



</html>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://pagination.js.org/dist/2.1.4/pagination.min.js"></script>

<script>

// write your js code
var $rows = $('.items tr');
$('#search').keyup(function() {
    var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
    $rows.show().filter(function() {
        var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
        return !~text.indexOf(val);
    }).hide();
});

$(document).on("click", "#details", function () {
     var id = $(this).attr('data-id');
     $.getJSON('https://jsonplaceholder.typicode.com/posts/'+id, function(data) {
        $('#modal_details_data').html(data.body);
     });
});

$.getJSON('https://jsonplaceholder.typicode.com/posts/', function (json) {

    $('#box').pagination({
        dataSource: json,
        pageSize: 3,
        callback: function(data, pagination) {
            var wrapper = $('#box .wrapper').empty();
            $.each(data, function (i, f) {
              // $('#dtBasicExample tr:last').after('<tr> <td>' + f.id + '</td> <td>' + f.userId + '</td> <td>' + f.title + '</td> </tr>');
            });
        }
    });
});

</script>
