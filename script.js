// //business logic
// // object function
// function PizzaSize(name){
//     this.FirstName=name
// }
// //pizza prototype
// // PizzaSize.prototype.pizzaName=function(){
// //     return this.FirstName;
// // }



// $(document).ready(function(){
//     $(document).on("click", "#btn", function(event){
//         event.preventDefault()
//         var size=$("#size option:selected").text();//choice of user's pizza size
//        var crust=$("#crust option:selected").text();//choice of user's crust type
//        var topping=$("#topping option:selected").text();//choice of user's topping type
        

//         //prices
//         var sizePrice=parseInt($("#size option:selected").val())//choice of user's pizza price
//        var crustPrice=parseInt($("#crust option:selected").val())//choice of user's crust price
//        var toppingPrice=parseInt($("#topping option:selected").val())//choice of user's topping price

//        var quantity= $("#qty").val();//units of pizza ordered
//         //total bill * quantity
//        var totalBill=(sizePrice+crustPrice+toppingPrice)*quantity;
//         // alert(totalBill);


        
//         var obj1= new PizzaSize(size)
//         var crust= new crustType(crustName)
//         var topping= new toppingName(size)        
        
//         //append
//         $("#shopping").append("<li>"+obj1.FirstName+ "</li>")
//     })
// })

function PizzaSize(size){
    this.selectPizza=size
}
//prototypes
PizzaSize.prototype.pizza=function(){
    return this.selectPizza;
}
function CrustType(crust){
    this.selectCrust=crust
}
//prototypes
CrustType.prototype.crust=function(){
    return this.selectCrust;
}
function ToppingType(topping){
    this.selectTopping=topping
}
//prototypes
CrustType.prototype.crust=function(){
    return this.selectCrust;
}


$(document).ready(function(){
    $(document).on("click", "#btn", function(event){
        event.preventDefault()
        var size=$("#size option:selected").text()//choice of user's pizza size
        var crust=$("#crust option:selected").text();//choice of user's crust type
        var topping=$("#topping option:selected").text();//choice of user's topping type
        //prices
        var sizePrice=parseInt($("#size option:selected").val())//choice of user's pizza price
        var crustPrice=parseInt($("#crust option:selected").val())//choice of user's crust price
        var toppingPrice=parseInt($("#topping option:selected").val())//choice of user's topping price
        var quantity= $("#qty").val();//units of pizza ordered
        
        //total bill * quantity
        var totalBill=(sizePrice+crustPrice+toppingPrice)*quantity;



        // alert(input)
    
        var obj1=new PizzaSize(size)
        var obj2=new CrustType(crust)
        var obj3=new ToppingType(topping)

        $("#shopping").html("<li>"+"Your Pizza size is:- "+obj1.selectPizza+"<br>"+"Your choosen Crust Type is:-"+obj2.selectCrust+"<br>"+"Your Topping selected is:-"+obj3.selectTopping+"<br>"+"Your Total Bill is:-"+totalBill+"<br>"+"<button id='btn-delivery' class='btn btn-danger'>Delivery</button>"+"</li>")
    })
    $(document).on("click", "#btn-delivery", function(){
        var location=prompt("Enter Your Location")
        if(!location){
            alert("Kindly input your location!")
        }else 
        {alert("Dear esteemed customer your delivery cost is kshs. 450")
    }
    })
})
