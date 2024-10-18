const {By} = require('selenium-webdriver')

class Monsterpage{
    constructor(driver){
        this.driver = driver;
    }


    elements={
        monsterImage: (index) => this.driver.findElement(By.css(`[data-testid="monster-${index}"]`)),
        nameInput:()=> this.driver.findElement(By.xpath('//div[@data-testid="monster-name"]//*[@id="outlined-required"]')),
        hpInput:()=> this.driver.findElement(By.xpath('//div[@data-testid="hp-value"]//*[@id="outlined-required"]')),
        attackInput:()=> this.driver.findElement(By.xpath('//div[@data-testid="attack-value"]//*[@id="outlined-required"]')),
        defenseInput:()=> this.driver.findElement(By.xpath('//div[@data-testid="defense-value"]//*[@id="outlined-required"]')),
        speedInput:()=> this.driver.findElement(By.xpath('//div[@data-testid="speed-value"]//*[@id="outlined-required"]')),
        createButton:()=> this.driver.findElement(By.css('[data-testid="btn-create-monster"]'))
    }
    
    async createMonster(monster){
        await this.elements.monsterImage(monster.imageIndex).click();
        await this.elements.nameInput().sendKeys(monster.name);
        await this.elements.hpInput().sendKeys(monster.hp);
        await this.elements.attackInput().sendKeys(monster.attack);
        await this.elements.defenseInput().sendKeys(monster.defense);
        await this.elements.speedInput().sendKeys(monster.speed);
        await this.elements.createButton().click();
    }
}
module.exports = Monsterpage;