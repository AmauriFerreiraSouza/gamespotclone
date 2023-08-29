function subMenuOn (link) {
    var review = document.querySelector('.'+link);
    var staff = document.querySelector('.'+link); 
    var deals = document.querySelector('.'+link); 
    var games = document.querySelector('.'+link);
    var entertainment = document.querySelector('.'+link);
    if (link == 'review') {
        review.style['display'] = 'block';
    }
    if (link == 'staff') {
        staff.style['display'] = 'block';
    }
    if (link == 'deals') {
        deals.style['display'] = 'block';
    }
    if (link == 'games') {
        games.style['display'] = 'block';
    }
    if (link == 'entertainment') {
        entertainment.style['display'] = 'block';
    }
}

function subMenuOff (link) {
    var review = document.querySelector('.'+link);
    var staff = document.querySelector('.'+link);
    var deals = document.querySelector('.'+link);
    var games = document.querySelector('.'+link); 
    var entertainment = document.querySelector('.'+link);
    if (link == 'review') {
        review.style['display'] = 'none';
    }
    if (link == 'staff') {
        staff.style['display'] = 'none';
    }
    if (link == 'deals') {
        deals.style['display'] = 'none';
    }
    if (link == 'games') {
        games.style['display'] = 'none';
    }
    if (link == 'entertainment') {
        entertainment.style['display'] = 'none';
    }
}

// function showNews () {
//     var showNews = document.querySelector('.p');
//     var showNews = document.querySelector('.show-title-news');
//     // console.log(showNews);
//     showNews.style['margin-top'] = '-70px';
// }

// function leaveNews () {
//     var showNews = document.querySelector('.p');
//     var showNews = document.querySelector('.show-title-news');
//     // console.log(showNews);
//     showNews.style['overflow'] = 'hidden';
//     showNews.style['margin-top'] = 0;
// }