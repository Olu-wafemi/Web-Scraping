const request = require('request')
const cheerio = require('cheerio')

request('https://www.lindaikejisblog.com/', (error, response, html) => {
    if(!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        //Set the name of the div class contaiming the site heading to siteHeading variable, the name of the class is signage

        const siteHeading = $('.signage')
      //  Output everything in the div as a text
       // console.log(siteHeading.text())

        //const output = siteHeading.find('h3').text()

        //Gets the next block after the h3 tag
       // const output = siteHeading.children('h3').next().text()
      // const output = siteHeading.children('h3').parent().text()
      //  console.log(output)
    $('.story_block a').each(function(i,el) {
        const item = $(el).text();

        const link = $(el).attr('href');


        console.log(link)
    })
    
    }

});