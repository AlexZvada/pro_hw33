const storyes = [
  {
    name: "Pride and Prejudice",
    text: 'Since its immediate success in 1813, Pride and Prejudice has remained one of the most popular novels in the English language. Jane Austen called this brilliant work "her own darling child" and its vivacious heroine, Elizabeth Bennet, "as delightful a creature as ever appeared in print." The romantic clash between the opinionated Elizabeth and her proud beau, Mr. Darcy, is a splendid performance of civilized sparring. And Jane Austen\'s radiant wit sparkles as her characters dance a delicate quadrille of flirtation and intrigue, making this book the most superb comedy of manners of Regency England.',
  },
  {
    name: "To Kill a Mockingbird",
    text: 'The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it. "To Kill A Mockingbird" became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic.',
  },
  {
    name: "The Catcher in the Rye",
    text: "It's Christmas time and Holden Caulfield has just been expelled from yet another school...\nFleeing the crooks at Pencey Prep, he pinballs around New York City seeking solace in fleeting encounters—shooting the bull with strangers in dive hotels, wandering alone round Central Park, getting beaten up by pimps and cut down by erstwhile girlfriends. The city is beautiful and terrible, in all its neon loneliness and seedy glamour, its mingled sense of possibility and emptiness. Holden passes through it like a ghost, thinking always of his kid sister Phoebe, the only person who really understands him, and his determination to escape the phonies and find a life of true meaning.",
  },
  {
    name: "Brave New World",
    text: "Brave New World is a dystopian novel by English author Aldous Huxley, written in 1931 and published in 1932. Largely set in a futuristic World State, inhabited by genetically modified citizens and an intelligence-based social hierarchy, the novel anticipates huge scientific advancements in reproductive technology, sleep-learning, psychological manipulation and classical conditioning that are combined to make a dystopian society which is challenged by only a single individual: the story's protagonist.",
  },
  {
    name: "The Lord of the Rings",
    text: "One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them\nIn ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell by chance into the hands of the hobbit Bilbo Baggins.",
  },
  {
    name: "Dracula",
    text: "When Jonathan Harker visits Transylvania to help Count Dracula with the purchase of a London house, he makes a series of horrific discoveries about his client. Soon afterwards, various bizarre incidents unfold in England: an apparently unmanned ship is wrecked off the coast of Whitby; a young woman discovers strange puncture marks on her neck; and the inmate of a lunatic asylum raves about the 'Master' and his imminent arrival.",
  },
  {
    name: "The Little Prince",
    text: 'A pilot stranded in the desert awakes one morning to see, standing before him, the most extraordinary little fellow. "Please," asks the stranger, "draw me a sheep." And the pilot realizes that when life\'s events are too difficult to understand, there is no choice but to succumb to their mysteries. He pulls out pencil and paper... And thus begins this wise and enchanting fable that, in teaching the secret of what is really important in life, has changed forever the world for its readers.',
  },
  {
    name: "On the Road",
    text: 'A quintessential novel of America & the Beat Generation On the Road chronicles Jack Kerouac\'s years traveling the N. American continent with his friend Neal Cassady, "a sideburned hero of the snowy West." As "Sal Paradise" & "Dean Moriarty," the two roam the country in a quest for self-knowledge & experience. Kerouac\'s love of America, compassion for humanity & sense of language as jazz combine to make On the Road an inspirational work of lasting importance. This classic novel of freedom & longing defined what it meant to be "Beat" & has inspired every generation since its initial publication.',
  },
];
export const getStory = () => {
    const index = Math.floor(Math.random()*7);
    return storyes[index];
};
