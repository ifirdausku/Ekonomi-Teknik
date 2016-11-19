function randomPVProblem(form) {
 	var theFV = Math.round((Math.random()*1000)+1); 
 	var theNR = Math.round((Math.random()*2000)+1)/100; 
 	var theNP = Math.round((Math.random()*25)+1);
 	form.FVInput.value="" + theFV; 
 	form.NRInput.value="" + theNR; 
 	form.NPInput.value="" + theNP;
 	form.PVOutput.value="";
 }
 
 function findPV(form) {
 	var theFV = form.FVInput.value;
 	if (!isPositiveNumber(theFV)) {
 		return false;
 	}
 	var theNP = form.NPInput.value;
 	if (!isPositiveNumber(theNP)) {
 		return false;
 	}
 	var theNR = form.NRInput.value;
 	if (!isPositiveNumber(theNR)) {
 		return false;
 	}
 	var thePV = theFV/Math.pow((1 + theNR/100),theNP);
 	form.PVOutput.value = "" + Math.round(thePV*100)/100;
 	return true;
 }
 
 function isPositiveNumber(inputStr) {
 	for (var i = 0; i < inputStr.length; i++) {
 		var oneChar = inputStr.substring(i,i+1);
 		if (((oneChar >= "0") && (oneChar <= "9")) || (oneChar == ".")) {
 		
 		} else {
 			alert("Please make sure that only numbers are input.");
 			return false;
 		} 
 	}
	return true;
 }

function calcHelp(form) {
 	var theFV = form.FVInput.value;
 	if (!isPositiveNumber(theFV)) {
 		return false;
 	}
 	var theNP = form.NPInput.value;
 	if (!isPositiveNumber(theNP)) {
 		return false;
 	}
 	var theNR = form.NRInput.value;
 	if (!isPositiveNumber(theNR)) {
 		return false;
 	}
 	var thePV = theFV/Math.pow((1 + theNR/100),theNP);
 	thePV = "" + Math.round(thePV*100)/100;
 	var theStr = "<HTML><HEAD><TITLE>Calculator Help</TITLE></HEAD><BODY BGCOLOR=\"white\">";
	theStr += "<P>Follow the instructions below to solve the problem using the Texas Instruments BAII Plus calculator.";
	theStr += " Your calculator must be configured for annual compounding.</P>";
	theStr += "<CENTER>"
	theStr += "<P>Future Value= $" + theFV + " Discount Rate= " + theNR + "% Years= " + theNP + "</P>"
 	theStr += "<TABLE border=0 cellpadding=6 cellspacing=2  bgcolor=\"#CCCCCC\">"
	theStr += "<TR><TD COLSPAN=2><b>First, clear the calculator.</b></TD></TR>";
	theStr += "<TR><TD ALIGN=center>[2nd][CLR TVM]</TD><TD ALIGN=center>[2nd][QUIT]</TD></TR>";
	theStr += "<TR><TD COLSPAN=2><b>Then, solve the problem.</b></TD></TR>";
	theStr += "<TR><TD ALIGN=center>" + theFV + "</TD><TD ALIGN=center>[FV]</TD></TR>";
	theStr += "<TR><TD ALIGN=center>" + theNR + "</TD><TD ALIGN=center>[I/Y]</TD></TR>";
	theStr += "<TR><TD ALIGN=center>" + theNP + "</TD><TD ALIGN=center>[N]</TD></TR>";
 	theStr += "<TR><TD ALIGN=center>[CPT]</TD><TD ALIGN=center>[PV]</TD></TR>";
 	theStr += "<TR><TD COLSPAN=2><b>The Present Value is $" + thePV + "</b></TD></TR></TABLE>";
	theStr += "<P><FORM NAME=\"Form1\">";
	theStr += "<INPUT TYPE=\"button\" VALUE=\"   OK   \" onClick=\"window.close();\"></FORM></CENTER>";
	theStr += "</P></BODY></HTML>"
 	var newWin = window.open("","","scrollbars,resizable,width=380,height=360");
 	if (newWin != null) {
 		newWin.document.write(theStr);
 		newWin.document.close();
 		newWin.focus();
 	}
 	return true;
 }
