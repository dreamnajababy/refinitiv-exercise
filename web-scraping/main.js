const puppeteer = require('puppeteer')
const args = process.argv.slice(2);

const CODE = args[0]
const URL = `https://codequiz.azurewebsites.net/`

const scrapping = async (code) => {
    let result = "NAV Not found."
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(URL);
    await page.click('input[value="Accept"]')
    await page.waitForSelector('table')

    const data = await page.evaluate(
          () => Array.from(
                  document.querySelectorAll('table > tbody > tr'),
                  row => Array.from(row.querySelectorAll('th, td'), cell => cell.innerText)
                )
    );


    for(let row of data){
        if (row[0] === CODE) {
            result = row[1]
            break
        }
    }
    console.log(result)
    browser.close()
};

scrapping(CODE)
