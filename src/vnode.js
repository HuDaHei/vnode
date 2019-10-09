/** 
 * @description 将真实dom转化为虚拟dom树 暂时不处理canvas 和svg等元素
*/
export class VirtualDoms {
  constructor(node) {
    this.node = node;
    this.vdom = [];
  }
  // 文本节点转化
  virtualText(textNode) {
    const value = textNode.nodeValue;
    if(/^\s+$/.test(value)) {
      return null
    } else {
      const vText = {
        type: textNode.nodeType,
        content: value
      }
      return vText;
    }
  }
  // 元素节点转化
  virtualElement(elementNode) {
    const tempProps =  Array.from(elementNode.attributes).map(attr => {
      return [attr.nodeName,attr.nodeValue]
    })
    let vEle = {
      type: elementNode.nodeType,
      tagName: elementNode.tagName,
      props: [...tempProps],
      content: this.getChildrenNode(elementNode.childNodes)
    }
    if(elementNode.tagName.includes('SCRIPT')) {
      vEle = null;
    }
    return vEle
  }
  // 获取子元素
  getChildrenNode(childNodes = []) {
    const children = [];
    if(Boolean(childNodes.length)) {
      childNodes.forEach(node => {
        const newChilder = this.distinguishDom(node)
        if(Boolean(newChilder)) {
          children.push(newChilder)
        }
      })
      return children;
    } else {
      return children
    }
  }
  //区分是文本节点 还是元素节点
  distinguishDom(node) {
    switch(node.nodeType) {
      case 1:
          return this.virtualElement(node);
      case 3:
          return this.virtualText(node);
      default:
        return null
    }
  }
  // 开始转化
  startVirturalDom() {
    const childrenList = this.node.childNodes;
    childrenList.forEach(node => {
      const newNode= this.distinguishDom(node)
      if(Boolean(newNode)) {
        this.vdom.push(newNode)
      }
    })
    return this.vdom
  }
}
