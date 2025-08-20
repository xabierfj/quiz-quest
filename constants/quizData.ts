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
  "id": "english-japanese-language",
  "subject": "Cuestionario de Idioma Inglés y Japonés",
  "questions": [
    {
      "question": "En inglés, ¿cuál de los siguientes 'phrasal verbs' significa 'posponer'?",
      "options": [
        "To look up",
        "To put off",
        "To get over",
        "To take in"
      ],
      "correctAnswerIndex": 1,
      "explanation": "El 'phrasal verb' 'to put off' significa posponer o aplazar algo para un momento posterior. Por ejemplo, 'I had to put off my meeting until tomorrow'."
    },
    {
      "question": "En japonés, ¿cuál es la forma educada del verbo 'hacer' (する - suru)?",
      "options": [
        "します (shimasu)",
        "なさる (nasaru)",
        "なさい (nasai)",
        "しますます (shimasumasu)"
      ],
      "correctAnswerIndex": 1,
      "explanation": "La forma honorífica (sonkeigo) de 'する' (hacer) es 'なさる' (nasaru). 'します' es la forma cortés (masu-form), no la honorífica. 'なさい' es una forma imperativa."
    },
    {
      "question": "En inglés, ¿cuál es el uso correcto del 'Present Perfect Continuous' en la siguiente frase?",
      "options": [
        "He has been working on the project for two weeks.",
        "He has worked on the project for two weeks.",
        "He is working on the project for two weeks.",
        "He works on the project for two weeks."
      ],
      "correctAnswerIndex": 0,
      "explanation": "El 'Present Perfect Continuous' ('has/have been' + verbo-ing) se usa para describir una acción que comenzó en el pasado y continúa hasta el presente, a menudo con un énfasis en la duración."
    },
    {
      "question": "El 'kanji' (漢字) '女' se pronuncia 'onna' (おんな) y significa:",
      "options": [
        "Hombre",
        "Niño",
        "Mujer",
        "Animal"
      ],
      "correctAnswerIndex": 2,
      "explanation": "El 'kanji' 女 (onna) significa 'mujer'. Se diferencia de '男' (otoko), que significa 'hombre'."
    },
    {
      "question": "En inglés, la frase 'I couldn't care less' significa:",
      "options": [
        "Me importa un poco.",
        "Me importa mucho.",
        "No me importa en absoluto.",
        "Podría importarme menos."
      ],
      "correctAnswerIndex": 2,
      "explanation": "La expresión 'I couldn't care less' es una forma idiomática de decir que algo no tiene ninguna importancia para ti, y que es imposible que te importe menos de lo que ya te importa."
    },
    {
      "question": "En japonés, la partícula 'に' (ni) se puede usar para indicar:",
      "options": [
        "El sujeto de la oración.",
        "El objeto directo de la oración.",
        "El destino o la dirección del movimiento.",
        "El tema de la oración."
      ],
      "correctAnswerIndex": 2,
      "explanation": "La partícula 'に' (ni) tiene múltiples usos, uno de los cuales es para indicar el destino o la dirección hacia la que se mueve algo o alguien, como en '学校に行きます' (gakkō ni ikimasu - Voy a la escuela)."
    },
    {
      "question": "En inglés, ¿cuál es la forma correcta de expresar un 'subjuntivo' en la frase 'Es crucial que él _________ la verdad'?",
      "options": [
        "tells",
        "tell",
        "will tell",
        "told"
      ],
      "correctAnswerIndex": 1,
      "explanation": "El subjuntivo en inglés (usado después de verbos como 'suggest', 'demand', 'insist', 'propose', y adjetivos como 'crucial', 'essential') requiere la forma base del verbo, 'tell', sin la 's' de la tercera persona del singular."
    },
    {
      "question": "En japonés, ¿cómo se usa la forma 'te' de un verbo seguida de 'しまう' (shimau)?",
      "options": [
        "Para expresar una acción que debe realizarse.",
        "Para expresar el estado actual de una acción en progreso.",
        "Para expresar una acción que se ha completado de manera exhaustiva, o de la que uno se lamenta.",
        "Para expresar una acción que se hará en el futuro."
      ],
      "correctAnswerIndex": 2,
      "explanation": "La estructura 'te-form' + 'しまう' (shimau) se usa para indicar que una acción ha sido completada completamente ('done up') o, de forma más coloquial, para expresar arrepentimiento o sorpresa por una acción terminada."
    },
    {
      "question": "¿Cuál es el antónimo más cercano de 'ephemeral' en inglés?",
      "options": [
        "Transient",
        "Fleeting",
        "Permanent",
        "Short-lived"
      ],
      "correctAnswerIndex": 2,
      "explanation": "Ephemeral significa algo que dura muy poco tiempo, por lo que su antónimo es 'permanent', que significa algo que dura indefinidamente o por un largo periodo."
    },
    {
      "question": "En japonés, ¿qué significa la expresión idiomática '一石二鳥' (isseki nichō)?",
      "options": [
        "El que mucho abarca, poco aprieta.",
        "Matar dos pájaros de un tiro.",
        "Una acción habla más que mil palabras.",
        "No hay mal que por bien no venga."
      ],
      "correctAnswerIndex": 1,
      "explanation": "一石二鳥 (isseki nichō) es un 'yojijukugo' o modismo de cuatro caracteres que significa 'una piedra, dos pájaros'. Su equivalente en español es 'matar dos pájaros de un tiro', haciendo referencia a lograr dos objetivos con una sola acción."
    },
    {
      "question": "En inglés, la frase 'to be on the fence' se usa para describir a alguien que:",
      "options": [
        "Está en una situación peligrosa.",
        "Aún no ha tomado una decisión.",
        "Está espiando a sus vecinos.",
        "Se ha caído de una valla."
      ],
      "correctAnswerIndex": 1,
      "explanation": "'To be on the fence' es una expresión idiomática que significa estar indeciso o neutral sobre un asunto, sin haberse comprometido con una de las opciones."
    },
    {
      "question": "En japonés, ¿cuál es la diferencia principal entre '〜てください' (te kudasai) y '〜ていただけませんか' (te itadakemasen ka)?",
      "options": [
        "El primero es para peticiones, el segundo para dar órdenes.",
        "El primero es una petición directa, el segundo es una petición más educada y formal.",
        "El primero se usa con amigos, el segundo con la familia.",
        "Ambas son intercambiables y no hay diferencia."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Ambas estructuras son para hacer peticiones. Sin embargo, '〜てください' (te kudasai) es una forma cortés pero más directa, mientras que '〜ていただけませんか' (te itadakemasen ka) es una forma mucho más formal y educada, utilizada con superiores o en situaciones de negocios."
    },
    {
      "question": "En inglés, ¿cuál es el uso correcto del 'Past Perfect' en la siguiente frase?",
      "options": [
        "When I got to the station, the train already left.",
        "When I got to the station, the train had already left.",
        "When I was getting to the station, the train left.",
        "When I have gotten to the station, the train left."
      ],
      "correctAnswerIndex": 1,
      "explanation": "El 'Past Perfect' ('had' + participio pasado) se utiliza para describir una acción que ocurrió antes de otra acción en el pasado. En este caso, el tren se fue antes de que yo llegara a la estación."
    },
    {
      "question": "En japonés, ¿cómo se expresa la voz pasiva para el verbo 'leer' (読む - yomu)?",
      "options": [
        "読める (yomeru)",
        "読んだ (yonda)",
        "読ませる (yomaseru)",
        "読まれる (yomareru)"
      ],
      "correctAnswerIndex": 3,
      "explanation": "La voz pasiva se forma con la base del verbo 'a' + 'れる' (reru) o 'られる' (rareru). Para '読む' (yomu), la forma pasiva es '読まれる' (yomareru)."
    },
    {
      "question": "En inglés, ¿cuál es la diferencia entre 'affect' y 'effect'?",
      "options": [
        "'Affect' es un sustantivo y 'effect' es un verbo.",
        "'Affect' es un verbo que significa influir, y 'effect' es un sustantivo que significa resultado o consecuencia.",
        "Ambos son sustantivos con significados similares.",
        "Ambos son verbos que significan lo mismo."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Aunque hay excepciones, en general, 'affect' (con 'a') es un verbo que significa influir o causar un cambio. 'Effect' (con 'e') es un sustantivo que se refiere al resultado, consecuencia o impacto de algo."
    },
    {
      "question": "¿Cuál es la diferencia de uso principal entre las partículas 'wa' (は) y 'ga' (が) en japonés?",
      "options": [
        "'wa' se usa para el objeto, 'ga' para el sujeto.",
        "'wa' marca el tema, 'ga' marca el sujeto o la información nueva/enfocada.",
        "'wa' se usa en oraciones afirmativas, 'ga' en oraciones negativas.",
        "No hay diferencia, son intercambiables."
      ],
      "correctAnswerIndex": 1,
      "explanation": "'は' (wa) marca el tema de la oración, que es lo que se discute, mientras que 'が' (ga) marca el sujeto de la oración, especialmente cuando es información nueva o cuando se quiere dar énfasis al sujeto."
    }
  ]
}

];
