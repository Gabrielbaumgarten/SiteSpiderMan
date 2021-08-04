document.addEventListener('DOMContentLoaded', () => {
    
    let timeline = new TimelineMax();

    timeline.fromTo('.bg-loader', 1, {width: '100vw'},{width: "0vw",delay: 5, ease: Expo.easeInOut} )

    .fromTo('.bg-video', 2,{width: '0%', opacity: 0},{width: "100%", opacity:1, ease: Expo.easeInOut}, "-=1"  )

    .fromTo('.logo', 1,{y: -50, opacity: 0},{y: 0, opacity:1, ease: Expo.easeOut}, "-=0.5"  )
    .fromTo('.nav-list', 1,{y: -50, opacity: 0},{y: 0, opacity:1, ease: Expo.easeOut}, "-=0.5"  )
    .fromTo('.nav-social-media', 1,{y: -50, opacity: 0},{y: 0, opacity:1, ease: Expo.easeOut}, "-=0.5"  )
    .fromTo('.item-1', 1,{y: -50, opacity: 0},{y: 0, opacity:1, ease: Expo.easeOut}, "-=0.5"  )
    .fromTo('.item-2', 1,{y: -50, opacity: 0},{y: 0, opacity:1, ease: Expo.easeOut}, "-=0.5"  )
    .fromTo('.item-3', 1,{y: -50, opacity: 0},{y: 0, opacity:1, ease: Expo.easeOut}, "-=0.5"  )
    .fromTo('.item-4', 1,{y: -50, opacity: 0},{y: 0, opacity:1, ease: Expo.easeOut}, "-=0.5"  )
    .fromTo('.item-5', 1,{y: -50, opacity: 0},{y: 0, opacity:1, ease: Expo.easeOut}, "-=0.5"  )
})