
function upcoming_tz_set_then_load() {
  now = new Date();
  offset = now.getTimezoneOffset();
  upcoming_load_page(offset);
}

function upcoming_load_page(offset) {
  var url = "upcoming.php?offset=" + offset;
	window.location=url
}


