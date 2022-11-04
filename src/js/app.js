import pageObj from './pageObj';
import Dom from './Dom';
import Action from './Action';

const page = new Dom(pageObj);
page.init();

const act = new Action();
act.init();
