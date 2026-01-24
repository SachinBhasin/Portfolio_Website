const timelineData = [
    {
        title: "The Beginning",
        date: "July 2000",
        description: "Born in the Netherlands, the first of three countries I'd call home."
    },
    {
        title: "The First Move",
        date: "May 2004",
        description: "Another move, another country. We travlled around 6,000 miles, to get settled in Doha, the capital of Qatar. It was a massive change from the Netherlands, not least because of the extreme heat (highs of 50°C in summer), but it was a life-changing experience nonetheless. The memories I made in that desert city will be cherished for life.",
    },
    {
        title: "The Second Move",
        date: "August 2015",
        description: "Having just finished the first year of my GCSEs, I was told to prepare for another move—another 6,000 miles, but this time to the UK. So much had to change: selling my belongings and starting over in a place I'd never been. The transition was jarring, but it also felt like a fresh start—one that took me a while to fully accept.",
    },
    {
        title: "Photography Instagram Created",
        date: "July 2017",
        description: "After realising a noticeable trend that photographers were creating Instagram accounts, I thought I ought to jump on the bandwagon and created my own account. That account went on to become @Sachin.Optics today.",
    },
    {
        title: "Off to University",
        date: "September 2019",
        description: "Finally, I began my university degree—something many had praised as an experience like no other, where you learn so much valuable information. It was stressful, fun, and full of memories to both keep and forget!",
    },
    {
        title: "Graduation Day",
        date: "January 2024",
        description: "I finished my Computer Science degree in 2023, but the graduation ceremony wasn't until 2024. When that day finally came, I walked across the stage while family and friends cheered, collecting that piece of paper confirming I'd done it!",
    },
    {
        title: "Birthday Trip",
        date: "July 2024",
        description: "Having graduated from university and approaching the end of my first year working, I took my first solo trip to Edinburgh. That city ignited my passion for photography in ways I hadn't expected.",
        image: "https://live.staticflickr.com/65535/55057175631_869b776ac7_b.jpg",
        momentsLink: "https://www.flickr.com/photos/204067982@N08/albums/72177720331622861",
    },
    {
        title: "Website Planning",
        date: "December 2025",
        description: "Having recently lost my job to AI, I decided to expand my photography presence. With limited connections and a small Instagram following, I finally joined the club and started the work to create my own website. I had a Computer Science degree, after all—time to put it to use. The planning phase began: colours, style, layout, and more.",
    },
    {
        title: "The Present Day",
        date: "January 2026",
        description: "January 2026. The website launched, marking the start of this new chapter. I'm shooting at every opportunity and learning as I go. This year is about building the foundations—one photo, one conversation, one step at a time.",
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const timeline = document.getElementById('zigzagTimeline');
    if (!timeline) return;
    
    let html = '';
    
    timelineData.forEach((item, index) => {
        // Build image HTML if exists
        const imageHtml = item.image 
            ? `<img src="${item.image}" alt="${item.title}" class="zigzag-image">`
            : '';
        
        // Build links HTML if momentsLink exists
        let linksHtml = '';
        if (item.momentsLink) {
            linksHtml = '<div class="zigzag-links">';
            linksHtml += `<a href="${item.momentsLink}" class="zigzag-link"${item.momentsLink.startsWith('http') ? ' target="_blank"' : ''}>View Moments Captured</a>`;
            linksHtml += '</div>';
        }
        
        html += `
            <div class="zigzag-item">
                <div class="zigzag-marker"></div>
                <div class="zigzag-card">
                    ${imageHtml}
                    <span class="zigzag-date">${item.date}</span>
                    <h3 class="zigzag-title">${item.title}</h3>
                    <p class="zigzag-description">${item.description}</p>
                    ${linksHtml}
                </div>
            </div>
        `;
    });
    
    timeline.innerHTML = html;
});

// Disable right-click
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
});
