var deposit;
var name;
var namesArray=[];
$(".newDeposit").click(function() {
    deposit = $(".accountDeposit").val();
    name = $(".accountName").val();
    $(".names").text(name);
    $(".deposits").text("$"+deposit);
    namesArray.push(name);
    $(".ledger").append("<p>" + name + "</p><p class='ledgerBorder'>$" + deposit + "</p>");
var numberOfDeposit = namesArray.length;
    $(".total").text(numberOfDeposit);

});