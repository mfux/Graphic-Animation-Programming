set pm3d depthorder
set parametric
set ur[0.01:5]
set vr[0:4*pi]

unset border
unset ytics 
unset xtics 
unset ztics 

i={0,1}
splot u*cos(v),u*sin(v),real(sqrt(u)*exp(i*0.5*v))
unset ytics 
unset xtics 
unset ztics 
#set term gif animate optimize size 480,360
#set output 'movie.gif'

do for [j = 0:900 ] {
   if(j < 100) {
       set view 180,j,1,1
       replot
       pause 0.1
    }
    else {
       set view 180+0.2*(j-100),j,1,1
       replot
       pause 0.1
    }
}
