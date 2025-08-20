import { QuizData } from '../types';

export const quizzes: QuizData[] = [
  {
    id: 'uk-knowledge',
    subject: 'Conocimientos sobre el Reino Unido',
    questions: [
      {
        question: '¿Qué edificio es este?',
        options: [
          "Las Casas del Parlamento",
          "El Palacio de Buckingham",
          "El Museo Británico",
          "The Shard"
        ],
        correctAnswerIndex: 0,
        image: "https://images.unsplash.com/photo-1610026378085-15d0e8f685db?q=80&w=500&auto=webp",
        explanation: "Este es el edificio de las Casas del Parlamento (también conocido como el Palacio de Westminster) en Londres, donde se reúne el Parlamento del Reino Unido."
      },
      {
        question: "¿Qué santo patrón se asocia con Inglaterra?",
        options: ["San Patricio", "San Jorge", "San Andrés", "San David"],
        correctAnswerIndex: 1,
        image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Bernat_Martorell_-_Saint_George_Killing_the_Dragon_-_Google_Art_Project.jpg",
        explanation: "San Jorge es el santo patrón de Inglaterra. San Patricio es de Irlanda, San Andrés de Escocia y San David de Gales."
      },
      {
        question: '¿Qué país NO forma parte del Reino Unido?',
        options: [
          "Inglaterra",
          "Escocia",
          "Gales",
          "La República de Irlanda"
        ],
        correctAnswerIndex: 3,
        explanation: "La República de Irlanda es un país independiente y no forma parte del Reino Unido."
      },
      {
        question: "¿Cuál es el nombre actual de la famosa torre del reloj en Londres?",
        options: ["Big Ben", "Clock Tower", "Elizabeth Tower", "Westminster Tower"],
        correctAnswerIndex: 2,
        image: "https://images.unsplash.com/photo-1483972117325-ce4920ff780b?q=80&w=500&auto=webp",
        explanation: "La torre se llama oficialmente Elizabeth Tower; 'Big Ben' es el apodo de su campana."
      },
      {
        question: "¿Cuál de los siguientes es un Territorio Británico de Ultramar?",
        options: ["Groenlandia", "Bermudas", "Fiyi", "Islandia"],
        correctAnswerIndex: 1,
        explanation: "Bermudas es un Territorio Británico de Ultramar situado en el océano Atlántico Norte. Groenlandia pertenece a Dinamarca, Fiyi es independiente e Islandia también es independiente."
      },
      {
        question: "¿Qué famoso científico inglés es conocido por descubrir la penicilina?",
        options: ["Isaac Newton", "Alexander Fleming", "Charles Darwin", "Michael Faraday"],
        correctAnswerIndex: 1,
        explanation: "Alexander Fleming descubrió la penicilina en 1928, revolucionando la medicina."
      },
      {
        question: "¿Cuál es la capital del Reino Unido?",
        options: ["Londres", "Edimburgo", "Mánchester", "Birmingham"],
        correctAnswerIndex: 0,
        explanation: "Londres es la capital y la ciudad más grande del Reino Unido."
      }
    ]
  },
  {
    id: 'general-knowledge',
    subject: "Cultura General",
    questions: [
      {
        question: "¿Cuál es el río más largo del mundo?",
        options: ["Nilo", "Amazonas", "Yangtsé", "Misisipi"],
        correctAnswerIndex: 1,
        explanation: "El Amazonas es el río más largo y caudaloso del mundo, aunque algunos estudios mencionan al Nilo como competidor."
      },
      {
        question: "¿Quién pintó 'La Última Cena'?",
        options: ["Miguel Ángel", "Leonardo da Vinci", "Rafael", "Caravaggio"],
        correctAnswerIndex: 1,
        image: "https://images.unsplash.com/photo-1705604087658-bc5b155e76ce?q=80&w=500&auto=webp",
        explanation: "'La Última Cena' es una obra maestra de Leonardo da Vinci, pintada entre 1495 y 1498."
      },
      {
        question: "¿Cuál es el país más grande del mundo por superficie?",
        options: ["Canadá", "China", "Rusia", "Estados Unidos"],
        correctAnswerIndex: 2,
        explanation: "Rusia es el país más grande del mundo, con más de 17 millones de km²."
      },
      {
        question: "¿En qué año cayó el Muro de Berlín?",
        options: ["1987", "1989", "1991", "1993"],
        correctAnswerIndex: 1,
        image: "https://images.unsplash.com/photo-1642764984363-a1d85a10b834?q=80&w=500&auto=webp",
        explanation: "El Muro de Berlín cayó en 1989, marcando el fin de la división de Alemania."
      },
      {
        question: "¿Quién escribió 'Cien años de soledad'?",
        options: ["Mario Vargas Llosa", "Gabriel García Márquez", "Pablo Neruda", "Jorge Luis Borges"],
        correctAnswerIndex: 1,
        explanation: "Gabriel García Márquez es el autor colombiano de 'Cien años de soledad', publicado en 1967."
      },
      {
        question: "¿Cuál es el elemento químico con símbolo 'O'?",
        options: ["Oro", "Osmio", "Oxígeno", "Oxalato"],
        correctAnswerIndex: 2,
        explanation: "El oxígeno tiene el símbolo químico 'O'."
      },
      {
        question: "¿Cuál es la capital de Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        correctAnswerIndex: 2,
        explanation: "Canberra es la capital de Australia, aunque Sydney y Melbourne son más conocidas internacionalmente."
      },
      {
        question: "¿Quién pintó 'La Gioconda'?",
        options: ["Leonardo da Vinci", "Miguel Ángel", "Rafael", "Caravaggio"],
        correctAnswerIndex: 0,
        explanation: "'La Gioconda', también conocida como Mona Lisa, fue pintada por Leonardo da Vinci."
      },
      {
        question: "¿Qué planeta es conocido como el 'Planeta Rojo'?",
        options: ["Venus", "Marte", "Júpiter", "Saturno"],
        correctAnswerIndex: 1,
        explanation: "Marte es conocido como el 'Planeta Rojo' por su color rojizo debido al óxido de hierro en su superficie."
      },
      {
        question: "¿Cuál es el principal componente psicoactivo de la marihuana?",
        options: ["THC", "CBD", "HHC", "CBA"],
        correctAnswerIndex: 0,
        explanation: "El principal componente psicoactivo de la marihuana es el THC (tetrahidrocannabinol)."
      }
    ]
  },
  {
    id: 'music-modern-bands',
    subject: "Música y Bandas Modernas (Metalcore 2000s - 2010s)",
    questions: [
      {
        question: "¿Qué banda lanzó el álbum 'The Poison' en 2005?",
        options: ["Bullet for My Valentine", "Avenged Sevenfold", "Linkin Park", "Slipknot"],
        correctAnswerIndex: 0,
        explanation: "'The Poison' es el primer álbum de estudio de Bullet for My Valentine, lanzado en 2005."
      },
      {
        question: "¿Qué canción de Avenged Sevenfold se hizo muy popular en el videojuego Guitar Hero II?",
        options: ["Bat Country", "Nightmare", "Afterlife", "Beast and the Harlot"],
        correctAnswerIndex: 3,
        explanation: "'Beast and the Harlot' apareció en Guitar Hero II, lo que ayudó a que Avenged Sevenfold ganara popularidad fuera del metalcore."
      },
      {
        question: "¿Qué banda australiana se hizo famosa con canciones como 'Carrion' y 'Sleepwalker'?",
        options: ["Parkway Drive", "Bring Me The Horizon", "August Burns Red", "Slipknot"],
        correctAnswerIndex: 0,
        explanation: "Parkway Drive es una banda de metalcore de Australia famosa por sus canciones 'Carrion' y 'Sleepwalker'."
      },
      {
        question: "¿Qué vocalista lidera Bring Me The Horizon?",
        options: ["Oli Sykes", "M. Shadows", "Chester Bennington", "Corey Taylor"],
        correctAnswerIndex: 0,
        explanation: "Oli Sykes es el vocalista de Bring Me The Horizon, una de las bandas más conocidas que empezaron en el metalcore."
      },
      {
        question: "¿Cuál es el álbum debut de Linkin Park que los catapultó a la fama mundial?",
        options: ["Hybrid Theory", "Meteora", "Minutes to Midnight", "Living Things"],
        correctAnswerIndex: 0,
        explanation: "'Hybrid Theory' (2000) fue el álbum debut de Linkin Park y uno de los discos más vendidos del siglo XXI, mezclando nu-metal y rap."
      },
      {
        question: "¿Qué banda lanzó 'City of Evil' en 2005?",
        options: ["Avenged Sevenfold", "Bullet for My Valentine", "Bad Omens", "Escape the Fate"],
        correctAnswerIndex: 0,
        explanation: "'City of Evil' es un álbum clave de Avenged Sevenfold, con un estilo más melódico y técnico que les abrió a un público más amplio."
      },
      {
        question: "¿Qué banda británica, más cercana al metalcore, se volvió famosa con el disco 'Sempiternal' (2013)?",
        options: ["Bring Me The Horizon", "Architects", "Bullet for My Valentine", "Enter Shikari"],
        correctAnswerIndex: 0,
        explanation: "'Sempiternal' convirtió a Bring Me The Horizon en una banda mainstream, mezclando metalcore y electrónica."
      },
      {
        question: "¿Qué canción de Killswitch Engage apareció en la banda sonora de la película 'Resident Evil: Apocalypse'?",
        options: ["My Curse", "End of Heartache", "In Due Time", "Rose of Sharyn"],
        correctAnswerIndex: 1,
        explanation: "'End of Heartache' sonó en 'Resident Evil: Apocalypse' (2004), llevando el metalcore a un público más amplio."
      },
      {
        question: "¿Qué banda estadounidense ganó mucha popularidad con el álbum 'The Death of Peace of Mind'?",
        options: ["Bad Omens", "Avenged Sevenfold", "Parkway Drive", "Sleep Token"],
        correctAnswerIndex: 0,
        explanation: "Bad Omens se volvieron muy populares con 'The Death of Peace of Mind' (2022), mezclando metalcore con electrónica y sonidos más accesibles."
      },
      {
        question: "¿Qué grupo británico se hizo viral en 2023 por su estilo que mezcla metalcore, pop y R&B?",
        options: ["Sleep Token", "Bring Me The Horizon", "Architects", "Bad Omens"],
        correctAnswerIndex: 0,
        explanation: "Sleep Token ganó enorme popularidad en 2023 con su disco 'Take Me Back to Eden', combinando metalcore, progresivo y R&B."
      }
    ]
  },
  {
    id: 'literature',
    subject: "Libros Famosos y Literatura Popular",
    questions: [
      {
        question: "¿En qué ciudad comienza la historia de 'Harry Potter y la piedra filosofal'?",
        options: ["Londres", "Little Whinging", "Hogsmeade", "Oxford"],
        correctAnswerIndex: 1,
        explanation: "Harry vive con los Dursley en Little Whinging, Surrey, cuando comienza la saga."
      },
      {
        question: "¿Cuál es el nombre del niño protagonista de 'El Principito'?",
        options: ["El Principito", "El Pequeño Príncipe", "Antoine", "El Aviador"],
        correctAnswerIndex: 0,
        explanation: "El personaje principal se llama 'El Principito' en la obra de Antoine de Saint-Exupéry."
      },
      {
        question: "¿Qué obra de J.R.R. Tolkien precede a 'El Señor de los Anillos' y relata el hallazgo del Anillo Único?",
        options: ["El Silmarillion", "El Hobbit", "Los Hijos de Húrin", "Cuentos Inconclusos"],
        correctAnswerIndex: 1,
        explanation: "'El Hobbit' (1937) narra las aventuras de Bilbo Bolsón, quien encuentra el Anillo Único."
      },
      {
        question: "¿Qué obra de Gabriel García Márquez es una de las más representativas del realismo mágico?",
        options: ["Cien Años de Soledad", "El Amor en los Tiempos del Cólera", "Crónica de una Muerte Anunciada", "El Coronel no Tiene Quien le Escriba"],
        correctAnswerIndex: 0,
        explanation: "'Cien Años de Soledad' (1967) es considerada la obra maestra de Gabriel García Márquez y del realismo mágico."
      },
      {
        question: "¿Quién escribió la saga 'Canción de Hielo y Fuego'?",
        options: ["George R.R. Martin", "J.R.R. Tolkien", "Robert Jordan", "Brandon Sanderson"],
        correctAnswerIndex: 0,
        explanation: "George R.R. Martin es el autor de 'Canción de Hielo y Fuego', en la que se basa la serie 'Juego de Tronos'."
      },
      {
        question: "¿Qué famoso libro infantil fue escrito por Antoine de Saint-Exupéry?",
        options: ["Alicia en el País de las Maravillas", "El Principito", "Peter Pan", "Pinocho"],
        correctAnswerIndex: 1,
        explanation: "'El Principito' fue escrito en 1943 por Antoine de Saint-Exupéry y es uno de los libros más traducidos del mundo."
      },
      {
        question: "¿Qué escritor creó el universo de 'Las Crónicas de Narnia'?",
        options: ["J.K. Rowling", "C.S. Lewis", "Philip Pullman", "Rick Riordan"],
        correctAnswerIndex: 1,
        explanation: "C.S. Lewis escribió 'Las Crónicas de Narnia', publicadas entre 1950 y 1956."
      },
      {
        question: "¿Qué autor ruso escribió 'Crimen y Castigo'?",
        options: ["León Tolstói", "Fiódor Dostoyevski", "Antón Chéjov", "Vladimir Nabokov"],
        correctAnswerIndex: 1,
        explanation: "Fiódor Dostoyevski escribió 'Crimen y Castigo' en 1866, una de las novelas más influyentes de la literatura rusa."
      },
      {
        question: "¿Qué novela distópica de George Orwell habla de un régimen totalitario y la vigilancia extrema?",
        options: ["1984", "Rebelión en la Granja", "Un Mundo Feliz", "Fahrenheit 451"],
        correctAnswerIndex: 0,
        explanation: "'1984' es una novela de George Orwell publicada en 1949 que describe un estado totalitario y opresivo."
      },
      {
        question: "¿Qué novela de Suzanne Collins se convirtió en una exitosa saga de películas juveniles?",
        options: ["Los Juegos del Hambre", "Divergente", "Crepúsculo", "Maze Runner"],
        correctAnswerIndex: 0,
        explanation: "'Los Juegos del Hambre' es una trilogía escrita por Suzanne Collins, adaptada al cine con gran éxito."
      }
    ]
  },
{
  id: "english-language-varieties",
  subject: "Cuestionario de Idioma Inglés (Británico, Americano y Australiano)",
  questions: [
    {
      question: "En inglés británico, ¿cuál es la forma más común de referirse a un 'apartamento' en una ciudad?",
      options: [
        "apartment",
        "flat",
        "condo",
        "suite"
      ],
      correctAnswerIndex: 1,
      explanation: "En inglés británico, se usa 'flat' para describir un apartamento; 'apartment' es más común en inglés americano, mientras que 'condo' y 'suite' tienen otros matices o contextos."
    },
    {
      question: "En inglés estadounidense, ¿qué palabra se utiliza para el vehículo usado para transportar correo y paquetes?",
      options: [
        "mail truck",
        "post van",
        "delivery wagon",
        "postal car"
      ],
      correctAnswerIndex: 0,
      explanation: "En Estados Unidos, el vehículo de correos se llama 'mail truck'. En Reino Unido se dice 'post van', y las otras opciones no son de uso común."
    },
    {
      question: "En inglés australiano, ¿cómo se denomina coloquialmente a una barbacoa al aire libre?",
      options: [
        "barbie",
        "grill",
        "braai",
        "BBQ"
      ],
      correctAnswerIndex: 0,
      explanation: "En Australia, 'barbie' es la forma coloquial de referirse a una barbacoa; 'BBQ' se entiende, pero 'barbie' es típicamente australiana."
    },
    {
      question: "En inglés británico, ¿cómo se llama el primer piso de un edificio, justo sobre la planta baja?",
      options: [
        "first floor",
        "second floor",
        "ground floor",
        "upper floor"
      ],
      correctAnswerIndex: 0,
      explanation: "En inglés británico, 'first floor' es el piso inmediatamente sobre la planta baja ('ground floor'), a diferencia del inglés americano donde 'first floor' suele referirse a la planta baja."
    },
    {
      question: "En inglés estadounidense, la frase 'I couldn't care less' significa:",
      options: [
        "Me importa un poco.",
        "Me importa mucho.",
        "No me importa en absoluto.",
        "Podría importarme menos."
      ],
      correctAnswerIndex: 2,
      explanation: "La expresión 'I couldn't care less' es una forma idiomática de decir que algo no tiene ninguna importancia para ti, y que es imposible que te importe menos de lo que ya te importa."
    },
    {
      question: "En inglés, ¿cuál es la forma correcta de expresar un 'subjuntivo' en la frase 'It's vital that he _________ the truth'?",
      options: [
        "tells",
        "tell",
        "will tell",
        "told"
      ],
      correctAnswerIndex: 1,
      explanation: "El subjuntivo en inglés (usado después de verbos como 'suggest', 'demand', 'insist' o adjetivos como 'vital', 'essential') requiere la forma base del verbo, 'tell', sin la 's' de la tercera persona del singular."
    },
    {
      question: "En inglés australiano, ¿cómo se llama un autobús de dos pisos utilizado para el transporte público?",
      options: [
        "double-decker",
        "coach",
        "bus",
        "tram"
      ],
      correctAnswerIndex: 0,
      explanation: "En Australia (y Reino Unido), un 'double-decker' es un autobús de dos pisos; 'coach' es un autobús de larga distancia, y 'tram' es un tranvía."
    },
    {
      question: "En inglés estadounidense, ¿cuál es la diferencia entre 'affect' y 'effect'?",
      options: [
        "'Affect' es un sustantivo y 'effect' es un verbo.",
        "'Affect' es un verbo que significa influir, y 'effect' es un sustantivo que significa resultado o consecuencia.",
        "Ambos son sustantivos con significados similares.",
        "Ambos son verbos que significan lo mismo."
      ],
      correctAnswerIndex: 1,
      explanation: "En general, 'affect' es un verbo que significa influir o causar un cambio, mientras que 'effect' es un sustantivo que indica el resultado o consecuencia de una acción."
    },
    {
      question: "En inglés británico, ¿qué palabra se usa para referirse a los zapatos deportivos?",
      options: [
        "trainers",
        "sneakers",
        "tennis shoes",
        "runners"
      ],
      correctAnswerIndex: 0,
      explanation: "'Trainers' es el término común en Reino Unido para zapatos deportivos; 'sneakers' y 'tennis shoes' son típicos de Estados Unidos, mientras que 'runners' se usa de manera más coloquial."
    },
    {
      question: "En inglés australiano, ¿cómo se llama comúnmente a un automóvil pequeño y económico?",
      options: [
        "ute",
        "hatchback",
        "cabriolet",
        "sedan"
      ],
      correctAnswerIndex: 1,
      explanation: "En Australia, 'hatchback' es un término común para un automóvil pequeño con portón trasero; 'ute' es un vehículo utilitario, y 'cabriolet' o 'sedan' tienen significados específicos distintos."
    }
  ]
},
{
  id: "linkin-park-quiz",
  subject: "Linkin Park",
  questions: [
    {
      question: "¿Quién fue el vocalista principal de Linkin Park, conocido por sus potentes gritos y melodías?",
      options: [
        "Mike Shinoda",
        "Brad Delson",
        "Chester Bennington",
        "Joe Hahn"
      ],
      correctAnswerIndex: 2,
      explanation: "Chester Bennington fue el icónico vocalista principal de Linkin Park, cuya voz distintiva se convirtió en un sello de la banda."
    },
    {
      question: "¿Cuál de los siguientes álbumes NO es uno de los primeros tres de estudio de Linkin Park?",
      options: [
        "Hybrid Theory",
        "Meteora",
        "Minutes to Midnight",
        "A Thousand Suns"
      ],
      correctAnswerIndex: 3,
      explanation: "Los primeros tres álbumes de estudio de Linkin Park fueron Hybrid Theory (2000), Meteora (2003) y Minutes to Midnight (2007). 'A Thousand Suns' fue lanzado en 2010."
    },
    {
      question: "¿Cómo se llamaba originalmente Linkin Park antes de adoptar su nombre definitivo?",
      options: [
        "Xero",
        "Hybrid Theory",
        "Grey Daze",
        "The Humble Brothers"
      ],
      correctAnswerIndex: 0,
      explanation: "Antes de ser Linkin Park, la banda se llamaba Xero. Luego cambiaron a Hybrid Theory brevemente antes de establecerse en Linkin Park."
    },
    {
      question: "¿Qué canción de Linkin Park cuenta con la colaboración de Jay-Z en el álbum 'Collision Course'?",
      options: [
        "In the End",
        "Numb/Encore",
        "Faint",
        "Crawling"
      ],
      correctAnswerIndex: 1,
      explanation: "'Numb/Encore' es una de las colaboraciones más famosas de Linkin Park con el rapero Jay-Z, parte de su álbum mash-up 'Collision Course'."
    },
    {
      question: "¿Qué miembro de la banda es el DJ, conocido por sus innovadores scratches y samples?",
      options: [
        "Rob Bourdon",
        "Phoenix Farrell",
        "Joe Hahn",
        "Mike Shinoda"
      ],
      correctAnswerIndex: 2,
      explanation: "Joe Hahn, también conocido como Mr. Hahn, es el DJ, turntablist y programador de la banda, además de director de muchos de sus videos musicales."
    },
    {
      question: "¿Qué canción de 'Meteora' es famosa por su icónico riff de guitarra y su poderoso coro, siendo uno de los mayores éxitos de la banda?",
      options: [
        "Breaking the Habit",
        "Somewhere I Belong",
        "Faint",
        "Numb"
      ],
      correctAnswerIndex: 3,
      explanation: "'Numb' es una de las canciones más reconocibles y aclamadas de Linkin Park del álbum 'Meteora', conocida por su melancolía y su potente estructura."
    },
    {
      question: "¿Cuál fue el último álbum de estudio lanzado por Linkin Park con Chester Bennington como vocalista?",
      options: [
        "Living Things",
        "The Hunting Party",
        "One More Light",
        "From Zero"
      ],
      correctAnswerIndex: 2,
      explanation: "'One More Light', lanzado en 2017, fue el séptimo y último álbum de estudio de Linkin Park con Chester Bennington antes de su fallecimiento."
    },
    {
      question: "¿Qué ingeniero de sonido y productor discográfico de renombre trabajó en los primeros álbumes de Linkin Park, ayudando a definir su sonido distintivo?",
      options: [
        "Rick Rubin",
        "Don Gilmore",
        "Brendan O'Brien",
        "Andy Wallace"
      ],
      correctAnswerIndex: 1,
      explanation: "Don Gilmore produjo 'Hybrid Theory' y 'Meteora', contribuyendo significativamente a establecer el sonido característico de Linkin Park en sus primeros éxitos."
    },
    {
      question: "¿Qué canción del álbum 'A Thousand Suns' presenta un discurso samplesdo del físico J. Robert Oppenheimer sobre la creación de la bomba atómica?",
      options: [
        "The Catalyst",
        "Waiting for the End",
        "Burning in the Skies",
        "The Radiance"
      ],
      correctAnswerIndex: 3,
      explanation: "'The Radiance' es una pieza instrumental en 'A Thousand Suns' que incorpora un famoso extracto del discurso de J. Robert Oppenheimer sobre su implicación en el Proyecto Manhattan y la creación de la bomba atómica."
    },
    {
      question: "¿Cuál de los siguientes no es un miembro original de Linkin Park desde su formación como Xero?",
      options: [
        "Dave 'Phoenix' Farrell",
        "Joe Hahn",
        "Rob Bourdon",
        "Mike Shinoda"
      ],
      correctAnswerIndex: 0,
      explanation: "Dave 'Phoenix' Farrell dejó la banda brevemente después de la formación de Xero y regresó en 2000, no siendo parte de la alineación inicial de Xero de forma continua."
    }
  ]
}
];
