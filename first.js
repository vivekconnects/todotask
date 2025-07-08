// console.log("Vivek Kumar");
// name = "Anshu Kumar";
// console.log(name);
// alert("hello");
// let num = 25;
// let val = prompt("Enter a number to guess");
// while(val != num) {
//     console.log("Try again");
//     val = prompt("Enter a number to guess");
// }
//  console.log("you guessed it!");

// let fullname = prompt("Enter full name");
// let len = fullname.length;
// console.log(`@${fullname}${len}`)

// function countVowel(str) {
//     for(const char of str) {
//         let count=0;
//         console.log(char);
//     }
// }
//For Each implementation
// let arr = [1,4,6,9];
// arr.map(element => {
//     console.log(element);
// });
// arr.forEach(element => {
//     console.log(element*element);
// });
// Filter
// arr.filter( element => {
//     if(element%2===0)
//         console.log(element);
// });


var vivek = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
  },
  methods: {
  changeText() {
    this.message = this.message.toUpperCase();
  },
  alerts() {
    alert("You're Hacked");
  }
}
});

//Counter Increment
new Vue({
  el: '#counter',
  data: {
    count: 0
  },
  methods: {
    increment() {
        this.count += 1;
    }
  }
});

new Vue({
  el: '#form',
  data: {
    name: ''
  }
});

var app = new Vue({
    el: '#todoo',
    data: {
        newMessage: '',
        todos: [
            {title: 'Task1', completed: true},
            {title: 'Task2', completed: false},
            {title: 'Task3', completed: false},
            {title: 'Task4', completed: true}
        ]
    },
    computed: {
        completeTask() {
            return this.todos.filter(function(task) {
                return task.completed;
            });
        },
        incompleteTask(){
            return this.todos.filter(function(task) {
                return !task.completed;
            });
        }
    },
    methods: {
        addTask() {
                this.todos.push({title: this.newMessage, completed: false });
                this.newMessage = '';
        },
        deleteTask(task) {
            var index = this.todos.indexOf(task);
            this.todos.splice(index, 1);
        },
        toggleTask(task) {
            task.completed = !task.completed;
        }
    }
});

Vue.component('todo-item', {
    template: '<li> This is a todo </li>'
})

new Vue({
    el: '#check',
    data: {
        isActive: true,
        hasError: false
    }
});

new Vue({
    el: '#app1',
    data: {
        checked: false
      }
});
