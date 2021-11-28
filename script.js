//business logic
// object function
function selectedPizzaSize(size, crust, topping){
    this.selectSize=size
    this.selectCrust=crust
    this.selectTopping=topping
}
//pizza prototype



$(document).ready(function(){
    $(document).on("click", "#btn", function(event){
        event.preventDefault()
        var size=$("#size option:selected").text();//choice of user's pizza size
       var crust=$("#crust option:selected").text();//choice of user's crust type
       var topping=$("#topping option:selected").text();//choice of user's topping type
        

        //prices
        var sizePrice=$("#size option:selected").val();//choice of user's pizza price
       var crustPrice=$("#crust option:selected").val();//choice of user's crust price
       var toppingPrice=$("#topping option:selected").val();//choice of user's topping price
       alert(sizePrice);


        var quantity= $("#qty").val();//units of pizza ordered
        var object1= new PizzaSize(size+crust+topping)
        //append
        $(".pizza-language").append("<p>"+ object1+ "</p>")
    })
})