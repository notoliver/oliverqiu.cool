var releases = [
    {
        url: 'totalkwith',
        img: 'totalkwith',
        title: 'To Talk With (feat. Minsuh Chung)',
        date: 'March 26, 2023'
    },
	{
        url: 'https://veryezvery.fun/boystew/',
        img: 'boystew',
        title: 'Boy Stew (All of Hers)',
        date: 'September 2, 2022'
    },
	{
        url: 'ep5',
        img: 'ep5',
        title: 'More Things',
        date: 'November 21, 2021'
    },
    {
        url: 'https://veryezvery.fun/yetso/',
        img: 'yetso',
        title: 'Yet So (All of Hers)',
        date: 'November 12, 2021'
    },
    {
        url: 'https://theopenness.com/turnaround/',
        img: 'turnaround',
        title: 'Television Turnaround (Openness)',
        date:'April 30, 2021'
    },
    {
        url: 'ep4',
        img: 'ep4',
        title: 'Compact Muzak',
        date:'February 19, 2021'
    },
	{
        url: 'https://theopenness.com/journey/',
        img: 'adorethejourney',
        title: 'Adore the Journey (Openness)',
        date:'August 21, 2020'
    },
    {
        url: 'ep3',
        img: 'ep3',
        title: 'Sounds For Being: Sitting',
        date: 'July 30, 2020'
    },
    {
        url: 'ep2',
        img: 'ep2',
        title: 'Sounds For Being: Lying',
        date: 'April 22, 2020'
    },
    {
        url: 'ep1',
        img: 'ep1',
        title: 'Some Things',
        date: 'February 21, 2020'
    },
    {
        url: 'empty',
        title: 'empty',
        date: 'empty'
    },
    {
        url: 'empty',
        title: 'empty',
        date: 'empty'
    }
]

var innertext = '';
/*
<figure>
    <a href='ep4'>
        <img src='ep4.jpg' alt='ep4'/>
        <div class='caption'>Compact Muzak</div>
        <div class='caption date'>February 19, 2021</div>
    </a>
</figure>
*/
for(var i=0;i<releases.length;i++){
    if(releases[i].url == 'empty'){
        innertext += '<figure><\/figure>'
    }
    else{
        innertext += '<figure>\r\n<a href=\''+releases[i].url+'\'>\r\n<img src=\''+releases[i].img+'.jpg\' alt=\''+releases[i].url+'\'\/>\r\n<div class=\'caption\'>'+releases[i].title+'<\/div>\r\n<div class=\'caption date\'>'+releases[i].date+'<\/div>\r\n<\/a>\r\n<\/figure>'
    }
}

document.getElementById('releases').innerHTML = innertext;