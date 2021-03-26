var config = {
    style: 'mapbox://styles/riconogu/cklli56880z4x17s4764kkeu3',
    accessToken: 'pk.eyJ1Ijoicmljb25vZ3UiLCJhIjoiY2tqaW00aHRpM3hueDJ4cDk3anUyM212dyJ9.gRNG0VCNG0LfVgciQtC07A',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Mapping Colombian Emblematic Memories',
    subtitle: 'Politics of memory after 60 years of inner armed conflict',
    byline: 'Juan Carlos Rico Noguera',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'introduction',
            alignment: 'left',
            hidden: false,
            title: 'Mapping Colombian Emblematic Memories',
            image: 'src\images\Museo de la memoria histórica.jpeg',
            description: 'Introduction to the project',
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
            id: 'emblematic-memories',
            alignment: 'right',
            hidden: false,
            title: 'Emblematic Memories',
            image: 'images\Museo_de_la_Memoria_y_los_Derechos_Humanos.jpg',
            description: 'I define embelmatic memories and I provide a reference of Stern',
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
            id: 'politics-of-memory',
            alignment: 'left',
            hidden: false,
            title: 'Infrastructures of Memory and politics of memory',
            image: 'C:\Users\juan8\OneDrive - Michigan State University\Documents\GitHub\storytelling\src\images\Valle de los caidos.jpg',
            description: 'I introduce both concepts while I also quote',
            location: {
                center: [-4.155333711, 40.64187302],
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
            id: 'Colombian-Inner-Armed-Conflict',
            alignment: 'left',
            hidden: false,
            title: 'Infrastructures of Memory and politics of memory',
            image: 'C:\Users\juan8\OneDrive - Michigan State University\Documents\GitHub\storytelling\src\images\Valle de los caidos.jpg',
            description: 'I introduce both concepts while I also quote',
            location: {
                center: [-75.556627, 6.245942],
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
            id: 'memory-building-teatro-colon',
            alignment: 'left',
            hidden: false,
            title: 'Infrastructures of Memory and politics of memory',
            image: 'C:\Users\juan8\OneDrive - Michigan State University\Documents\GitHub\storytelling\src\images\Valle de los caidos.jpg',
            description: 'I introduce both concepts while I also quote',
            location: {
                center: [-74.07439864513638, 4.596987426398634],
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
            id: 'heroic-memory-institutional-memory',
            alignment: 'left',
            hidden: false,
            title: 'Infrastructures of Memory and politics of memory',
            image: 'C:\Users\juan8\OneDrive - Michigan State University\Documents\GitHub\storytelling\src\images\Valle de los caidos.jpg',
            description: 'I introduce both concepts while I also quote',
            location: {
                center: [-75.28963327, 2.916486975],
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
            id: 'dissident-memory',
            alignment: 'left',
            hidden: false,
            title: 'Infrastructures of Memory and politics of memory',
            image: 'C:\Users\juan8\OneDrive - Michigan State University\Documents\GitHub\storytelling\src\images\Valle de los caidos.jpg',
            description: 'I introduce both concepts while I also quote',
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
            title: 'Infrastructures of Memory and politics of memory',
            image: 'C:\Users\juan8\OneDrive - Michigan State University\Documents\GitHub\storytelling\src\images\Valle de los caidos.jpg',
            description: 'I introduce both concepts while I also quote',
            location: {
                center: [-75.186258, 6.14453],
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
            id: 'conclusion',
            alignment: 'left',
            hidden: false,
            title: 'Infrastructures of Memory and politics of memory',
            image: 'C:\Users\juan8\OneDrive - Michigan State University\Documents\GitHub\storytelling\src\images\Valle de los caidos.jpg',
            description: 'I introduce both concepts while I also quote',
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
