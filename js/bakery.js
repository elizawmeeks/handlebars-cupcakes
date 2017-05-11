"use strict";

let inventory = [];
let bakery = {};

let fillInventory = (data) =>
// 
// bakery.loadInventory = () => {
// 	return new Promise( function(resolve, reject){
// 		let inventoryLoader = new XMLHttpRequest();
// 		inventoryLoader.open("GET", "inventory.json");
// 		inventoryLoader.send();

// 		inventoryLoader.addEventListener("load", function(){
// 			let data = JSON.parse(this.responseText);
// 			resolve(data);
// 		});
// 	});
// };

bakery.getInventory = () => {
	return inventory;
};

bakery.loadInventory= () =>{
   return new Promise(function(resolve,reject){
       $.ajax({
           url: "inventory.json",
           success: function(data){
           		inventory = data.ccakes;
           		console.log("inventory", inventory);
               resolve(data);
           }
       });
   });
};

module.exports = bakery;