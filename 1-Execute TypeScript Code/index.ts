import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then(response => {
    console.log(response.data);
});

// tsc index.ts
// node index.js
// ts-node index.ts
