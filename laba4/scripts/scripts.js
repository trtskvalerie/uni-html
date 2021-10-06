$("td").hover(
    function() {
        var tdi = $(this).parent().children().index($(this));
        $("td").filter(":nth-child(" + (tdi + 1) + ")").css("background-color", "#ffffff");
        return tdi;
    },
    function() {
        var tdi = $(this).parent().children().index($(this));
        $("td").filter(":nth-child(" + (tdi + 1) + ")").css("background-color", "");
    });