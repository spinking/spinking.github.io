<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Верстка</title>
	<link rel="stylesheet" href="style.css">
	<link rel="stylesheet" href="tcal.css">
	<script src="tcal.js"></script>
	<link href="jQueryFormStyler-master/dist/jquery.formstyler.css" rel="stylesheet" />
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script src="jQueryFormStyler-master/dist/jquery.formstyler.min.js"></script>
</head>
<body>
	<header>
		<div class="background-header"></div>
		<div class="menu">
			<div class="logo">
				<a href="#">Yok<span class="bold">Ngalam</span></a>
			</div>
			<div class="nav">
				<ul class="top-menu">
					<li>
						<a href="#" class="active">Home</a>
					</li>
					<li>
						<a href="">Destination</a>
					</li>
					<li>
						<a href="">Ittinery</a>
					</li>
					<li>
						<a href="">Review</a>
					</li>
					<li>
						<a href="">Contact</a>
					</li>
				</ul>
			</div>
			<div class="avatar"></div>
		</div>
		<div class="main">
			<h1 class="title-header">LETS GET <span class="second-word">LOST</span></h1>
			<p class="subtitle">Malang will never dissapointed you.<br>From every step you took will be amazed and suddenly fallin love with Malang</p>
			<div class="button-header">
				<a href="#">SET ITTINERY NOW</a>
			</div>
		</div>
		<div class="white-opacity"></div>
	</header>
	<div class="preview">
		<div class="city-img"></div>
		<h2 class="h2-title h2-title-position-city first-word">City of <span class="second-word">Love</span></h2>
		<p class="about-malang">Malang is the second largest city in East Java province, Indonesia. It has a history<br> dating back to the ancient Mataram Kingdom. The city is famous for its cool<br> temperature. People in East Java sometimes call it "Paris of East Java".</p>
		<div class="second-article">
			<h2 class="h2-title h2-title-position-des first-word">Des<span class="second-word">tination</span></h2>
			<p class="about-malang second-text-position">Being around by many mountain, Malang not only came with mountain vacation, but our beach,<br> cultural spot, and Human Interest is worth to experienced.</p>
		</div>
		<div class="info-div">
			<div class="info-icon"></div>
			<p class="info-text info-text-position">see basic regulation</p>
		</div>
	</div>
	<div class="search">
		<form class="search-block" method="get" action="/search">
				<input name="q" type="text" size="40" class="search-form" placeholder="search destination">
		</form>
		<div class="all-places">
			<ul class="place">
				<li><a class="all-place" href="">ALL PLACE <span class="slush">/</span></a></li>
				<li><a class="recomended" href=""> RECOMENDED PLACE</a></li>
			</ul>
		</div>
	</div>
	<div class="articles">
		<div class="article-batu clearfix">
			<div class="batu-img">
				<div class="triangle-right"></div>
				<a href="#" class="see-more">see more
					<div class="see-more-arrow"></div>
				</a>
			</div>
			<div class="batu-icon"></div>
			<h3 class="h3-title h3-title-position-batu">Batu</h3>
			<p class="article-text article-text-position-batu">is a city located in East Java Province of Indonesia. It <br>is situated about 20km to the northwest of Malang. <br>Formerly, it was a part of Malang Regency; but in <br>2001, Batu became an independent city.<br> A population of 190,000 people, it lies on the <br>southern slopes of Gunung Welirang. Its population <br>largely consists of Javanese.</p>
		</div>
		<div class="article-bromo clearfix">
			<div class="bromo-content">
				<div class="bromo-icon"></div>
				<h3 class="h3-title h3-title-position-bromo">Bromo</h3>
				<p class="article-text article-text-position-bromo"><b>Mount Bromo</b> is an active volcano and<br> part of the Tengger massif, in East Java<br> Indonesia. At 2,329 metres(7,641 ft) it<br> is not the highest peak of the massif,<br> but is the most well known</p>
			</div>
			<div class="bromo-img">
				<div class="bromo-img-1">
					<div class="triangle-left"></div>
					<a href="#" class="see-more">see more
					<div class="see-more-arrow"></div>
					
					</a>
				</div>
				<div class="bromo-img-2">
					<a href="#" class="see-more">see more
					<div class="see-more-arrow"></div>
					</a>
				</div>
			</div>
			<div class="clearfix"></div>
			<div class="paginator">
				<a href="#" class="double-arrow left-arrow disabled"></a>
				<a href="#" class="arrow left-arrow disabled"></a>
				<a href="#" class="current">1</a>
				<a href="#">2</a>
				<a href="#">3</a>
				<a href="#">4</a>
				<a href="#">5</a>
				<a href="#" class="arrow"></a>
				<a href="#" class="double-arrow"></a>
			</div>
		</div>
	</div>
	<div class="ittinery">
		<h2 class="h2-title h2-title-position-ittinery first-word">Set <span class="second-word">Ittinery</span></h2>
		<p class="about-malang third-text-position">Simply drag and drop what you want to visit, and voila we make a ittinery and shedule for your vacation.<br> have a great trip !</p>
		<div class="forms">
				<div class="ittinery-form">
					<div class="ittinery-form-hat">Your Ittinery Title Here</div>
					<form class="ittinery-form-content">
						<div class="date">
							<label>Day 1</label>
							<input type="text" name="date" class="tcal" value="05/29/2015" />
						</div>
						<div class="input-position">
						</div>
					</form>
				</div>
				<div class="destination-form">
					<div class="destination-form-hat">List of destination<hr></div>
					<form class="sort-destination" method="post">
						<label for="select">sort by :<?php
							include 'select.php';
							?>
						</label>
						<div></div>
					</form>
					<div class="destination-form-content">
						
					</div>
				</div>
		</div>
		<div class="ittinery-buttons"></div>
	</div>
	<div class="contacts">
		<h2 class="contact-title">Contact</h2>
		<form class="message-form">
			<input type="text" class="left-margin-message-form container-form email" placeholder="Your Email"><br>
			<input type="text" class="left-margin-message-form container-form company" placeholder="Company">
			<input type="text" class="container-form subject" placeholder="Subject"><br>
			<input type="text" class="left-margin-message-form container-form your-message" placeholder="Your Messge"><br>
			<input type="submit" class="send-message" value="SEND MESSAGE">
		</form>
		<div class="contact-form">
			<div class="or">OR</div>
			<div class="contact-list">
				<h3 class="contact-list-title">You Can Find Us Here</h3>
				<ul class="contact-check">
					<li>Jl.Danau Bratan sekian nomer sekian, Sawojajar Malang<br> <span class="find-on-maps">FIND ON MAPS</span></li>
					<li>(+62)8816723812</li>
					<li>(+62)8512371632</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="keep-in-touch">
		<div class="keep-info">
			<h1 class="keep-title">Keep in Touch</h1>
			<p class="keep-text">We Will Give you latest information about Malang</p>
		</div>
		<form action="" class="mail-form">
			<input type="text" class="mail-input" placeholder="Type Email Here for Subscribe">
			<input type="submit" class="mail-button" value="">
		</form>
	</div>
	<footer>
		<div class="footer-links">
			<ul class="list-style">
				<li class="footer-links-text">Term & Condition</li>
				<li class="footer-links-text">Policy</li>
				<li class="footer-links-text">Privacy</li>
			</ul>
		</div>
		<ul class="social-icons">
			<li>
				<a href="" class="icon-size fb-icon"></a>
			</li>
			<li>
				<a href="" class="icon-size twitter-icon"></a>
			</li>
			<li>
				<a href="" class="icon-size insta-icon"></a>
			</li>
		</ul>
		<div class="clearfix"></div>
		<h4 class="copyright">copyright@YokMalang. Allright Reserved. 2015</h4>
	</footer>
	<?php
		mysql_connect("127.0.0.1:3306", "user", "") or die (mysql_error ());
		mysql_select_db("YokNgalam_bd") or die(mysql_error());
	?>
</body>
</html>