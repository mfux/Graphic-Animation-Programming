unset log z
set xtics autofreq
set ytics autofreq
set xrange [-1:1]
set yrange [-1:1]
set samples 51
set isosample 21
set dummy u,v
set title "GPN18"
splot u*v / (u**2 + v**2 + 0.1)

