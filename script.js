       const tbl_Style = [
 { ID: 1, Category: "Comic Books", "Sub-Category": "Adventure", "Art Style": "Action Comedy", Creator: "Sergio Aragonés", Mood: "Fun" },
{ ID: 2, Category: "Comic Books", "Sub-Category": "Sci-Fi", "Art Style": "Alternate History", Creator: "Howard Chaykin", Mood: "Reimagined" },
{ ID: 3, Category: "Comic Books", "Sub-Category": "Fantasy", "Art Style": "Anthropomorphic", Creator: "Stan Sakai", Mood: "Folkloric" },
{ ID: 4, Category: "Comic Books", "Sub-Category": "Graphic Novel", "Art Style": "Auto-Bio", Creator: "Jeffrey Brown", Mood: "Introspective" },
{ ID: 5, Category: "Comic Books", "Sub-Category": "Non-Fiction", "Art Style": "Biographical", Creator: "Marjane Satrapi", Mood: "Personal" },
{ ID: 6, Category: "Comic Books", "Sub-Category": "Horror", "Art Style": "Body Horror", Creator: "Eric Powell", Mood: "Grotesque" },
{ ID: 7, Category: "Comic Books", "Sub-Category": "Superhero", "Art Style": "Bronze Age", Creator: "John Byrne", Mood: "Realistic" },
{ ID: 8, Category: "Comic Books", "Sub-Category": "Caricature", "Art Style": "Celebrity", Creator: "Al Hirschfeld", Mood: "Elegant" },
{ ID: 9, Category: "Comic Books", "Sub-Category": "Manga", "Art Style": "Chibi", Creator: "Kiyohiko Azuma", Mood: "Cute" },
{ ID: 10, Category: "Comic Books", "Sub-Category": "Western", "Art Style": "Classic", Creator: "John Severin", Mood: "Old West" },
{ ID: 11, Category: "Comic Books", "Sub-Category": "Slice of Life", "Art Style": "Coming of Age", Creator: "Craig Thompson", Mood: "Emotional" },
{ ID: 12, Category: "Comic Books", "Sub-Category": "Horror", "Art Style": "Cosmic Horror", Creator: "Alan Davis", Mood: "Eldritch" },
{ ID: 13, Category: "Comic Books", "Sub-Category": "Sci-Fi", "Art Style": "Cyberpunk", Creator: "Katsuhiro Otomo", Mood: "Futuristic" },
{ ID: 14, Category: "Comic Books", "Sub-Category": "Fantasy", "Art Style": "Dark Fantasy", Creator: "Mike Mignola", Mood: "Gothic" },
{ ID: 15, Category: "Comic Books", "Sub-Category": "Slice of Life", "Art Style": "Day-to-Day Life", Creator: "Alison Bechdel", Mood: "Relatable" },
{ ID: 16, Category: "Comic Books", "Sub-Category": "Superhero", "Art Style": "Deconstruction", Creator: "Alan Moore", Mood: "Critical" },
{ ID: 17, Category: "Comic Books", "Sub-Category": "Sci-Fi", "Art Style": "Dystopian", Creator: "Brian K. Vaughan", Mood: "Immersive" },
{ ID: 18, Category: "Comic Books", "Sub-Category": "Caricature", "Art Style": "Editorial", Creator: "Mort Drucker", Mood: "Humorous" },
{ ID: 19, Category: "Comic Books", "Sub-Category": "Fantasy", "Art Style": "Epic Fantasy", Creator: "Alex Ross", Mood: "Grandiose" },
{ ID: 20, Category: "Comic Books", "Sub-Category": "Adventure", "Art Style": "Espionage", Creator: "Jim Steranko", Mood: "Suspenseful" },
{ ID: 21, Category: "Comic Books", "Sub-Category": "Graphic Novel", "Art Style": "Experimental", Creator: "Chris Ware", Mood: "Innovative" },
{ ID: 22, Category: "Comic Books", "Sub-Category": "Fantasy", "Art Style": "Fairy Tale", Creator: "Trina Robbins", Mood: "Enchanting" },
{ ID: 23, Category: "Comic Books", "Sub-Category": "Slice of Life", "Art Style": "Fantasy Life", Creator: "Brandon Graham", Mood: "Whimsical" },
{ ID: 24, Category: "Comic Books", "Sub-Category": "Crime", "Art Style": "Femme Fatale", Creator: "Brubaker & Phillips", Mood: "Seductive" },
{ ID: 25, Category: "Comic Books", "Sub-Category": "Horror", "Art Style": "Folk Horror", Creator: "Emily Carroll", Mood: "Haunting" },
{ ID: 26, Category: "Comic Books", "Sub-Category": "Superhero", "Art Style": "Golden Age", Creator: "Joe Shuster", Mood: "Wholesome" },
{ ID: 27, Category: "Comic Books", "Sub-Category": "Horror", "Art Style": "Gothic", Creator: "Junji Ito", Mood: "Creepy" },
{ ID: 28, Category: "Comic Books", "Sub-Category": "Crime", "Art Style": "Hardboiled", Creator: "Ed Brubaker", Mood: "Moody" },
{ ID: 29, Category: "Comic Books", "Sub-Category": "Crime", "Art Style": "Heist", Creator: "Darwyn Cooke", Mood: "Exciting" },
{ ID: 30, Category: "Comic Books", "Sub-Category": "Fantasy", "Art Style": "High Fantasy", Creator: "Charles Vess", Mood: "Magical" },
{ ID: 31, Category: "Comic Books", "Sub-Category": "Non-Fiction", "Art Style": "History", Creator: "Nate Powell", Mood: "Engaging" },
{ ID: 32, Category: "Comic Books", "Sub-Category": "Superhero", "Art Style": "Ink Wash", Creator: "David Mack", Mood: "Moody" },
{ ID: 33, Category: "Comic Books", "Sub-Category": "Manga", "Art Style": "Isekai", Creator: "Yoshiyuki Sadamoto", Mood: "Mystical" },
{ ID: 34, Category: "Comic Books", "Sub-Category": "Manga", "Art Style": "Josei", Creator: "Ai Yazawa", Mood: "Mature" },
{ ID: 35, Category: "Comic Books", "Sub-Category": "Non-Fiction", "Art Style": "Journalism", Creator: "Joe Sacco", Mood: "Informative" },
{ ID: 36, Category: "Comic Books", "Sub-Category": "Manga", "Art Style": "Kodomomuke", Creator: "Osamu Tezuka", Mood: "Whimsical" },
{ ID: 37, Category: "Comic Books", "Sub-Category": "Graphic Novel", "Art Style": "Literary", Creator: "Art Spiegelman", Mood: "Profound" },
{ ID: 38, Category: "Comic Books", "Sub-Category": "Slice of Life", "Art Style": "Magical Realism", Creator: "Gabriel Bá & Fábio Moon", Mood: "Magical" },
{ ID: 39, Category: "Comic Books", "Sub-Category": "Manga", "Art Style": "Mecha", Creator: "Masamune Shirow", Mood: "Mechanical" },
{ ID: 40, Category: "Comic Books", "Sub-Category": "Slice of Life", "Art Style": "Memoir", Creator: "John Porcellino", Mood: "Reflective" },
{ ID: 41, Category: "Comic Books", "Sub-Category": "Superhero", "Art Style": "Minimalist", Creator: "David Aja", Mood: "Stark" },
{ ID: 42, Category: "Comic Books", "Sub-Category": "Adventure", "Art Style": "Modern Adventure", Creator: "Mark Schultz", Mood: "Dynamic" },
{ ID: 43, Category: "Comic Books", "Sub-Category": "Superhero", "Art Style": "Modern Age", Creator: "Todd McFarlane", Mood: "Dark" },
{ ID: 44, Category: "Comic Books", "Sub-Category": "Crime", "Art Style": "Mystery", Creator: "David Lapham", Mood: "Intriguing" },
{ ID: 45, Category: "Comic Books", "Sub-Category": "Fantasy", "Art Style": "Mythology", Creator: "George Pérez", Mood: "Legendary" },
{ ID: 46, Category: "Comic Books", "Sub-Category": "Crime", "Art Style": "Neo-Noir", Creator: "Sean Phillips", Mood: "Stylish" },
{ ID: 47, Category: "Comic Books", "Sub-Category": "Cartoon", "Art Style": "New Yorker", Creator: "Charles Addams", Mood: "Witty" },
{ ID: 48, Category: "Comic Books", "Sub-Category": "Superhero", "Art Style": "Noir", Creator: "Ed Brubaker", Mood: "Dark" },
{ ID: 49, Category: "Comic Books", "Sub-Category": "Cartoon", "Art Style": "One-Panel", Creator: "Gary Larson", Mood: "Ironic" },
{ ID: 50, Category: "Comic Books", "Sub-Category": "Superhero", "Art Style": "Painterly", Creator: "Esad Ribic", Mood: "Atmospheric" },
{ ID: 51, Category: "Comic Books", "Sub-Category": "Caricature", "Art Style": "Parody", Creator: "Don Martin", Mood: "Slapstick" },
{ ID: 52, Category: "Comic Books", "Sub-Category": "Crime", "Art Style": "Period Piece", Creator: "Max Allan Collins", Mood: "Evocative" },
{ ID: 53, Category: "Comic Books", "Sub-Category": "Cartoon", "Art Style": "Political Cartoon", Creator: "Pat Oliphant", Mood: "Sharp" },
{ ID: 54, Category: "Comic Books", "Sub-Category": "Caricature", "Art Style": "Political Satire", Creator: "Tom Tomorrow", Mood: "Provocative" },
{ ID: 55, Category: "Comic Books", "Sub-Category": "Sci-Fi", "Art Style": "Post-Apocalyptic", Creator: "Frank Miller", Mood: "Dystopian" },
{ ID: 56, Category: "Comic Books", "Sub-Category": "Adventure", "Art Style": "Postmodern Adventure", Creator: "Neil Gaiman", Mood: "Mythical" },
{ ID: 57, Category: "Comic Books", "Sub-Category": "Horror", "Art Style": "Psychological", Creator: "Emily Carroll", Mood: "Unsettling" },
{ ID: 58, Category: "Comic Books", "Sub-Category": "Superhero", "Art Style": "Psychological", Creator: "Grant Morrison", Mood: "Intellectual" },
{ ID: 59, Category: "Comic Books", "Sub-Category": "Crime", "Art Style": "Pulp", Creator: "Edgar P. Jacobs", Mood: "Pulpy" },
{ ID: 60, Category: "Comic Books", "Sub-Category": "Adventure", "Art Style": "Pulp Adventure", Creator: "Will Eisner", Mood: "Action-packed" },
{ ID: 61, Category: "Comic Books", "Sub-Category": "Superhero", "Art Style": "Reconstruction", Creator: "Mark Waid", Mood: "Hopeful" },
{ ID: 62, Category: "Comic Books", "Sub-Category": "Superhero", "Art Style": "Retro", Creator: "Michael Allred", Mood: "Nostalgic" },
{ ID: 63, Category: "Comic Books", "Sub-Category": "Western", "Art Style": "Revisionist Western", Creator: "Matteo Scalera", Mood: "Gritty" },
{ ID: 64, Category: "Comic Books", "Sub-Category": "Sci-Fi", "Art Style": "Robotics", Creator: "Geof Darrow", Mood: "Technical" },
{ ID: 65, Category: "Comic Books", "Sub-Category": "Adventure", "Art Style": "Sci-Fi Adventure", Creator: "Fiona Staples", Mood: "Imaginative" },
{ ID: 66, Category: "Comic Books", "Sub-Category": "Non-Fiction", "Art Style": "Science", Creator: "Maris Wicks", Mood: "Educational" },
{ ID: 67, Category: "Comic Books", "Sub-Category": "Manga", "Art Style": "Seinen", Creator: "Naoki Urasawa", Mood: "Complex" },
{ ID: 68, Category: "Comic Books", "Sub-Category": "Manga", "Art Style": "Shojo", Creator: "Yuu Watase", Mood: "Romantic" },
{ ID: 69, Category: "Comic Books", "Sub-Category": "Manga", "Art Style": "Shonen", Creator: "Eiichiro Oda", Mood: "Adventurous" },
{ ID: 70, Category: "Comic Books", "Sub-Category": "Graphic Novel", "Art Style": "Silent", Creator: "Jason", Mood: "Minimalist" },
{ ID: 71, Category: "Comic Books", "Sub-Category": "Superhero", "Art Style": "Silver Age", Creator: "Jack Kirby", Mood: "Optimistic" },
{ ID: 72, Category: "Comic Books", "Sub-Category": "Sci-Fi", "Art Style": "Space Opera", Creator: "Dave Gibbons", Mood: "Epic" },
{ ID: 73, Category: "Comic Books", "Sub-Category": "Sci-Fi", "Art Style": "Space Western", Creator: "Fiona Staples", Mood: "Adventurous" },
{ ID: 74, Category: "Comic Books", "Sub-Category": "Western", "Art Style": "Spaghetti Western", Creator: "Tim Truman", Mood: "Stylized" },
{ ID: 75, Category: "Comic Books", "Sub-Category": "Horror", "Art Style": "Splatterpunk", Creator: "Tim Seeley", Mood: "Bloody" },
{ ID: 76, Category: "Comic Books", "Sub-Category": "Fantasy", "Art Style": "Steampunk", Creator: "Ben Templesmith", Mood: "Industrial" },
{ ID: 77, Category: "Comic Books", "Sub-Category": "Adventure", "Art Style": "Supernatural Adventure", Creator: "Jim Zub", Mood: "Fantastical" },
{ ID: 78, Category: "Comic Books", "Sub-Category": "Crime", "Art Style": "Supernatural Crime", Creator: "Ben Templesmith", Mood: "Supernatural" },
{ ID: 79, Category: "Comic Books", "Sub-Category": "Horror", "Art Style": "Supernatural Horror", Creator: "Steve Niles", Mood: "Chilling" },
{ ID: 80, Category: "Comic Books", "Sub-Category": "Cartoon", "Art Style": "Surreal", Creator: "Bill Plympton", Mood: "Absurd" },
{ ID: 81, Category: "Comic Books", "Sub-Category": "Sci-Fi", "Art Style": "Time Travel", Creator: "Robert Crumb", Mood: "Paradoxical" },
{ ID: 82, Category: "Comic Books", "Sub-Category": "Adventure", "Art Style": "Time Travel Adventure", Creator: "Matt Fraction", Mood: "Inventive" },
{ ID: 83, Category: "Comic Books", "Sub-Category": "Fantasy", "Art Style": "Urban Fantasy", Creator: "Mike Carey", Mood: "Mysterious" },
{ ID: 84, Category: "Comic Books", "Sub-Category": "Western", "Art Style": "Weird West", Creator: "Tony Moore", Mood: "Supernatural" },
{ ID: 85, Category: "Comic Books", "Sub-Category": "Horror", "Art Style": "Zombie", Creator: "Robert Kirkman", Mood: "Apocalyptic" },
{ ID: 86, Category: "Comic Books", "Sub-Category": "Superhero", "Art Style": "Expressionist", Creator: "Andrea Sorrentino", Mood: "Intense" },
{ ID: 87, Category: "Comic Books", "Sub-Category": "Superhero", "Art Style": "Abstract", Creator: "Mike Del Mundo", Mood: "Unconventional" },
{ ID: 88, Category: "Comic Books", "Sub-Category": "Superhero", "Art Style": "Photorealistic", Creator: "Alex Ross", Mood: "Realistic" },
{ ID: 89, Category: "Comic Books", "Sub-Category": "Superhero", "Art Style": "Cinematic", Creator: "Stuart Immonen", Mood: "Dynamic" },
{ ID: 90, Category: "Comic Books", "Sub-Category": "Manga", "Art Style": "4-Koma", Creator: "Kiyohiko Azuma", Mood: "Light-hearted" },
{ ID: 91, Category: "Comic Books", "Sub-Category": "Manga", "Art Style": "Yaoi", Creator: "Yun Kouga", Mood: "Romantic" },
{ ID: 92, Category: "Comic Books", "Sub-Category": "Manga", "Art Style": "Yuri", Creator: "Akiko Morishima", Mood: "Emotional" },
{ ID: 93, Category: "Comic Books", "Sub-Category": "Manga", "Art Style": "Gekiga", Creator: "Tatsumi Yoshihiro", Mood: "Dark" },
{ ID: 94, Category: "Comic Books", "Sub-Category": "Cartoon", "Art Style": "Webcomic", Creator: "John Allison", Mood: "Witty" },
{ ID: 95, Category: "Comic Books", "Sub-Category": "Cartoon", "Art Style": "Character-driven", Creator: "Scott Adams", Mood: "Satirical" },
{ ID: 96, Category: "Comic Books", "Sub-Category": "Caricature", "Art Style": "Sports", Creator: "Willard Mullin", Mood: "Playful" },
{ ID: 97, Category: "Comic Books", "Sub-Category": "Caricature", "Art Style": "Pop Culture", Creator: "Al Jaffee", Mood: "Funny" },
{ ID: 98, Category: "Comic Books", "Sub-Category": "Graphic Novel", "Art Style": "Wordless", Creator: "Thierry Smolderen", Mood: "Minimalist" },
{ ID: 99, Category: "Comic Books", "Sub-Category": "Graphic Novel", "Art Style": "Semi-autobiographical", Creator: "Jeff Lemire", Mood: "Touching" },
{ ID: 100, Category: "Comic Books", "Sub-Category": "Sci-Fi", "Art Style": "Hard Sci-Fi", Creator: "Greg Egan", Mood: "Thought-provoking" },
{ ID: 101, Category: "Comic Books", "Sub-Category": "Sci-Fi", "Art Style": "Space Fantasy", Creator: "Christian Gossett", Mood: "Expansive" },
{ ID: 102, Category: "Comic Books", "Sub-Category": "Fantasy", "Art Style": "Sword and Sorcery", Creator: "Barry Windsor-Smith", Mood: "Mythic" },
{ ID: 103, Category: "Comic Books", "Sub-Category": "Fantasy", "Art Style": "Contemporary Fantasy", Creator: "Charles Burns", Mood: "Enigmatic" },
{ ID: 104, Category: "Comic Books", "Sub-Category": "Horror", "Art Style": "Occult Horror", Creator: "Mike Carey", Mood: "Dark" },
{ ID: 105, Category: "Comic Books", "Sub-Category": "Horror", "Art Style": "Slasher", Creator: "Victor Gischler", Mood: "Gory" },
{ ID: 106, Category: "Comic Books", "Sub-Category": "Western", "Art Style": "Post-apocalyptic Western", Creator: "Justin Gray", Mood: "Desolate" },
{ ID: 107, Category: "Comic Books", "Sub-Category": "Western", "Art Style": "Genre Blend", Creator: "Joe R. Lansdale", Mood: "Unpredictable" },
{ ID: 108, Category: "Comic Books", "Sub-Category": "Crime", "Art Style": "Procedural", Creator: "Greg Rucka", Mood: "Engrossing" },
{ ID: 109, Category: "Comic Books", "Sub-Category": "Crime", "Art Style": "Gangster", Creator: "Brian Azzarello", Mood: "Brutal" },
{ ID: 110, Category: "Comic Books", "Sub-Category": "Adventure", "Art Style": "Historical Adventure", Creator: "Christophe Blain", Mood: "Swashbuckling" },
{ ID: 111, Category: "Comic Books", "Sub-Category": "Adventure", "Art Style": "Magic Adventure", Creator: "Kurt Busiek", Mood: "Intriguing" },
{ ID: 112, Category: "Comic Books", "Sub-Category": "Slice of Life", "Art Style": "Travelogue", Creator: "Guy Delisle", Mood: "Observational" },
{ ID: 113, Category: "Comic Books", "Sub-Category": "Slice of Life", "Art Style": "Humor", Creator: "Jeff Kinney", Mood: "Entertaining" },
{ ID: 114, Category: "Comic Books", "Sub-Category": "Non-Fiction", "Art Style": "Philosophy", Creator: "Michael J. Patton", Mood: "Provocative" },
{ ID: 115, Category: "Comic Books", "Sub-Category": "Non-Fiction", "Art Style": "Mythology", Creator: "George O'Connor", Mood: "Retelling" },
{ ID: 116, Category: "Comic Books", "Sub-Category": "Superhero", "Art Style": "Satire", Creator: "Mark Russell", Mood: "Irreverent" },
{ ID: 117, Category: "Comic Books", "Sub-Category": "Superhero", "Art Style": "Postmodern", Creator: "Grant Morrison", Mood: "Meta" },
{ ID: 118, Category: "Comic Books", "Sub-Category": "Fantasy", "Art Style": "Folklore", Creator: "Isabel Greenberg", Mood: "Whimsical" },
{ ID: 119, Category: "Comic Books", "Sub-Category": "Fantasy", "Art Style": "Dark Comedy", Creator: "Skottie Young", Mood: "Humorous" },
{ ID: 120, Category: "Comic Books", "Sub-Category": "Horror", "Art Style": "Lovecraftian Horror", Creator: "Alan Moore", Mood: "Otherworldly" },
{ ID: 121, Category: "Comic Books", "Sub-Category": "Horror", "Art Style": "Paranormal", Creator: "Paul Tobin", Mood: "Suspenseful" },
{ ID: 122, Category: "Comic Books", "Sub-Category": "Sci-Fi", "Art Style": "Alien Worlds", Creator: "Brandon Graham", Mood: "Alien" },
{ ID: 123, Category: "Comic Books", "Sub-Category": "Sci-Fi", "Art Style": "Transhumanism", Creator: "Rick Remender", Mood: "Speculative" },
{ ID: 124, Category: "Comic Books", "Sub-Category": "Crime", "Art Style": "Thriller", Creator: "Greg Rucka", Mood: "Tense" },
{ ID: 125, Category: "Comic Books", "Sub-Category": "Crime", "Art Style": "Legal Drama", Creator: "Charles Soule", Mood: "Compelling" },
{ ID: 126, Category: "Comic Books", "Sub-Category": "Adventure", "Art Style": "Mythological Adventure", Creator: "George O'Connor", Mood: "Legendary" },
{ ID: 127, Category: "Comic Books", "Sub-Category": "Adventure", "Art Style": "Cosmic Adventure", Creator: "Dan Abnett", Mood: "Grand" },
{ ID: 128, Category: "Comic Books", "Sub-Category": "Slice of Life", "Art Style": "Relationships", Creator: "Julie Maroh", Mood: "Intimate" },
{ ID: 129, Category: "MTG", "Sub-Category": "Fantasy", "Art Style": "Gothic", Creator: "Frank Frazetta", Mood: "Dark" },
{ ID: 130, Category: "MTG", "Sub-Category": "Sci-Fi", "Art Style": "Steampunk", Creator: "Kev Walker", Mood: "Industrial" },
{ ID: 131, Category: "MTG", "Sub-Category": "Fantasy", "Art Style": "Mythology", Creator: "Seb McKinnon", Mood: "Legendary" },
{ ID: 132, Category: "MTG", "Sub-Category": "Horror", "Art Style": "Dark Fantasy", Creator: "Wayne Reynolds", Mood: "Eerie" },
{ ID: 133, Category: "MTG", "Sub-Category": "Adventure", "Art Style": "Epic", Creator: "Mark Tedin", Mood: "Expansive" },
{ ID: 134, Category: "MTG", "Sub-Category": "Fantasy", "Art Style": "Abstract", Creator: "Rebecca Guay", Mood: "Dreamy" },
{ ID: 135, Category: "MTG", "Sub-Category": "Sci-Fi", "Art Style": "Cyberpunk", Creator: "Adam Paquette", Mood: "Futuristic" },
{ ID: 136, Category: "MTG", "Sub-Category": "Horror", "Art Style": "Gothic Horror", Creator: "Chippy", Mood: "Gloomy" },
{ ID: 137, Category: "MTG", "Sub-Category": "Sci-Fi", "Art Style": "Space Opera", Creator: "Aleksi Briclot", Mood: "Astounding" },
{ ID: 138, Category: "MTG", "Sub-Category": "Horror", "Art Style": "Lovecraftian Horror", Creator: "Jason Felix", Mood: "Otherworldly" },
{ ID: 139, Category: "MTG", "Sub-Category": "Fantasy", "Art Style": "Dark Comedy", Creator: "Terese Nielsen", Mood: "Whimsical" },
{ ID: 140, Category: "MTG", "Sub-Category": "Fantasy", "Art Style": "Mythological", Creator: "Volkan Baga", Mood: "Imaginative" },
{ ID: 141, Category: "MTG", "Sub-Category": "Adventure", "Art Style": "Action", Creator: "Daarken", Mood: "Dynamic" },
{ ID: 142, Category: "MTG", "Sub-Category": "Sci-Fi", "Art Style": "Post-Apocalyptic", Creator: "Noah Bradley", Mood: "Desolate" },
{ ID: 143, Category: "MTG", "Sub-Category": "Fantasy", "Art Style": "Whimsical", Creator: "Tyler Jacobson", Mood: "Playful" },
{ ID: 144, Category: "MTG", "Sub-Category": "Horror", "Art Style": "Supernatural Horror", Creator: "Steve Argyle", Mood: "Creepy" },
{ ID: 145, Category: "MTG", "Sub-Category": "Sci-Fi", "Art Style": "Transhumanism", Creator: "Brad Rigney", Mood: "Speculative" },
{ ID: 146, Category: "MTG", "Sub-Category": "Fantasy", "Art Style": "Realism", Creator: "Donato Giancola", Mood: "Authentic" },
{ ID: 147, Category: "MTG", "Sub-Category": "Fantasy", "Art Style": "Ethereal", Creator: "James Paick", Mood: "Mystical" },
{ ID: 148, Category: "MTG", "Sub-Category": "Horror", "Art Style": "Occult Horror", Creator: "David Rapoza", Mood: "Sinister" },
{ ID: 149, Category: "MTG", "Sub-Category": "Sci-Fi", "Art Style": "Space Fantasy", Creator: "Michael Komarck", Mood: "Alien" },
{ ID: 150, Category: "MTG", "Sub-Category": "Fantasy", "Art Style": "Fairy Tale", Creator: "Charles Urbach", Mood: "Enchanting" },
{ ID: 151, Category: "MTG", "Sub-Category": "Adventure", "Art Style": "Magic Adventure", Creator: "Chris Rahn", Mood: "Intriguing" },
{ ID: 152, Category: "MTG", "Sub-Category": "Sci-Fi", "Art Style": "Time Travel", Creator: "John Howe", Mood: "Paradoxical" },
{ ID: 153, Category: "MTG", "Sub-Category": "Fantasy", "Art Style": "Steampunk Fantasy", Creator: "Clint Cearley", Mood: "Inventive" },
{ ID: 154, Category: "MTG", "Sub-Category": "Horror", "Art Style": "Monstrous", Creator: "Jason A. Engle", Mood: "Terrifying" },
{ ID: 155, Category: "MTG", "Sub-Category": "Sci-Fi", "Art Style": "Robotics", Creator: "Eric Deschamps", Mood: "Technical" },
{ ID: 156, Category: "MTG", "Sub-Category": "Fantasy", "Art Style": "Mythic", Creator: "Steve Prescott", Mood: "Heroic" },
{ ID: 157, Category: "MTG", "Sub-Category": "Horror", "Art Style": "Psychological Horror", Creator: "Nils Hamm", Mood: "Disturbing" },
{ ID: 158, Category: "MTG", "Sub-Category": "Sci-Fi", "Art Style": "Hard Sci-Fi", Creator: "Ryan Pancoast", Mood: "Thought-provoking" },
{ ID: 159, Category: "MTG", "Sub-Category": "Fantasy", "Art Style": "Medieval Fantasy", Creator: "Tomasz Jedruszek", Mood: "Traditional" },
{ ID: 160, Category: "MTG", "Sub-Category": "Adventure", "Art Style": "Postmodern Adventure", Creator: "Svetlin Velinov", Mood: "Inventive" },
{ ID: 161, Category: "MTG", "Sub-Category": "Fantasy", "Art Style": "Supernatural Fantasy", Creator: "Ryan Yee", Mood: "Spectral" },
{ ID: 162, Category: "MTG", "Sub-Category": "Horror", "Art Style": "Grotesque", Creator: "Jonas De Ro", Mood: "Macabre" },
{ ID: 163, Category: "MTG", "Sub-Category": "Sci-Fi", "Art Style": "Cosmic", Creator: "Jason Rainville", Mood: "Grand" },
{ ID: 164, Category: "MTG", "Sub-Category": "Fantasy", "Art Style": "Asian-Inspired", Creator: "Raymond Swanland", Mood: "Exotic" },
{ ID: 165, Category: "MTG", "Sub-Category": "Adventure", "Art Style": "Supernatural Adventure", Creator: "Karl Kopinski", Mood: "Magical" },
{ ID: 166, Category: "MTG", "Sub-Category": "Sci-Fi", "Art Style": "Dystopian", Creator: "Robbie Trevino", Mood: "Apocalyptic" },
{ ID: 167, Category: "MTG", "Sub-Category": "Fantasy", "Art Style": "Dark Realism", Creator: "Randy Gallegos", Mood: "Grim" },
{ ID: 168, Category: "MTG", "Sub-Category": "Horror", "Art Style": "Zombie Horror", Creator: "Pete Venters", Mood: "Gruesome" },
{ ID: 169, Category: "MTG", "Sub-Category": "Sci-Fi", "Art Style": "Alien Worlds", Creator: "Lucas Graciano", Mood: "Outlandish" },
{ ID: 170, Category: "Photography", "Sub-Category": "Realistic", "Art Style": "Landscape", Creator: "Ansel Adams", Mood: "Serene" },
{ ID: 171, Category: "Photography", "Sub-Category": "Realistic", "Art Style": "Portrait", Creator: "Yousuf Karsh", Mood: "Intimate" },
{ ID: 172, Category: "Photography", "Sub-Category": "Realistic", "Art Style": "Street", Creator: "Daido Moriyama", Mood: "Gritty" },
{ ID: 173, Category: "Photography", "Sub-Category": "Realistic", "Art Style": "Documentary", Creator: "James Nachtwey", Mood: "Impactful" },
{ ID: 174, Category: "Photography", "Sub-Category": "Ultra-Realistic", "Art Style": "Macro", Creator: "Levon Biss", Mood: "Awe-Inspiring" },
{ ID: 175, Category: "Photography", "Sub-Category": "Ultra-Realistic", "Art Style": "Architectural", Creator: "Julius Shulman", Mood: "Stunning" },
{ ID: 176, Category: "Photography", "Sub-Category": "Ultra-Realistic", "Art Style": "Aerial", Creator: "George Steinmetz", Mood: "Breath-Taking" }

        ];

const tbl_CameraStyle = [
  {ID: 1, Name: "Eye Level", CameraPosition: "Eye Level", HeightFromGround: "5-6 feet", TiltAngle: "0 degrees", TwistAngle: "0 degrees", LensType: "Normal", VerticalLensAngle: "50 degrees", HorizontalLensAngle: "50 degrees"},
  {ID: 2, Name: "Low Angle", CameraPosition: "Low Angle", HeightFromGround: "2-3 feet", TiltAngle: "30 degrees (up)", TwistAngle: "0 degrees", LensType: "Wide Angle", VerticalLensAngle: "70 degrees", HorizontalLensAngle: "90 degrees"},
  {ID: 3, Name: "High Angle", CameraPosition: "High Angle", HeightFromGround: "8-10 feet", TiltAngle: "30 degrees (down)", TwistAngle: "0 degrees", LensType: "Telephoto", VerticalLensAngle: "30 degrees", HorizontalLensAngle: "50 degrees"},
  {ID: 4, Name: "Bird's Eye View", CameraPosition: "Aerial", HeightFromGround: "20+ feet", TiltAngle: "60 degrees (down)", TwistAngle: "0 degrees", LensType: "Wide Angle", VerticalLensAngle: "70 degrees", HorizontalLensAngle: "90 degrees"},
  {ID: 5, Name: "Worm's Eye View", CameraPosition: "Ground Level", HeightFromGround: "0 feet", TiltAngle: "90 degrees (up)", TwistAngle: "0 degrees", LensType: "Wide Angle", VerticalLensAngle: "70 degrees", HorizontalLensAngle: "90 degrees"},
  {ID: 6, Name: "Over-the-Shoulder", CameraPosition: "Shoulder Level", HeightFromGround: "5-6 feet", TiltAngle: "0 degrees", TwistAngle: "0 degrees", LensType: "Normal", VerticalLensAngle: "50 degrees", HorizontalLensAngle: "50 degrees"},
  {ID: 7, Name: "Close-Up", CameraPosition: "Eye Level", HeightFromGround: "5-6 feet", TiltAngle: "0 degrees", TwistAngle: "0 degrees", LensType: "Telephoto", VerticalLensAngle: "30 degrees", HorizontalLensAngle: "50 degrees"},
  {ID: 8, Name: "Extreme Close-Up", CameraPosition: "Eye Level", HeightFromGround: "5-6 feet", TiltAngle: "0 degrees", TwistAngle: "0 degrees", LensType: "Telephoto", VerticalLensAngle: "10 degrees", HorizontalLensAngle: "30 degrees"},
  {ID: 9, Name: "Dutch Angle 1", CameraPosition: "Eye Level", HeightFromGround: "5-6 feet", TiltAngle: "0 degrees", TwistAngle: "30 degrees (left)", LensType: "Normal", VerticalLensAngle: "50 degrees", HorizontalLensAngle: "50 degrees"},
  {ID: 10, Name: "Dutch Angle 2", CameraPosition: "Eye Level", HeightFromGround: "5-6 feet", TiltAngle: "0 degrees", TwistAngle: "30 degrees (right)", LensType: "Normal", VerticalLensAngle: "50 degrees", HorizontalLensAngle: "50 degrees"},
  { ID: 11, Name: "Panoramic Shot", CameraPosition: "Eye Level", HeightFromGround: "5-6 feet", TiltAngle: "0 degrees", TwistAngle: "0 degrees", LensType: "Wide Angle", VerticalLensAngle: "70 degrees", HorizontalLensAngle: "120 degrees" },
  { ID: 12, Name: "Two-Shot", CameraPosition: "Eye Level", HeightFromGround: "5-6 feet", TiltAngle: "0 degrees", TwistAngle: "0 degrees", LensType: "Normal", VerticalLensAngle: "50 degrees", HorizontalLensAngle: "50 degrees" },
  { ID: 13, Name: "Dolly Shot", CameraPosition: "Eye Level", HeightFromGround: "5-6 feet", TiltAngle: "0 degrees", TwistAngle: "0 degrees", LensType: "Normal", VerticalLensAngle: "50 degrees", HorizontalLensAngle: "50 degrees" },
  { ID: 14, Name: "Overhead", CameraPosition: "Directly Above", HeightFromGround: "6-8 feet", TiltAngle: "90 degrees (down)", TwistAngle: "0 degrees", LensType: "Normal", VerticalLensAngle: "50 degrees", HorizontalLensAngle: "50 degrees" },
  { ID: 15, Name: "Side View", CameraPosition: "Eye Level", HeightFromGround: "5-6 feet", TiltAngle: "0 degrees", TwistAngle: "0 degrees", LensType: "Normal", VerticalLensAngle: "50 degrees", HorizontalLensAngle: "50 degrees" },
  { ID: 16, Name: "Diagonal Angle", CameraPosition: "Eye Level", HeightFromGround: "5-6 feet", TiltAngle: "15 degrees (up)", TwistAngle: "0 degrees", LensType: "Normal", VerticalLensAngle: "50 degrees", HorizontalLensAngle: "50 degrees" },
  { ID: 17, Name: "Reverse Angle", CameraPosition: "Eye Level", HeightFromGround: "5-6 feet", TiltAngle: "0 degrees", TwistAngle: "180 degrees", LensType: "Normal", VerticalLensAngle: "50 degrees", HorizontalLensAngle: "50 degrees" },
  { ID: 18, Name: "Low Angle Dutch 1", CameraPosition: "Low Angle", HeightFromGround: "2-3 feet", TiltAngle: "30 degrees (up)", TwistAngle: "30 degrees (left)", LensType: "Wide Angle", VerticalLensAngle: "70 degrees", HorizontalLensAngle: "90 degrees" },
  { ID: 19, Name: "Low Angle Dutch 2", CameraPosition: "Low Angle", HeightFromGround: "2-3 feet", TiltAngle: "30 degrees (up)", TwistAngle: "30 degrees (right)", LensType: "Wide Angle", VerticalLensAngle: "70 degrees", HorizontalLensAngle: "90 degrees" },
  { ID: 20, Name: "High Angle Dutch 1", CameraPosition: "High Angle", HeightFromGround: "8-10 feet", TiltAngle: "30 degrees (down)", TwistAngle: "30 degrees (left)", LensType: "Telephoto", VerticalLensAngle: "30 degrees", HorizontalLensAngle: "50 degrees" }
];

  const outputTextField = document.getElementById("outputText");
const inputTextField = document.getElementById("inputText");
const categorySelect = document.getElementById("category");
const subCategorySelect = document.getElementById("sub-category");
const artStyleSelect = document.getElementById("art-style");
const outputTextArea = document.getElementById("output-text");
const cameraStyleField = document.getElementById("camera-style");

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

function populateCameraStyles() {
  cameraStyleField.innerHTML = `<option value="">Select a camera style</option>`;
  // Loop through the camera styles and create an option for each one
  tbl_CameraStyle.forEach(style => {
    cameraStyleField.innerHTML += `<option value="${style.ID}">${style.Name}</option>`;
  });
}


function populateCategories() {
  const categories = removeDuplicates(tbl_Style.map(style => style.Category));
  categorySelect.innerHTML = `<option value="">Select a category</option>`;
  categories.forEach(category => {
    categorySelect.innerHTML += `<option value="${category}">${category}</option>`;
  });
}

function populateSubCategories() {
  const selectedCategory = categorySelect.value;
  const subCategories = removeDuplicates(tbl_Style.filter(style => style.Category === selectedCategory).map(style => style["Sub-Category"]));
  subCategorySelect.innerHTML = `<option value="">Select a sub-category</option>`;
  subCategories.forEach(subCategory => {
    subCategorySelect.innerHTML += `<option value="${subCategory}">${subCategory}</option>`;
  });
  artStyleSelect.innerHTML = `<option value="">Select an art style</option>`;
  artStyleSelect.disabled = true;
}

function populateArtStyles() {
  const selectedCategory = categorySelect.value;
  const selectedSubCategory = subCategorySelect.value;
  const artStyles = removeDuplicates(tbl_Style.filter(style => style.Category === selectedCategory && style["Sub-Category"] === selectedSubCategory).map(style => style["Art Style"]));
  
  artStyleSelect.innerHTML = `<option value="">Select an art style</option>`;
  artStyles.forEach(artStyle => {
    artStyleSelect.innerHTML += `<option value="${artStyle}">${artStyle}</option>`;
  });
  artStyleSelect.disabled = false;
}

function updateOutputText() {
  const outputTextField = document.getElementById('output-text');
  const selectedStyleId = document.getElementById('camera-style').value;
 let selectedStyle = tbl_CameraStyle.find(style => style.ID === parseInt(selectedStyleId));

  if (!selectedStyle) {
    // Set default style if no style is selected
    selectedStyle = tbl_CameraStyle[0];
  }
//  console.log(selectedStyle)
  const inputText = document.getElementById('inputText').value;
  
 // const category = document.getElementById('category').value;
  const subCategory = document.getElementById('sub-category').value;
  const artStyle = document.getElementById('art-style').value;
  
  //removed ${selectedStyle.LensType} lens
  //Image details: ${selectedStyle.Name} , ${selectedStyle.CameraPosition}
  let outputText = `/imagine ${inputText}. style of ${artStyle}. --v 5`;

  outputTextField.value = outputText;
}

// Add event listener to the copy button
const copyBtn = document.getElementById('copy-btn');
copyBtn.addEventListener('click', copyOutputText);

// Function to copy the output text to clipboard
function copyOutputText() {
  // Get the output text element
  const outputTextField = document.getElementById('output-text');
  
  // Select the text in the output text element
  outputTextField.select();
  outputTextField.setSelectionRange(0, 99999); // For mobile devices
  
  // Copy the text to clipboard
  document.execCommand('copy');
  
  // Deselect the text
  window.getSelection().removeAllRanges();
  
  // Alert the user that the text has been copied
  alert('Output text has been copied to the clipboard!');
}


categorySelect.addEventListener("change", () => {
  populateSubCategories();
  updateOutputText();
});
subCategorySelect.addEventListener("change", () => {
  populateArtStyles();
  updateOutputText();
});
artStyleSelect.addEventListener("change", () => {
  updateOutputText();
});
inputTextField.addEventListener("input", () => {
  updateOutputText();
});
cameraStyleField.addEventListener("change", () => {
  updateOutputText();
})


populateCategories();
populateCameraStyles();







$(document).ready(function () {
  // Handle the image upload
  $("#upload-form").on("submit", function (e) {
    e.preventDefault();
    var file = $("#file-input")[0].files[0];
    if (file) {
      uploadImage(file);
    }
  });
});

function uploadImage(file) {
  // Upload the image to Imgur
  // You'll need an Imgur API Client ID
  var clientId = "YOUR_IMGUR_CLIENT_ID";

  var formData = new FormData();
  formData.append("image", file);

  $.ajax({
    url: "https://api.imgur.com/3/image",
    type: "POST",
    headers: {
      Authorization: "Client-ID " + clientId,
    },
    data: formData,
    processData: false,
    contentType: false,
    success: function (response) {
      var imageUrl = response.data.link;
      $("#preview-img").attr("src", imageUrl).show();
      generateTattooConcept(imageUrl);
    },
    error: function (response) {
      console.error("Error uploading image:", response);
    },
  });
}

function generateTattooConcept(imageUrl) {
  // Call the AI image generator (e.g., Midjourney) with the Imgur URL
  // You'll need to replace this with your API call to the AI image
  // generator of your choice, such as DALL-E or similar

  // Simulate the AI image generation process for demonstration purposes
  setTimeout(function () {
    // Replace this with the actual AI-generated image URL
    var generatedImageUrl = imageUrl + "?generated=true";
    $("#result-img").attr("src", generatedImageUrl).show();
  }, 3000);
}
