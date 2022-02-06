let colors = ["#86340A", "#FF1700", "#781D42"]

gsap.from(".one", {x:-100, duration: 2, delay:.5, stagger:3, backgroundColor:function(i){
    return colors[i%3]
} }) 

