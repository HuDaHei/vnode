/** 
 * @description 记录鼠标事件 滚动下拉
*/
export class MouseEventsRecord {
  constructor({content}) {
    this.content = content;
    this.distance = [];
  }
  base(type,fn) {
    this.content.addEventListener(type,fn)
  }
  // 
  scroll() {
    const fn = (e) => {
      const top = this.content.documentElement.scrollTop;
      this.distance.push(top)
    }
    this.base('scroll',fn)
  }
  //开始记录
  start() {
    this.scroll();
  }
}
