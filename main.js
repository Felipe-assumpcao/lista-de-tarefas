$(document).ready(function(){

$('#button').click(
    function(){
        var toAdd = $('input[name=ListItem]').val();
        $('ul').append('<li>'+toAdd+'</li>');
    }
) 
    $(document).on('dblclick', 'li', function(){
        $(this).toggleClass('strike')
    })

    $('input').focus(function(){
        $(this).val(' ');
    })

    $('ul').sortable();
})

