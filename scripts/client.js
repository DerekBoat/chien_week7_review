$( document ).ready( onReady );

// globals
let inventory = [];

function onReady(){
    console.log( 'in onReady' );
    $( '#addItemButton' ).on( 'click', addItem );
    $( '#searchButton' ).on( 'click', search );
    // descent click handler
    $( '#matchesOut' ).on( 'click', '.sellItemButton', sellItem );
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

function search(){
    console.log( 'in search' );
    // loop through inventory and capture matches on both size and color
    const sizeSearch = $( '#sizeSearchIn' ).val();
    const colorSearch = $( '#colorSearchIn' ).val();
    console.log( 'searching for:', sizeSearch, colorSearch );
    let matches = [];
    for( let i=0; i<inventory.length; i++ ){
        // if match on both, push into array
        if( inventory[i].size === sizeSearch && inventory[i].color === colorSearch ){
            matches.push( inventory[i] );
        } //end match
    } // end for
    console.log( 'matches:', matches );
    // display matches for sale
    // select output el
    let el = $( '#matchesOut' );
    // empty it
    el.empty();
    // loop through matches array
    for( let j=0; j<matches.length; j++){
        // append matches to DOM
        el.append( `<li>${ matches[j].description } <button class="sellItemButton">Sell</button></li>`)
    } // end for
} // end search

function sellItem(){
    console.log( 'in sellItem' );
    let el = $( this );
    console.log( 'clicked on:', el );
    console.log( 'my parent:', el.parent() );
} // end sellItem