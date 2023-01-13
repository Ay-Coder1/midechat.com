// SIDEBAR
const menuItem = document.querySelectorAll('.menu-item');
// MESSAGES
 const messagesNotification = document.querySelector('#messages-notification');

 const messages = document.querySelector('.messages');
const message =  messages.querySelectorAll('.message')
const messageSearch = document.querySelector('#message-search');

// THEME

const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');




//remove active class from all menu item
const changeActiveItem = () => {
    menuItem.forEach(item => {
        item.classList.remove('active')
    })
}

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').style.display = 'none';
        } 
        else{
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})

// ================MESSAGES  ================
//searches chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    console.log(val);
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
          if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
          } else {
            chat.style.display = 'none';
          }
       
    })
}
//search chat 
messageSearch.addEventListener('keyup', searchMessage);

//messages clicked
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
    messages.style.boxShadow = 'none';
    }, 2000);
})


// THEME/DISPLAY CUSTOMIZATION
// open modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}
// closes modal
const closeThemeModal = (e) => {
   if(e.target.classList.contains('customize-theme')){
    themeModal.style.display = 'none';
   }
}
// close modal
themeModal.addEventListener('click', closeThemeModal);


theme.addEventListener('click', openThemeModal);

// ====================== FONTS ========================
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active')
    })
}


fontSizes.forEach(size => {
     size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active')
        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('--sticky-left', '5.4rem');
            root.style.setProperty('--sticky-right', '5.4rem');
        } else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('--sticky-left', '5.4rem');
            root.style.setProperty('--sticky-right', '-7rem');
        }else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('--sticky-left', '-2rem');
            root.style.setProperty('--sticky-right', '-17rem');
        }else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('--sticky-left', '-5rem');
            root.style.setProperty('--sticky-right', '-25rem');
        }else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('--sticky-left', '-12rem');
            root.style.setProperty('--sticky-right', '-35rem');
        }

        document.querySelector('html').style.fontSize = fontSize;
     })

})


const changeActiveColorClasss = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

// change color
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
     let Primary;
     changeActiveColorClasss();

        if(color.classList.contains('color-1')){
            PrimaryHue = 252;
        }else if(color.classList.contains('color-2')){
            PrimaryHue = 52;
        }else if(color.classList.contains('color-3')){
            PrimaryHue = 352;
        }else if(color.classList.contains('color-4')){
            PrimaryHue = 152;
        }else if(color.classList.contains('color-5')){
            PrimaryHue = 202;
        }
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue',PrimaryHue);
    })
})

// BACKGROUND 
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// changes color
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

Bg1.addEventListener('click', () => {
    Bg1.classList.add('active');
    Bg2.classList.remove('active');
    Bg3.classList.remove('active')

    window.location.reload();
})

Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    // active class 
    Bg2.classList.add('active');

    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})


Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    // active class 
    Bg2.classList.add('active');

    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})


// CREATE ACCOUNT

