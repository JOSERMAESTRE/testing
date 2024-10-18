const {Builder,By,until} = require('selenium-webdriver');
const Monsterpage = require('./POM/Monsterpage');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');

describe('Monster Creation',function(){
    this.timeout(10000);
    let driver;
    let monsterpage;

    before(async function() {
         // If you need to specify the ChromeDriver path, use the ServiceBuilder like this:
         const service = new chrome.ServiceBuilder('./src/test/resources/chromedriver.exe'); // Set correct path if needed
         driver = await new Builder()
             .forBrowser('chrome')
             .setChromeService(service) // Set the chrome service properly
             .build();
         monsterpage = new Monsterpage(driver); // Using the correct instance variable
         await driver.get('http://localhost:3000/');
    });

    after(async function () {
        if (driver) {
            //await driver.quit(); // Solo llamar si driver fue inicializado
          }
    });
    
    it('create monster with inputs',async function () {
        await monsterpage.createMonster({
            imageIndex: 2,
            name: 'Joser',
            hp:80,
            attack: 80,
            defense: 90,
            speed:100,
        });

        
        const message = await driver.findElement(By.css('[data-testid="card-monster-name"]')).getText();
        assert.strictEqual(message,'Joser');
    });
});

