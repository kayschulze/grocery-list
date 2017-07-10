$(document).ready(function(){
  $("form").submit(function(event){


    var items = ["groceryItem1","groceryItem2", "groceryItem3", "groceryItem4", "groceryItem5", "groceryItem6"];
    var itemsUpper = [];


    // items.forEach(function(item) {
    //     var userInput = $("#" + item).val();
    //     itemsUpper.push(userInput.toUpperCase());
    // });
    itemsUpper = items.map(function(item) {
      item = $("#" + item).val();
      return item.toUpperCase();
    });


    // //debugger;
    // var item1 = $("#groceryItem1").val();
    // var item2 = $("#groceryItem2").val();
    // var item3 = $("#groceryItem3").val();
    // var item4 = $("#groceryItem4").val();
    // var item5 = $("#groceryItem5").val();
    // var item6 = $("#groceryItem6").val();
    //
    // var groceryList = [];
    // groceryList.push(item1);
    // groceryList.push(item2);
    // groceryList.push(item3);
    // groceryList.push(item4);
    // groceryList.push(item5);
    // groceryList.push(item6);
    //debugger;
    itemsUpper.forEach(function(list){
      $("ul").append("<li>" + list + "</li>");
    })
    $("#grocery-list").hide();
    // $("#groceryListOutput").show();

    event.preventDefault();
  });
});
