<script>
import { Create, World, CanvasSpace, Particle, Num, Pt } from 'pts';
import { onMount } from 'svelte';

onMount(async() => {
    let space = new CanvasSpace("#sketch")
    .setup({ bgcolor: "rgb(256, 256, 256)", retina: true, resize: false });
    
    let form = space.getForm();
    let world;
    space.add({
        start: (bound, space) => {
            // Create world and 100 random points
            world = new World( space.innerBound, 0.96, 0 );
            let pts = Create.distributeRandom( space.innerBound, 80 );
            
            // Create particles and hit them with a random impulse
            for (let i=0, len=pts.length; i<len; i++) {
                let p = new Particle( pts[i] ).size( i===0 ? 10 : Math.random() * 3 + 1 );
                p.hit( Num.randomRange(-50,50), Num.randomRange(-25, 25) );
                world.add( p );
            }
            
            world.particle( 0 ).lock = true; // lock it to move it by pointer later on
        },
        
        animate: (time, ftime) => {
            const color = 'indianred';
            world.drawParticles( (p, i) => {
                form.fillOnly( color ).point( p, p.radius, "square" ) 
            });
            
            world.update( ftime );
        },
        
        
        action:(type, px, py) => {
            if (type == "move") {
                world.particle( 0 ).position = new Pt(px, py);
            }
        },
        
        resize: (bound, evt) => {
            if (world) world.bound = space.innerBound;
        }
    });
    
    space.bindMouse().bindTouch();
    space.play();
})
</script>

<canvas id='sketch'></canvas>

<style>
    #sketch {
        width: 100%;
        max-height: 400px;
        z-index: -100
    }
</style>