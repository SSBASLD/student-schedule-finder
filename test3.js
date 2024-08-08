const fs = require("fs");

fetch('https://mnps.schoology.com/user/71844378/info', {
    method: 'GET',
    headers: {
        'authority': 'mnps.schoology.com',
        'method': 'GET',
        'path': '/user/71844378/info',
        'scheme': 'https',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en-US,en;q=0.9',
        'Cookie': 'has_js=1; SimpleSAMLAuthToken=_9d0cf7d9fb109d7d5e4126114e57a5bf01662e3fa8; s_stats_browser_info=%7B%22pluginInfo%22%3A%7B%22pdf%22%3A%5B%22pdf%22%2C%22application/pdf%22%2C%221%22%5D%2C%22quicktime%22%3A%5B%22qt%22%2C%22video/quicktime%22%2C%220%22%5D%2C%22realplayer%22%3A%5B%22realp%22%2C%22audio/x-pn-realaudio-plugin%22%2C%220%22%5D%2C%22wma%22%3A%5B%22wma%22%2C%22application/x-mplayer2%22%2C%220%22%5D%2C%22director%22%3A%5B%22dir%22%2C%22application/x-director%22%2C%220%22%5D%2C%22flash%22%3A%5B%22fla%22%2C%22application/x-shockwave-flash%22%2C%220%22%5D%2C%22java%22%3A%5B%22java%22%2C%22application/x-java-vm%22%2C%220%22%5D%2C%22gears%22%3A%5B%22gears%22%2C%22application/x-googlegears%22%2C%220%22%5D%2C%22silverlight%22%3A%5B%22ag%22%2C%22application/x-silverlight%22%2C%220%22%5D%7D%2C%22res%22%3A%221536x864%22%7D; SESS03f02b8da0f51e44d73633c34e00de5b=445232cffbbc61b31ebb3f13d4f79bff',
        'Priority': 'u=0, i',
        'Referer': 'https://mnps.schoology.com/home',
        'Sec-Ch-Ua': '"Opera GX";v="111", "Chromium";v="125", "Not.A/Brand";v="24"',
        'Sec-Ch-Ua-Mobile': '?0',
        'Sec-Ch-Ua-Platform': '"Windows"',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-User': '?1',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 OPR/111.0.0.0'
    }
})
.then(response => response.text())
.then(data => {
    fs.writeFile("Output3.txt", data, err => console.log(err));
})
.catch(error => console.error('Error:', error));