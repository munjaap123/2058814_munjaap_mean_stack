
//var i = 0;
function storeData(){
    var title = document.getElementById("title").value;
    //console.log("title");
    var article = document.getElementById("article"). value;
    var url = document.getElementById("url").value;

    //var Content = title + article + url;
     //document.getElementById("container2").innerHTML =  Content; 
     title = document.getElementsByClassName("blogtitle").children[0].children[1].children[3].children[0].children[1].children[0];
    article = document.getElementsByClassName("overview"). children[0].children[1].children[3].children[0].children[1].children[1];
    image = document.getElementsByClassName("picture").children[0].children[1].children[3].children[0].children[0];

    //document.getElementById("text-footer1").innerHTML="Last updated:"+obj.getMinutes()+":"+obj.getSeconds();
}