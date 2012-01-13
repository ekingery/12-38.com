<?php
  header("Cache-Control: no-cache, must-revalidate");
  header("Expires: Mon, 1 Jan 1998 12:38:00 GMT");

  session_start();

  date_default_timezone_set("UTC");

  $debug = FALSE;
  $offset = 0;

  if($debug) {
    $debug_log = "~/tmp/php_debug";
    $debug_fh = fopen($debug_log, 'a+');
    fwrite($debug_fh, "\n--\n");
  }

  // get offset and set the session variable
  $offset = $_GET['offset'];
  if($offset){
    if ($debug) fwrite($debug_fh, "url passed offset: $offset\n");
    $_SESSION['offset'] = $offset;
  }

  // if no offset was passed in, use what's in the session variable
  if (isset($_SESSION['offset'])) {
    $offset = $_SESSION['offset'];
    if ($debug) fwrite($debug_fh, "session offset=$offset\n");
  }

  // convert offset into seconds from minutes
  $offset = $offset * 60;

  $gmttime = time();
  $usertime = $gmttime - $offset;

  if ($debug)
    fwrite($debug_fh, strftime("local time = %R %m/%d/%Y\n", $usertime));

  // test a time
  //$usertime = mktime(0,38,0,
  //  date("m", $usertime), date("d", $usertime), date("Y", $usertime));

  $next_1238_am = mktime(0, 39, 0,
    date("m", $usertime), date("d", $usertime), date("Y", $usertime));

  $next_1238_pm = mktime(12, 39, 0,
    date("m", $usertime), date("d", $usertime), date("Y", $usertime));

  $diff_1238_am = $next_1238_am - $usertime;
  $diff_1238_pm = $next_1238_pm - $usertime;

  // handle 00:00 - 00:38
  if ($diff_1238_pm > 0 && $diff_1238_am > 0) {
    $diff = $diff_1238_am;
    // if we are within 60 seconds of 12:39 am, celebrate!!!!
    if ($diff <= 60) {
      print '
  <div id="clock_output">
    <br />
    <img src="/images/clock/1.png" alt="1" width="250" height="400" />
    <img src="/images/clock/2.png" alt="2" width="250" height="400" />';

    if ($diff % 2 == 0) {
      print
      '<img src="/images/clock/dots.png" alt=":" width="62" height="400" />';
    }
    else {
      print
      '<img src="/images/clock/no_dots.png" alt=":" width="62" height="400" />';
    }

    print '
    <img src="/images/clock/3.png" alt="3" width="250" height="400" />
    <img src="/images/clock/8.png" alt="8" width="250" height="400" />
  </div>';
      if ($debug) fclose($fh);
      exit;
    }
    else {
      $diff -= 60;
    }
  }
  // handle 00:39 - 12:38
  else if ($diff_1238_am <= 0 && $diff_1238_pm >= 0) {
    $diff = $diff_1238_pm;
    // if we are within 60 seconds of 12:39 pm, celebrate!!!!
    if ($diff <= 60) {
      print '
  <div id="clock_output">
    <br />
    <img src="/images/clock/1.png" alt="1" width="250" height="400" />
    <img src="/images/clock/2.png" alt="2" width="250" height="400" />';

    if ($diff % 2 == 0) {
      print
      '<img src="/images/clock/dots.png" alt=":" width="62" height="400" />';
    }
    else {
      print
      '<img src="/images/clock/no_dots.png" alt=":" width="62" height="400" />';
    }

    print '
    <img src="/images/clock/3.png" alt="3" width="250" height="400" />
    <img src="/images/clock/8.png" alt="8" width="250" height="400" />
  </div>';
      if ($debug) fclose($fh);
      exit;
    }
    else {
      $diff -= 60;
    }
  }
  // handle 12:39 - 23:59
  else {
    // calculate time until 12:38am tomorrow
    $next_1238_am = mktime(0,39, 0,
        date("m", $usertime), date("d", $usertime + 1), date("Y", $usertime));

    $diff = $next_1238_am - $usertime - 60;
  }

  $days = floor($diff/86400);
  $diff = $diff- ($days*86400);

  $hours = floor($diff/3600);
  $diff = $diff - ($hours*3600);

  $minutes = floor($diff/60);
  $diff = $diff - ($minutes*60);

  $seconds = $diff;

  print '
  <div id="clock_output">';

  if ($hours >= 20) {
    print '<img src="/images/clock/2.png" alt="2" width="125" height="200" />';
    printf('<img src="/images/clock/%d.png" alt="%d" width="125" height="200" />', $hours % 20, $hours % 20);
  }
  else if ($hours >= 10) {
    print '<img src="/images/clock/1.png" alt="1" width="125" height="200" />';
    printf('<img src="/images/clock/%d.png" alt="%d" width="125"
      height="200" />', $hours % 10, $hours % 10);
  }
  else {
    print '<img src="/images/clock/0.png" alt="0" width="125" height="200" />';
    printf('<img src="/images/clock/%d.png" alt="%d" width="125" height="200" />', $hours, $hours);
  }

  if ($diff % 2 == 0) {
    print
    '<img src="/images/clock/dots.png" alt=":" width="31" height="200" />';
  }
  else {
    print
    '<img src="/images/clock/no_dots.png" alt=":" width="31" height="200" />';
  }

  if ($minutes < 10) {
    print '<img src="/images/clock/0.png" alt="0" width="125" height="200" />';
    printf('<img src="/images/clock/%d.png" alt="%d" width="125"
    height="200" />', $minutes, $minutes);
  }
  else {
    printf('<img src="/images/clock/%d.png" alt="%d" width="125"
      height="200" />', floor($minutes / 10), floor($mintes / 10));
    printf('<img src="/images/clock/%d.png" alt="%d" width="125"
      height="200" />', $minutes % 10, $minutes % 10);
  }

  if ($diff % 2 == 0) {
    print
    '<img src="/images/clock/dots.png" alt=":" width="31" height="200" />';
  }
  else {
    print
    '<img src="/images/clock/no_dots.png" alt=":" width="31" height="200" />';
  }

  if ($seconds < 10) {
    print '<img src="/images/clock/0.png" alt="0" width="125" height="200" />';
    printf('<img src="/images/clock/%d.png" alt="%d" width="125"
      height="200" />', $seconds, $seconds);
  }
  else {
    printf('<img src="/images/clock/%d.png" alt="%d" width="125"
      height="200" />', floor($seconds / 10), floor($seconds / 10));
    printf('<img src="/images/clock/%d.png" alt="%d" width="125"
      height="200" />', $seconds % 10, $seconds % 10);
  }

  print '
    <br />
    <img src="/images/clock/till.png" alt="till" width="500" height="200" />
    <br />
    <img src="/images/clock/1.png" alt="1" width="125" height="200" />
    <img src="/images/clock/2.png" alt="2" width="125" height="200" />
    <img src="/images/clock/dots.png" alt=":" width="33" height="200" />
    <img src="/images/clock/3.png" alt="3" width="125" height="200" />
    <img src="/images/clock/8.png" alt="8" width="125" height="200" />
</div>';

  if ($debug) fclose($fh);

?>
