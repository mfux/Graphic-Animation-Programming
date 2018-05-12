#### Generate a plot
1. Open xterm by typing ```xterm```. Add ```-rv``` to get white background
2. type ```gnuplot``` to open gnuplot
3. type ```set term xterm```
4. type ```load "animate.gnuplot"```

---

#### My gnuplot history

```sh
set terminal
exit
set terminal
exit
set terminal
exit
splot [-15:15.01] [-15:15.01] [-0.2:1] sin(sqrt(x**2+y**2)) / sqrt(x**2+y**2)
exit
set terminal qt
splot [-15:15.01] [-15:15.01] [-0.2:1] sin(sqrt(x**2+y**2)) / sqrt(x**2+y**2)
set terminal x11
splot [-15:15.01] [-15:15.01] [-0.2:1] sin(sqrt(x**2+y**2)) / sqrt(x**2+y**2)
set terminal dumb
splot [-15:15.01] [-15:15.01] [-0.2:1] sin(sqrt(x**2+y**2)) / sqrt(x**2+y**2)
rdb
exit
set terminal regis 4
set terminal
exit
help terminal
exit
set term
exit
do for [ii=1:99] {
    splot 'spiral.txt' every ::1::ii w l ls 1, \
          'spiral.txt' every ::ii::ii w p ls 1
}
set term xterm
set term xterm animate
set term xterm
set term gif animate
reset
set term xterm
n=24    #n frames
dt=2*pi/n
set xrange [0:4*pi]
i=0
load "animate.gnuplot"
set output
plot sin(x+i*dt) w l lt 1 lw 1.5 title sprintf("t=%i",i)
i=i+1
if (i < n) reread
plot sin(x+i*dt) w l lt 1 lw 1.5 title sprintf("t=%i",i)
set term xterm
i=i+1
exit
exit
load animate.gnuplot
load "animate.gnuplot"
set term xterm
set term xterm
load "animate.gnuplot"
set term xterm
splot [-15:15.01] [-15:15.01] [-0.2:1] sin(sqrt(x**2+y**2)) / sqrt(x**2+y**2)
exit
set term xterm
load "animate.gnuplot"
load "animate.gnuplot"
load "animate.gnuplot"
load "animate.gnuplot"
load "animate.gnuplot"
load "animate.gnuplot"
load "animate.gnuplot"
n = 20
dt = 2*pi/n
set xrange [0:4*pi]
i = 0
load "animate.gnuplot"
n = 200
dt = 2*pi/n
i = 0
load "animate.gnuplot"
n = 20000
dt = 2*pi/n
i = 0
i = 0
set xrange [0:4*pi]
load "animate.gnuplot"
sleep 10
pause 1
pause 0.01
i = 0
load "animate.gnuplot"
n = 200
dt = 2*pi/n
i = 0
load "animate.gnuplot"
load "animate.gnuplot"
load "animate.gnuplot"
i = 0
load "animate.gnuplot"
~
i = 0
load "animate.gnuplot"
load "animate.gnuplot"
set term qt
load "animate.gnuplot"
set term xterm
load "animate.gnuplot"
load "animate.gnuplot"
load "animate.gnuplot"
load "animate.gnuplot"
load "animate.gnuplot"
load "animate.gnuplot"
i = 5
load "animate.gnuplot"
i = 5
i = 0
load "animate.gnuplot"
i = 0
load "animate.gnuplot"
load "animate.gnuplot"
load "animate.gnuplot"
load "animate.gnuplot"
load "animate.gnuplot"
load "animate.gnuplot"
load "animate.gnuplot"
load "animate.gnuplot"
load "animate.gnuplot"
load "animate.gnuplot"
exit
load "animate2.gnuplot"
load "animate2.gnuplot"
set term xterm
set term xterm
load "animate2.gnuplot"
set style fill pattern 2
load "animate2.gnuplot"
load "animate2.gnuplot"
load "animate2.gnuplot"
load "animate2.gnuplot"
load "animate2.gnuplot"
load "animate2.gnuplot"
load "animate2.gnuplot"
load "animate2.gnuplot"
load "animate2.gnuplot"
load "animate2.gnuplot"
help set style
load "animate2.gnuplot"
load "animate2.gnuplot"
help set style data
help plotting styles
load "animate2.gnuplot"
load "animate.gnuplot"
i = 0
load "animate.gnuplot"
load "animate.gnuplot"
exit
set term xterm
load "animate.gnuplot"
history
```
