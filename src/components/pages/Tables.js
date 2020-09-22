import React from "react";
import $ from 'jquery';

async function deleteDataAsync(murl) {
  $.ajax({
		url : murl,
		type : "GET",
		data : {},
		success : function(json){
      console.log(json);
      alert("record deleted sucessfully");
      window.location.href = window.location.href;
		},
		error : function(xhr,errmsg,err) {
		  //$('#result').html(errmsg).removeClass("alert-info").addClass("alert-warning");
		}
	});
}

async function getDataAsync() {
  const response = await fetch('http://127.0.0.1:8000/api/api-data/');
  var json_r = await response.json()
  return json_r;
}



$(document).on("submit",".updatedata",function(e) {
  e.preventDefault();
  var murl = $(this).attr("action");
  var action = $(this).attr("method");
  $.ajax({
		url : murl,
		type : action,
		data : $(this).serialize(),
		success : function(json){
      console.log(json);
      window.location.href = window.location.href;
		},
		error : function(xhr,errmsg,err) {
		  //$('#result').html(errmsg).removeClass("alert-info").addClass("alert-warning");
		}
	});
  alert(murl)
  alert(action)
});

$(document).on("click",".deletec",function(e) {
  e.preventDefault();
  deleteDataAsync($(this).attr('href'));
});
var count = 0;
function updates(params) {
  var msg='<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> </div><div class="modal-body"> ... </div><div class="modal-footer">   </div></div></div></div>'
  $("#mmodal").html(msg);

}


$(document).on("click",".editc",function(e) {
  e.preventDefault();
  updates();
  var json_r = getDataAsync();
  var i=$(this).attr('id')
  json_r.then(function(r){
    console.log(r);
    var strin = '<form class="updatedata" action="http://127.0.0.1:8000/api/api-update/'+i+'" method="GET"><div class="form-group"><input name="oem_name" value="'+r[i][0].fields.oem_name+'" class="form-control"></div><div class="form-group"><input name="oem_type" value="'+r[i][0].fields.oem_type+'" class="form-control"></div><div class="form-group"><div class="form-group"><input class="form-control" type="submit"></div></div</form>';
    $('.modal-body').html(strin);
  })
});

async function fetchDataAsync() {
  updates();
  const response = await fetch('http://127.0.0.1:8000/api/api-data/');
  var json_r = await response.json()
  console.log(json_r);
  for(var i=0;i<json_r.length;i++){
      var textString =' <tr> <td>'+json_r[i][0].fields.oem_id+'</td><td> '+json_r[i][0].fields.oem_name+'</td><td>'+json_r[i][0].fields.oem_type+'</td><td><div class="btn-group"> <button data-toggle="modal" data-target="#exampleModal" type="button" class="btn btn-success editc" id="'+i+'" aria-haspopup="true" aria-expanded="false"> Edit </button><div class="btn-group"> <button type="button" href="http://127.0.0.1:8000/api/delete-data/'+json_r[i][0].pk+'"  class="btn btn-danger deletec" aria-haspopup="true" aria-expanded="false"> Delete </button> </div></div></td></tr>'
      $("#result").append(textString);
  }
}







const Tables = () => {
  fetchDataAsync();
  return (
    // <!-- Begin Page Content -->
    <div class="container-fluid">

      {/* <!-- Page Heading --> */}
      <h1 class="h3 mb-2 text-gray-800">OEM - Database</h1>
      <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the <a target="_blank" href="https://datatables.net">official DataTables documentation</a>.</p>

      {/* <!-- DataTales Example --> */}
      <div class="card shadow mb-4">  
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th value="oem_id">OEM_ID</th>
                  <th value="oem_name">OEM Name</th>
                  <th value="oem_type">OEM Type</th>
                                   
                  <th value="">Action</th>  
                </tr>
              </thead>
              <tfoot>

              <tr>
                  <th value="oem_id">OEM_ID</th>
                  <th value="oem_name">OEM Name</th>
                  <th value="oem_type">OEM Type</th>
                                   
                  <th value="">Action</th>  
                </tr>

              </tfoot>
              <tbody id="result">
   
              </tbody>
            </table>
          </div>
        </div>
        <div id="mmodal"></div>
      </div>

    </div>
    // <!-- /.container-fluid -->
  )
}

export default Tables;