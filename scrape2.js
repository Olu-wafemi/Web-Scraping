const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')


const writeStream = fs.createWriteStream('post.csv')
//Write Headers

writeStream.write(`Title, Link , Date \n `)

request('https://www.lindaikejisblog.com/', (error, response, html) => {
    if(!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
    

    $('.story_block').each((i,el) => {

        const title  = $(el).find('h1').text()


        const link  = $(el).find('a').attr('href')
        const date = $(el).find('.post_age').text()
        //Write Row to csv
        writeStream.write(`${title}, ${link}  , ${date} \n `)

        console.log('Scraping Done..');
    })
    
    
}
    

    
});