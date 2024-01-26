new Vue({
    el: '#app',
    data: {
            title: "",
            desc: "",
            completed: false,

            tasks: [  
                {title: 'salut',
                desc: 'dzfuibglehaozagb',
                completed: true
            }
            ],
        },
    methods: {
        add_task: function() {
            let array = [{
                title: this.title,
                desc: this.desc,
                completed: this.completed,
            },
            ...this.tasks]
            this.tasks = array
            },
        complete: function(task) {
            task.completed = !task.completed
            if (completed == true) {
                
            }
        },
        suppr: function(index) {
            this.tasks.splice(index, 1)
        },
        clearcompleted: function() {
            for (i=0; i < this.tasks.length; i++) {
                console.log(this.tasks[i])
                if (this.tasks[i].completed === true) {
                    this.tasks.splice(i,1)
                }
            }
        },
        clearall: function() {
            this.tasks = []
        }
        },
});