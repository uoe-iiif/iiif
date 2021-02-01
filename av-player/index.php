<!DOCTYPE html>

<html lang="de">
	<head class="html5">
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		
		<title>IIIF-AV Player- URL input</title>
		
		<link rel="stylesheet" href="./css/normalize.css">
		<link rel="stylesheet" href="./css/jquery-ui.min.css">
		<link rel="stylesheet" href="./css/style.css">
		
		<script type="text/javascript" src="./js/includes/jquery-2.2.1.min.js"></script>
		<script type="text/javascript" src="./js/includes/jquery-ui.min.js"></script>

		<script type="text/javascript" src="./js/custom/parser.js"></script>
		<script type="text/javascript" src="./js/custom/ui.js"></script>
		<script type="text/javascript" src="./js/custom/canvasClock.js"></script>
		<script type="text/javascript" src="./js/custom/main.js"></script>
	</head>
	<body>
		<?php
		if (isset($_GET['manifest']))
		{
			$manifest = $_GET['manifest'];
		}
		else
		{
			$manifest = "https://librarylabs.ed.ac.uk/iiif/manifest/arg_78.json";
		}
		?>
		
		<div class="testFixtureSelection">
			<button class="testFixture" data-json="<?php echo $manifest;?>">Load URL JSON</button>
		</div>
		<input type="text" name="manifestInput" id="manifestInput"/>
		<button id="parseManifestButton">Reload</button>
		<button id="viewManifestButton">View Manifest</button>

		<hr>

		<h3 class="title"></h3>
		<div class="description"></div>

		<div class="canvasNavigationContainer"></div>

		<div class="playerContainer"></div>

		<button id="toggleLogsButton">Show / Hide Logs</button>
		<div class="logContainer">
			<textarea></textarea>
			<button id="clearLogsButton">Clear</button>
		</div>

	</body>
</html>