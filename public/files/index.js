Vue.component('movie-card', {
  props: ['image', 'title'],
  template: `
    <div>
      <img width="100" v-bind:src="image" v-bind:alt="title"/>
      <h2>{{ title }}</h2>  
    </div>
  `,
})


Vue.component('simple-counter', {
  template: '<div><button v-on:click="counter += 1">{{ counter }}</button>{{ jose }}</div>',
  data: function () {
    return {
    	counter: 0, 
	jose: "hola"
  } }
})

new Vue({
    el: '#app',
	data:{
	  movies: [
      { title: 'Regreso al Futuro', image: 'http://es.web.img3.acsta.net/pictures/14/04/03/13/45/034916.jpg' },
      { title: 'Matrix', image: 'http://t0.gstatic.com/images?q=tbn:ANd9GcQq3pIz-aKgkmYX1dJ-EL-AlHSPcOO7wdqRIJ5gJy9qNinXpmle' },
      { title: 'Interestellar', image: 'http://t1.gstatic.com/images?q=tbn:ANd9GcRf61mker2o4KH3CbVE7Zw5B1-VogMH8LfZHEaq3UdCMLxARZAB' }
    ]
}
})

