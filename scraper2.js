const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs.createWriteStream('post.csv');

request('https://riwayathidupku.wordpress.com/', (error, response, html)=>{
    if(!error && response.statusCode == 200){
        const $ = cheerio.load(html);

         $('.type-post').each((i, el)=>{
            const title = $(el)
                .find('.posttitle')
                .text();

            const link = $(el)
                .find('a')
                .attr('href');

            const date = $(el)
                .find('small')
                .text();

            
            writeStream.write(`${title},${link},${date} \n`);
            // console.log(title);
            // console.log(date);
            // console.log(link);
         });
         console.log('Scraping done..')
    }
})