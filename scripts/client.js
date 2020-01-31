$( document ).ready( onReady );

// globals
let inventory = [];

function onReady(){
    console.log( 'in onReady' );
    $( '#addItemButton' ).on( 'click', addItem );
} // end onReady    

function addItem(){
    console.log( 'in addItem' );
    // get user input & create a new item object
    let newItem = {
        description: $( '#descriptionIn' ).val(),
        size: $( '#sizeIn' ).val(),
        color: $( '#colorIn' ).val()
    } // end newItem
    console.log( 'adding:', newItem );
    inventory.push( newItem );
    displayInventory();
} // end addItem

function displayInventory(){
    console.log( 'in displayInventory' );
    // select output element
    let el = $( '#itemsOut' );
    // empty out out element
    el.empty();
    // loop through array
    for( let i=0; i<inventory.length; i++ ){
        // append each item to DOM
        el.append( `<li>${ inventory[i].description }:
        ${ inventory[i].size }, ${ inventory[i].color }</li>` );
    } // end for
} // end displayInventory