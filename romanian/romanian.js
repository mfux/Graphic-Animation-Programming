Gibber.Environment.Notation.on('global')
Clock.bpm=120


a = Canvas()

moveup = true
movedown = false
thickness = 1
y1 = 0;
y2 = 0;
y3 = 0
y4 = 0
x1 = 0
x2 = 0
y = 1
  colors1=["#993030",
	 		"#B23838",
	 		"#CC4040",
	 		"#E64848",
 			"#FF5050",
      "#E64848",
      "#CC4040",
      "#B23838",
      "#993030",
      "#FF6262"]

p = Freesound(158625)
v = Freesound(130393)
r = Freesound(63538);
c = Freesound(47694);
j = Freesound(4343)
t = Tom()
h = Hat({offset:1/8})


c.note.seq(1,[6/32,2/32,2/16,2/16,1/4,1/4,6/32,2/32,1/8,1/8,2/8,1/4])
j.note.seq(1,.5)
h.note.seq(5555,1/4)
r.note.seq([1,1.5],[1/16,2])
s = Synth('rhodes')

p._
p.note.seq([2,2,3],[1/32,1/32,1])
p.fx.add(Delay(0.45,.65))
p.amp = .2
p.fx.add(Reverb({ roomSize: Add( .75, Sine( .05, .245 )._ ) }))
v.loops = true
v.amp = .7
v.note.seq(1,[1/4])

beat = 0;
o=Seq(function(){
  if(beat==0){
    beat=1;
    s.chord.seq('d4',1/4)
    a.rotate(.1)
    
  }
  else{
    beat=0
    s.chord.seq('e4',1/4)
  a.rotate(-.1)
  }
},2)

beat2 = 0;
k=Seq(function(){
  if(beat2==0){
    beat2=1;
    
  //  y1 = 50
  //  y2 = 50
  //  a.rotate(.1)
    y3 = 0
    y4 = 0
    e=11
    
  }
  else{
    beat2=0
    e=0
    y1 = 0
    y2 = 0
   // a.rotate(-.1)
  }
},1/8)




  


a.draw = function ()
{
  y1 +=.1
  y2 +=.1
  y3 +=.1
  y4 +=.1 
  a.clear()
  
   for(var x = 1; x<10 ; x++) { 
a.line(x1+0,x*50+y1/(.5*x),x2+2000,x*50+y2/(.5*x))
a.stroke(colors1[x], thickness )
}   
 //a.rotate(e)
  
    
     for(var x = 1; x<10 ; x++) { 
a.line(x1+700,x*50+y1/(.5*x),x2+2000,x*50+y2/(.5*x)+700)
a.stroke(colors1[x], thickness )
} 
  //rotate(e*-1)
  
       for(var x = 1; x<10 ; x++) { 
a.line(x1,x*50+y1/(.5*x)+300,x2+2000,x*50+y2/(.5*x)+300)
a.stroke(colors1[x], thickness )
}  
 
}

w = Seq(function(){
thatcol = "hi"
  for(var x = 0; x<9 ; x++) { 
   if(x==0){
     thatcol = colors1[0]
   }
    if(x==8)
      colors1[9]=thatcol
   colors1[x]=colors1[x+1]
   
}
},1/16)









