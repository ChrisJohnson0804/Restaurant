const home = document.createElement('div');
const blurb = document.createElement('p');
blurb.textContent = "Hi there! Name's Billy. Started a business on my boat. We catch all kinds of fish and critters and they sure are DE LICIOUS. Also who doesn't like a good buffet? Stop by any time, we're just a swim across the ole swamp."

const ownerPic = document.createElement('img');
    ownerPic.setAttribute('src', 'https://media.wwltv.com/assets/WWL/images/6c45ac3f-2fdf-4760-ac92-db459b8e776c/6c45ac3f-2fdf-4760-ac92-db459b8e776c_1920x1080.jpg');
ownerPic.width = "450";
ownerPic.height = "300";
home.appendChild(blurb);
home.appendChild(ownerPic);

export default home;