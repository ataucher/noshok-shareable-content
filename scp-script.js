// Mock content data
const mockContent = [
    // New Posts
    {
        id: 'np1',
        title: '900 Series Gauges Reduced Pricing',
        description: 'We are lowering product pricing for the fourth time this year - this time on our 900 Series Pressure Gauges!',
        thumbnail: 'scp-img/900-Series.jpg',
        highResImage: 'scp-img/900-Series.jpg',
        platformContent: {
            facebook: {
                image: 'scp-img/900-Series.jpg',
                description: 'We are lowering product pricing for the fourth time this year - this time on our 900 Series Pressure Gauges! Prices have been reduced on NOSHOK 901 Series (Stainless Steel Case, liquid filled, bottom connection) and 911 Series (Stainless Steel Case, liquid filled, back connection) Pressure Gauges, as well as the addition of more 1-1/2" and 2" gauges available from inventory for faster delivery times. We have also reduced the pricing on several gauge accessories. Contact NOSHOK Corporate Headquarters or your NOSHOK Regional Sales Manager for more details! https://bit.ly/4g3ezOr'
            },
            x: {
                image: 'scp-img/900-Series.jpg',
                description: 'We are lowering product pricing for the 4th time this year - this time on our 900 Series Pressure Gauges! Prices have been reduced on SS liquid filled 901 Series & 911 Series Gauges, as well as the addition of more 1-1/2" & 2" gauges available from inventory for faster delivery times. Contact us for details! https://bit.ly/4g3ezOr'
            },
            linkedin: {
                image: 'scp-img/900-Series.jpg',
                description: 'We are lowering product pricing for the fourth time this year - this time on our popular 900 Series Pressure Gauges! Prices have been reduced on NOSHOK Stainless Steel Case liquid filled 901 Series and 911 Series pressure gauges, as well as the addition of more 1-1/2" and 2" gauges available from inventory for faster delivery times. We have also reduced the pricing on several gauge accessories. Contact NOSHOK Corporate Headquarters or your NOSHOK Regional Sales Manager for more details! https://www.noshok.com/products/pressure-level/pressure-gauges/dial-indicating/900-series-abs-stainless-steel-liquid-filled-pressure-gauges/'
            }
        },
        category: 'new-posts',
        tags: [],
        publishDate: '2025-07-31',
        type: 'image'
    },
    {
        id: 'np2',
        title: 'Water Wastewater Video',
        description: 'Check our new video on NOSHOK\'s instrumentation and assembly solutions for the water and wastewater industry!',
        thumbnail: 'scp-img/water-wastewater-industry.jpg',
        videoId: 'hv6n3KGoOLI',
        embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/hv6n3KGoOLI" title="NOSHOK Product Overview" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        platformContent: {
            facebook: {
                image: 'scp-img/water-wastewater-industry.jpg',
                description: 'Check our new video on NOSHOK\'s instrumentation and assembly solutions for the water and wastewater industry! NOSHOK provides a variety of application-focused products designed to easily integrate into a system and deliver highly accurate, reliable performance. #watertreatment #water #cleanwater #reverseosmosis #drinkingwater #waterpurification #wastewater #waterfiltration #waterpurifier #wastewatertreatment #purewater #waterquality #watertreatmentplant #watersoftener #health #safewater #filterair #environment #filtration #drinkwater #irrigation #hydration #pump #industrial #hardwater #softwater #healthylifestyle #waterindustry #engineering'
            },
            x: {
                image: 'scp-img/water-wastewater-industry.jpg',
                description: 'Check our new video on NOSHOK\'s solutions for the water and wastewater industry! Learn about our application-focused products & assemblies designed to easily integrate into a system and deliver highly accurate, reliable performance. https://bit.ly/4dUSMpP'
            },
            linkedin: {
                image: 'scp-img/water-wastewater-industry.jpg',
                description: 'Check our new video on NOSHOK\'s instrumentation and assembly solutions for the water and wastewater industry! NOSHOK provides a variety of application-focused products designed to easily integrate into a system and deliver highly accurate, reliable performance. #watertreatment #water #cleanwater #reverseosmosis #drinkingwater #waterpurification #wastewater #waterfiltration #waterpurifier #wastewatertreatment #purewater #waterquality #watertreatmentplant #watersoftener #health #safewater #filterair #environment #filtration #drinkwater #irrigation #hydration #pump #industrial #hardwater #softwater #healthylifestyle #waterindustry #engineering'
            }
        },
        category: 'new-posts',
        tags: ['watertreatment', 'water', 'cleanwater'],
        publishDate: '2025-07-31',
        type: 'video'
    },
    {
        id: 'np3',
        title: 'Type 25 & 29 Diaphragm Seals Static',
        description: 'Great news! We\'ve increased stock availability for all Hastelloy and Monel configurations on our NOSHOK Type 25 and Type 29 Diaphragm seals...',
        thumbnail: 'scp-img/type-25-29-diaphragm-seals.jpg',
        highResImage: 'scp-img/type-25-29-diaphragm-seals.jpg',
        platformContent: {
            facebook: {
                image: 'scp-img/type-25-29-diaphragm-seals.jpg',
                description: 'Great news! We\'ve increased stock availability for all Hastelloy and Monel configurations on our NOSHOK Type 25 and Type 29 Diaphragm seals, reducing lead times and delivering even more value to our partners. Learn more about these products! https://bit.ly/4dfnp9q #Innovation #CustomerSupport #NOSHOK'
            },
            x: {
                image: 'scp-img/type-25-29-diaphragm-seals.jpg',
                description: 'Great news! We\'ve increased stock availability for all Hastelloy and Monel configurations on our NOSHOK Type 25 and Type 29 Diaphragm seals, reducing lead times and delivering even more value to our partners. Learn more about these products! #Innovation #CustomerSupport #NOSHOK'
            },
            linkedin: {
                image: 'scp-img/type-25-29-diaphragm-seals.jpg',
                description: 'Discover the nine essential advantages of modern pressure transmitters that make them indispensable in industrial applications. From intelligent diagnostics and robust construction to superior accuracy and reliability, these advanced instruments deliver exceptional performance in demanding environments.'
            }
        },
        category: 'new-posts',
        tags: ['Innovation', 'CustomerSupport', 'NOSHOK'],
        publishDate: '2025-07-31',
        type: 'image'
    },
    {
       id: 'np4',
        title: 'SV Series Connectors',
        description: 'NOSHOK has re-engineered our SV Series Connectors with Integral Valve for significantly easier assembly and ease of use.',
        thumbnail: 'scp-img/sv-series-connectors-static.jpg',
        highResImage: 'scp-img/sv-series-connectors-static.jpg',
        platformContent: {
            facebook: {
                image: 'scp-img/sv-series-connectors-static.jpg',
                description: 'NOSHOK has re-engineered our SV Series Connectors with Integral Valve for significantly easier assembly and ease of use. The patent-pending new design consolidates components to allow users to assemble and attach the connectors to an installation in a few easy steps without requiring rotation of the valve. Learn more! https://bit.ly/3Y97zY7'
            },
            x: {
                image: 'scp-img/sv-series-connectors-static.jpg',
                description: 'NOSHOK has re-engineered our SV Series Connectors with Integral Valve for significantly easier assembly and ease of use. The patent-pending design consolidates components to allow assembly and attachment to an installation in a few easy steps. https://bit.ly/3Y97zY7'
            },
            linkedin: {
                image: 'scp-img/sv-series-connectors-static.jpg',
                description: 'NOSHOK has re-engineered our SV Series Connectors with Integral Valve for significantly easier assembly and ease of use. The patent-pending new design consolidates components to allow users to assemble and attach the connectors to an installation in a few easy steps without requiring rotation of the valve. Learn more! https://www.noshok.com/products/valves/connectors/sv-series-connectors-stabilized-with-integral-block-valve-new/'
            }
        },
        category: 'new-posts',
        tags: [],
        publishDate: '2025-07-31',
        type: 'image'
    },
    // Featured Content
     {
        id: 'fc1',
        title: 'New DIN Form A Electrical Connection for PT40 Series',
        description: 'To further expand available options, NOSHOK is now offering the PT40 Series High Accuracy Pressure Transmitter with a DIN EN 175301-803 Form A electrical connection.',
        thumbnail: 'scp-img/new-DIN-form-A.jpg',
        highResImage: 'scp-img/new-DIN-form-A.jpg',
        platformContent: {
            facebook: {
                image: 'scp-img/new-DIN-form-A.jpg',
                description: 'To further expand available options, NOSHOK is now offering the PT40 Series High Accuracy Pressure Transmitter with a DIN EN 175301-803 Form A electrical connection. This connection can be configured in four versions, to help customers adapt the PT40 to a wide variety of electrical termination requirements. As you are likely aware, NOSHOK\'s legacy 100, 200, 300 and 615 Series pressure transmitters have been replaced by our new re-engineered PT Series Fixed Range pressure transmitters. The new NOSHOK PT Series portfolio provides significant performance enhancements, increased options and availability – all at reduced pricing with improved delivery times! To crossover the legacy transmitter part numbers to the new PT Series, use the PT Crossover Tool on our website. https://www.noshok.com/products/pressure-level/pressure-transducers-transmitters/industrial/pt40-series-high-accuracy-fixed-range-transmitters-transducers/'
            },
            x: {
                image: 'scp-img/new-DIN-form-A.jpg',
                description: 'To further expand available options, NOSHOK is now offering the PT40 Series High Accuracy Pressure Transmitter with a DIN EN 175301-803 Form A electrical connection. Learn more! https://bit.ly/4b7kxdI'
            },
            linkedin: {
                image: 'scp-img/new-DIN-form-A.jpg',
                description: 'To further expand available options, NOSHOK is now offering the PT40 Series High Accuracy Pressure Transmitter with a DIN EN 175301-803 Form A electrical connection. This connection can be configured in four versions, to help customers adapt the PT40 to a wide variety of electrical termination requirements. As you are likely aware, NOSHOK\'s legacy 100, 200, 300 and 615 Series pressure transmitters have been replaced by our new re-engineered PT Series Fixed Range pressure transmitters. The new NOSHOK PT Series portfolio provides significant performance enhancements, increased options and availability – all at reduced pricing with improved delivery times! To crossover the legacy transmitter part numbers to the new PT Series, use the PT Crossover Tool on our website. https://www.noshok.com/products/pressure-level/pressure-transducers-transmitters/industrial/pt40-series-high-accuracy-fixed-range-transmitters-transducers/'
            }
        },
        category: 'featured',
        tags: [],
        publishDate: '2025-07-31',
        type: 'image'
    },
    {
        id: 'fc2',
        title: 'PTI Series Transmitters Static',
        description: 'NOSHOK PTI Series Premier Intelligent Pressure Transmitters offer many design advantages to minimize temperature and position error and provide greater rangeability for less required inventory!',
        thumbnail: 'scp-img/pti-series-static.jpg',
        highResImage: 'scp-img/pti-series-static.jpg',
        platformContent: {
            facebook: {
                image: 'scp-img/pti-series-static.jpg',
                description: 'NOSHOK PTI Series Premier Intelligent Pressure Transmitters offer many design advantages to minimize temperature and position error and provide greater rangeability for less required inventory! Active temperature compensation for fast, accurate readings, 3-year warranty, HART® options available. These transmitters are ideal for general industrial, pulp & paper, water & wastewater, power generation and food & beverage applications. Learn more! bit.ly/3KnqrwB #pressuretransmitter #industrial #papermill #foodandbeverageindustry #dairyindustry #PowerGen #waterandwastewater #watertreatment #NOSHOK'
            },
            x: {
                image: 'scp-img/pti-series-static.jpg',
                description: 'PTI Series Pressure Transmitters offer design advantages to minimize temperature & position error and provide greater rangeability for less required inventory! Learn more http://bit.ly/3KnqrwB #industrial #foodandbeverage #dairyindustry #PowerGen #waterwastewater #NOSHOK'
            },
            linkedin: {
                image: 'scp-img/pti-series-static.jpg',
                description: 'NOSHOK PTI Series Premier Intelligent Pressure Transmitters offer many design advantages to minimize temperature and position error and provide greater rangeability for less required inventory! Active temperature compensation for fast, accurate readings, 3-year warranty, HART® options available. These transmitters are ideal for general industrial, pulp & paper, water & wastewater, power generation and food & beverage applications. Learn more! #pressuretransmitter #industrial #papermill #foodandbeverageindustry #dairyindustry #PowerGen #waterandwastewater #watertreatment #NOSHOK https://www.noshok.com/pti-series-intelligent-industrial-pressure-transmitters-transducers/'
            }
        },
        category: 'featured',
        tags: ['pressuretransmitter','industrial','papermill'],
        publishDate: '2025-07-31',
        type: 'image'
    },
    {
        id: 'fc3',
        title: 'PT Series Transmitters Static',
        description: 'NOSHOK has re-engineered our general purpose fixed range pressure transmitter portfolio, which replaces our legacy 100, 200, 300 and 615 Series transmitters.',
        thumbnail: 'scp-img/pt-series.jpg',
        highResImage: 'scp-img/pt-series.jpg',
        platformContent: {
            facebook: {
                image: 'scp-img/pt-series.jpg',
                description: 'NOSHOK has re-engineered our general purpose fixed range pressure transmitter portfolio, which replaces our legacy 100, 200, 300 and 615 Series transmitters. The new PT Series pressure transmitter portfolio provides significant performance improvements and options – all at reduced pricing! Use our Crossover Tool to cross legacy part numbers to the new PT Series. https://bit.ly/3ORG1D3 Learn more! #pressuremeasurement #pressuresensor #transmitter #NOSHOK'
            },
            x: {
                image: 'scp-img/pt-series.jpg',
                description: 'NOSHOK has re-engineered our general purpose fixed range pressure transmitter portfolio, which replaces our legacy 100, 200, 300 and 615 Series transmitters. The new PT Series pressure transmitter portfolio provides significant performance improvements and options – all at reduced pricing! Use our Crossover Tool to cross legacy part numbers to the new PT Series. https://bit.ly/3ORG1D3 Learn more! #pressuremeasurement #pressuresensor #transmitter #NOSHOK'
            },
            linkedin: {
                image: 'scp-img/pt-series.jpg',
                description: 'NOSHOK announces the new PT Series general purpose pressure transmitter portfolio, which incorporates significant performance improvements & options that are better aligned with customer & market demands – all at reduced pricing! https://bit.ly/3MIOmaV The new PT Series portfolio replaces several legacy NOSHOK transmitters, including the 100, 200, 300 and 615 Series Transmitters. Find out more about this transition! #pressuremeasurement #pressuresensor #transmitter #NOSHOK'
            }
        },
        category: 'featured',
        tags: ['pressuremeasurement','pressuresensor','transmitter','NOSHOK'],
        publishDate: '2025-07-31',
        type: 'image'
    },
    {
       id: 'fc4',
        title: 'PGE20 Series Digital Gauge',
        description: 'More features and benefits at a lower price! The new PGE20 Series General Purpose Digital Gauge replaces our legacy 1000 Series Digital Gauge.',
        thumbnail: 'scp-img/pge20.jpg',
        highResImage: 'scp-img/pge20.jpg',
        platformContent: {
            facebook: {
                image: 'scp-img/pge20.jpg',
                description: 'More features and benefits at a lower price! The new PGE20 Series General Purpose Digital Gauge replaces our legacy 1000 Series Digital Gauge. The optional enhanced features that were available on the 1000 Series Digital Gauge are standard on the PGE20 Series, including configuration software. Learn more! https://bit.ly/3UQmqpW'
            },
            x: {
                image: 'scp-img/pge20.jpg',
                description: 'More features and benefits at a lower price! The new NOSHOK General Purpose Digital Gauge replaces our legacy 1000 Series Digital Gauge and offers standard enhanced features including configuration software! https://bit.ly/3UQmqpW'
            },
            linkedin: {
                image: 'scp-img/pge20.jpg',
                description: 'More features and benefits at a lower price! The new PGE20 Series General Purpose Digital Gauge replaces our legacy 1000 Series Digital Gauge. The optional enhanced features that were available on the 1000 Series Digital Gauge are standard on the PGE20 Series, including configuration software. Learn more!'
            }
        },
        category: 'featured',
        tags: ['digitalgauge','pressuregauge','NOSHOK'],
        publishDate: '2025-07-31',
        type: 'image'
    }
];

// Global state
let scpCurrentModalItems = [];
let scpCurrentItemIndex = 0;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    scpInitializePage();
    scpSetupEventListeners();
});

function scpInitializePage() {
    const newPosts = mockContent.filter(item => item.category === 'new-posts');
    const featuredContent = mockContent.filter(item => item.category === 'featured');
    
    scpRenderThumbnails('scp-new-posts-grid', newPosts.slice(0, 4));
    scpRenderThumbnails('scp-featured-grid', featuredContent.slice(0, 4));
}

function scpRenderThumbnails(containerId, items) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    items.forEach(item => {
        const thumbnailElement = scpCreateThumbnailElement(item);
        container.appendChild(thumbnailElement);
    });
}

function scpCreateThumbnailElement(item) {
    const thumbnail = document.createElement('div');
    thumbnail.className = 'scp-thumbnail';
    thumbnail.onclick = () => scpOpenModalWithItem(item);
    
    thumbnail.innerHTML = `
        <div class="scp-thumbnail-container">
            <img src="${item.thumbnail}" alt="${item.title}" class="scp-thumbnail-image">
            <div class="scp-thumbnail-overlay"></div>
            <div class="scp-thumbnail-title">${item.title}</div>
        </div>
    `;
    
    return thumbnail;
}

function scpSetupEventListeners() {
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        const modal = document.getElementById('scp-modal');
        if (!modal.classList.contains('scp-active')) return;
        
        switch(e.key) {
            case 'Escape':
                scpCloseModal();
                break;
            case 'ArrowLeft':
                scpPreviousItem();
                break;
            case 'ArrowRight':
                scpNextItem();
                break;
        }
    });
}

function scpOpenModal(category) {
    const items = mockContent.filter(item => item.category === category);
    scpCurrentModalItems = items;
    scpCurrentItemIndex = 0;
    
    scpShowModal();
    scpUpdateModalContent();
}

function scpOpenModalWithItem(item) {
    const items = mockContent.filter(content => content.category === item.category);
    scpCurrentModalItems = items;
    scpCurrentItemIndex = items.findIndex(content => content.id === item.id);
    
    scpShowModal();
    scpUpdateModalContent();
}

function scpShowModal() {
    const modal = document.getElementById('scp-modal');
    modal.classList.add('scp-active');
    document.body.style.overflow = 'hidden';
}

function scpCloseModal() {
    const modal = document.getElementById('scp-modal');
    modal.classList.remove('scp-active');
    document.body.style.overflow = '';
}

function scpUpdateModalContent() {
    if (scpCurrentModalItems.length === 0) return;
    
    const currentItem = scpCurrentModalItems[scpCurrentItemIndex];
    
    // Update counter and title
    document.getElementById('scp-modal-counter').textContent = `${scpCurrentItemIndex + 1} of ${scpCurrentModalItems.length}`;
    document.getElementById('scp-modal-title').textContent = currentItem.title;
    
    // Update image or video
    const modalImageSection = document.querySelector('.scp-modal-image-section');
    
    if (currentItem.type === 'video') {
        modalImageSection.innerHTML = `
            <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/${currentItem.videoId}" 
                title="${currentItem.title}" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
                style="min-height: 300px;">
            </iframe>
            <button class="scp-nav-arrow scp-nav-arrow-left" onclick="scpPreviousItem()">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="15,18 9,12 15,6"></polyline>
                </svg>
            </button>
            <button class="scp-nav-arrow scp-nav-arrow-right" onclick="scpNextItem()">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
            </button>
        `;
    } else {
        modalImageSection.innerHTML = `
            <img id="scp-modal-image" src="${currentItem.highResImage}" alt="${currentItem.title}" class="scp-modal-image">
            <button class="scp-nav-arrow scp-nav-arrow-left" onclick="scpPreviousItem()">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="15,18 9,12 15,6"></polyline>
                </svg>
            </button>
            <button class="scp-nav-arrow scp-nav-arrow-right" onclick="scpNextItem()">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
            </button>
        `;
    }
    
    // Update content details
    document.getElementById('scp-modal-content-title').textContent = currentItem.title;
    document.getElementById('scp-modal-description').textContent = currentItem.description;
    
    // Update tags
    const tagsContainer = document.getElementById('scp-modal-tags');
    tagsContainer.innerHTML = '';
    currentItem.tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'scp-tag';
        tagElement.textContent = `#${tag}`;
        tagsContainer.appendChild(tagElement);
    });
    
    // Update download/copy button
    const platformDownloads = document.getElementById('scp-platform-downloads');
    const copyEmbedButton = document.getElementById('scp-copy-embed-button');
    const downloadButton = document.getElementById('scp-download-button');
    
    if (currentItem.type === 'video') {
        // Hide platform downloads and show embed button for videos
        platformDownloads.querySelectorAll('.scp-platform-download-button').forEach(btn => btn.style.display = 'none');
        copyEmbedButton.style.display = 'flex';
        downloadButton.style.display = 'none';
    } else {
        // Show platform downloads and hide embed button for images
        platformDownloads.querySelectorAll('.scp-platform-download-button').forEach(btn => btn.style.display = 'flex');
        copyEmbedButton.style.display = 'none';
        downloadButton.style.display = 'flex';
    }
    
    // Update thumbnail navigation
    scpUpdateThumbnailNavigation();
    
    // Show/hide navigation arrows
    const leftArrow = document.querySelector('.scp-nav-arrow-left');
    const rightArrow = document.querySelector('.scp-nav-arrow-right');
    
    if (scpCurrentModalItems.length > 1) {
        leftArrow.style.display = 'block';
        rightArrow.style.display = 'block';
    } else {
        leftArrow.style.display = 'none';
        rightArrow.style.display = 'none';
    }
}

function scpUpdateThumbnailNavigation() {
    const container = document.getElementById('scp-modal-thumbnails');
    const scrollContainer = container.querySelector('.scp-thumbnails-scroll');
    
    if (scpCurrentModalItems.length <= 1) {
        container.style.display = 'none';
        return;
    }
    
    container.style.display = 'block';
    scrollContainer.innerHTML = '';
    
    scpCurrentModalItems.forEach((item, index) => {
        const thumbnailElement = document.createElement('div');
        thumbnailElement.className = `scp-modal-thumbnail ${index === scpCurrentItemIndex ? 'scp-active' : ''}`;
        thumbnailElement.onclick = () => {
            scpCurrentItemIndex = index;
            scpUpdateModalContent();
        };
        
        thumbnailElement.innerHTML = `<img src="${item.thumbnail}" alt="${item.title}">`;
        scrollContainer.appendChild(thumbnailElement);
    });
}

function scpNextItem() {
    if (scpCurrentModalItems.length === 0) return;
    scpCurrentItemIndex = (scpCurrentItemIndex + 1) % scpCurrentModalItems.length;
    scpUpdateModalContent();
}

function scpPreviousItem() {
    if (scpCurrentModalItems.length === 0) return;
    scpCurrentItemIndex = (scpCurrentItemIndex - 1 + scpCurrentModalItems.length) % scpCurrentModalItems.length;
    scpUpdateModalContent();
}

async function scpDownloadForPlatform(platform) {
    if (scpCurrentModalItems.length === 0) return;
    
    const currentItem = scpCurrentModalItems[scpCurrentItemIndex];
    
    // Get platform-specific content
    const platformContent = currentItem.platformContent && currentItem.platformContent[platform];
    const imageUrl = platformContent ? platformContent.image : currentItem.highResImage;
    const description = platformContent ? platformContent.description : currentItem.description;
    const title = currentItem.title;
    
    try {
        // Download the image
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = `${title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_${platform}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        window.URL.revokeObjectURL(url);
        
        // Create and download a text file with the content details
        const contentText = `Title: ${title}\n\nDescription: ${description}\n\nPlatform: ${platform.charAt(0).toUpperCase() + platform.slice(1)}\n\nHashtags: ${currentItem.tags.map(tag => '#' + tag).join(' ')}`;
        const textBlob = new Blob([contentText], { type: 'text/plain' });
        const textUrl = window.URL.createObjectURL(textBlob);
        
        const textLink = document.createElement('a');
        textLink.href = textUrl;
        textLink.download = `${title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_${platform}_content.txt`;
        document.body.appendChild(textLink);
        textLink.click();
        document.body.removeChild(textLink);
        
        window.URL.revokeObjectURL(textUrl);
        
    } catch (error) {
        console.error('Download failed:', error);
        alert('Download failed. Please try again.');
    }
}

function scpCopyFacebookText() {
    if (scpCurrentModalItems.length === 0) return;
    const currentItem = scpCurrentModalItems[scpCurrentItemIndex];
    const platformContent = currentItem.platformContent && currentItem.platformContent.facebook;
    const textToCopy = platformContent ? platformContent.description : currentItem.description;
    const button = document.getElementById('scp-copy-text-button');
    
    navigator.clipboard.writeText(textToCopy || '').then(() => {
        if (!button) return;
        const original = button.innerHTML;
        button.innerHTML = `
            <i class="ri-check-line" aria-hidden="true"></i>
            <span class="scp-copy-text-label">Copied</span>
        `;
        button.style.backgroundColor = '#dcfce7';
        button.style.borderColor = '#4ade80';
        setTimeout(() => {
            button.innerHTML = original;
            button.style.backgroundColor = '#f9fafb';
            button.style.borderColor = '#e5e7eb';
        }, 1500);
    }).catch(err => {
        console.error('Failed to copy text:', err);
        alert('Failed to copy text. Please try again.');
    });
}

function scpCopyEmbedCode() {
    if (scpCurrentModalItems.length === 0) return;
    
    const currentItem = scpCurrentModalItems[scpCurrentItemIndex];
    
    if (currentItem.type === 'video' && currentItem.embedCode) {
        navigator.clipboard.writeText(currentItem.embedCode).then(() => {
            // Show success feedback
            const button = document.getElementById('scp-copy-embed-button');
            const originalText = button.innerHTML;
            button.innerHTML = `
                <i class="ri-check-line" aria-hidden="true"></i>
                Copied!
        `;
        button.style.backgroundColor = '#10b981';
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.backgroundColor = '#006341';
        }, 2000);
        }).catch(err => {
            console.error('Failed to copy embed code:', err);
            alert('Failed to copy embed code. Please try again.');
        });
    }
}
