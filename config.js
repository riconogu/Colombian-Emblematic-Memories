var config = {
    style: 'mapbox://styles/riconogu/cklli56880z4x17s4764kkeu3',
    accessToken: 'pk.eyJ1Ijoicmljb25vZ3UiLCJhIjoiY2tqaW00aHRpM3hueDJ4cDk3anUyM212dyJ9.gRNG0VCNG0LfVgciQtC07A',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: false,
    title: 'Mapping Colombian Emblematic Memories',
    subtitle: 'Politics of memory in a never-ending violent post-conflict',
    byline: 'Juan Carlos Rico Noguera',
    footer: 'Sources: Hayner, P. (2011). Unspeakable Truths Transitional Justice and the Challenge of Truth Commissions. Routledge---  Rubin, Jonah S. 2018How Francisco Franco Governs from beyond the Grave: An Infrastructural Approach to Memory Politics in Contemporary Spain. American Ethnologist 45(2): 214–227 --- Stern, Steve 2004 Remembering Pinochet’s Chile. Durham, NC: Duke University Press ---  Teitel, Ruti 2003 Transitional Justice Genealogy. Harvard Human Rights Journal 16: 69–94. ',
    chapters: [
        
        {
            id: 'Prologue',
            alignment: 'center',
            hidden: true,
            title: 'Welcome',
            description: 'Scroll down to know more about this project!',
            location: {
                center: [-75.556627, 6.245942],
                zoom: 4,
                pitch: 40,
                bearing: 0
            },
            
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },       

        {
            id: 'Introduction',
            alignment: 'full',
            hidden: false,
            title: 'Mapping Colombian Emblematic Memories',
            image: 'Stock/20190705_111417.jpg', 
            description: 'Mapping Colombian Emblematic Memories is an ongoing digital humanities project producing a visual representation of the linkage between popular and influential depictions of the past and place. The emblematic memories the project is mapping are related to the legacies, traumas, and embodied interpretations of Colombian violence. The map contains a growing amount of sites of memory different social movements and institutions of the state are putting in place. Those physical places have been starting to be enunciated by different stakeholders as more extensive networks we will call infrastructures of memory. Mapping Colombian Emblematic Memories is not a project seeking to provide a harmonic picture of the past. The project point at the struggles for recognition various and sometimes conflicting groups are giving against different forms of oblivion, something the project calls politics of memory. Hopefully, mapping the plurality of emblematic memories about the past in Colombia will produce meaningful discussions and solidarities to find alternatives to the Colombian specters of violence and exclusion. This story-telling map defines three concepts (emblematic memory, politics of memory, and infrastructures of memory) and three types of emblematic memory we use to understand the sites of memory this project is mapping (heroic memory, dissident memory, and between-fires memory). ',
            location: {
                center: [-75.556627, 6.245942],
                zoom: 4,
                pitch: 40,
                bearing: 0
            },
            
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        
        {
            id: 'Emblematic-memories 1',
            alignment: 'left',
            hidden: false,
            title: 'Emblematic MemorY',
            image: 'Stock/gettyimages-160316718-2048x2048.jpg',
            description: 'The historian Steve Stern came up with the “emblematic memory” concept while studying the Chilean public debate over the meaning of Allende’s Government and Pinochet’s dictatorship. He proposed three archetypical figures to depict the contentious emblematic memories circulating and clashing in the semipublic and public spheres: heroic memory, dissident memory, and indifferent memory. Those archetypes, in Stern’s writing, are deeply contextual. In other words, they only speak of the “Chilean historical experience.” However, two of them (heroic and dissident) resonate with what we could call Colombian emblematic memories, which we are discussing later. ',
            location: {
                center: [-70.67947743, -33.43935179],
                zoom: 4,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'easeTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                 // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },


        {
            id: 'Emblematic-memories 2',
            alignment: 'right',
            hidden: false,
            title: 'Emblematic Memory',
            image: 'Stock/Museo_de_la_Memoria_y_los_Derechos_Humanos.jpg',
            description: 'Emblematic memory is a valuable concept to study socially significant memories. The emblematic memory concept represents a framework organizing the meaning and the selectivity of a complex assemblage of individual remembrances, values, and experiences. Unlike personal memory, the emblematic memory circulates in public and semipublic spheres, nailing together in a somewhat coherent web of meaning personal stories and experiences. It is also safe to say emblematic memories have a hegemonic impulse seeking to contest rival depictions of the past by arguing the possession of truth. The Museum of Memory and Human Rights you are looking at is an exciting site to ask questions like what counts as valid evidence, what memories get to be represented, or how influential they are outside of the curated walls of the museum. ',
            location: {
                center: [-70.67947743, -33.43935179],
                zoom: 16,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                 // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

      
        {
            id: 'politics-of-memory1',
            alignment: 'left',
            hidden: false,
            title: 'Infrastructures of Memory and politics of memory',
            image: 'Stock/españa.jpg',
            description: 'Anthropologist Jonah Rubin in his study of the "memory movement" in Spain, introduces two beneficial concepts for this project: politics of memory and infrastructures of memory. According to him, the Politics of memory is a struggle to gain recognition from the state for violence perpetrated against marginalized groups. Still, it is essential to consider the definition of what constitutes a marginalized group is up for debate, controversy, and constant redefinition. Social movement scholars like Charles Tilly, Sidney Tarrow, or Paul Almeida, remind us every politically mobilized social group defines grievances to articulate their interactions with political elites. However, the definition of grievances is not exclusive of marginalized groups based on income, gender, or race. At the same time, political elites change. In other words, traditional elites or social groups with relative amounts of privilege can define themselves as marginalized when needed.   ',
            location: {
                center: [-4.155333711, 40.64187302],
                zoom: 5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'politics-of-memory2',
            alignment: 'right',
            hidden: false,
            title: 'Infrastructures of Memory and politics of memory',
            image: 'Stock/caidos.jpg',
            description: 'Infrastructures of memory are distributed networks of different sorts enabling and constraining the circulation of past experience in the public sphere. Anthropologist Jonah Rubin argues that Franco´s dictatorship survives in Spain through an infrastructure of streets honoring dictatorship officers, many of them responsible for human rights violations. The infrastructure is also made of official archives full of documents concealing the murder of political opponents or by majestic monuments like the Valley of the Fallen you are looking at right now.  Still, social movements and renewed political elites reconfigure those infrastructures by changing street names, engaging in archival work, and interposing monuments like the Valley of the Fallen.  ',
            location: {
                center: [-4.155333711, 40.64187302],
                zoom: 12,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'Colombian-violence',
            alignment: 'left',
            hidden: false,
            title: 'Colombian violence',
            image: 'Stock/bojaya.jpg',
            description: 'Colombian violence is probably one of the most distinctive factors of Colombian national history. It also happens to be the bedrock of this project. The different types of emblematic memory this project is mapping are related to it. They describe the shape of violence through terrifying life experiences, define the wrongdoers and the victims, and sometimes try to explain the persistence of violence over time. The exploration of Colombian violence and its legacies has known many forms: some are academic, others are works of art, and others are improvised recollections becoming archives, small museums, or monuments thanks to the virtues of social organization and mobilization. Most of the efforts these project maps are the product of social organizations seeking reparation and non-repetition for human rights violations committed during the Colombian inner armed conflict. But a significant number is coming from the Colombian state, represented by the National Police´s monuments. ',
            location: {
                center: [-75.556627, 6.245942],
                zoom: 4,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'memory-building-teatro-colon',
            alignment: 'left',
            hidden: false,
            title: 'A political transition',
            image: 'Stock/teatro colon.jpg',
            description: 'Colombia is going through what experts in political science, human rights, and international humanitarian law call a political transition. Political transitions imply the transformation of an undemocratic society into a democratic one. In the case of Colombia, the transition means getting rid of political violence through a peace accord. However, due to a complex set of transnational and historical dynamics, authors like Priscilla Hayner and Ruti Teitel depict with their research, collective memories related to the conflict get politicized, organized, and mobilized. In other words, the political transition in Colombia, represented here with the picture of President Juan Manuel Santos and the rebel leader Rodrigo Londono, implies the resurgence and the collision of different emblematic memories. ',
            location: {
                center: [-74.07439864513638, 4.596987426398634],
                zoom: 18,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'heroic-memory-institutional-memory',
            alignment: 'right',
            hidden: false,
            title: 'Heroic (or institutional) memory',
            image: 'Stock/monumento-edificadores-de-paz-8-.jpeg',
            description: 'Steve Stern called heroic memory the assemblage of private experiences and values, suggesting the Chilean dictatorship resulted from a courageous defense of democratic institutions and justice from communist havoc. Dictatorship, under the interpretation of the heroic memory, was salvation. In Colombia, heroic memory exists as well, with some local variations. Heroic memory in Colombia is the assemblage of private recollections and values stating the perpetrated violence in Colombia had two colors: the color of the heroes defending the nation or the people and the color of the villains menacing the nation or the people. The Colombian armed forces are producers of Colombian heroic memory, but they call their recollections "institutional memory." In the map this project provides, you will find 29 monuments glorifying the national police efforts to protect the nation and remembering those who "sacrificed" their lives to defend the Colombian people from "their enemies." You are looking at one of those monuments, located in Neiva and unveiled in the year 2020. ',
            location: {
                center: [-75.28963327, 2.916486975],
                zoom: 16,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'heroic-memory-institutional-memory2',
            alignment: 'right',
            hidden: false,
            title: 'Heroic (or institutional) memory',
            image: 'Stock/10_segunda_announced_image.jpg',
            description: 'But Colombian heroic memory does not only come from the security forces or a conservative population. It also stems from rebel narratives establishing clear-cut boundaries between "the people" and a corrupt elite. As an example, the declaration of a "second Marquetalia" 21 months after the peace deal signature, or a "second uprising" for those who are unfamiliar with Colombian history, display a narrative in which the rebels occupy the position of heroic individuals who were deceived by an irredeemable corrupt elite. This map has no data available of "this side" of the heroic memory. However, no one should be surprised by this fact. If Colombia had monuments of rebels, as it does of the police, they would not be rebels; they would be national heroes! Still, the absence of data points toward an exciting research agenda. ',
            location: {
                center: [-70.65140906416035, 7.084784966781466],
                zoom: 6,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'dissident-memory',
            alignment: 'left',
            hidden: false,
            title: 'Dissident memory',
            image: '',
            description: 'Dissident memory is the concept Steve Stern uses to describes those memory frameworks competing with the heroic scripts suggesting Pinochet and the dictatorship saved Chile. Memories of brutal and unresolved rupture and those of persecution show the horrors of authoritarianism. In Colombia, dissident memory challenges the elitist notion defining the Colombian polity as the most stable democracy of the region. It also challenges the heroic memory suggesting the armed forces have been defending the nation from the "inner enemy." The dissident memory comes from organized political organizations and movements suffering systematic violence looking to demobilize popular demands.',
            location: {
                center: [-76.537015, 3.447241],
                zoom: 12,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'between-fires-memory',
            alignment: 'left',
            hidden: false,
            title: 'Between-fires memory',
            image: 'Stock/20190718_141840.jpg',
            description: 'Between-fires memory is an emblematic memory present in Colombia but absent from Chile. It is a framework of memories synthesizing the experiences and the values of people who got caught in the crossfire between armed forces, rebel groups, and paramilitary groups. In many ways, between-fires memory has gained notoriety thanks to institutions like the National Center of Historical Memory (Centro Nacional de Memoria Histórica) and the Truth Commission.  Just like the dissident memory, between-fires memory rejects the heroic script. But dislike the dissident memory framework, it does not place most of the responsibility of human rights violations on the state and its agents. Still, the grievances logically articulated to the between-fires memory framework are directed towards the Colombian state, seeking recognition, reparation, and non-repetition guarantees. You are looking at the Never Again salon (Salon del Nunca Mas), a museum directed by a collective of survivors',
            location: {
                center: [-75.186258, 6.14453],
                zoom: 18,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'conclusion',
            alignment: 'full',
            hidden: false,
            title: 'Final remarks',
            image: '',
            description: 'Colombian politics of memory are in direct relationship with various and competing infrastructures of memory, facilitating or impeding the circulation of different types of emblematic memory. A better understanding of those relationships will be helpful to build meaningful discussions and bridges of dialogue between actors interested in peacebuilding but separated by their life experiences and the frameworks of meaning they have been socialized into. The political road ahead to build peace in Colombia is not easy. Still, this project is trying to help by signaling different sites of memory while providing a very schematic conceptualization to understand their differences. Hopefully, the map this site provides will grow in the future with new data and with the help of those who are interested in this project. ',
            location: {
                center: [-75.556627, 6.245942],
                zoom: 4,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
