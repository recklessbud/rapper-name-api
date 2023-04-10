const express =  require('express');
// const { request } = require('http');
const cors = require('cors')
const apps =  express()
const PORT =  3344
 
apps.use(cors())


 const rappers = {
    '21 savage':{
        'stageName':'21 savage',
         'birthName': 'Shéyaa Bin Abraham-Joseph',
         'img' : '"https://images.unsplash.com/photo-1619801551430-f2a28c1ae922?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8MjElMjBzYXZhZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    'drake': {
        'stageName': 'Drake',
         'birthName': 'Aubrey Drake Graham',
          'img' : 'https://i.pinimg.com/564x/03/6f/d1/036fd197576155823837625c350e417c.jpg'
     },

     'kodak black': {
         'stageName': 'kodak black',
         'birthName': 'Bill Kahan Kapri',
         'img': 'https://i.pinimg.com/564x/24/cf/53/24cf5329843ecd54811064311bbef989.jpg'
        },
      'unknown' :{
          'stageName' : 'Unknown',
          'birthName' : 'Unknown',
          'img' : 'Unknown'
      }

}

//using for the get http request
  apps.get('/', (request, response) => {
      response.sendFile(__dirname + '/index.html')
       console.log('boom')

  })

  
   apps.get('/api/:rapper', (request, response) => {
      const rapperName = request.params.rapper.toLowerCase();
      console.log(rapperName)
        if (rappers[rapperName]) {
            response.json(rappers[rapperName])
            console.log('responding with json')
        }else{
            response.json(rappers['unknown'])
        }
   })












  apps.listen(process.env.PORT || PORT, () =>{
     console.log('liveee on port ' + PORT)
  })

