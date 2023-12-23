import  Express  from "express";

const app = Express();

app.get('/', (req, res)=>{
    res.send('Server is Ready !');
})

app.get('/api/jokes', (req, res)=>{

  const jokes =   [
        {
            id: 1,
            title: 'This is first joke',
            content: 'content of joke...'
        },
        {
            id: 2,
            title: 'This is first joke',
            content: 'content of joke...'
        },
        {
            id: 3,
            title: 'This is first joke',
            content: 'content of joke...'
        },
        {
            id: 4,
            title: 'This is first joke',
            content: 'content of joke...'
        },
        {
            id: 5,
            title: 'This is first joke',
            content: 'content of joke...'
        },
    ]
    res.send(jokes)
})

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server Runnig at http://localhost:${port}`);
});