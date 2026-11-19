const passage = `Once upon a time, in a small village surrounded by beautiful green mountains, there lived a young boy named Daniel who loved exploring new places and discovering things that nobody had ever seen before. Every morning, Daniel woke up early, walked through the narrow streets of his village, and watched the golden sunlight slowly spread across the fields. One day, while walking near an old river, he noticed a strange wooden boat floating beside a large tree. The boat looked abandoned, but there was a small golden key lying inside it. Daniel picked up the key and noticed a mysterious symbol engraved on its surface. Curious about the symbol, he decided to ask his grandfather, who knew many stories about the history of the village. His grandfather looked at the key and suddenly became silent. After a few moments, he told Daniel that the key belonged to an ancient castle hidden deep inside the forest. According to an old legend, the castle contained a secret room filled with forgotten treasures, magical books, and mysterious objects from another world. Daniel was excited and immediately decided to find the castle. The next morning, he packed some food, filled a bottle with water, and started walking towards the forest. The forest was dark and full of enormous trees, colorful flowers, and strange sounds. As Daniel walked deeper into the forest, he discovered a narrow path leading towards a beautiful waterfall. Behind the waterfall, he noticed a small stone entrance covered with green plants. He moved the plants aside and discovered an ancient wooden door. Daniel took the golden key from his pocket and carefully placed it inside the lock. Suddenly, the door opened with a loud sound, revealing a long staircase leading underground. Daniel slowly walked down the staircase and entered a mysterious room filled with old paintings, golden lamps, and dusty books. In the middle of the room stood a large wooden table with a beautiful silver box on top of it. Daniel opened the box and discovered a handwritten letter. The letter explained that the castle had once belonged to a wise king who believed that knowledge was more valuable than gold. The king had hidden his greatest discoveries inside the castle so that one day someone curious enough would find them. Daniel continued exploring the castle and discovered hundreds of books containing stories about science, mathematics, history, nature, and distant lands. He spent several hours reading the books and learning about the incredible discoveries made by people from different parts of the world. Suddenly, he heard footsteps coming from the staircase. Daniel turned around and saw an old man carrying a lantern. The old man smiled and introduced himself as the last guardian of the castle. He explained that he had been protecting the castle for many years and was waiting for someone who loved learning and exploring. Daniel asked the old man why he had been chosen to discover the castle. The old man replied that the golden key did not open its doors for everyone; it opened only for people who were curious enough to search for knowledge. Before Daniel left, the old man gave him a small book and told him to never stop asking questions. Daniel returned to his village with the book and shared everything he had discovered with his grandfather. From that day onward, Daniel spent his time learning new things, exploring unfamiliar places, and helping other children discover the beauty of knowledge. Years passed, and Daniel became a famous scientist who travelled across the world, studying nature, discovering new ideas, and teaching people that curiosity was the beginning of every great discovery. Although he visited many wonderful places and achieved many incredible things, he never forgot the mysterious castle hidden behind the waterfall, because that was where his greatest adventure had begun.`;

const splitStringIntoArray = function (passage) {
    const splittedString = passage.split(' ')

    return splittedString;
}

const createTransition = function (passage) {
    const transition = {};

    const arr = splitStringIntoArray(passage)

    for (let i = 0; i < arr.length - 2; i++) {
        const property = arr[i] + arr[i + 1];

        transition[property] =
            (property in transition) ? [...transition[property], arr[i + 2]] : [arr[i + 2]];
    }
    return transition;
}

const chooseWord = function (property, transition) {
    const possibleOutcomes = transition[property];
    const index = Math.round((possibleOutcomes.length - 1) * Math.random());
    return possibleOutcomes[index];
}

const generateText = function (passage, transition) {
    const splittedString = splitStringIntoArray(passage);
    const arr = [splittedString[0], splittedString[1]]
    let property = arr.at(-2).concat(arr.at(-1));


    for (let i = 0; i < 25; i++) {
        arr.push(chooseWord(property, transition));
        property = arr.at(-2).concat(arr.at(-1));
    }

    return arr.join(" ");
}

const transition = (createTransition(passage));
console.log((generateText(passage, transition)));