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


//tmdb api
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDE3MGZlMGJlM2UwZDE3NzkyMGE3MDQxZmQ1NGM4NiIsInN1YiI6IjY2MjVkYTMzMjIxYmE2MDE3YzE1NDQ1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tRZNYVownPtQj6yIFrodZCqJZfvFyuPxHjF_kH8JMyI'
    }
};


// 영화 데이터 조회
fetch('https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1', options)
    .then(response => response.json())
    .then((data) => {
        let movieList = data['results'];
        const container = document.querySelector('#mycards')
        const movieArr = container.querySelectorAll('.col');

        let templete = ``; // const 하지말것, 재할당 불가
        movieList.forEach(a => {
            let image = 'https://image.tmdb.org/t/p/w500' + a['poster_path'];
            let title = a['title'];
            let overview = a['overview'];
            let vote = a['vote_average'].toFixed(1); // 소수점 1자리수까지 노출
            let movieid = a['id'];



            // 카드 템플릿 생성
            templete += `
            <div class="col">
            <a href=${movieid}>
                <img src=${image} class="card-img-top">
                 <div class="card-body">
                    <h2 class="card-title">${title}</h2>
                    <p class="card-text">${overview}</p>
                    <p class="card-vote">★ ${vote}</p>
                 </div>
             </a>
            </div>`;



            document.getElementById('mycards').innerHTML = templete;


        });
    });



// 검색 기능
function searchMovies() {
    const container = document.querySelector('#mycards')
    const movieArr = container.querySelectorAll('.col');

    let movieTitleArr = []; // 초기화, 영화 타이틀 배열
    for (let i = 0; i < movieArr.length; i++) { // 배열 순회
        movieTitleArr[i] = movieArr[i].getElementsByTagName('h2')[0].innerText; // movieTitle 배열에 만들어진 카드의 <h2> 0번째 ~ 타이틀 텍스트 저장
        movieArr[i].style = 'display:none';
        //console.log(movieArr[i].getElementsByTagName('h2')[0]);
    }


    const searchInput = document.getElementById('searchInput').value;  // 사용자 입력 값 변수 할당

    let movieTitle = movieTitleArr.filter(search => search.toLowerCase().includes(searchInput))[0];
    console.log(searchInput);

    for (let i = 0; i < movieTitleArr.length; i++) {
        //console.log(movieTitle, movieTitleArr[i]);
        if (movieTitle === movieTitleArr[i]) { // 배열 === 스트링 false
            document.getElementById('swipe').style = 'display:none';
            document.getElementById('title-area').style = 'display:none';
            movieArr[i].style = 'display:block';
            console.log('display block');
        }
    }

}



function upCommingMovie() {
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


    //tmdb api
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDE3MGZlMGJlM2UwZDE3NzkyMGE3MDQxZmQ1NGM4NiIsInN1YiI6IjY2MjVkYTMzMjIxYmE2MDE3YzE1NDQ1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tRZNYVownPtQj6yIFrodZCqJZfvFyuPxHjF_kH8JMyI'
        }
    };


    // 영화 데이터 조회
    fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
        .then(response => response.json())
        .then((data) => {
            let movieList = data['results'];
            const container = document.querySelector('#mycards')
            const movieArr = container.querySelectorAll('.col');

            let templete = ``; // const 하지말것, 재할당 불가
            movieList.forEach(a => {
                let image = 'https://image.tmdb.org/t/p/w500' + a['poster_path'];
                let title = a['title'];
                let overview = a['overview'];
                let vote = a['vote_average'].toFixed(1); // 소수점 1자리수까지 노출
                let movieid = a['id'];

                console.log(movieid);

                // 카드 템플릿 생성
                templete += `
            <div class="col">
            <a href=${movieid}>
                <img src=${image} class="card-img-top">
                 <div class="card-body">
                    <h2 class="card-title">${title}</h2>
                    <p class="card-text">${overview}</p>
                    <p class="card-vote">★ ${vote}</p>
                 </div>
             </a>
            </div>`;



                document.getElementById('mycards').innerHTML = templete;


            });
        });



    // 검색 기능
    function searchMovies() {
        const container = document.querySelector('#mycards')
        const movieArr = container.querySelectorAll('.col');

        let movieTitleArr = []; // 초기화, 영화 타이틀 배열
        for (let i = 0; i < movieArr.length; i++) { // 배열 순회
            movieTitleArr[i] = movieArr[i].getElementsByTagName('h2')[0].innerText; // movieTitle 배열에 만들어진 카드의 <h2> 0번째 ~ 타이틀 텍스트 저장
            movieArr[i].style = 'display:none';
            //console.log(movieArr[i].getElementsByTagName('h2')[0]);
        }


        const searchInput = document.getElementById('searchInput').value;  // 사용자 입력 값 변수 할당

        let movieTitle = movieTitleArr.filter(search => search.toLowerCase().includes(searchInput))[0];
        console.log(searchInput);

        for (let i = 0; i < movieTitleArr.length; i++) {
            //console.log(movieTitle, movieTitleArr[i]);
            if (movieTitle === movieTitleArr[i]) { // 배열 === 스트링 false
                document.getElementById('swipe').style = 'display:none';
                document.getElementById('title-area').style = 'display:none';
                movieArr[i].style = 'display:block';
                console.log('display block');
            }
        }

    }
}