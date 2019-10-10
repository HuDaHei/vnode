// 虚拟dom转化为真实的dom
export class TransformReallyDom {
  constructor({id,virtualNode}) {
    this.id = id; // 容器ID
    this.virtualNode = virtualNode;
    this.content = null;
  }
  // 创建元素节点
  createEleDom(node) {
    let ele = null;
    ele = document.createElement(node.tagName);
    (node.props).map(prop => {
      let [Key,vlaue]  = prop;
      ele.setAttribute(Key,vlaue)
    })
    const element = this.createChildrenDom(node.content,ele)
    return element
  }
  //创建文本节点
  createTextDom(node) {
    let text = null;
    text = document.createTextNode(node.content);
    return text;
  }
  // 创建子元素节点
  createChildrenDom(nodeList,father) {
    nodeList.forEach(node => {
      father.appendChild(this.distinguishCreateDom(node))
    })
    return father;
  }
  // 区分创建节点
  distinguishCreateDom(node) {
    switch(node.type) {
      case 1:
          return this.createEleDom(node);
      case 3:
          return this.createTextDom(node);
      default:
        return null
    }
  }
  // 将虚拟dom转化为真实dom
  createReallyDom() {
    // 获取容器id
    this.virtualNode.forEach(node => {
      this.content = this.distinguishCreateDom(node);
    })
    return this.content;
  }
}
