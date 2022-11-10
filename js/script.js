$("#openBurgerMenu, #closeBurgerMenu").click(function(){
    $("#linksBurgerMenu").toggleClass("open");
});

$("#productThumbnail img").click(function(){
    $("#pictureActive").attr("id", "");
    $(this).attr("id", "pictureActive");
    $("#productPicture").css("background-image", "url('"+$(this).attr("src").replace('-thumbnail','')+"')");
});

$(".navProductPicture").click(function(){
    var picturename = $("#productPicture").data("picturename");
    var pictureid = $("#productPicture").data("pictureid");
    var picture = "";
    var id = "";
    if($(this).data("action")=="previous")
    {
        id = (parseInt(pictureid)-1);
        if(id > 4)
        {
            id = 0;
        }
        else if(id <= 0)
        {
            id = 4;
        }
        picture = picturename + id;
    }
    else
    {
        id = (parseInt(pictureid)+1);
        if(id > 4)
        {
            id = 1;
        }
        else if(id <= 0)
        {
            id = 4;
        }
        picture = picturename + id;
    }
    picture  = picture + ".jpg";
    $("#productPicture").data("pictureid", id);
    $("#productPicture").css("background-image", "url('"+picture+"')");
});

$(".editQte").click(function(){
   var action = $(this).data("action");
   if(action=="plus")
   {
       $("#quantity").val(parseInt($("#quantity").val())+1);
   }
   else if(action=="minus")
   {
       if($("#quantity").val()>"0")
       {
           $("#quantity").val(parseInt($("#quantity").val())-1);
       }
   }
});

$("#addToCartButton").click(function(){
    var qteActual = $("#articleQte").text();
    var qteTotal = parseInt(qteActual) + parseInt($("#quantity").val());
    var price = 125;
    var total = parseInt(qteTotal) * parseInt(price);
    $("#articleQte").text(qteTotal);
    $("#articleTotal").text("$"+total);
    $("#notification").text(qteTotal);

    if(qteTotal<=0)
    {
        $("#notification").css("display", "none");
        $("#checkOutBtn").css("display", "none");
        $(".articleCart").removeClass("added");
    }
    else
    {
        $("#notification").css("display", "block");
        $("#checkOutBtn").css("display", "block");
        $(".articleCart").addClass("added");
    }
});

$("#destroyArticle").click(function(){
    var qte = "0";
    $("#articleQte").text(qte);
    $("#articleTotal").text("$0");
    $("#notification").text(qte);
    if(qte<=0)
    {
        $("#notification").css("display", "none");
        $("#checkOutBtn").css("display", "none");
        $(".articleCart").removeClass("added");
    }
    else
    {
        $("#notification").css("display", "block");
        $("#checkOutBtn").css("display", "block");
        $(".articleCart").addClass("added");
    }
});