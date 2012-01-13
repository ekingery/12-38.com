var xml = "";

window.onload = tz_set_then_load();

function tz_set_then_load() {
  now = new Date();
  offset = now.getTimezoneOffset();
  load_page(offset);
  setInterval('load_page("")', 1000);
}

function load_page(offset) {
  var url = "countdown_feed.php?offset=" + offset;
  xml = createXMLHttpRequest();
  xml.onreadystatechange = load_feed;
  xml.open("GET", url, true);
  xml.send("");
}

function load_feed() {
  if (xml.readyState == 4) {
    if (xml.status == 200) {
      div = document.getElementById("clock_output");
      div.innerHTML = xml.responseText;
    } else {
      alert("There was a problem retrieving the XML data:\n" 
          + xml.statusText);
    }
  }  
}    

function createXMLHttpRequest() {
  try { return new XMLHttpRequest();                   } catch(e) {}
  try { return new ActiveXObject("Microsoft.XMLHTTP"); } catch(e) {}
  try { return new ActiveXObject("Msxml2.XMLHTTP");    } catch(e) {}
  alert("XMLHttpRequest is not supported by this browser.");
  return null;
}

