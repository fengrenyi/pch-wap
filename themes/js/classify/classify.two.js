  $(function() {      
     //菜单框架自动获取高度
    var doc_H=$(document).height(); 
      $('.Menu_box').height(doc_H);
      //监控获取高度
    window.onresize=function(){
        var doc_H=$(document).height(); 
        $('.Menu_box').height(doc_H);
    }
    loaded ();
  });

  var myScroll_left;
  var myScroll_right;
  function loaded () {
    myScroll_left = new IScroll('#left_Menu', { mouseWheel: true, click: true });
    myScroll_right = new IScroll('#right_Menu', { mouseWheel: true, click: true });
  }
  document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
