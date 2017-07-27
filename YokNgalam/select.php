<?php
$bdConnect = mysql_connect ('127.0.0.1:3306', 'root', '') or die ('Не удалось соединиться с БД');
$currentDB = mysql_select_db (YokNgalam_db, $bdConnect) or die ('Не удалось выбрать БД');
 
echo 	"<select name='cat' class='destination-select'>
		<option value=''>раздватри</option>";
          
$result =  mysql_query ("SELECT * FROM destination_categories ORDER BY id", $bdConnect) 
                or die ("<b>Query failed:</b> " . mysql_error());
 
while ($row = mysql_fetch_array($result)){
 
echo "<option value=' ".$row['id']." '>".$row['categories']."</option>";
}
 
echo '</select></label>'; 
?>