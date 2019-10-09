

import {VirtualDoms} from './vnode'
import {TransformReallyDom} from './transformDom'
const content = document.body;
const vdom = new VirtualDoms(content)
const virtrualDom = vdom.startVirturalDom();
console.log(virtrualDom, 'virtrualDom')
const reallyDom = new TransformReallyDom({id: 'really',virtualNode: virtrualDom});
reallyDom.createReallyDom();
