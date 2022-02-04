let page = 1
const buttonBefore = document.querySelector('.btn-before')
const buttonAfter = document.querySelector('.btn-after')

console.log(buttonAfter,buttonBefore)

buttonAfter.addEventListener('click', (event) => {
    console.log(event)
    if(page < 1000){
        page += 1
        onResponseHandler()
    }
})

buttonBefore.addEventListener('click', () => {
    if(page > 1){
        page -= 1
        onResponseHandler()
    }
})


const App = document.getElementById('App')
const onResponseHandler = async () => {
    try{  
        // Hacemos la peticion y esperamos la repuest 
        const response =  await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=3fbbe4791f3895d6546016c37027959d&language=es-MX&page=${page}`) // SI todo es correcto el status es 200

        if(response.status === 200){
            const responseMovies = await response.json()
            const result = responseMovies.results

            console.log(result)

            let moviesCard = ''
            const resultMovies = result.forEach(movies => {

                moviesCard += `
                    <div class="card">
                        <a href="${movies.video = true}" target="_blank" >
                            <img src="https://image.tmdb.org/t/p/w500/${movies.poster_path}"/>
                        </a>
                        <h3>${movies.title}</h3>
                    </div>
                `
            })
            App.innerHTML = `${moviesCard}`

        }
    }
    catch(error){
        // Si el estatus es 404
        console.log(error)
    }
}

onResponseHandler()