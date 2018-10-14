Nova.booting((Vue, router) => {
    Vue.component('index-soundcloud', require('./components/IndexField'));
    Vue.component('detail-soundcloud', require('./components/DetailField'));
    Vue.component('form-soundcloud', require('./components/FormField'));
})
