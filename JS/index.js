$(document).ready(function(){
    localStorage.clear();
    $("#ngeeann, #rss, #egps").hide();
    $("#paragraphIntro").text("");
    let disp = `Hello, I am Lim Xiang! I am currently a Year 3 student pursuing my interest in
    Information
    Technology. I
    have a huge passion for science and technology since 2014. Through my Co-Curriculum
    Activities that I participated during my years in secondary school, it shaped my
    interest in
    programming and influenced me to choose Information Technology. Curiosity is my biggest
    motivation that encourages me to learn and gain new experiences. I constantly seek to
    improve myself in this ever-changing dynamic world, be it skill set, perception and so
    on.
    In all my involvement, I seek to strive for excellence.`
    typingline(disp, 15, "#paragraphIntro")
})
// Toggle the information related to the school
$(".ngeeann").click(function(){
    let condition = localStorage.getItem("NpDropMenu");
    if(condition != "True"){
        $("#ngeeann").show();
        $("#ngeeannPointer").addClass("rotateimg180")
        localStorage.setItem("NpDropMenu","True");

    }else{
        $("#ngeeann").hide();
        $("#ngeeannPointer").removeClass("rotateimg180")
        localStorage.setItem("NpDropMenu","False");
    }
})
$(".rss").click(function(){
    let condition = localStorage.getItem("rssDropMenu");
    if(condition != "True"){
        $("#rss").show();
        $("#rssPointer").addClass("rotateimg180")
        localStorage.setItem("rssDropMenu","True");
    }else{
        $("#rss").hide();
        $("#rssPointer").removeClass("rotateimg180")
        localStorage.setItem("rssDropMenu","False");
        
    }
})
$(".egps").click(function(){
    let condition = localStorage.getItem("egpsDropMenu");
    if(condition != "True"){
        $("#egps").show();
        $("#egpsPointer").addClass("rotateimg180")
        localStorage.setItem("egpsDropMenu","True");
    }else{
        $("#egps").hide();
        $("#egpsPointer").removeClass("rotateimg180")
        localStorage.setItem("egpsDropMenu","False");
    }
})

// JS to create typing effect
function typingline(disp, speed, dom) {
    var char = 0;
    //Create a promise so that .then can the next function will wait till this
    // function execute finish. Promise will return a result
    return new Promise(function (resolve) {
      //At set interval, the function will change the text on the screen
      //when it is finish it will clear interval
      var test = setInterval(type, speed);
      function type() {
        if (char <= disp.length) {
          var display = disp.slice(0, char);
          $(dom).text(display);
          char++;
        } else {
          clearInterval(test);
          resolve("done");
        }
      }
    });
  }