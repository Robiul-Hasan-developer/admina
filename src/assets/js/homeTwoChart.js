


// ================================ Recent Orders - DataTable ================================
$(document).ready(function () {
  $('#recentOrdersTable').DataTable({
    pageLength: 11,
    lengthMenu: [11, 25, 50, 100],
    ordering: true,
    info: false,
    searching: false,
    dom: 'tp',
    language: {
      paginate: {
        previous: '<i class="ph ph-caret-left"></i>',
        next: '<i class="ph ph-caret-right"></i>'
      }
    }
  });
});