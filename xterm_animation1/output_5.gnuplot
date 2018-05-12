unset log z
unset parametric
set xtics autofreq
set ytics autofreq
set xrange [-1:1]
set yrange [-1:1]
set samples 51
set isosample 21
set dummy u,v
set title "GPN18w"
set view 60, 136, 1.22, 1.26

do for [j = 200:900 ] {
   if(j < 900) {
       splot u*v*0.1*j / (u**2 + 0.1*j*v**2 + 0.01*j)
       # set view 180,j,1,1
       replot
       pause 0.1
    }
    else {
       # set view 180+0.2*(j-100),j,1,1
       replot
       pause 0.1
    }
}

