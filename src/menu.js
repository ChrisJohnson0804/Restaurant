const menu = document.createElement('div');

const menuItem = (imageUrl, description) => {

    let image = document.createElement('img');
    image.setAttribute('src', imageUrl);

    return {image, description};
}

export default menu;