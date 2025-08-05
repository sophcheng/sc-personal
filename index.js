const containers = {
    sophware: "sophware-container",
    design: "design-container",
    about: "about-container"
};

const portalElements = {};

// Get nav portals & children
for (const [key, id] of Object.entries(containers)){
    const container = document.getElementById(id);
    portalElements[key] = {
        container: container,
        title: container.querySelector('h2')
    };
}

const updateOnHover = (div) => {
    console.log(`Hover on: ${div}`);
    portalElements[div].title.style.color = "bisque";
    portalElements[div].container.style.backgroundColor = "navy";
}

const resetHover = (div) => {
    console.log(`Mouse out from: ${div}`);
    portalElements[div].title.style.color = "#873d73";
    portalElements[div].container.style.backgroundColor = "bisque";
}

for (const key in portalElements) {
    const { container } = portalElements[key];
    const img = container.querySelector('img');
    
    container.addEventListener('mouseover', () => updateOnHover(key));
    container.addEventListener('mouseout', () => resetHover(key));
    
    const originalSrc = img.src;
    let hoverSrc = '';
    switch(key) {
        case 'sophware':
            hoverSrc = 'imgs/ailuroPlanets.png';
            break;
        case 'design':
            hoverSrc = 'imgs/jinu.png';
            break;
        case 'about':
            hoverSrc = 'imgs/iconAlt.png';
            break;
    }
    img.addEventListener('mouseover', () => { img.src = hoverSrc; });
    img.addEventListener('mouseout', () => { img.src = originalSrc; });
}
