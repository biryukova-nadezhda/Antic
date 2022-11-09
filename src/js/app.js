import pageObj from './pageObj';
import Dom from './Dom';
import Action from './Action';
import Chat from './Chat';

const page = new Dom(pageObj);
page.init();

const act = new Action();
act.init();

const chat = new Chat('header__chat', 'antic');
chat.init();
