//dark-toggle model
const [dark, light] = [document.querySelector('.dark'),document.querySelector('.light')];
const [rect1,rect2 ] = [document.querySelector('.rect-1'),document.querySelector('.rect-2')];
const [link, link1,link2, link3] = [document.querySelector('.link'),document.querySelector('.link1'),document.querySelector('.link2'),document.querySelector('.link3')];
light.addEventListener('click',()=>{
  document.querySelector('body').style.background = '#111';
  document.querySelector('body').style.color = '#eee';
  light.style.display = 'none';
  link.style.color = '#eee';
  link1.style.color = '#eee';
  link3.style.color = '#eee';
  rect1.style.background='#eee';
  rect2.style.background='#eee';
  dark.style.display = 'block';
})
dark.addEventListener('click',()=>{
  document.querySelector('body').style.background = '#eee';
  document.querySelector('body').style.color = '#111';
  light.style.display = 'block';
  link.style.color = '#111';
  link1.style.color = '#111';
  link3.style.color = '#111';
  rect1.style.background='#111';
  rect2.style.background='#111';
  dark.style.display = 'none';
})
//typewriter
var Writer = function(selector, text, infinite) {
    this.config = {
      selector: selector,
      text: text,
      infinite: infinite
    };
    this.interval = null;
    this.start = function() {
      var _this = this;
      var cnt = _this.config.text;
      var txt = "";
      var i = 0; 
      time = Math.floor(Math.random() * (300 - 100 + 1)) + 100;
      _this.interval = setInterval(function() {
        if (txt.length == cnt.length) {
          if(_this.config.infinite){
            txt = "";
            i = 0; 
          }else{
            _this.stop();
          }
        } else {
          txt += cnt[i];
          i++;
        }
        document.querySelector(_this.config.selector).innerHTML = txt;
      }, time);
    };
    this.stop = function() {
      var _this = this;
      clearInterval(_this.interval);
      document.querySelector(_this.config.selector).innerHTML = _this.config.text;
    };
  };
  var text = "Personal Companion";
  var writer = new Writer("#text", text, false);
  writer.start();