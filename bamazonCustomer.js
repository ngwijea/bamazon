var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require("console.table");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "",

  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

function showItems() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    else console.table(res, "\n");
    productId();
  });
}
showItems();

function productId() {
  inquirer.prompt([
    {
      type: "input",
      name: "ID",
      message: "Input the product ID of the item for purchase.\n",
      filter: Number
    },
    {
      type: "input",
      name: "quantity",
      message: "How Many Items do you want to buy?\n",
      filter: Number
    },
]).then(function(answer){
    var idProduct = answer.ID;
    var quantityRequested = answer.quantity;
    purchaseItem(idProduct,quantityRequested,)
});

};

function purchaseItem(idProduct, quantityRequested){
   
    connection.query('Select * FROM products WHERE item_id = ' + idProduct, function(err,res)
    
    {
        if(err){console.log(err)};
        
        console.table(res);

        var totalQuantity = res[0].stock_quantity;
        var remaining = totalQuantity - quantityRequested
        
		if(quantityRequested <= totalQuantity){

            var totalCost = res[0].price * quantityRequested;
            
			console.log("Item in Stock");
            console.log("Final cost is " + totalCost + " Thank you for your purchase!");
        
            connection.query("UPDATE products SET ? WHERE ?",
            [
                {
                    stock_quantity: remaining
                },
                {
                    item_id: idProduct
                }
            ],
        function(error) {
                if (error) throw err;
                console.log("item updated");
                showItems();
        } )
    }
        else {
			console.log("Sorry we ran out!");
        showItems();

    };
    });
};