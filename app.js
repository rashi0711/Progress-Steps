const prev=document.getElementById('prev');
const next=document.getElementById('next');
const progress=document.getElementById('progress');
const circles=document.querySelectorAll('.circle');
let current=1;
next.addEventListener('click',function()
{
   current++;
   if(current>circles.length)
   {
       current=circles.length;
   }
   updateProgress();
})
prev.addEventListener('click',function()
{
   current--;
   if(current<1)
   {
       current=1;
   }
   updateProgress();
})
function updateProgress()
{
    circles.forEach(function(circle,index)
    {
      if(index<current)
      {
          circle.classList.add('active');
      }
      else{
          circle.classList.remove('active');
      }
    })
    const actives=document.querySelectorAll('.active');
    progress.style.width=((actives.length-1)/(circles.length-1))*100+'%';
    if(current==1)
    {
        prev.disabled=true;
    }
    else if(current===circles.length)
    {
        next.disabled=true;
    }
    else{
        prev.disabled=false;
        next.disabled=false;
    }
}