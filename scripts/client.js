$( document ).ready( onReady );

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
} // end addItem