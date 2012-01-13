<?php

  date_default_timezone_set("UTC");

  $offset = 0;

  // get offset and set the session variable
  $offset = $_GET['offset'];
  if($offset){
    $_SESSION['offset'] = $offset;
  }

  // if no offset was passed in, use what's in the session variable
  if (isset($_SESSION['offset'])) {
    $offset = $_SESSION['offset'];
  }

  // convert offset into seconds from minutes
  $offset = $offset * 60; 

  $gmttime = time();
  $usertime = $gmttime - $offset;

  $datetime = new DateTime(date(DATE_RSS, $usertime));

  $url = 
	  'http://www.timeanddate.com/worldclock/fixedtime.html?month=' . 
	  $datetime->format('n') . 
	  '&day=' . 
	  $datetime->format('j') .
	  '&year=' . 
	  $datetime->format('Y') .
	  '&hour=' . 
	  $datetime->format('G') .
	  '&min=38&sec=0&p1=64&sort=2';

  //$url = 'http://www.timeanddate.com/worldclock/fixedtime.html?month=6&day=26&year=2009&hour=0&min=38&sec=0&p1=64';
  
  header('Location: ' . $url);

 ?>
