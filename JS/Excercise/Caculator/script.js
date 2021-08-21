$(document).ready(function(){
    //test number length
	var testNumLength = function(number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                number = "";
                totaldiv.text("Err");
            }
        } 
    };
	var number = "";
        var newnumber = "";
        var operator = "";
        var totaldiv = $("#total");
        //init screen
        totaldiv.text("0");
        //set event for numbers
    $("#numbers > a").not("#clear,#clearall").click(function(){
		number += $(this).text();
		totaldiv.text(number);
		testNumLength(number);
    });
        //set event for operators
    $("#operators > a").not("#equals").click(function(){
                number=(totaldiv.text()!="")?(totaldiv.text()):(number);
		operator = $(this).text();
                newnumber = number;
                number = "";
		totaldiv.text("0");
    });
        //set event for C and AC
    $("#clear,#clearall").click(function(){
		number = "";
		totaldiv.text("0");
		if ($(this).attr("id") === "clearall") {
			newnumber = "";
		}
    });
    $('#equals').click(function(){
        
        number=parseInt(number);
        newnumber=parseInt(newnumber);
        if(operator==="+"){
                $('#total').text(newnumber+number);
            }
        else 
            if(operator==="-"){
            $('#total').text(newnumber-number);
        }
        else 
            if(operator==="*"){
             $('#total').text(newnumber*number);
        }
        else
           {
             $('#total').text(newnumber/number);
        }
            
        
        
        
        });
    //Add your last .click() here!
});