import $ from 'jquery';
import './sass/styles.scss';
import { calcDay, letRun } from './date.js';

$(document).ready(function() {
  $("#date").submit(function(event) {
    event.preventDefault();
    const year = $("#year").val();
    const month = $("#month").val();
    const day = $("#day").val();
    if (letRun(year, month, day)) {
      const date = new Date(`${year}-${month}-${day}`);
      $(".output").text(calcDay(date));
    } else {
      $(".output").text("Invalid Date");
    }
  });
});
