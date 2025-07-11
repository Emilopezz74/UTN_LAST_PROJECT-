
const mook_data = {
    contacts: [
        {
            id: 1,
            name: 'Carrie',
            number_phone: ' +1 212 555 0147 ',
            last_time_connected: '9:49pm',
            img: 'https://i.pinimg.com/736x/8c/41/45/8c41450fb6bd34baaa5dd817868dfec8.jpg',
            last_message: {
                emisor: 'YO',
                id: 1,
                text: 'Are u coming or what??. We are waiting for you!! ',
                alternative_text: 'Are u coming?..'
            },
            unread_messages: 0,
            messages: [
                {
                    emisor: 'YO',
                    hora: '6:23pm',
                    id: 1,
                    texto: 'Hi Carrie, can we go together to Big´s??',
                    status: 'visto'
                },
                {
                    emisor: 'USUARIO',
                    hora: '7:39pm',
                    id: 2,
                    texto: 'Hey!. Ofc we can go together. Pick me at 8:30pm',
                    status: 'visto'
                },
                {
                    emisor: 'YO',
                    hora: '7:54pm',
                    id: 3,
                    texto: 'That´s a relief, we can go together so I don´t arrive by myself. Idk anyone in there',
                    status: 'no-visto'
                },
                {
                    emisor: 'YO',
                    hora: '8:00pm',
                    id: 4,
                    texto: 'hey',
                    status: 'no-recibido'
                },
                {
                    emisor: 'YO',
                    hora: '8:05pm',
                    id: 4,
                    texto: 'Carrie?',
                    status: 'no-recibido'
                },
                {
                    emisor: 'YO',
                    hora: '8:15pm',
                    id: 5,
                    texto: 'Well I guess I´ll just go by myself ',
                    status: 'no-recibido'
                },
                {
                    emisor: 'YO',
                    hora: '9:30pm',
                    id: 6,
                    texto: 'Are u coming or what??. We are waiting for you!! ',
                    status: 'no-recibido'
                }
            ]
        },
        {
            id: 2,
            name: 'Charlotte',
            number_phone: '+1-202-558-0137',
            last_time_connected: '8:50pm',
            img: 'https://i.pinimg.com/736x/68/a9/de/68a9de935c2761f3dba21fa448072695.jpg',
            last_message: {
                emisor: 'USER',
                id: 1,
                text: 'Has Carrie spoken to you? She hasn´t answered my calls 🤔📞📳',
                alternative_text: 'Has Carrie spoken...'

            },
            unread_messages: 2,
            messages: [
                {
                    emisor: 'USUARIO',
                    hora: '3:03pm',
                    id: 1,
                    texto: 'Hi, have u bought something for Big?. I´m at the mall so I tought we could buy him someting',
                    status: 'visto'
                },
                {
                    emisor: 'USUARIO',
                    hora: '3:03pm',
                    id: 2,
                    texto: 'So we don´t spend so much money on him. 🐀',
                    status: 'visto'
                },
                {
                    emisor: 'YO',
                    hora: '3:24pm',
                    id: 3,
                    texto: 'Haha, yeah. I was gonna tell you that. Let’s keep it under $100, you know I’m broke right now.',
                    status: 'visto'
                },
                {
                    emisor: 'Usuario',
                    hora: '3:49pm',
                    id: 4,
                    texto: 'Yeah ofc. Yk I´m as broke as u are',
                    status: 'no-recibido'
                },
                {
                    emisor: 'Usuario',
                    hora: '9:00pm',
                    id: 4,
                    texto: 'Has Carrie spoken to you? She hasn´t answered my calls 🤔📞📳',
                    status: 'no-recibido'
                }
            ]
        },
        {
            id: 3,
            name: 'Samantha',
            number_phone: '+1-917-565-0198',
            last_time_connected: '8:47pm',
            img: 'https://pyxis.nymag.com/v1/imgs/2e9/3d8/b24ab2770dd0a42e0061a23d923153bc39-kim-cattrall-sex-and-the-city.1x.rsquare.w1400.jpg',
            last_message: {
                emisor: 'YO',
                id: 1,
                text: '“Haha, you’re never gonna change, are you?',
                alternative_text: 'Haha, you’re..'
            },
            unread_messages: 0,
            messages: [
                {
                    emisor: 'YO',
                    hora: '23:10',
                    id: 1,
                    texto: 'Hey Samantha, are you coming to Big’s birthday party tonight?',
                    status: 'visto'
                },
                {
                    emisor: 'USUARIO',
                    hora: '23:11',
                    id: 2,
                    texto: 'Honey, is it even a question? Of course I am. I wouldn’t miss a party with good drinks and even better men',
                    status: 'visto'
                },
                {
                    emisor: 'YO',
                    hora: '23:12',
                    id: 3,
                    texto: 'Haha, I knew you’d say that. Carrie’s planning something small, but you know how it goes',
                    status: 'visto'
                },
                {
                    emisor: 'YO',
                    hora: '23:13',
                    id: 4,
                    texto: 'Dinner is at 9, try not to be late, okay?',
                    status: 'visto'
                },
                {
                    emisor: 'Usuario',
                    hora: '23:12',
                    id: 3,
                    texto: 'Honey, I’ll be fashionably late, looking fabulous as always.',
                    status: 'no-visto'
                },
                {
                    emisor: 'YO',
                    hora: '23:13',
                    id: 4,
                    texto: 'Haha, you’re never gonna change, are you?',
                    status: 'no-visto'
                }
            ]
        },
        {

            id: 4,
            name: 'Big',
            emisor: 'YO',
            last_time_connected: '7:42pm',
            number_phone: '+1-202-558-0137',
            img: "https://assets.vogue.com/photos/60f6ceca9d2ff0bb3535b048/1:1/w_1875,h_1875,c_limit/MCDSEAN_EC175.jpg",
            last_message: {
                emisor: 'YO',
                id: 1,
                text: 'Got it',
                alternative_text: 'Got it'
            },
            unread_messages: 0,
            messages: [
                {
                    emisor: 'usuario',
                    hora: '1:13am',
                    id: 1,
                    texto: 'Hey, I\'m having a birthday thing tomorrow. You should come.',
                    status: 'visto'
                },
                {
                    emisor: 'YO',
                    hora: '2:05am',
                    id: 2,
                    texto: 'Really? Thanks for inviting me! What time is it?',
                    status: 'visto'
                },
                {
                    emisor: 'usuario',
                    hora: '2:17am',
                    id: 3,
                    texto: 'Around 9pm. Carrie set it up, she insisted on making it special.',
                    status: 'visto'
                },
                {
                    emisor: 'YO',
                    hora: '3:45am',
                    id: 4,
                    texto: 'Haha, that sounds like Carrie. Should I bring something?',
                    status: 'visto'
                },
                {
                    emisor: 'usuario',
                    hora: '4:12am',
                    id: 5,
                    texto: 'Just bring yourself. Carrie said she\'d kill me if I let you skip it.',
                    status: 'visto'
                },
                {
                    emisor: 'YO',
                    hora: '5:39am',
                    id: 6,
                    texto: 'Haha fine, I\'ll come. Where is it?',
                    status: 'visto'
                },
                {
                    emisor: 'usuario',
                    hora: '6:28am',
                    id: 7,
                    texto: 'At my place, 8th Ave. Just come up when you get here.',
                    status: 'visto'
                },
                {
                    emisor: 'YO',
                    hora: '7:42am',
                    id: 8,
                    texto: 'Got it',
                    status: 'no-visto'
                }
            ]
        },

        {
            id: 5,
            number_phone: '+1-202-358-9137',
            name: 'Miranda',
            last_time_connected: '4:05pm',
            img: "https://preview.redd.it/miranda-hobbes-a-powerful-character-but-always-lacked-v0-rhgs6so8xxga1.jpg?width=640&crop=smart&auto=webp&s=8e31f7ff6330709f0895c4252523295cbba621b4",
            last_message: {
                id: 1,
                emisor: 'USER',
                text: '😓',
                alternative_text :'😓'
            },
            unread_messages: 3,
            messages:
                [
                    {
                        emisor: 'YO',
                        hora: '3:00pm',
                        id: 1,
                        texto: 'Hey Miranda, are you going to Big’s birthday tonight?',
                        status: 'visto'
                    },
                    {
                        emisor: 'Miranda',
                        hora: '3:15pm',
                        id: 2,
                        texto: 'I wanted to, but I’m not sure yet. You?',
                        status: 'visto'
                    },
                    {
                        emisor: 'YO',
                        hora: '3:30pm',
                        id: 3,
                        texto: 'Yeah, I’m going. It’ll be fun!',
                        status: 'visto'
                    },
                    {
                        emisor: 'Miranda',
                        hora: '4:00pm',
                        id: 4,
                        texto: 'I actually can’t make it. I have to watch my son tonight.',
                        status: 'visto'
                    },
                    {
                        emisor: 'Miranda',
                        hora: '4:05pm',
                        id: 5,
                        texto: 'Sorry! Hopefully next time I can join you all.',
                        status: 'no-visto'
                    },
                    {
                        emisor: 'Miranda',
                        hora: '4:05pm',
                        id: 5,
                        texto: '😓',
                        status: 'no-visto'
                    }
                ]
        },
        {
            id: 6,
            name: 'Joel M.',
            number_phone: '+1-202-658-0937',
            last_time_connected: '2:50pm',
            img: "https://hips.hearstapps.com/hmg-prod/images/pedro-pacal-premios-oscar-2023-perilla-640ecaca73211.jpg?crop=0.6304517133956387xw:1xh;center,top&resize=980:*",
            last_message: {
                emisor: 'YO',
                id: 1,
                text: 'Alright, just letting you know in case you change your mind.',
                alternative_text: 'Alright, just...'


            },
            unread_messages: 0,
            messages: [
                {
                    emisor: 'YO',
                    hora: '2:00pm',
                    id: 1,
                    texto: 'Hey Joel, Big’s birthday is tonight. You coming?',
                    status: 'visto'
                },
                {
                    emisor: 'Joel',
                    hora: '2:15pm',
                    id: 2,
                    texto: 'Big’s? That some kind of fancy thing?',
                    status: 'visto'
                },
                {
                    emisor: 'YO',
                    hora: '2:25pm',
                    id: 3,
                    texto: 'Nah, just a few people. Nothing fancy.',
                    status: 'visto'
                },
                {
                    emisor: 'Joel',
                    hora: '2:45pm',
                    id: 4,
                    texto: 'I got things to take care of. Don’t wait on me.',
                    status: 'visto'
                },
                {
                    emisor: 'YO',
                    hora: '2:50pm',
                    id: 5,
                    texto: 'Alright, just letting you know in case you change your mind.',
                    status: 'no-visto'
                }
            ]

        },
        {
            id: 7,
            number_phone: '+1-202-958-0637',
            name: '+1-202-958-0637',
            last_time_connected: '1:55pm',
            img: "https://topicimages.mrowl.com/large/chaseosburn/chaos_is_a_ladder/actors/jack_gleeson__joffrey_baratheon_1.jpg",
            last_message: {
                id: 1,
                text: 'Consider this my royal decree: his birthday is canceled.',
                alternative_text: 'Consider th...'


            },
            unread_messages: 5,
            messages: [
                {
                    emisor: 'Joffrey Baratheon',
                    hora: '1:15pm',
                    id: 1,
                    texto: 'Who is this “Big” fool everyone is whispering about?',
                    status: 'visto'
                },
                {
                    emisor: 'Joffrey Baratheon',
                    hora: '1:27pm',
                    id: 2,
                    texto: 'Is he throwing some kind of pathetic celebration?',
                    status: 'visto'
                },
                {
                    emisor: 'Joffrey Baratheon',
                    hora: '1:34pm',
                    id: 3,
                    texto: 'Tell him I don’t attend the parties of peasants.',
                    status: 'visto'
                },
                {
                    emisor: 'Joffrey Baratheon',
                    hora: '1:42pm',
                    id: 4,
                    texto: 'If he wants a gift, he should kneel before me.',
                    status: 'visto'
                },
                {
                    emisor: 'Joffrey Baratheon',
                    hora: '1:55pm',
                    id: 5,
                    texto: 'Consider this my royal decree: his birthday is canceled.',
                    status: 'no-visto'
                }
            ]


        },
        
        


    ]
}

export default mook_data