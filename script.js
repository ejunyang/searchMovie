document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', topFix); //페이지 스크롤시 topFix() 실행

    let headerTop = document.getElementById('top');
    let active = headerTop.offsetTop; //headerTop의 offsetTop 위치 저장

    function topFix() {
        if (window.pageYOffset > active) {
            headerTop.classList.add('active');
            //console.log('sticky');
        } else {
            headerTop.classList.remove('active');
            //console.log('not sticky');
        }
    };
});






// title(제목), 
// overview(내용 요약), 
// poster_path(포스터 이미지 경로), 
// vote_average(평점)
// https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg

function getMovies() {
    //tmdb api
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDE3MGZlMGJlM2UwZDE3NzkyMGE3MDQxZmQ1NGM4NiIsInN1YiI6IjY2MjVkYTMzMjIxYmE2MDE3YzE1NDQ1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tRZNYVownPtQj6yIFrodZCqJZfvFyuPxHjF_kH8JMyI'
        }
    };

    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        .then(response => response.json())
        .then((data) => {
            let movieList = data.results


            movieList.forEach((a) => {
                const img = 'https://image.tmdb.org/t/p/w300' + a['poster_path'];
                const title = a['title'];
                const overview = a['overview'];
                const vote = a['vote_average'];
                const movieid = a['id']; //alert

                const card = document.createElement('div');
                const image = document.createElement('img');
                const titleEl = document.createElement('h2');
                const overviewEl = document.createElement('p');
                const voteEl = document.createElement('p');


                card.className = 'col';
                image.className = 'card-img-top';
                titleEl.className = 'card-title';
                overviewEl.className = 'card-text';
                voteEl.className = 'card-vote';


                image.src = img;
                titleEl.innerText = title;
                overviewEl.innerText = overview;
                voteEl.innerText = "★ " + vote.toFixed(1);



                card.append(image, titleEl, overviewEl, voteEl);



                document.getElementById('mycards').append(card);
                card.addEventListener('click', () => {
                    alert("Selected movie : " + movieid);

                });

            })

        })

}


window.onload = function searchMovies() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    const filterMovies = () => {
        const searchBox = searchInput.value.toLowerCase(); //입력 받은 값 searchBox 저장
    }
   

    


    






    searchBtn.addEventListener('click', () => {
        alert("누름");
    });
}




getMovies(); //뿌리기






