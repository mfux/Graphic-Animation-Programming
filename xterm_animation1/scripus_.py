import os

OUTPUT_F = "output_5.gnuplot"

# load old file
with open('animate.gnuplot', 'r') as f:
    animation_gnuplot = f.read()


parametric_hexagon = """set title "Parametric Hexagon"
set urange [-1.3:1.3]
set vrange [0:2*pi]
set autoscale z
set ticslevel 0.	# reserve more space z direction.
set view ,,0.7,1.4	# crunch xyz, and re-extend z back to full size
set ztics autofreq
splot
"""

world = """# set terminal pngcairo  transparent enhanced font "arial,10" fontscale 1.0 size 600, 400
# set output 'world2.1.png'
unset border
set dummy u, v
set angles degrees
set parametric
set view 60, 136, 1.22, 1.26
set samples 64, 64
set isosamples 13, 13
set mapping spherical
set style data lines
unset xtics
unset ytics
unset ztics
set title "Labels colored by GeV plotted in spherical coordinate system"
set urange [ -90.0000 : 90.0000 ] noreverse nowriteback
set vrange [ 0.00000 : 360.000 ] noreverse nowriteback
set cblabel "GeV"
set cbrange [ 0.00000 : 8.00000 ] noreverse nowriteback
set colorbox user
set colorbox vertical origin screen 0.9, 0.2 size screen 0.02, 0.75 front  noinvert bdefault
DEBUG_TERM_HTIC = 119
DEBUG_TERM_VTIC = 119
## Last datafile plotted: "srl.dat"
splot cos(u)*cos(v),cos(u)*sin(v),sin(u) notitle with lines lt 5,       'world.dat' notitle with lines lt 2,       'srl.dat' using 3:2:(1):1:4 with labels notitle point pt 6 lw .1 left offset 1,0 font "Helvetica,7" tc pal
"""

surface = """unset log z
set xtics autofreq
set ytics autofreq
set xrange [-1:1]
set yrange [-1:1]
set samples 51
set isosample 21
set dummy u,v
set title "GPN18"
splot u*v / (u**2 + v**2 + 0.1)
"""


term1 = "cos(v)**3*cos(u)**3"
animate = """set pm3d depthorder
set parametric
set ur[0.01:5]
set vr[0:4*pi]

unset border
set ytics
set xtics
set ztics

i={0,1}
splot """ + term1 + """,sin(v)**3*cos(u)**3,sin(u)**3
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

"""

animated_surface = """unset log z
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
"""

# for word in animate.split(' '):
#     print(word)
# list(zip(animate.split(' '), animation_gnuplot.split(' ')))

with open(OUTPUT_F, "w") as text_file:
    print(animated_surface, file=text_file)
