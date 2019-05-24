$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$('#example').tooltip(options)

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

$('#myModal').modal(options)
