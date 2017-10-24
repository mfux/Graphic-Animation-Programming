 redish=["#993030",
	 		"#B23838",
	 		"#CC4040",
	 		"#E64848",
 			"#FF5050",
      "#E64848",
      "#CC4040",
      "#B23838",
      "#993030",
      "#FF6262","#993030",
	 		"#B23838",
	 		"#CC4040",
	 		"#E64848",
 			"#FF5050",
      "#E64848",
      "#CC4040",
      "#B23838",
      "#993030",
      "#FF6262","#993030",
	 		"#B23838",
	 		"#CC4040",
	 		"#E64848",
 			"#FF5050",
      "#E64848",
      "#CC4040",
      "#B23838",
      "#993030",
      "#FF6262"]
a = Canvas()
arraycount = 0
rotation = 0
thickness = 
size = 20
edges = 5
i = 0
a.draw = function() { 
  // fade out canvas 10%
  a.clear()
  
  size = size+0.05
  rotation += .00005 // increase rotation
  // rotate canvas to current rotation
  a.rotate( rotation )
  
  a.polygon( a.center.x, a.center.y, size, edges)
  a.stroke( redish[arraycount], thickness )
  a.polygon( a.center.x, a.center.y, size, edges)
  a.stroke( redish[arraycount-1], thickness-20 )
  a.polygon( a.center.x, a.center.y, size+100, edges)
  a.stroke( redish[arraycount-2], thickness-40 )
  a.rotate(rotation)
  a.polygon( a.center.x, a.center.y, size-100, edges)
  a.stroke( redish[arraycount-3], thickness-60 )
  a.rotate(rotation)
  a.polygon( a.center.x, a.center.y, size+10, edges)
  a.stroke( redish[arraycount-4], thickness-80 )
  a.rotate(rotation)
  a.rotate(rotation)
  a.polygon( a.center.x, a.center.y, size+300, edges)
  a.stroke( redish[arraycount-5], thickness-10 )
  for(var i = 0; i<40; i++){
    a.rotate(rotation)
    a.polygon( a.center.x, a.center.y, size+i*10, edges)
  a.stroke( redish [arraycount+i], thickness-10 )
  }
}
beat = 0;
o=Seq(function(){
  if (arraycount<=8){
    arraycount = arraycount + 1
    size = 100
  }
    else{
      arraycount = 0
      i = 0
    }
},10)
