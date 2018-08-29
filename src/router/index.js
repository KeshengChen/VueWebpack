import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

let router = new Router({
	mode: 'history',
  	routes: [
    	{
      	path: '/',
      	name: 'HelloWorld',
      	component: HelloWorld
    	}
  	]
})

router.beforeEach((to, from, next) => {
    window.document.title = to.meta.name;
    next();
});

router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
});

export default router;