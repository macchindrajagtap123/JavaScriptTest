function init() {
    // let response_data = [];
    // fetch('json/mainSection.json')
    // .then(response => response.json())
    // .then(data => response_data = data);

    let dt = {
        "data": [
            {
                "sectionId": 1,
                "sectionName": "FASHION",
                "sectionUrl": "Img1.png",
                "newsTitle": [
                    {
                        "articleId": 1,
                        "newsDesc": "KGF-2 actress Shrinidhi shetty stuns in a mint green anarkali"
                    },
                    {
                        "articleId": 2,
                        "newsDesc": "KGF-2 actress Shrinidhi shetty stuns in a mint green anarkali"
                    },
                    {
                        "articleId": 3,
                        "newsDesc": "KGF-2 actress Shrinidhi shetty stuns in a mint green anarkali"
                    }
                ]
            },
            {
                "sectionId": 2,
                "sectionName": "TRAVEL",
                "sectionUrl": "Img2.png",
                "newsTitle": [
                    {
                        "articleId": 1,
                        "newsDesc": "KGF-2 actress Shrinidhi shetty stuns in a mint green anarkali"
                    },
                    {
                        "articleId": 2,
                        "newsDesc": "KGF-2 actress Shrinidhi shetty stuns in a mint green anarkali"
                    },
                    {
                        "articleId": 3,
                        "newsDesc": "KGF-2 actress Shrinidhi shetty stuns in a mint green anarkali"
                    }
                ]
            },
            {
                "sectionId": 3,
                "sectionName": "BEAUTY",
                "sectionUrl": "Img3.png",
                "newsTitle": [
                    {
                        "articleId": 1,
                        "newsDesc": "KGF-2 actress Shrinidhi shetty stuns in a mint green anarkali"
                    },
                    {
                        "articleId": 2,
                        "newsDesc": "KGF-2 actress Shrinidhi shetty stuns in a mint green anarkali"
                    },
                    {
                        "articleId": 3,
                        "newsDesc": "KGF-2 actress Shrinidhi shetty stuns in a mint green anarkali"
                    }
                ]
            },
            {
                "sectionId": 4,
                "sectionName": "BEAUTY",
                "sectionUrl": "adv1.png",
                "isAdd": true
            },
            {
                "sectionId": 4,
                "sectionName": "BEAUTY",
                "sectionUrl": "adv2.png",
                "isAdd": true
            }
        ]
    }
    return dt.data;
}

function getNewsData() {
    // let response_data = [];
    // fetch('json/newsSection.json')
    // .then(response => response.json())
    // .then(data => response_data = data);
    let data = [{
        "newsId": 1,
        "desc": "Ukraine live: 'No civilian evaluations for third day",
        "img": "news1.png"
    }, {
        "newsId": 2,
        "desc": "Ukraine live: 'No civilian evaluations for third day",
        "img": "news1.png"
    }, {
        "newsId": 3,
        "desc": "Ukraine live: 'No civilian evaluations for third day",
        "img": "news1.png"
    }, {
        "newsId": 4,
        "desc": "Ukraine live: 'No civilian evaluations for third day",
        "img": "news1.png"
    }, {
        "newsId": 5,
        "desc": "Ukraine live: 'No civilian evaluations for third day",
        "img": "news1.png"
    }]

    return data
}

async function renderUsers() {
    let sectionData = await init();
    let html = '<hr class="newsLine"/><hr class="newsLine secondLine"/>';
    html += '<div style="padding:10px; font-size:20px;"><b>LIFESTYLE > </b></div>'
    sectionData.forEach(user => {
        if (user.isAdd) {
            html += `<div class="col-50"> <img src="${'images/' + user.sectionUrl}" style="margin-left:20px"> </div>`;
        } else {
            let newsDesc = '';
            user.newsTitle.map(news => {
                newsDesc += `<div class="newsDesc"><h4>${news.newsDesc}</h4></div>`
                newsDesc += `<hr style="color:#b5adad"/>`
            })
            newsDesc += `<div class="seeAll">See All</div>`
            let htmlSegment = `<div class="col-50">
                               <div class="block gutter">
                                   <h2>${user.sectionName}</h2>
                                   <img src="${'images/' + user.sectionUrl}" >
                                   ${newsDesc}
                               </div>
                           </div>`;

            html += htmlSegment;
        }
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;

    let newsData = await getNewsData();
    html = '';
    newsData.forEach(user => {
        let htmlSegment = `<div class="col-100">
                            <div class="newsBlock gutter">
                                <div class="float-child"><h2>${user.desc}</h2></div>
                                <div class="imgCLass"><img src="${'images/' + user.img}" ></div>                            
                                <hr class="newsLine"/>
                            </div>
                        </div>`;

        html += htmlSegment;
    });

    container = document.querySelector('.newsContainer');
    container.innerHTML = html;
    console.log(container)
}

renderUsers();