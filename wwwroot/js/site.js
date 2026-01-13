const photos = [
    { title: "Eye to Eye", description: "Juvenile Black-and-chestnut Eagles have white underparts with dark speckles and a dark back—a very different appearance from the adult plumage, which is mostly black with a chestnut breast. In this photo, I captured an incredibly striking moment: our eyes locked on each other, frozen in perfect clarity.", love: "That visit to Birds of Prey will forever be memorable because of this perfectly timed shot between this eagle and myself. One of my best shots by far..", image: "https://live.staticflickr.com/65535/55012048159_02c57d8ebf_b.jpg" },
    { title: "The Coos", description: "Highland cattle are an ancient Scottish breed, known for their long horns and shaggy double coat. Their thick, flowing hair helps them withstand harsh climates and protects their eyes from wind, rain, and insects. They are one of the oldest registered cattle breeds, with written records tracing back to the 18th century.", love: "During our time in North Yorkshire, I caught this lovely family photo—the parent staring at me while the calf simply relaxes.", image: "https://live.staticflickr.com/65535/55011792536_caeeb37852_b.jpg" },
    { title: "What Time?", description: "The hotel, originally named the North British Station Hotel, opened in 1902 and is located on Princes Street, adjacent to Waverley Railway Station. Its clock tower is famously set three minutes fast to help those rushing to the nearby station catch their trains. The only time the clock shows the correct time is on Hogmanay (New Year's Eve) for the city's celebrations. Standing at 190 feet (58 metres) tall, the tower is a notable feature of Edinburgh's skyline.", love: "Standing from Calton Hill, I found the perfect composition of the leaves surrounding the tower.", image: "https://live.staticflickr.com/65535/55012100510_83e778ebe2_b.jpg" },
    { title: "Hidden in Plain Sight", description: "Koalas are found in the eucalyptus forests of eastern Australia. Their diet consists almost entirely of eucalyptus leaves, which are toxic to most other animals. They have thick, woolly grey fur with a cream-coloured chest and strong, clawed feet suited to life in the trees. Due to their low-energy diet, koalas typically sleep for 18 to 22 hours a day.", love: "First day in Edinburgh, visiting Edinburgh Zoo, I caught this magnificent moment of the Koala waking up and staring directly at me.", image: "https://live.staticflickr.com/65535/55010905167_865a1c43b5_b.jpg" },
    { title: "Modern Heights", description: "This image captures a worm's-eye view, looking up between dark, imposing buildings. The architecture features sharp lines and reflective glass façades, typical of commercial high-rise developments in urban financial centres.", love: "Right in the heart of London and all I had to do was look up to find some interesting shapes and designs.", image: "https://live.staticflickr.com/65535/55012050894_88f628d9af_b.jpg" },
    { title: "Smoke Show", description: "Mustweld Motorsport Drift Team in their Volkswagen Golf driven by James Briggs at Gravity Show UK! Putting on an absolutely spectacular show for the spectators and this incredible smokey end to the show. ", love: "Attending the Gravity Car show in Birmingham was brilliant, but this photo was on another level. This shot is like a monster revealing its face through the smoke. The team's VW slowly emerging through the thick haze creates such a powerful image.", image: "https://live.staticflickr.com/65535/55010973682_ef14bb251d_b.jpg" },
    { title: "ELMS LMP3", description: "The LMP3 is an entry-level prototype class in the European Le Mans Series (ELMS) designed as a training ground for drivers and teams to progress in endurance racing. The 2025 season introduced a new generation of cars featuring a standard Toyota twin-turbo V6 engine.", love: "What an amazing circuit, with the perfect moment. The lead car captured in sharp clarity in the foreground, while its sister car was caught on corner exit in the background.", image: "https://live.staticflickr.com/65535/55012167990_f5c21a0ffc_b.jpg" },
    { title: "ELMS GT3", description: "The Iron Dames are a pioneering, all-female motorsport project founded by Deborah Mayer in 2018, aiming to 'Race to Inspire' by supporting women across all motorsport roles and proving female drivers can win at the highest levels, notably competing with Porsche in GT3 racing", love: "One of my favourite shots from the weekend at Silverstone—both for its clarity and for capturing an incredible team.", image: "https://live.staticflickr.com/65535/55010973677_8311ca7cbd_b.jpg" }
];

function openModal(index) {
    const modal = document.getElementById('photoModal');
    const photo = photos[index];
    document.getElementById('modalTitle').textContent = photo.title;
    document.getElementById('modalDescription').textContent = photo.description;
    document.getElementById('modalLove').textContent = photo.love;

    // Display the actual image in the modal
    const imageContainer = document.querySelector('.modal-image');
    if (photo.image) {
        imageContainer.innerHTML = `<img src="${photo.image}" alt="${photo.title}" style="width:100%;height:100%;object-fit:contain;">`;
    } else {
        imageContainer.innerHTML = `<div class="modal-image-placeholder">${photo.title.toUpperCase()}</div>`;
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('photoModal').classList.remove('active');
    document.body.style.overflow = '';
}

document.getElementById('photoModal').addEventListener('click', function (e) { if (e.target === this) closeModal(); });
document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });

// Disable right-click on the entire page to protect images
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    return false;
});