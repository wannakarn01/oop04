class Hero {
    name: string;
    hp: number;
    attackPower: number;

    constructor(name: string, hp: number, attackPower: number) {
        this.name = name;
        this.hp = hp;
        this.attackPower = attackPower;
    }

    attack(target: Hero): void {

    target.hp -= this.attackPower;

    console.log(`${this.name} attacks ${target.name} for ${this.attackPower} damage!`);

    if (target.hp <= 0) {
    console.log(`${target.name} has fainted!`);
        }
    }
}

const hero1 = new Hero("Arthur", 100, 40);
const hero2 = new Hero("Goblin", 50, 15);

hero1.attack(hero2);
hero1.attack(hero2);