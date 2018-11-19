const request = require('request');
const cheerio = require('cheerio');

request('https://firstsiteguide.com/examples-of-blogs/', (error, response, html)=>{
    if(!error && response.statusCode == 200){
        const $ = cheerio.load(html);

        // const siteHeading = $('.entry-header');
        // console.log(siteHeading.html());
        // console.log(siteHeading.text());

        // const siteContent = $('.entry-content');

        // const output = siteContent.children('h3').next().text();
        // const output = siteContent.children('h3').text();
        // const output = siteContent.find('h3').next().text();
        // const output = siteContent.children('p').next().text();
        // console.log(output);

        // each(index, )
        $('.menu_content').each((i, el) =>{
            const item = $(el)
                    .text();

            const link = $(el).attr('href');
            
            console.log(item);
        });
    }
})