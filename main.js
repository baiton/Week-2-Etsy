// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);












// 1: Show me how to calculate the average price of all items.
function question1 () {
    let avgPrice = 0;
      for ( i = 0 ; i < data.length; i++ ){
        avgPrice += data[i].price /25;
      }
    // Answer:
    console.log("the average price is " + avgPrice);
  }



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  let inexspensive = [];
  for (i=0; i<data.length; i++){
    if ((14.00 <= data[i].price) && (data[i].price <= 18.00)) {
      inexspensive.push(data[i].title);
    }
  }
  // Answer:
  console.log(inexspensive);
}

// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  for (i=0;i<data.length; i++){
    if (data[i].currency_code === "GBP"){
      console.log(data[i].title + " cost " + data[i].price + " pounds");
    }
    }
  // Answer:
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  let madeOf = [];
  for (i=0; i<data.length; i++){
    for (j=0; j<data[i].materials.length; j++){
      if (data[i].materials[j] === "wood"){
      madeOf.push(data[i].title);
    }
  }
}
  console.log(madeOf);
  // Answer:
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  let lotsOfMats = [];
  for (i=0; i<data.length; i++){
    if (data[i].materials.length >= 8){
      lotsOfMats.push(data[i].title) + lotsOfMats.push(data[i].materials.length)
        for (j=0; j<data[i].materials.length; j++){
          lotsOfMats.push(data[i].materials[j]);
      }
    }
  }
  // Answer:
  console.log(lotsOfMats);
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  let homemade = 0
  for (i=0; i < data.length; i++){
    if (data[i].who_made === "i_did"){
      homemade += 1
    }
  }
  console.log(homemade + " items were made by their sellers.");
  // Answer:
}
