/**
 * Expérimentation 2 :
 * Au maintien du click, Déplacez le carré bleu dans le carré rouge
 */
/*
alert('test') ;
window.onload = function()*/
{
   /* $(document).on('mousemove', function(e) {
        var xPos = e.pageX;
        var yPos = e.pageY;
        // console.log(xPos, yPos);
        $('#div2').css({
            'top': yPos,
            'left': xPos
        });
    });
*/
  /*  const cursor = document.getElementById('div2');

    document.addEventListener('mousemove', (event) => {
        let x = event.clientX;
        let y = event.clientY;
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
    });
} ;

*/






    var mouse_down = false;

    function on_mouse_down_square(event)
        {
            mouse_down=true;
        }

    function on_mouse_up(event)
        {
            mouse_down=false;
        }

    document.onmousemove = on_mouse_move;

    document.onmouseup = on_mouse_up;

    function on_mouse_move(event)
        {
            if (mouse_down === true)
            {

                document.querySelector('#div2').style.left = event.clientX-50+'px';
                document.querySelector('#div2').style.top = event.clientY-50+'px';



            }
        }} ;






function myFunction() {


    var canvas = document.getElementById("div1");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.rect(20, 40, 50, 50);
    ctx.fillStyle = "#FFF000";
    ctx.fill();
    ctx.closePath();
} ;


/*******************

function calcXpos(event, scare, container)
{
    return event.pageX - container.offsetLeft - (scare.offsetWidth/2) ;
}

function calcYpos(event, scare, container)
{
    return event.pageY - container.offsetTop -(scare.offsetHeight/2) ;
}

function inArea(event, scare, container)
{
    const limitTop = container.offsetTop ;
    const limitRight = container.offsetLeft +  container.offsetWidth - scare.offsetWidth ;
    const limitBottom = container.offsetTop +  container.offsetheight - scare.offsetHeight ;

    const limitLeft = container.offsetLeft ;

    const x= event.pageX - (scare.offsetWidth/2) ;
    const y = event.pageY - (scare.offsetHeight/2) ;


    if(y>=limitTop && y<= limitBottom && x>= limitLeft && x <= limitRight)
    {
        return true ;
    }

    else
    {
        return false
    }

   /* return (y>= limitTop &&
        y<= limitBottom &&
            x>= limitLeft &&
            x <= limitRight
    ) ;*/

/*}*/

/*
window.addEventListener('DOMContentLoaded', function(){
    const container = document.getElementById('div1')
    const scare = document.getElementById('div2') ;
    console.log('scare : ', scare) ;

    let isDown = false ;

     scare.addEventListener('mousedown', function(event){
         isDown = true ;
     });

     scare.addEventListener('mouseup', function(event){
         isDown = false ;

     });

     document.addEventListener('mousemove', function (event) {
         console.log('event : ', event) ;
         const x =  event.pageX ;
         const Y = event.pageY ;



         if(isDown && inArea(event, scare, container))
         {
             scare.style.left = calcXpos(event, scare, container) + 'px' ;
             sacre.style.top = calcYpos(event, scare, container )+ 'px';
         }


     }) ;
} )

} ;

 */