$(function(){
  var min = $(".minutes-container"),
  sec = $(".seconds-container"),
  minPassed = 0,
  secPassed = 0,
  passed = 0,
  flag = false;
  $(".start").on('click', function(e){
    e.preventDefault();
    flag = true;
    min.addClass("go-min").removeClass("pause");
    sec.addClass("go-sec").removeClass("pause");
    counter();
  });
  $(".pause").on('click', function(e){
    e.preventDefault();
    flag = false;
    min.addClass("pause");
    sec.addClass("pause");
    minPassed = Math.floor(passed / 600);
    secPassed = Math.floor(passed / 10) - minPassed * 60;
    alert("Passed: " + minPassed + " min" + " " + secPassed + " sec");
  });
  $(".reset").on('click', function(e){
    e.preventDefault();
    flag = false;
    passed = 0;
    min.removeClass("go-min");
    sec.removeClass("go-sec");
  });
  function counter(){      
      if(flag){
        setTimeout(function(){
          passed += 1;
          counter();
        }, 100);
      }else {
        return false;
      }
    }
});