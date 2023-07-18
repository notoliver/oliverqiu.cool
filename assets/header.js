var active = document.getElementById("header").getAttribute("active");

//class=\"active\"
//console.log(path);
/*

<a href="/"><img src="/assets/oliverqiu2.png" height=100px/></a>
		
		<div class="topnav" id="myTopnav">
			<a href="/music">Music</a>
			<a href="/sheetslessons">Sheets/Lessons</a>
			<a href="https://veryezvery.fun/photo/oliverqiu/" target="_blank">Photo</a>
<a href="/about">About</a>		<a href="https://portfolio.oliverqiu.cool/" target="_blank">Work</a>
			
			<img src="/assets/menuicon.png" class="menu" onclick="openNavModal()" style="height:30px;"/>
		</div>

		<div id="myNavModal" class="navmodal">
			<span class="close cursor" onclick="closeNavModal()">&times;</span>
			<div class="navmodal-content">
				<a href="/music">Music</a>
				<br>
				<a href="/sheetslessons">Sheets/Lessons</a>
				<br>
				<a href="https://veryezvery.fun/photo/oliverqiu/" target="_blank">Photo</a>
				<br>
	<a href="/about">About</a><br>
				<a href="https://portfolio.oliverqiu.cool/" target="_blank">Work</a></div>
		</div>

        */

var text ="<a href=\"\/\"><img src=\"\/assets\/oliverqiu2.png\" height=100px\/><\/a>\r\n\t\t\r\n\t\t<div class=\"topnav\" id=\"myTopnav\">\r\n\t\t\t<a href=\"\/music\">Music<\/a>\r\n\t\t\t<a href=\"\/sheetslessons\">Sheets\/Lessons<\/a>\r\n\t\t\t<a href=\"https:\/\/veryezvery.fun\/photo\/oliverqiu\/\" target=\"_blank\">Photo<\/a>\r\n<a href=\"\/about\">About<\/a>\t\t<a href=\"https:\/\/portfolio.oliverqiu.cool\/\" target=\"_blank\">Work<\/a>\r\n\t\t\t\r\n\t\t\t<img src=\"\/assets\/menuicon.png\" class=\"menu\" onclick=\"openNavModal()\" style=\"height:30px;\"\/>\r\n\t\t<\/div>\r\n\r\n\t\t<div id=\"myNavModal\" class=\"navmodal\">\r\n\t\t\t<span class=\"close cursor\" onclick=\"closeNavModal()\">&times;<\/span>\r\n\t\t\t<div class=\"navmodal-content\">\r\n\t\t\t\t<a href=\"\/music\">Music<\/a>\r\n\t\t\t\t<br>\r\n\t\t\t\t<a href=\"\/sheetslessons\">Sheets\/Lessons<\/a>\r\n\t\t\t\t<br>\r\n\t\t\t\t<a href=\"https:\/\/veryezvery.fun\/photo\/oliverqiu\/\" target=\"_blank\">Photo<\/a>\r\n\t\t\t\t<br>\r\n\t<a href=\"\/about\">About<\/a><br>\r\n\t\t\t\t<a href=\"https:\/\/portfolio.oliverqiu.cool\/\" target=\"_blank\">Work<\/a><\/div>\r\n\t\t<\/div>";

function getIndicesOf(searchStr, str, caseSensitive) {
    var searchStrLen = searchStr.length;
    if (searchStrLen == 0) {
        return [];
    }
    var startIndex = 0, index, indices = [];
    if (!caseSensitive) {
        str = str.toLowerCase();
        searchStr = searchStr.toLowerCase();
    }
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStrLen;
    }
    return indices;
}

var text2=text;

if(active!=="home"){
    var results = getIndicesOf(active, text,true);
    var firstoccurance=results[0]+active.length+1;
    var secondoccurance=results[1]+active.length+1;
    text2 = text.slice(0, firstoccurance) + " class=\"active\" " + text.slice(firstoccurance,secondoccurance)+ " class=\"active\" " +text.slice(secondoccurance);
}

document.getElementById("header").innerHTML = text2;

function openNavModal() {
    document.getElementById("myNavModal").style.display = "block";
}
function closeNavModal() {
    document.getElementById("myNavModal").style.display = "none";
}