class Fighter {
    constructor(obj) {
        this._obj = obj;
        this._obj.win = 0;
        this._obj.loss = 0;
        this._obj.maxHealth = obj.hp;
    }

    getName() {
        return this._obj.name;
    }
    getDamage() {
        return this._obj.damage;
    }
    getAgility() {
        return this._obj.agility;
    }
    getHealth() {
        return this._obj.hp;
    }
    attack(defender) {
        let range = 101;
        let rangeAgility = 100;
        let defenderAgility = defender.getAgility();
        let probability = Math.floor(Math.random() * range);
        if (probability <= rangeAgility - defenderAgility) {
            defender.dealDamage(this.getDamage());
            console.log(`${this._obj.name} make ${this._obj.damage} damage to ${defender.getName()}`);
        } else {
            console.log(`${this._obj.name} attack missed`);
        }
    }
    logCombatHistory() {
        return `${this.getName()}, Wins: ${this._obj.win}, Losses: ${this._obj.loss}`;
    }
    heal(addHp) {
        this._obj.hp += addHp;
        if (this._obj.hp > this._obj.maxHealth) {
            this._obj.hp = this._obj.maxHealth;
        }
    }
    dealDamage(damage) {
        this._obj.hp -= damage;
    }
    addWin() {
        ++this._obj.win;
    }
    addLoss() {
        ++this._obj.loss;
    }
}

function battle(fighter1, fighter2) {
    if (fighter1.getHealth() <= 0 || fighter2.getHealth() <= 0) {
        console.log('no hp');
    } else {
        while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
            if (fighter1._obj.hp > 0 && fighter2._obj.hp > 0) {
                fighter1.attack(fighter2);
            }
            if (fighter1._obj.hp > 0 && fighter2._obj.hp > 0) {
                fighter2.attack(fighter1);
            }
            if (fighter1.getHealth() <= 0) {
                fighter1.addLoss();
                fighter2.addWin();
                fighter1.hp = 0;
            }
            if (fighter2.getHealth() <= 0) {
                fighter2.addLoss();
                fighter1.addWin();
                fighter2.hp = 0;
            }
        }
    }
}