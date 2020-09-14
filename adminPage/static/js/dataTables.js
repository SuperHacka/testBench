
$(document).ready(function() {
    $('#table1').DataTable( {
        //"scrollY":        "200px",
        //"scrollCollapse": true,
        "lengthMenu": [[1, 5, 10, -1], [1, 5, 10, "All"]],
        "info":     false,
        
    } );
} );


// $(document).ready(function() {
//     $('a[data-toggle="tab"]').on( 'shown.bs.tab', function (e) {
//         $.fn.dataTable.tables( {visible: true, api: true} ).columns.adjust();
//     } );
     
//     $('#table1').DataTable( {
//         ajax:           '../ajax/data/arrays.txt',
//         scrollY:        200px,
//         scrollCollapse: true,
//         paging:         false,
//         lengthMenu : [[1, 5, 10, -1], [1, 5, 10, "All"]],
//     } );
 
//     // Apply a search to the second table for the demo
//     // $('#myTable2').DataTable().search( 'New York' ).draw();
// } );