import * as express from 'express'
const app = express();

app.get('/', (req, res) => {
    res.send('你好');
});


app.use((req, res, next) => {

});

app.listen(3000, () => {
    console.log('服务启动');
});
