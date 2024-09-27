function createCircle(radius){
   return{
    radius:6,

    location:{
        x:1,
        y:1
    },

    draw:function(){
        console.log('draw');
    }
   }
}   

const circle=createCircle(1);
circle.draw();