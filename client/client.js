const app = new Vue({
    el: "#app",
    data: {
      term: '',
      terms: []
    },
    methods: {
        addTerm() {
            console.log(this.term);
            this.terms.push(this.term);
        }
    }
});