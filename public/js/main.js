// alert('abenaa')
// https://dark-puce-turkey-tutu.cyclic.app



  const btn = document.querySelector("#btn-sumbit");
     btn.addEventListener('click', rapperApi)

       async function rapperApi() {
        const value = document.querySelector('#name').value;
        try{
         const response = await fetch(`localhost:3344/api/${value}`)
          const data = await response.json()

          console.log(data);
          document.querySelector('h2').innerText = data.stageName;
          document.querySelector('h3').innerText = data.birthName;
          document.querySelector('img').src = data.img;
        }
      catch(error){
         console.log('error at' + error)
      }  
      

 
}