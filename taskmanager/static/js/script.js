document.addEventListener('DOMContentLoaded', function() {
    //  sidenav initialization
    var sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    // datepicker initialization
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
      format: "dd mmmmm yyyy",
      i18n: {done: "select"}
    })

    // select initialization
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);
  });

