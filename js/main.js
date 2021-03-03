$(document).ready(function() {
  $(function() {
    $("#range-slider").slider({
      range: true,
      min: 0,
      max: 700,
      values: [20, 500],
      slide: function(event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      }
    });
    $("#amount").val(
      "$" +
        $("#range-slider").slider("values", 0) +
        " - $" +
        $("#slider-range").slider("values", 1)
    );
  });
});
