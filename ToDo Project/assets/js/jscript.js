//cross through task items
$("ul").on("click","li",function(){
   $(this).toggleClass("completed")
});

//delete tasks
$("ul").on("click","span",function(event){
    localStorage.removeItem(this);
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    })
event.stopPropagation();
});

//adding new tasks
$("input[type='text']").keypress(function(event){
if(event.which===13){
    var taskText=$(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+taskText+"</li>");
}
});

//fade editor
$(".fa-angle-double-up").click(function(){
    $("input[type='text']").fadeToggle();
});

//Local Storage save
$(".fa-save").click(function(){
    var arr=[],localData;
for(var i=0;i<document.querySelectorAll("li").length;i++){
arr[i]=document.querySelectorAll("li")[i].textContent;
}
localStorage.setItem('arr',JSON.stringify(arr));

})
//load saved data
window.onload=function(){
    localData=JSON.parse(localStorage.getItem('arr'));
    console.log(localData[0])

    if(localData.length>=1){
        $("li").remove();
    for(var i=0;i<localData.length;i++){
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+localData[i]+"</li>");
    }
}
}

