function tableSelector() {
	var value = document.querySelector("#racedropdown").value;
	switch (value) {
		case "marathon":
			document.querySelector("#table-heading").innerHTML = "Full Marathons";
			document.querySelector("#marathontable").style.display = "block";
			document.querySelector("#halfmarathontable").style.display = "none";
			document.querySelector("#km10table").style.display = "none";
			document.querySelector("#km5table").style.display = "none";
			document.querySelector("#othertable").style.display = "none";
			break;

		case "half":
			document.querySelector("#table-heading").innerHTML = "Half Marathons";
			document.querySelector("#marathontable").style.display = "none";
			document.querySelector("#halfmarathontable").style.display = "block";
			document.querySelector("#km10table").style.display = "none";
			document.querySelector("#km5table").style.display = "none";
			document.querySelector("#othertable").style.display = "none";
			break;

		case "10km":
			document.querySelector("#table-heading").innerHTML = "10KM Races";
			document.querySelector("#marathontable").style.display = "none";
			document.querySelector("#halfmarathontable").style.display = "none";
			document.querySelector("#km10table").style.display = "block";
			document.querySelector("#km5table").style.display = "none";
			document.querySelector("#othertable").style.display = "none";
			break;

		case "5km":
			document.querySelector("#table-heading").innerHTML = "Half Marathons";
			document.querySelector("#marathontable").style.display = "none";
			document.querySelector("#halfmarathontable").style.display = "none";
			document.querySelector("#km10table").style.display = "none";
			document.querySelector("#km5table").style.display = "block";
			document.querySelector("#othertable").style.display = "none";
			break;

		case "other":
			document.querySelector("#table-heading").innerHTML = "Other Races";
			document.querySelector("#marathontable").style.display = "none";
			document.querySelector("#halfmarathontable").style.display = "none";
			document.querySelector("#km10table").style.display = "none";
			document.querySelector("#km5table").style.display = "none";
			document.querySelector("#othertable").style.display = "block";
			break;

		default:
			document.querySelector("#table-heading").innerHTML = "Full Marathons";
			document.querySelector("#marathontable").style.display = "block";
			document.querySelector("#halfmarathontable").style.display = "none";
			document.querySelector("#km10table").style.display = "none";
			document.querySelector("#km5table").style.display = "none";
			document.querySelector("#othertable").style.display = "none";
	}
}