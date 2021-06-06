//Adding stuff to express
const express=require('express')
const path=require('path')
const hbs=require('hbs')
const app=express()
const port=8000

//Initilizing directories
const publicDirectoryPath = path.join(__dirname, './public')
const viewsPath = path.join(__dirname, './templates/views')
const partialsPath = path.join(__dirname, './templates/partials')

// Setting public paths
app.use(express.static(publicDirectoryPath))
// Setting hbs path
hbs.registerPartials(partialsPath)

//Setting views engine
app.set('views', viewsPath)
app.set('view engine','hbs')

//Setting get path
app.get('/',(req,res)=>
{
   res.render("index",
   {
       title:'My heading',
       body:'My body'
   })
//res.send('<h1>Weather</h1>')
// res.send({
//     forecast: 'It is snowing',
//     location: 'Philadelphia'
//})
})

//Setting 404 page
app.get('*', (req, res) => {
    res.render('404', {
    title: '404',
    name: 'Andrew Mead',
    body: 'Page not found.'
    })
   })



//Listining to port
app.listen(port,()=>
{
    console.log(`Server is running in ${port}`)
})
