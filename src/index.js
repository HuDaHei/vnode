

import {VirtualDoms} from './vnode'
import {TransformReallyDom} from './transformDom'
import { MouseEventsRecord } from './recordmouseEvent'
const content = document.documentElement;
const vdom = new VirtualDoms(content)
const virtrualDom = vdom.startVirturalDom();
const transformDom = new TransformReallyDom({virtualNode: virtrualDom});
const reallyDom = transformDom.createReallyDom();
const record = new MouseEventsRecord({content:document})
record.start()
console.log(virtrualDom, 'virtrualDom')
console.log(reallyDom,'reallyDom')
document.getElementById('play').addEventListener('click', (e)=> {

  const dis = record.distance;
  console.log(dis)
  dis.forEach(top => {
    document.documentElement.scrollTop = top;
  })
})