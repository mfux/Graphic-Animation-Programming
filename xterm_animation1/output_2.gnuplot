set pm3d depthorder
set parametric
set ur[0.01:5]
set vr[0:4*pi]

unset border
set ytics
set xtics
set ztics

i={0,1}
splot cos(v)**3*cos(u)**3,sin(v)**3*cos(u)**3,sin(u)**3
set ytics
set xtics
set ztics
#set term gif animate optimize size 480,360
#set output 'movie.gif'

do for [j = 200:900 ] {
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


