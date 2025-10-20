import express from 'express'
import router from './routers/posts.js';

const app = express();
// metto questa parte per fare in modo che si possa leggere il json
app.use(express.json());
app.use('/posts', router);
app.use('/images', express.static('images'));


app.get('/', (req, res) => res.send('server del mio blog'));
app.listen(3000, () => console.log('Server attivo su http://localhost:3000'));
