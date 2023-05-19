$(document).ready(function()
{
    $("#imgAnimate").hover(
        function()
        {
            $(this).attr("src", "images/matrice.gif");
        },
        function()
        {
            $(this).attr("src", "images/matrice_patratica.jpg");
        });
});