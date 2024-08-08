var scraperjs = require('scraperjs');
const fs = require('fs');
scraperjs.StaticScraper.create('https://mnps.schoology.com/home/71840694')
    .request({
        url:'https://mnps.schoology.com/home/71840694',
        headers: {
            Cookie: '_ga_YM6B00RDYC=GS1.1.1723154913.295.1.1723156410.0.0.0; _ga=GA1.1.194335113.1708231125; apt.uid=AP-IBYB1G3SIPA6-2-1702440757856-37268119.0.2.8a19208d-fd7c-4ba3-a207-f063305fef70	'
        }
    })
    .scrape(function($) {
        return $.html();
    })
    .then(function(news) {
        fs.writeFile('Output.txt', news, (err) => {
            if (err) throw err;
        });
    })