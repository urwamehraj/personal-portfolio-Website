const edu  = document.getElementById("edu");
const skill = document.getElementById("Skill");
const project = document.getElementById("project");
const About= document.getElementById("About");
const Bio  = document.getElementById("Bio");
const about = document.getElementById("about");
const home= document.getElementById("home");
const pro = document.getElementById("pro");
const Edu= document.getElementById("Edu");
const Hire = document.getElementById("connect");
//let add event listenres for our pages 

home.addEventListener('click', function() {
    Bio.style.display ="block";
    project.style.display ="none";
    edu.style.display ="none";
    About.style.display ="none";
});
about.addEventListener('click', function() {
    About.style.display ="block";
    Bio.style.display ="none";
    project.style.display ="none";
    edu.style.display ="none";
});
pro.addEventListener('click', function() {
    project.style.display ="block";
     About.style.display ="none";
    Bio.style.display ="none";
    edu.style.display ="none";
});
Edu.addEventListener('click', function() {
    edu.style.display ="block";
     About.style.display ="none";
    Bio.style.display ="none";
    project.style.display =" none";
});
Hire.addEventListener('click',function(){
    window.open("https://www.linkedin.com/in/urwa-shaikh-1aba5433a/");
});

const Dl= document.getElementById("download");
Dl.addEventListener('click',function(){
    let act = document.getElementById("circleWrap");
    act.style.display ="inline-block";
    Dl.style.display ="none";
/* Demo: simulate progress updates */
const wrap = document.getElementById('circleWrap');
const pct = document.getElementById('circlePct');
let p = 0, t;
function startSim(){
  if(t) { clearInterval(t); t = null; p = 0; setP(0); return; }
  t = setInterval(()=> {
    p += Math.random()*12;
    if(p >= 100){ p = 100; clearInterval(t); t = null; }
    setP(p);
  }, 350);
}
wrap.addEventListener('click', startSim);

function setP(val){
  val = Math.max(0, Math.min(100, val));
  wrap.style.setProperty('--p', val);
  wrap.setAttribute('aria-valuenow', Math.round(val));
  pct.textContent = Math.round(val);
}});