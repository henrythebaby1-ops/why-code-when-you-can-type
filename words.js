// Shared word data for the word games.
window.WORDS = (() => {
  // Bot vocabulary for Word Chain, by first letter.
  const raw = {
    a: "apple acorn anchor angel ankle answer arrow artist atlas autumn avocado award axle alarm album alien alley almond amber animal ant apron arch arena army attic aunt avenue",
    b: "banana basket beach bear bell bicycle blanket bottle bridge bubble button butter badge bagel balloon bamboo bandit banjo barn beetle berry biscuit blender boat bonnet",
    c: "cactus camera candle carrot castle cherry circle cloud cookie crayon crown cupcake cabin cable camel canoe canyon captain carpet cattle cave cello chair cheese chimney",
    d: "daisy dance desert diamond dinner doctor dolphin donkey dragon drum duck dust dagger dairy dam dentist detective dew diary dime dinosaur dish dome door dough dove",
    e: "eagle earth echo egg elbow elephant engine envelope eraser evening exit eye easel eclipse edge eel elf elm ember emerald emu energy entry error escape essay eyebrow",
    f: "falcon feather fence ferry finger fire flag flower forest fork fountain frog fabric face factory fairy family fan farm fawn festival fig film fish flame flute fog",
    g: "garden ghost giant giraffe glass globe glove goat gold grape guitar gum gadget galaxy game garage garlic gate gecko gem gift ginger glacier glider gnome goose gravy",
    h: "hammer harbor hat hawk heart helmet hero hill honey horse hotel house habit hair hall hamster hand harp harvest hazel head hedge hen herb hive hoop hornet hug",
    i: "iceberg igloo island ivory insect ink iron icicle idea idol iguana image inch index infant inn input inventor invoice iris itch item ice icon idiom",
    j: "jacket jaguar jam jar jelly jewel journey juice jungle jacuzzi jade jail jazz jeans jeep jester jet jigsaw jockey joke journal joy judge jug juggler",
    k: "kangaroo kettle key kite kitten knee knife koala kayak kebab kelp kennel kernel ketchup kid kidney king kingdom kiosk kiss kitchen kiwi knight knot kudos",
    l: "ladder lake lamp lantern lemon letter library lion lizard lobster lollipop lunch label lace ladle lagoon lamb lane laptop lava lawn leaf ledge legend lettuce lily",
    m: "magnet mango map marble meadow melon mirror monkey moon mountain muffin mushroom machine magic mail mammoth maple marsh mask meal medal mermaid metal mint mitten",
    n: "nail napkin necklace nest net noodle north notebook nugget nut nacho name nanny narwhal nation nature navy neck needle neighbor nephew nerve newt nickel night",
    o: "oak ocean octopus olive onion orange orbit orchard ostrich otter owl oven oar oasis oatmeal object office oil omelet opera orca orchid organ origami outfit oyster",
    p: "paddle panda paper parrot peach pencil penguin pepper piano pillow pirate pizza planet pocket puppet pumpkin pajamas palace palm pancake pantry parade parcel park",
    q: "quail queen quilt quiver quiz question quartz quarter quarry quest quiche quill quokka quote quicksand quarrel quack quay",
    r: "rabbit radio rainbow raven ribbon river robot rocket rose ruby ruler raccoon raft rail rain raisin ranch rascal razor recipe reef reptile rhino riddle ring robin",
    s: "saddle salad sandwich scarf shadow shark shell spoon squirrel star sugar sunset sail salmon salt sand satellite sausage scale school scooter sea seal seed shoe",
    t: "table tablet tiger tomato tornado tower tractor treasure tree trumpet turtle tulip taco tail tank tape tea teacher teapot tent thimble thread throne thunder ticket",
    u: "umbrella unicorn uniform universe urchin utensil udon ukulele ulcer umpire uncle undertow unit upgrade uproar urn usher utopia uncle udder ultimatum",
    v: "valley vampire van vase velvet violin volcano vulture vacuum valve vanilla vapor vault vegetable vehicle veil vein vendor verb vest vet village vine vinegar visitor",
    w: "wagon waffle wall walnut walrus wand wave whale wheel whistle window wizard wolf worm wrench waiter wallet wardrobe warrior wasp watch water weasel web wedding",
    x: "xylophone xenon xylem xerox xenial xenolith xylograph xystus",
    y: "yacht yak yam yard yarn yawn year yeast yellow yeti yoga yogurt yolk youth yo-yo yodel yearbook yesterday yacht yam yucca",
    z: "zebra zero zigzag zipper zone zoo zucchini zeal zenith zephyr zest zinc zombie zoom zither ziplock",
  };
  const byLetter = {};
  const all = new Set();
  for (const [k, v] of Object.entries(raw)) {
    const list = [...new Set(v.split(/\s+/).filter(w => /^[a-z]+$/.test(w)))];
    byLetter[k] = list;
    list.forEach(w => all.add(w));
  }

  // Spelling lists: [word, sentence using the word]
  const spelling = {
    easy: [
      ["cat", "The cat napped in the sun."], ["jump", "Can you jump over the puddle?"], ["fish", "A fish swam under the boat."],
      ["green", "The grass is very green today."], ["happy", "The puppy looks happy."], ["water", "Please drink some water."],
      ["school", "We walk to school together."], ["friend", "My friend lives next door."], ["house", "Their house has a red door."],
      ["apple", "She packed an apple for lunch."], ["clock", "The clock says three o'clock."], ["train", "The train is late again."],
      ["smile", "Her smile lit up the room."], ["cloud", "That cloud looks like a duck."], ["sleep", "I need more sleep."],
      ["plant", "Water the plant on Mondays."], ["bread", "We baked fresh bread."], ["light", "Turn on the light, please."],
      ["candy", "Don't eat all the candy at once."], ["river", "The river flows to the sea."], ["laugh", "That joke made me laugh."],
      ["chair", "Pull up a chair and sit down."], ["bring", "Bring a jacket, it's cold."], ["horse", "The horse ran across the field."],
    ],
    medium: [
      ["because", "I stayed home because it rained."], ["beautiful", "What a beautiful sunset."], ["different", "Every snowflake is different."],
      ["favorite", "Pizza is my favorite food."], ["library", "Return the book to the library."], ["question", "Can I ask a question?"],
      ["surprise", "The party was a surprise."], ["calendar", "Mark it on the calendar."], ["February", "February is the shortest month."],
      ["knowledge", "Reading builds knowledge."], ["neighbor", "Our neighbor has three cats."], ["exercise", "Exercise keeps you healthy."],
      ["separate", "Keep the whites separate from the colors."], ["tomorrow", "We will finish tomorrow."], ["weird", "That was a weird dream."],
      ["believe", "I believe you can do it."], ["argument", "They had an argument about pizza."], ["government", "The government passed a new law."],
      ["restaurant", "Let's try the new restaurant."], ["vacuum", "Please vacuum the living room."], ["Wednesday", "The test is on Wednesday."],
      ["mysterious", "A mysterious box arrived."], ["dinosaur", "The dinosaur bones were huge."], ["chocolate", "Hot chocolate on a cold day."],
    ],
    hard: [
      ["onomatopoeia", "Buzz is an example of onomatopoeia."], ["rhythm", "Clap along to the rhythm."], ["conscientious", "She is a conscientious worker."],
      ["necessary", "Is all this noise necessary?"], ["embarrass", "Please don't embarrass me."], ["millennium", "A millennium is a thousand years."],
      ["accommodate", "The hotel can accommodate fifty guests."], ["occurrence", "Rain is a common occurrence here."], ["pharaoh", "The pharaoh ruled ancient Egypt."],
      ["liaison", "He acted as a liaison between teams."], ["questionnaire", "Fill out the questionnaire."], ["mischievous", "The mischievous cat hid my keys."],
      ["silhouette", "We saw his silhouette in the window."], ["bureaucracy", "The bureaucracy slowed everything down."], ["handkerchief", "He waved a white handkerchief."],
      ["rhinoceros", "A rhinoceros has a thick skin."], ["entrepreneur", "The entrepreneur started a bakery."], ["pneumonia", "She recovered from pneumonia."],
      ["chrysanthemum", "A chrysanthemum bloomed in the garden."], ["maneuver", "The pilot made a quick maneuver."], ["fluorescent", "The fluorescent lights flickered."],
      ["guarantee", "We guarantee you'll laugh."], ["Fahrenheit", "Water boils at 212 degrees Fahrenheit."], ["xylophone", "She played a song on the xylophone."],
    ],
  };
  Object.values(spelling).forEach(l => l.forEach(([w]) => all.add(w.toLowerCase())));

  // Scramble words (5-8 letters, common)
  const scramble = ("planet garden rocket pickle monkey castle dragon wizard puzzle bubble jungle candle donkey silver orange " +
    "pirate kitten muffin travel hockey parrot window guitar winter summer cookie button rabbit banana dinner tunnel " +
    "anchor basket camera cactus marble rainbow blanket chicken holiday picture penguin balloon library dolphin pumpkin " +
    "volcano thunder lantern popcorn diamond giraffe teacher sandwich elephant treasure mountain dinosaur keyboard").split(" ");
  scramble.forEach(w => all.add(w));

  return { byLetter, all, spelling, scramble };
})();
