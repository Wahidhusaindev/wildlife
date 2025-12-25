const navLink = [
  { id: 2, title: "Wildlife", link: "/" },
  { id: 3, title: "Join Team", link: "/join-us" },
  { id: 4, title: "Contact Us", link: "/contact" },
  { id: 5, title: "Program", link: "/program" },
  { id: 6, title: "Blog", link: "/blog" },
];

export default  navLink;

const animalsData = [
  { id: 1, name: "African Elephant", species: "Loxodonta africana", habitat: "Savanna", diet: "Herbivore", conservationStatus: "Vulnerable", lifespanYears: 60, weightKg: 6000, heightCm: 300, speedKmh: 40 },
  { id: 2, name: "Bengal Tiger", species: "Panthera tigris tigris", habitat: "Forest", diet: "Carnivore", conservationStatus: "Endangered", lifespanYears: 15, weightKg: 220, heightCm: 90, speedKmh: 65 },
  { id: 3, name: "Gray Wolf", species: "Canis lupus", habitat: "Forest/Grassland", diet: "Carnivore", conservationStatus: "Least Concern", lifespanYears: 10, weightKg: 45, heightCm: 80, speedKmh: 55 },
  { id: 4, name: "Polar Bear", species: "Ursus maritimus", habitat: "Arctic", diet: "Carnivore", conservationStatus: "Vulnerable", lifespanYears: 25, weightKg: 450, heightCm: 250, speedKmh: 40 },
  { id: 5, name: "African Lion", species: "Panthera leo", habitat: "Savanna", diet: "Carnivore", conservationStatus: "Vulnerable", lifespanYears: 12, weightKg: 190, heightCm: 120, speedKmh: 80 },
  { id: 6, name: "Red Fox", species: "Vulpes vulpes", habitat: "Forest/Grassland", diet: "Omnivore", conservationStatus: "Least Concern", lifespanYears: 3, weightKg: 6, heightCm: 50, speedKmh: 40 },
  { id: 7, name: "Giraffe", species: "Giraffa camelopardalis", habitat: "Savanna", diet: "Herbivore", conservationStatus: "Least Concern", lifespanYears: 25, weightKg: 800, heightCm: 500, speedKmh: 55 },
  { id: 8, name: "Cheetah", species: "Acinonyx jubatus", habitat: "Grassland", diet: "Carnivore", conservationStatus: "Vulnerable", lifespanYears: 10, weightKg: 65, heightCm: 80, speedKmh: 120 },
  { id: 9, name: "American Bison", species: "Bison bison", habitat: "Grassland", diet: "Herbivore", conservationStatus: "Near Threatened", lifespanYears: 20, weightKg: 900, heightCm: 180, speedKmh: 55 },
  { id: 10, name: "Snow Leopard", species: "Panthera uncia", habitat: "Mountain/Forest", diet: "Carnivore", conservationStatus: "Vulnerable", lifespanYears: 15, weightKg: 50, heightCm: 70, speedKmh: 60 },

  { id: 11, name: "Koala", species: "Phascolarctos cinereus", habitat: "Eucalyptus Forest", diet: "Herbivore", conservationStatus: "Vulnerable", lifespanYears: 10, weightKg: 15, heightCm: 60, speedKmh: 30 },
  { id: 12, name: "Komodo Dragon", species: "Varanus komodoensis", habitat: "Savanna/Forest", diet: "Carnivore", conservationStatus: "Endangered", lifespanYears: 30, weightKg: 90, heightCm: 200, speedKmh: 20 },
  { id: 13, name: "Eastern Gorilla", species: "Gorilla beringei", habitat: "Forest", diet: "Omnivore", conservationStatus: "Endangered", lifespanYears: 35, weightKg: 180, heightCm: 170, speedKmh: 40 },
  { id: 14, name: "Whale Shark", species: "Rhincodon typus", habitat: "Ocean", diet: "Filter feeder", conservationStatus: "Vulnerable", lifespanYears: 70, weightKg: 1500, heightCm: 400, speedKmh: 8 },
  { id: 15, name: "Gray Kangaroo", species: "Macropus giganteus", habitat: "Grassland/Forest", diet: "Herbivore", conservationStatus: "Least Concern", lifespanYears: 20, weightKg: 80, heightCm: 160, speedKmh: 50 },

  { id: 16, name: "Orca", species: "Orcinus orca", habitat: "Ocean", diet: "Carnivore", conservationStatus: "Vulnerable", lifespanYears: 50, weightKg: 900, heightCm: 250, speedKmh: 56 },
  { id: 17, name: "Sloth", species: "Bradypus variegatus", habitat: "Rainforest", diet: "Herbivore", conservationStatus: "Least Concern", lifespanYears: 30, weightKg: 6, heightCm: 50, speedKmh: 0.03 },
  { id: 18, name: "Red Panda", species: "Ailurus fulgens", habitat: "Forest", diet: "Herbivore", conservationStatus: "Endangered", lifespanYears: 8, weightKg: 4, heightCm: 60, speedKmh: 40 },
  { id: 19, name: "Sea Turtle", species: "Chelonia mydas", habitat: "Ocean", diet: "Herbivore", conservationStatus: "Endangered", lifespanYears: 50, weightKg: 250, heightCm: 100, speedKmh: 35 },
  { id: 20, name: "Rhinoceros", species: "Ceratotherium simum", habitat: "Savanna/Grassland", diet: "Herbivore", conservationStatus: "Near Threatened", lifespanYears: 40, weightKg: 2300, heightCm: 160, speedKmh: 40 },
  { id: 21, name: "Mountain Lion", species: "Puma concolor", habitat: "Forest/Mountains", diet: "Carnivore", conservationStatus: "Least Concern", lifespanYears: 12, weightKg: 60, heightCm: 75, speedKmh: 80 },
  { id: 22, name: "Meerkat", species: "Suricata suricatta", habitat: "Desert/Grassland", diet: "Omnivore", conservationStatus: "Least Concern", lifespanYears: 6, weightKg: 1, heightCm: 30, speedKmh: 30 },
  { id: 23, name: "Hippopotamus", species: "Hippopotamus amphibius", habitat: "Riverbanks", diet: "Herbivore", conservationStatus: "Vulnerable", lifespanYears: 40, weightKg: 3000, heightCm: 150, speedKmh: 30 },
  { id: 24, name: "Giant Panda", species: "Ailuropoda melanoleuca", habitat: "Bamboo Forest", diet: "Herbivore", conservationStatus: "Endangered", lifespanYears: 30, weightKg: 100, heightCm: 150, speedKmh: 30 },
  { id: 25, name: "Zebra", species: "Equus quagga", habitat: "Savanna/Grassland", diet: "Herbivore", conservationStatus: "Least Concern", lifespanYears: 25, weightKg: 300, heightCm: 140, speedKmh: 65 },

  { id: 26, name: "Kangaroo Rat", species: "Dipodomys spectabilis", habitat: "Desert", diet: "Herbivore", conservationStatus: "Least Concern", lifespanYears: 3, weightKg: 0.1, heightCm: 20, speedKmh: 25 },
  { id: 27, name: "Black Bear", species: "Ursus americanus", habitat: "Forest/Swamp", diet: "Omnivore", conservationStatus: "Least Concern", lifespanYears: 20, weightKg: 180, heightCm: 90, speedKmh: 40 },
  { id: 28, name: "Red-Eyed Tree Frog", species: "Agalychnis callidryas", habitat: "Rainforest", diet: "Carnivore", conservationStatus: "Least Concern", lifespanYears: 5, weightKg: 0.05, heightCm: 10, speedKmh: 0.5 },
  { id: 29, name: "Grey Parrot", species: "Psittacus erithacus", habitat: "Rainforest", diet: "Omnivore", conservationStatus: "Least Concern", lifespanYears: 60, weightKg: 0.5, heightCm: 35, speedKmh: 15 },
  { id: 30, name: "Gibbon", species: "Hylobates lar", habitat: "Rainforest", diet: "Omnivore", conservationStatus: "Endangered", lifespanYears: 30, weightKg: 7, heightCm: 60, speedKmh: 35 },

  { id: 31, name: "Blue Whale", species: "Balaenoptera musculus", habitat: "Ocean", diet: "Carnivore", conservationStatus: "Endangered", lifespanYears: 90, weightKg: 150000, heightCm: 250, speedKmh: 50 },
  { id: 32, name: "Lynx", species: "Lynx lynx", habitat: "Forest/Mountains", diet: "Carnivore", conservationStatus: "Least Concern", lifespanYears: 14, weightKg: 20, heightCm: 70, speedKmh: 60 },
  { id: 33, name: "Snowy Owl", species: "Bubo scandiacus", habitat: "Arctic/Tundra", diet: "Carnivore", conservationStatus: "Least Concern", lifespanYears: 10, weightKg: 2, heightCm: 60, speedKmh: 80 },
  { id: 34, name: "Warthog", species: "Phacochoerus africanus", habitat: "Savanna", diet: "Omnivore", conservationStatus: "Least Concern", lifespanYears: 15, weightKg: 100, heightCm: 80, speedKmh: 40 },
  { id: 35, name: "Binturong", species: "Arctictis binturong", habitat: "Rainforest", diet: "Omnivore", conservationStatus: "Vulnerable", lifespanYears: 20, weightKg: 30, heightCm: 70, speedKmh: 20 },

  { id: 36, name: "Tasmanian Devil", species: "Sarcophilus harrisii", habitat: "Forest", diet: "Carnivore", conservationStatus: "Endangered", lifespanYears: 5, weightKg: 8, heightCm: 30, speedKmh: 16 },
  { id: 37, name: "Puffin", species: "Fratercula arctica", habitat: "Coastal", diet: "Carnivore", conservationStatus: "Vulnerable", lifespanYears: 20, weightKg: 0.5, heightCm: 30, speedKmh: 40 },
  { id: 38, name: "Hippo", species: "Hippopotamus amphibius", habitat: "Riverbank", diet: "Herbivore", conservationStatus: "Vulnerable", lifespanYears: 40, weightKg: 3000, heightCm: 150, speedKmh: 30 },
  { id: 39, name: "Fennec Fox", species: "Vulpes zerda", habitat: "Desert", diet: "Omnivore", conservationStatus: "Least Concern", lifespanYears: 10, weightKg: 1.5, heightCm: 30, speedKmh: 50 },
  { id: 40, name: "Platypus", species: "Ornithorhynchus anatinus", habitat: "Freshwater", diet: "Carnivore", conservationStatus: "Near Threatened", lifespanYears: 10, weightKg: 2, heightCm: 30, speedKmh: 20 },

  // … DATA CONTINUES CLEANLY …

  { id: 41, name: "Coyote", species: "Canis latrans", habitat: "Desert/Grassland", diet: "Carnivore", conservationStatus: "Least Concern", lifespanYears: 10, weightKg: 20, heightCm: 60, speedKmh: 65 },
  { id: 42, name: "Snow Leopard", species: "Panthera uncia", habitat: "Mountain/Forest", diet: "Carnivore", conservationStatus: "Vulnerable", lifespanYears: 15, weightKg: 40, heightCm: 60, speedKmh: 60 },
  { id: 43, name: "Crocodile", species: "Crocodylus acutus", habitat: "Wetlands", diet: "Carnivore", conservationStatus: "Vulnerable", lifespanYears: 70, weightKg: 1000, heightCm: 300, speedKmh: 20 },
  { id: 44, name: "Red Fox", species: "Vulpes vulpes", habitat: "Forest/Grassland", diet: "Omnivore", conservationStatus: "Least Concern", lifespanYears: 6, weightKg: 7, heightCm: 50, speedKmh: 50 },
  { id: 45, name: "Panda", species: "Ailuropoda melanoleuca", habitat: "Bamboo Forest", diet: "Herbivore", conservationStatus: "Endangered", lifespanYears: 30, weightKg: 100, heightCm: 160, speedKmh: 25 },

  { id: 46, name: "Rhinoceros", species: "Ceratotherium simum", habitat: "Savanna/Grassland", diet: "Herbivore", conservationStatus: "Near Threatened", lifespanYears: 40, weightKg: 2300, heightCm: 160, speedKmh: 40 },
  { id: 47, name: "Orangutan", species: "Pongo pygmaeus", habitat: "Rainforest", diet: "Omnivore", conservationStatus: "Critically Endangered", lifespanYears: 45, weightKg: 75, heightCm: 100, speedKmh: 40 },
  { id: 48, name: "Wildebeest", species: "Connochaetes taurinus", habitat: "Savanna", diet: "Herbivore", conservationStatus: "Least Concern", lifespanYears: 20, weightKg: 250, heightCm: 120, speedKmh: 60 },
  { id: 49, name: "Sumatran Tiger", species: "Panthera tigris sumatrae", habitat: "Forest", diet: "Carnivore", conservationStatus: "Critically Endangered", lifespanYears: 12, weightKg: 100, heightCm: 90, speedKmh: 50 },
  { id: 50, name: "African Wild Dog", species: "Lycaon pictus", habitat: "Savannah/Forest", diet: "Carnivore", conservationStatus: "Endangered", lifespanYears: 10, weightKg: 25, heightCm: 70, speedKmh: 60 },
    { id: 51, name: "Sloth Bear", species: "Melursus ursinus", habitat: "Forest", diet: "Omnivore", conservationStatus: "Vulnerable", lifespanYears: 30, weightKg: 80, heightCm: 90, speedKmh: 20 },
  { id: 52, name: "Great White Shark", species: "Carcharodon carcharias", habitat: "Ocean", diet: "Carnivore", conservationStatus: "Vulnerable", lifespanYears: 70, weightKg: 1100, heightCm: 400, speedKmh: 60 },
  { id: 53, name: "Arctic Fox", species: "Vulpes lagopus", habitat: "Arctic", diet: "Omnivore", conservationStatus: "Least Concern", lifespanYears: 7, weightKg: 3, heightCm: 40, speedKmh: 50 },
  { id: 54, name: "Peregrine Falcon", species: "Falco peregrinus", habitat: "Forest/Mountains", diet: "Carnivore", conservationStatus: "Least Concern", lifespanYears: 15, weightKg: 1, heightCm: 45, speedKmh: 300 },
  { id: 55, name: "Galápagos Tortoise", species: "Chelonoidis nigra", habitat: "Island", diet: "Herbivore", conservationStatus: "Vulnerable", lifespanYears: 100, weightKg: 250, heightCm: 120, speedKmh: 0.25 },

  { id: 56, name: "African Wild Cat", species: "Felis lybica", habitat: "Savanna/Grassland", diet: "Carnivore", conservationStatus: "Least Concern", lifespanYears: 15, weightKg: 3, heightCm: 45, speedKmh: 60 },
  { id: 57, name: "Bat", species: "Chiroptera spp.", habitat: "Caves/Forest", diet: "Insectivore", conservationStatus: "Least Concern", lifespanYears: 5, weightKg: 0.1, heightCm: 15, speedKmh: 40 },
  { id: 58, name: "Pygmy Hippo", species: "Choeropsis liberiensis", habitat: "Forest", diet: "Herbivore", conservationStatus: "Endangered", lifespanYears: 30, weightKg: 275, heightCm: 80, speedKmh: 8 },
  { id: 59, name: "Mountain Goat", species: "Oreamnos americanus", habitat: "Mountains", diet: "Herbivore", conservationStatus: "Least Concern", lifespanYears: 20, weightKg: 60, heightCm: 90, speedKmh: 50 },
  { id: 60, name: "American Alligator", species: "Alligator mississippiensis", habitat: "Wetlands", diet: "Carnivore", conservationStatus: "Least Concern", lifespanYears: 35, weightKg: 450, heightCm: 400, speedKmh: 32 },

  { id: 61, name: "Impala", species: "Aepyceros melampus", habitat: "Savanna/Grassland", diet: "Herbivore", conservationStatus: "Least Concern", lifespanYears: 12, weightKg: 50, heightCm: 90, speedKmh: 60 },
  { id: 62, name: "Cheetah", species: "Acinonyx jubatus", habitat: "Grassland", diet: "Carnivore", conservationStatus: "Vulnerable", lifespanYears: 10, weightKg: 70, heightCm: 80, speedKmh: 120 },
  { id: 63, name: "Dugong", species: "Dugong dugon", habitat: "Ocean", diet: "Herbivore", conservationStatus: "Vulnerable", lifespanYears: 70, weightKg: 400, heightCm: 250, speedKmh: 10 },
  { id: 64, name: "Harpy Eagle", species: "Harpia harpyja", habitat: "Rainforest", diet: "Carnivore", conservationStatus: "Vulnerable", lifespanYears: 35, weightKg: 9, heightCm: 100, speedKmh: 80 },
  { id: 65, name: "Meerkat", species: "Suricata suricatta", habitat: "Desert/Grassland", diet: "Omnivore", conservationStatus: "Least Concern", lifespanYears: 5, weightKg: 1, heightCm: 25, speedKmh: 30 },

  { id: 66, name: "Golden Eagle", species: "Aquila chrysaetos", habitat: "Mountains/Forest", diet: "Carnivore", conservationStatus: "Least Concern", lifespanYears: 30, weightKg: 6, heightCm: 75, speedKmh: 200 },
  { id: 67, name: "Walrus", species: "Odobenus rosmarus", habitat: "Arctic/Coastal", diet: "Omnivore", conservationStatus: "Vulnerable", lifespanYears: 40, weightKg: 800, heightCm: 150, speedKmh: 35 },
  { id: 68, name: "Grizzly Bear", species: "Ursus arctos horribilis", habitat: "Forest", diet: "Omnivore", conservationStatus: "Least Concern", lifespanYears: 30, weightKg: 500, heightCm: 200, speedKmh: 35 },
  { id: 69, name: "Poison Dart Frog", species: "Dendrobatoidea spp.", habitat: "Rainforest", diet: "Insectivore", conservationStatus: "Least Concern", lifespanYears: 5, weightKg: 0.02, heightCm: 5, speedKmh: 0.5 },
  { id: 70, name: "Snow Leopard", species: "Panthera uncia", habitat: "Mountain/Forest", diet: "Carnivore", conservationStatus: "Vulnerable", lifespanYears: 12, weightKg: 50, heightCm: 60, speedKmh: 55 },

  { id: 71, name: "Brown Bear", species: "Ursus arctos", habitat: "Forest/Swamp", diet: "Omnivore", conservationStatus: "Least Concern", lifespanYears: 35, weightKg: 300, heightCm: 100, speedKmh: 40 },
  { id: 72, name: "Clouded Leopard", species: "Neofelis nebulosa", habitat: "Rainforest", diet: "Carnivore", conservationStatus: "Vulnerable", lifespanYears: 15, weightKg: 25, heightCm: 60, speedKmh: 60 },
  { id: 73, name: "African Buffalo", species: "Syncerus caffer", habitat: "Savanna/Grassland", diet: "Herbivore", conservationStatus: "Least Concern", lifespanYears: 20, weightKg: 800, heightCm: 130, speedKmh: 50 },
  { id: 74, name: "Indian Star Tortoise", species: "Geochelone elegans", habitat: "Dry Forest", diet: "Herbivore", conservationStatus: "Vulnerable", lifespanYears: 80, weightKg: 5, heightCm: 30, speedKmh: 0.5 },
  { id: 75, name: "Zebra", species: "Equus zebra", habitat: "Grassland", diet: "Herbivore", conservationStatus: "Least Concern", lifespanYears: 25, weightKg: 350, heightCm: 120, speedKmh: 55 },

  { id: 76, name: "Coyote", species: "Canis latrans", habitat: "Desert/Grassland", diet: "Carnivore", conservationStatus: "Least Concern", lifespanYears: 10, weightKg: 15, heightCm: 60, speedKmh: 65 },
  { id: 77, name: "Ocelot", species: "Leopardus pardalis", habitat: "Forest/Grassland", diet: "Carnivore", conservationStatus: "Least Concern", lifespanYears: 10, weightKg: 9, heightCm: 45, speedKmh: 50 },
  { id: 78, name: "Peregrine Falcon", species: "Falco peregrinus", habitat: "Forest/Mountains", diet: "Carnivore", conservationStatus: "Least Concern", lifespanYears: 15, weightKg: 1, heightCm: 45, speedKmh: 300 },
  { id: 79, name: "Bonobo", species: "Pan paniscus", habitat: "Forest", diet: "Omnivore", conservationStatus: "Endangered", lifespanYears: 30, weightKg: 40, heightCm: 100, speedKmh: 40 },
  { id: 80, name: "Okapi", species: "Okapia johnstoni", habitat: "Rainforest", diet: "Herbivore", conservationStatus: "Endangered", lifespanYears: 30, weightKg: 250, heightCm: 150, speedKmh: 35 },

  { id: 81, name: "Green Sea Turtle", species: "Chelonia mydas", habitat: "Ocean", diet: "Herbivore", conservationStatus: "Endangered", lifespanYears: 50, weightKg: 250, heightCm: 100, speedKmh: 35 },
  { id: 82, name: "Antelope", species: "Antilopinae spp.", habitat: "Grassland", diet: "Herbivore", conservationStatus: "Least Concern", lifespanYears: 10, weightKg: 60, heightCm: 90, speedKmh: 60 },
  { id: 83, name: "Brown Hyena", species: "Parahyaena brunnea", habitat: "Savanna/Desert", diet: "Carnivore", conservationStatus: "Near Threatened", lifespanYears: 20, weightKg: 70, heightCm: 80, speedKmh: 50 },
  { id: 84, name: "Asian Elephant", species: "Elephas maximus", habitat: "Forest/Savanna", diet: "Herbivore", conservationStatus: "Endangered", lifespanYears: 60, weightKg: 4500, heightCm: 300, speedKmh: 40 },
  { id: 85, name: "Eland", species: "Taurotragus oryx", habitat: "Savanna/Grassland", diet: "Herbivore", conservationStatus: "Least Concern", lifespanYears: 15, weightKg: 600, heightCm: 160, speedKmh: 40 },

  { id: 86, name: "Spotted Hyena", species: "Crocuta crocuta", habitat: "Savanna/Grassland", diet: "Carnivore", conservationStatus: "Least Concern", lifespanYears: 25, weightKg: 70, heightCm: 90, speedKmh: 60 },
  { id: 87, name: "Lesser Panda", species: "Ailurus fulgens", habitat: "Forest", diet: "Herbivore", conservationStatus: "Endangered", lifespanYears: 8, weightKg: 4, heightCm: 60, speedKmh: 40 },
  { id: 88, name: "Polar Bear", species: "Ursus maritimus", habitat: "Arctic", diet: "Carnivore", conservationStatus: "Vulnerable", lifespanYears: 25, weightKg: 450, heightCm: 250, speedKmh: 40 },
  { id: 89, name: "Gibbon", species: "Hylobates lar", habitat: "Rainforest", diet: "Omnivore", conservationStatus: "Endangered", lifespanYears: 30, weightKg: 7, heightCm: 60, speedKmh: 35 },
  { id: 90, name: "Bison", species: "Bison bison", habitat: "Grassland", diet: "Herbivore", conservationStatus: "Near Threatened", lifespanYears: 20, weightKg: 900, heightCm: 180, speedKmh: 55 },

  { id: 91, name: "Great White Shark", species: "Carcharodon carcharias", habitat: "Ocean", diet: "Carnivore", conservationStatus: "Vulnerable", lifespanYears: 70, weightKg: 1100, heightCm: 400, speedKmh: 60 },
  { id: 92, name: "Wild Boar", species: "Sus scrofa", habitat: "Forest/Grassland", diet: "Omnivore", conservationStatus: "Least Concern", lifespanYears: 15, weightKg: 100, heightCm: 90, speedKmh: 48 },
  { id: 93, name: "Bearded Vulture", species: "Gypaetus barbatus", habitat: "Mountains/Cliffs", diet: "Carnivore", conservationStatus: "Near Threatened", lifespanYears: 20, weightKg: 7, heightCm: 70, speedKmh: 60 },
  { id: 94, name: "African Wild Dog", species: "Lycaon pictus", habitat: "Savanna/Forest", diet: "Carnivore", conservationStatus: "Endangered", lifespanYears: 10, weightKg: 25, heightCm: 70, speedKmh: 60 },
  { id: 95, name: "Pangolin", species: "Manis spp.", habitat: "Forest/Grassland", diet: "Insectivore", conservationStatus: "Vulnerable", lifespanYears: 20, weightKg: 10, heightCm: 50, speedKmh: 10 },

  { id: 96, name: "Kakapo", species: "Strigops habroptilus", habitat: "Island", diet: "Herbivore", conservationStatus: "Critically Endangered", lifespanYears: 90, weightKg: 2, heightCm: 60, speedKmh: 10 },
  { id: 97, name: "Bison", species: "Bison bison", habitat: "Grassland", diet: "Herbivore", conservationStatus: "Near Threatened", lifespanYears: 20, weightKg: 900, heightCm: 180, speedKmh: 55 },
  { id: 98, name: "Dingo", species: "Canis lupus dingo", habitat: "Desert/Grassland", diet: "Carnivore", conservationStatus: "Least Concern", lifespanYears: 5, weightKg: 15, heightCm: 60, speedKmh: 60 },
  { id: 99, name: "American Alligator", species: "Alligator mississippiensis", habitat: "Wetlands", diet: "Carnivore", conservationStatus: "Least Concern", lifespanYears: 35, weightKg: 450, heightCm: 400, speedKmh: 32 },
  { id: 100, name: "Bengal Tiger", species: "Panthera tigris tigris", habitat: "Forest", diet: "Carnivore", conservationStatus: "Endangered", lifespanYears: 15, weightKg: 220, heightCm: 90, speedKmh: 65 }
];

export {animalsData };