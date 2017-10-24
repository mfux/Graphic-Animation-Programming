a = Canvas()
// create variable to hold rotation
// rotation is measured in radians
beat=0
rotation = 0
size = 200;
drive=0
ink=0
length=0
direction=0
just=0
grad=0
rad=0
grad1=0
rad1=0
grad2=0
rad2=0
grad3=0
rad3=0
grad4=0
rad4=0
grad5=0
rad5=0
grad6=0
rad6=0
dasx=Math.sin(rotation+Math.PI*1)*200
dasy=Math.sin(Math.PI*1+rotation+Math.PI*.5)*200
a.draw = function() { 
  // fade out canvas 10%
  //a.fade(.1)
  drive += .002
  ink += 1;
  a.clear()
  if(beat==1&&size<300)
  	size += 2;
  else if(size>200)
    size-=1;
  
  rotation += .002 // increase rotation
  // rotate canvas to current rotation
  a.rotate(rotation)
  
  
  
  
  a.polygon(a.center.x+ Math.sin(rotation+Math.PI*1.5)*400,
            a.center.y+ Math.sin(Math.PI*1.5+rotation+Math.PI*.5)*400,
            size, 3)
   a.stroke('green', 10 )
   a.polygon(a.center.x+ Math.sin(rotation+Math.PI*-1.5)*400,
            a.center.y+ Math.sin(Math.PI*-1.5+rotation+Math.PI*.5)*400,
            size, 3)
  
  a.stroke('green', 10 )
  
 
 
 speed=600;
 
 lifetime=400; 
 i=0
 
 if(length<500&&just==0)
   length+=1.2;
  else{
    length-=1.2;
    just=1;
  }
 if(length<=2&&just==1){
   just=0;
   if(i==0)
     i=1;
   else
     i=0  
 }
 if(i==1){
   
   
 }  
  dasx=Math.sin(rotation+Math.PI*grad)*rad
  dasy=Math.sin(Math.PI*grad+rotation+Math.PI*.5)*rad
  dasx1=Math.sin(rotation+Math.PI*grad1)*rad1
  dasy1=Math.sin(Math.PI*grad1+rotation+Math.PI*.5)*rad1
  dasx2=Math.sin(rotation+Math.PI*grad2)*rad2
  dasy2=Math.sin(Math.PI*grad2+rotation+Math.PI*.5)*rad2
  dasx3=Math.sin(rotation+Math.PI*grad3)*rad3
  dasy3=Math.sin(Math.PI*grad3+rotation+Math.PI*.5)*rad3
  dasx4=Math.sin(rotation+Math.PI*grad4)*rad4
  dasy4=Math.sin(Math.PI*grad4+rotation+Math.PI*.5)*rad4
  dasx5=Math.sin(rotation+Math.PI*grad5)*rad5
  dasy5=Math.sin(Math.PI*grad5+rotation+Math.PI*.5)*rad5
  dasx6=Math.sin(rotation+Math.PI*grad6)*rad6
  dasy6=Math.sin(Math.PI*grad6+rotation+Math.PI*.5)*rad6
  
 if(length<=4&&just==1) {
 grad=Math.random()*2
 rad=Math.random()*800
 grad1=Math.random()*2
 rad1=Math.random()*800
 grad2=Math.random()*2
 rad2=Math.random()*800
 grad3=Math.random()*2
 rad3=Math.random()*800
 grad4=Math.random()*2
 rad4=Math.random()*800
 grad5=Math.random()*2
 rad5=Math.random()*800
 grad6=Math.random()*2
 rad6=Math.random()*800
  
   
 if(Math.floor(Math.random()>=.5))
   k=1
   else
     k=-1;
 direction=direction+k
 drive=0;
   just=0;
 length=0;  
}
 
 
 a.line((dasx+a.center.x+ Math.sin(rotation+Math.PI*(2.5+.5*direction))*(speed*drive+length)),
       (dasy+a.center.y+ Math.sin(Math.PI*(3+.5*direction)+rotation)*(speed*drive+length)),
       (dasx+a.center.x+ Math.sin(rotation+Math.PI*(-.5+.5*direction))*(-speed*drive+length)),
       (dasy+a.center.y+ Math.sin(Math.PI*(-0+.5*direction)+rotation)*(-speed*drive+length)))
 
   a.stroke('yellow', 1 )
 
   
     
      a.line((dasx+a.center.x+ Math.sin(rotation+Math.PI*(2.5+.5*(direction+1)))*(speed*drive+length)),
       (dasy+a.center.y+ Math.sin(Math.PI*(3+.5*(direction+1))+rotation)*(speed*drive+length)),
       (dasx+a.center.x+ Math.sin(rotation+Math.PI*(-.5+.5*(direction+1)))*(-speed*drive+length)),
       (dasy+a.center.y+ Math.sin(Math.PI*(0+.5*(direction+1))+rotation)*(-speed*drive+length)))
 a.stroke('yellow', 1 )
 
 
  a.line((dasx1+a.center.x+ Math.sin(rotation+Math.PI*(2.5+.5*direction))*(speed*drive+length)),
       (dasy1+a.center.y+ Math.sin(Math.PI*(3+.5*direction)+rotation)*(speed*drive+length)),
       (dasx1+a.center.x+ Math.sin(rotation+Math.PI*(-.5+.5*direction))*(-speed*drive+length)),
       (dasy1+a.center.y+ Math.sin(Math.PI*(-0+.5*direction)+rotation)*(-speed*drive+length)))
 
   a.stroke('yellow', 1 )
 
   
     
      a.line((dasx1+a.center.x+ Math.sin(rotation+Math.PI*(2.5+.5*(direction+1)))*(speed*drive+length)),
       (dasy1+a.center.y+ Math.sin(Math.PI*(3+.5*(direction+1))+rotation)*(speed*drive+length)),
       (dasx1+a.center.x+ Math.sin(rotation+Math.PI*(-.5+.5*(direction+1)))*(-speed*drive+length)),
       (dasy1+a.center.y+ Math.sin(Math.PI*(0+.5*(direction+1))+rotation)*(-speed*drive+length)))
 a.stroke('yellow', 1 )
 
 
  a.line((dasx2+a.center.x+ Math.sin(rotation+Math.PI*(2.5+.5*direction))*(speed*drive+length)),
       (dasy2+a.center.y+ Math.sin(Math.PI*(3+.5*direction)+rotation)*(speed*drive+length)),
       (dasx2+a.center.x+ Math.sin(rotation+Math.PI*(-.5+.5*direction))*(-speed*drive+length)),
       (dasy2+a.center.y+ Math.sin(Math.PI*(-0+.5*direction)+rotation)*(-speed*drive+length)))
 
   a.stroke('yellow', 1 )
 
   
     
      a.line((dasx2+a.center.x+ Math.sin(rotation+Math.PI*(2.5+.5*(direction+1)))*(speed*drive+length)),
       (dasy2+a.center.y+ Math.sin(Math.PI*(3+.5*(direction+1))+rotation)*(speed*drive+length)),
       (dasx2+a.center.x+ Math.sin(rotation+Math.PI*(-.5+.5*(direction+1)))*(-speed*drive+length)),
       (dasy2+a.center.y+ Math.sin(Math.PI*(0+.5*(direction+1))+rotation)*(-speed*drive+length)))
 a.stroke('yellow', 1 )
 
 
  a.line((dasx3+a.center.x+ Math.sin(rotation+Math.PI*(2.5+.5*direction))*(speed*drive+length)),
       (dasy3+a.center.y+ Math.sin(Math.PI*(3+.5*direction)+rotation)*(speed*drive+length)),
       (dasx3+a.center.x+ Math.sin(rotation+Math.PI*(-.5+.5*direction))*(-speed*drive+length)),
       (dasy3+a.center.y+ Math.sin(Math.PI*(-0+.5*direction)+rotation)*(-speed*drive+length)))
 
   a.stroke('yellow', 1 )
 
   
     
      a.line((dasx3+a.center.x+ Math.sin(rotation+Math.PI*(2.5+.5*(direction+1)))*(speed*drive+length)),
       (dasy3+a.center.y+ Math.sin(Math.PI*(3+.5*(direction+1))+rotation)*(speed*drive+length)),
       (dasx3+a.center.x+ Math.sin(rotation+Math.PI*(-.5+.5*(direction+1)))*(-speed*drive+length)),
       (dasy3+a.center.y+ Math.sin(Math.PI*(0+.5*(direction+1))+rotation)*(-speed*drive+length)))
 a.stroke('yellow', 1 )
 
 
  a.line((dasx4+a.center.x+ Math.sin(rotation+Math.PI*(2.5+.5*direction))*(speed*drive+length)),
       (dasy4+a.center.y+ Math.sin(Math.PI*(3+.5*direction)+rotation)*(speed*drive+length)),
       (dasx4+a.center.x+ Math.sin(rotation+Math.PI*(-.5+.5*direction))*(-speed*drive+length)),
       (dasy4+a.center.y+ Math.sin(Math.PI*(-0+.5*direction)+rotation)*(-speed*drive+length)))
 
   a.stroke('yellow', 1 )
 
   
     
      a.line((dasx4+a.center.x+ Math.sin(rotation+Math.PI*(2.5+.5*(direction+1)))*(speed*drive+length)),
       (dasy4+a.center.y+ Math.sin(Math.PI*(3+.5*(direction+1))+rotation)*(speed*drive+length)),
       (dasx4+a.center.x+ Math.sin(rotation+Math.PI*(-.5+.5*(direction+1)))*(-speed*drive+length)),
       (dasy4+a.center.y+ Math.sin(Math.PI*(0+.5*(direction+1))+rotation)*(-speed*drive+length)))
 a.stroke('yellow', 1 )
 
 
  a.line((dasx5+a.center.x+ Math.sin(rotation+Math.PI*(2.5+.5*direction))*(speed*drive+length)),
       (dasy5+a.center.y+ Math.sin(Math.PI*(3+.5*direction)+rotation)*(speed*drive+length)),
       (dasx5+a.center.x+ Math.sin(rotation+Math.PI*(-.5+.5*direction))*(-speed*drive+length)),
       (dasy5+a.center.y+ Math.sin(Math.PI*(-0+.5*direction)+rotation)*(-speed*drive+length)))
 
   a.stroke('yellow', 1 )
 
   
     
      a.line((dasx5+a.center.x+ Math.sin(rotation+Math.PI*(2.5+.5*(direction+1)))*(speed*drive+length)),
       (dasy5+a.center.y+ Math.sin(Math.PI*(3+.5*(direction+1))+rotation)*(speed*drive+length)),
       (dasx5+a.center.x+ Math.sin(rotation+Math.PI*(-.5+.5*(direction+1)))*(-speed*drive+length)),
       (dasy5+a.center.y+ Math.sin(Math.PI*(0+.5*(direction+1))+rotation)*(-speed*drive+length)))
 a.stroke('yellow', 1 )
 
 
  a.line((dasx6+a.center.x+ Math.sin(rotation+Math.PI*(2.5+.5*direction))*(speed*drive+length)),
       (dasy6+a.center.y+ Math.sin(Math.PI*(3+.5*direction)+rotation)*(speed*drive+length)),
       (dasx6+a.center.x+ Math.sin(rotation+Math.PI*(-.5+.5*direction))*(-speed*drive+length)),
       (dasy6+a.center.y+ Math.sin(Math.PI*(-0+.5*direction)+rotation)*(-speed*drive+length)))
 
   a.stroke('yellow', 1 )
 
   
     
      a.line((dasx6+a.center.x+ Math.sin(rotation+Math.PI*(2.5+.5*(direction+1)))*(speed*drive+length)),
       (dasy6+a.center.y+ Math.sin(Math.PI*(3+.5*(direction+1))+rotation)*(speed*drive+length)),
       (dasx6+a.center.x+ Math.sin(rotation+Math.PI*(-.5+.5*(direction+1)))*(-speed*drive+length)),
       (dasy6+a.center.y+ Math.sin(Math.PI*(0+.5*(direction+1))+rotation)*(-speed*drive+length)))
 a.stroke('yellow', 1 )
 
 direction=direction+2
 
  a.line((dasx+a.center.x+ Math.sin(rotation+Math.PI*(2.5+.5*direction))*(speed*drive+length)),
       (dasy+a.center.y+ Math.sin(Math.PI*(3+.5*direction)+rotation)*(speed*drive+length)),
       (dasx+a.center.x+ Math.sin(rotation+Math.PI*(-.5+.5*direction))*(-speed*drive+length)),
       (dasy+a.center.y+ Math.sin(Math.PI*(-0+.5*direction)+rotation)*(-speed*drive+length)))
 
   a.stroke('yellow', 1 )
 
   
     
      a.line((dasx+a.center.x+ Math.sin(rotation+Math.PI*(2.5+.5*(direction+1)))*(speed*drive+length)),
       (dasy+a.center.y+ Math.sin(Math.PI*(3+.5*(direction+1))+rotation)*(speed*drive+length)),
       (dasx+a.center.x+ Math.sin(rotation+Math.PI*(-.5+.5*(direction+1)))*(-speed*drive+length)),
       (dasy+a.center.y+ Math.sin(Math.PI*(0+.5*(direction+1))+rotation)*(-speed*drive+length)))
 a.stroke('yellow', 1 )
 
 
  a.line((dasx1+a.center.x+ Math.sin(rotation+Math.PI*(2.5+.5*direction))*(speed*drive+length)),
       (dasy1+a.center.y+ Math.sin(Math.PI*(3+.5*direction)+rotation)*(speed*drive+length)),
       (dasx1+a.center.x+ Math.sin(rotation+Math.PI*(-.5+.5*direction))*(-speed*drive+length)),
       (dasy1+a.center.y+ Math.sin(Math.PI*(-0+.5*direction)+rotation)*(-speed*drive+length)))
 
   a.stroke('yellow', 1 )
 
   
     
      a.line((dasx1+a.center.x+ Math.sin(rotation+Math.PI*(2.5+.5*(direction+1)))*(speed*drive+length)),
       (dasy1+a.center.y+ Math.sin(Math.PI*(3+.5*(direction+1))+rotation)*(speed*drive+length)),
       (dasx1+a.center.x+ Math.sin(rotation+Math.PI*(-.5+.5*(direction+1)))*(-speed*drive+length)),
       (dasy1+a.center.y+ Math.sin(Math.PI*(0+.5*(direction+1))+rotation)*(-speed*drive+length)))
 a.stroke('yellow', 1 )
 
 
  a.line((dasx2+a.center.x+ Math.sin(rotation+Math.PI*(2.5+.5*direction))*(speed*drive+length)),
       (dasy2+a.center.y+ Math.sin(Math.PI*(3+.5*direction)+rotation)*(speed*drive+length)),
       (dasx2+a.center.x+ Math.sin(rotation+Math.PI*(-.5+.5*direction))*(-speed*drive+length)),
       (dasy2+a.center.y+ Math.sin(Math.PI*(-0+.5*direction)+rotation)*(-speed*drive+length)))
 
   a.stroke('yellow', 1 )
 
   
     
      a.line((dasx2+a.center.x+ Math.sin(rotation+Math.PI*(2.5+.5*(direction+1)))*(speed*drive+length)),
       (dasy2+a.center.y+ Math.sin(Math.PI*(3+.5*(direction+1))+rotation)*(speed*drive+length)),
       (dasx2+a.center.x+ Math.sin(rotation+Math.PI*(-.5+.5*(direction+1)))*(-speed*drive+length)),
       (dasy2+a.center.y+ Math.sin(Math.PI*(0+.5*(direction+1))+rotation)*(-speed*drive+length)))
 a.stroke('yellow', 1 )
 
 
  a.line((dasx3+a.center.x+ Math.sin(rotation+Math.PI*(2.5+.5*direction))*(speed*drive+length)),
       (dasy3+a.center.y+ Math.sin(Math.PI*(3+.5*direction)+rotation)*(speed*drive+length)),
       (dasx3+a.center.x+ Math.sin(rotation+Math.PI*(-.5+.5*direction))*(-speed*drive+length)),
       (dasy3+a.center.y+ Math.sin(Math.PI*(-0+.5*direction)+rotation)*(-speed*drive+length)))
 
   a.stroke('yellow', 1 )
 
   
     
      a.line((dasx3+a.center.x+ Math.sin(rotation+Math.PI*(2.5+.5*(direction+1)))*(speed*drive+length)),
       (dasy3+a.center.y+ Math.sin(Math.PI*(3+.5*(direction+1))+rotation)*(speed*drive+length)),
       (dasx3+a.center.x+ Math.sin(rotation+Math.PI*(-.5+.5*(direction+1)))*(-speed*drive+length)),
       (dasy3+a.center.y+ Math.sin(Math.PI*(0+.5*(direction+1))+rotation)*(-speed*drive+length)))
 a.stroke('yellow', 1 )
 
 
  a.line((dasx4+a.center.x+ Math.sin(rotation+Math.PI*(2.5+.5*direction))*(speed*drive+length)),
       (dasy4+a.center.y+ Math.sin(Math.PI*(3+.5*direction)+rotation)*(speed*drive+length)),
       (dasx4+a.center.x+ Math.sin(rotation+Math.PI*(-.5+.5*direction))*(-speed*drive+length)),
       (dasy4+a.center.y+ Math.sin(Math.PI*(-0+.5*direction)+rotation)*(-speed*drive+length)))
 
   a.stroke('yellow', 1 )
 
   
     
      a.line((dasx4+a.center.x+ Math.sin(rotation+Math.PI*(2.5+.5*(direction+1)))*(speed*drive+length)),
       (dasy4+a.center.y+ Math.sin(Math.PI*(3+.5*(direction+1))+rotation)*(speed*drive+length)),
       (dasx4+a.center.x+ Math.sin(rotation+Math.PI*(-.5+.5*(direction+1)))*(-speed*drive+length)),
       (dasy4+a.center.y+ Math.sin(Math.PI*(0+.5*(direction+1))+rotation)*(-speed*drive+length)))
 a.stroke('yellow', 1 )
 
 
  a.line((dasx5+a.center.x+ Math.sin(rotation+Math.PI*(2.5+.5*direction))*(speed*drive+length)),
       (dasy5+a.center.y+ Math.sin(Math.PI*(3+.5*direction)+rotation)*(speed*drive+length)),
       (dasx5+a.center.x+ Math.sin(rotation+Math.PI*(-.5+.5*direction))*(-speed*drive+length)),
       (dasy5+a.center.y+ Math.sin(Math.PI*(-0+.5*direction)+rotation)*(-speed*drive+length)))
 
   a.stroke('yellow', 1 )
 
   
     
      a.line((dasx5+a.center.x+ Math.sin(rotation+Math.PI*(2.5+.5*(direction+1)))*(speed*drive+length)),
       (dasy5+a.center.y+ Math.sin(Math.PI*(3+.5*(direction+1))+rotation)*(speed*drive+length)),
       (dasx5+a.center.x+ Math.sin(rotation+Math.PI*(-.5+.5*(direction+1)))*(-speed*drive+length)),
       (dasy5+a.center.y+ Math.sin(Math.PI*(0+.5*(direction+1))+rotation)*(-speed*drive+length)))
 a.stroke('yellow', 1 )
 
 
  a.line((dasx6+a.center.x+ Math.sin(rotation+Math.PI*(2.5+.5*direction))*(speed*drive+length)),
       (dasy6+a.center.y+ Math.sin(Math.PI*(3+.5*direction)+rotation)*(speed*drive+length)),
       (dasx6+a.center.x+ Math.sin(rotation+Math.PI*(-.5+.5*direction))*(-speed*drive+length)),
       (dasy6+a.center.y+ Math.sin(Math.PI*(-0+.5*direction)+rotation)*(-speed*drive+length)))
 
   a.stroke('yellow', 1 )
 
   
     
      a.line((dasx6+a.center.x+ Math.sin(rotation+Math.PI*(2.5+.5*(direction+1)))*(speed*drive+length)),
       (dasy6+a.center.y+ Math.sin(Math.PI*(3+.5*(direction+1))+rotation)*(speed*drive+length)),
       (dasx6+a.center.x+ Math.sin(rotation+Math.PI*(-.5+.5*(direction+1)))*(-speed*drive+length)),
       (dasy6+a.center.y+ Math.sin(Math.PI*(0+.5*(direction+1))+rotation)*(-speed*drive+length)))
 a.stroke('yellow', 1 )
  
 
 a.rotate(rotation)
 a.polygon( a.center.x, a.center.y, size, 3)
  
  a.stroke('green', 5 )
}


o=Seq(function(){
  if(beat==0)
    beat=1;
  else
    beat=0
},1/8)





