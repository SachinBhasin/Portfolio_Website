const collectionsData = [
    // ↓ Add new events here ↓
    {
        location: "Silverstone",
        date: "2026 April",
        name: "British GT",
        comingSoon: true,
        flickrUrl: null,
        photos: []
    },
    {
        location: "Birmingham",
        date: "2026 Aug",
        name: "Gravity",
        comingSoon: true,
        flickrUrl: null,
        photos: []
    },
    {
        location: "Silverstone",
        date: "2025 Sept",
        name: "ELMS",
        comingSoon: false,
        flickrUrl: "https://www.flickr.com/photos/204067982@N08/albums/72177720331622806",
        photos: [
            "https://live.staticflickr.com/65535/55057301463_1387d0f848_o.jpg?s=eyJpIjo1NTA1NzMwMTQ2MywiZSI6MTc2OTE5OTIxMSwicyI6IjIyMzg5NTg1MjhmNmFmYWVhNTllNjExNjJlNDJlNmY0ODZlYzIyM2EiLCJ2IjoxfQ",
            "https://live.staticflickr.com/65535/55057471440_a5e6ffdec1_o.jpg?s=eyJpIjo1NTA1NzQ3MTQ0MCwiZSI6MTc2OTE5OTIxMywicyI6ImI0MmEzYjM2NjYwNzg5ODQxM2EwNjdlZTY3OTkyYzQ5ZTg1ZDEzNTIiLCJ2IjoxfQ",
            "https://live.staticflickr.com/65535/55057121946_de29425cbb_o.jpg?s=eyJpIjo1NTA1NzEyMTk0NiwiZSI6MTc2OTE5OTIxNCwicyI6IjY3YjkxMmNjMThkYjgwMzQ4N2IwOTUzNjQ2MmI4ODA0ZDk2OWUxY2QiLCJ2IjoxfQ",
        ]
    },
    {
        location: "Birmingham",
        date: "2025 Aug",
        name: "Gravity",
        comingSoon: false,
        flickrUrl: "https://www.flickr.com/photos/204067982@N08/albums/72177720331646749",
        photos: [
            "https://live.staticflickr.com/65535/55056211367_3c880f2b55_o.jpg?s=eyJpIjo1NTA1NjIxMTM2NywiZSI6MTc2OTE5OTI4NCwicyI6IjZiZjE4NGEzM2JhMzRhZDYxMjVmYjk0OWFlOWVjNTNhZGNjYmQ1MGEiLCJ2IjoxfQ",
            "https://live.staticflickr.com/65535/55057301573_2c3bdbb35a_o.jpg?s=eyJpIjo1NTA1NzMwMTU3MywiZSI6MTc2OTE5OTI4NiwicyI6ImJlMWFhYzBmY2VhYmRkOWU2NjM3OGQwOGJkODUyOTk4M2IwNWY5ZDkiLCJ2IjoxfQ",
            "https://live.staticflickr.com/65535/55057373144_c39e749758_o.jpg?s=eyJpIjo1NTA1NzM3MzE0NCwiZSI6MTc2OTE5OTI4NywicyI6IjhhYWYwMzliOTdlZmUwNDcwZTYzOTA1MTkxN2U4MDUxNTE1NDFlZmMiLCJ2IjoxfQ",
        ]
    },
    {
        location: "London",
        date: "2025 July",
        name: "Day Trip",
        comingSoon: false,
        flickrUrl: "https://www.flickr.com/photos/204067982@N08/albums/72177720331638023",
        photos: [
            "https://live.staticflickr.com/65535/55056211227_5eb1d6633c_o.jpg?s=eyJpIjo1NTA1NjIxMTIyNywiZSI6MTc2OTE5OTMyNSwicyI6ImEzNjY3OGNmOGEyNDVhZGRhMjNiYWUzOTc3MWU5ZDI2YWZkZWI5OWQiLCJ2IjoxfQ",
            "https://live.staticflickr.com/65535/55056211217_163595aae3_o.jpg?s=eyJpIjo1NTA1NjIxMTIxNywiZSI6MTc2OTE5OTMyOSwicyI6IjM5NzMyZWZhZWZkYWRiNzQ2ZmUyZjMzMDc5ZjllODg5MWJmYjY4MWEiLCJ2IjoxfQ",
            "https://live.staticflickr.com/65535/55057122056_4c7cb1f2a3_o.jpg?s=eyJpIjo1NTA1NzEyMjA1NiwiZSI6MTc2OTE5OTMyNywicyI6Ijk2NDMwYWQ3MDE0MjVmYTYyZjIwOThiMjYxYTcxYWNlNTJlZmI1YWUiLCJ2IjoxfQ",
        ]
    },
    {
        location: "Silverstone",
        date: "2025 March",
        name: "British GT Media Day",
        comingSoon: false,
        flickrUrl: "https://www.flickr.com/photos/204067982@N08/albums/72177720331622841",
        photos: [
            "https://live.staticflickr.com/65535/55057122031_041a088c22_o.jpg?s=eyJpIjo1NTA1NzEyMjAzMSwiZSI6MTc2OTE5OTU1OSwicyI6Ijg1MzY5ZGY4NzkxNTE0NGIxZWI3ZWIxMTdiOTg1N2M4MDViYzNlZTEiLCJ2IjoxfQ",
            "https://live.staticflickr.com/65535/55057471540_b9cd00f732_o.jpg?s=eyJpIjo1NTA1NzQ3MTU0MCwiZSI6MTc2OTE5OTU3MCwicyI6IjE5Yjc4MTM0NDk1YjFiZWFhOTFiZDc2NDU5ZDVjNGE0NTZiNjMyOTYiLCJ2IjoxfQ",
            "https://live.staticflickr.com/65535/55056211307_c1b3f652d3_o.jpg?s=eyJpIjo1NTA1NjIxMTMwNywiZSI6MTc2OTE5OTU3OSwicyI6IjQ3NzU3MzM2OGNkMjExZTA5YzIyYWM0MmY5YmJjY2EyNmE3ZWI3N2EiLCJ2IjoxfQ",
        ]
    },
    {
        location: "Donington Park",
        date: "2024 Sept",
        name: "British GT",
        comingSoon: false,
        flickrUrl: "https://www.flickr.com/photos/204067982@N08/albums/72177720331646784",
        photos: [
            "https://live.staticflickr.com/65535/55057122006_82e6d09167_o.jpg?s=eyJpIjo1NTA1NzEyMjAwNiwiZSI6MTc2OTE5OTM3NSwicyI6IjIxNDYyODY4NzQ4OTIzNDc3MTU1YjkyMzRhNWQ5YjQwYmE3ZWYwNWUiLCJ2IjoxfQ",
            "https://live.staticflickr.com/65535/55056211297_562256ec09_o.jpg?s=eyJpIjo1NTA1NjIxMTI5NywiZSI6MTc2OTE5OTM3NywicyI6IjE5ZmYyMzBlN2NhNmQwZjlhNzM4OTkwYmEzNmQwYWNlNGMxZTc3ZGUiLCJ2IjoxfQ",
            "https://live.staticflickr.com/65535/55057373074_ff1a95b316_o.jpg?s=eyJpIjo1NTA1NzM3MzA3NCwiZSI6MTc2OTE5OTM3OSwicyI6IjdiNGViMGE0YjZkNzE1ZDZlM2NjNTUwZWZiMDc5MzNmN2Y0MGU4NWIiLCJ2IjoxfQ",
        ]
    },
    {
        location: "Edinburgh",
        date: "2024 July",
        name: "Birthday",
        comingSoon: false,
        flickrUrl: "https://www.flickr.com/photos/204067982@N08/albums/72177720331622861",
        photos: [
            "https://live.staticflickr.com/65535/55012100510_6ee3e90294_o.jpg?s=eyJpIjo1NTAxMjEwMDUxMCwiZSI6MTc2OTE5OTQxNiwicyI6IjliZjBjYWNjOGU3M2ZkMzQzMzhkZjgwZjJhNGQ0NWU3MjEwZWRhZDUiLCJ2IjoxfQ",
            "https://live.staticflickr.com/65535/55010905167_da12c2b268_o.jpg?s=eyJpIjo1NTAxMDkwNTE2NywiZSI6MTc2OTE5OTQxNywicyI6ImMxOTU2YTM0YjdlYzA0OTU0Zjc0ZGIzNjZmOTJiNzBkYWQwOTY0ODgiLCJ2IjoxfQ",
            "https://live.staticflickr.com/65535/55019449743_891940100c_o.jpg?s=eyJpIjo1NTAxOTQ0OTc0MywiZSI6MTc2OTE5OTQxOSwicyI6Ijg4OTIxOWZjNGIzOTgxMzQ4MWZlN2U3MjdiZDFiODYzZmVkZmY2MDMiLCJ2IjoxfQ",
        ]
    },
    {
        location: "Silverstone",
        date: "2024 April",
        name: "British GT",
        comingSoon: false,
        flickrUrl: "https://www.flickr.com/photos/204067982@N08/albums/72177720331638078",
        photos: [
            "https://live.staticflickr.com/65535/55057373119_f1fcc37f59_o.jpg?s=eyJpIjo1NTA1NzM3MzExOSwiZSI6MTc2OTE5OTU4OSwicyI6ImE4Yzk0NGZjOTY5ZGI0NTNmYmEwODczZWI5NjIxZDUwMjRjNDZjZjQiLCJ2IjoxfQ",
            "https://live.staticflickr.com/65535/55017876808_6e72f09834_o.jpg?s=eyJpIjo1NTAxNzg3NjgwOCwiZSI6MTc2OTE5OTU5OCwicyI6ImY0YTZiOWQ3ZmIyYmU4NGI3ZTYzMmM4NTMxOWRiZjFjZDg1MzllNWUiLCJ2IjoxfQ",
            "https://live.staticflickr.com/65535/55057373009_0790761409_o.jpg?s=eyJpIjo1NTA1NzM3MzAwOSwiZSI6MTc2OTE5OTYwNywicyI6IjViZTYzZWQ4YzU4ZTk0Mjk0YzhjMWNmYzQzZjgzMmViYzVjMzlmMmEiLCJ2IjoxfQ",
        ]
    },
    {
        location: "North Yorkshire",
        date: "2023 June",
        name: "Holiday",
        comingSoon: false,
        flickrUrl: "https://www.flickr.com/photos/204067982@N08/albums/72177720331646834",
        photos: [
            "https://live.staticflickr.com/65535/55011861521_06309b1e67_o.jpg?s=eyJpIjo1NTAxMTg2MTUyMSwiZSI6MTc2OTE5OTYxNiwicyI6IjE5MGMzZTc4ODZjMjQxZjlhNDE0ZTgyYzAwYWExOTg2ZmE5MjllYTUiLCJ2IjoxfQ",
            "https://live.staticflickr.com/65535/55018015059_17c77fb093_o.jpg?s=eyJpIjo1NTAxODAxNTA1OSwiZSI6MTc2OTE5OTYyNSwicyI6ImNkNzMzY2FmZGYxNGFlOGM2MDk2NjAzY2YwNmZmM2U3N2M4NmM1ZjYiLCJ2IjoxfQ",
            "https://live.staticflickr.com/65535/55012048159_94d84303a1_o.jpg?s=eyJpIjo1NTAxMjA0ODE1OSwiZSI6MTc2OTE5OTYzNiwicyI6ImU2YjhiNjAyYmY3YjM1Y2MxOWVhZTdhNWYzYWU2NmQ2ZTdlOTBhODAiLCJ2IjoxfQ",
        ]
    }
];
