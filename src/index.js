

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
// window.scrollTo(390,0)
document.getElementById('play').addEventListener('click', (e)=> {

  let dis = JSON.parse(JSON.stringify(record.distance));
  let newDis = dis.reverse();
  const tempC = document.getElementById('bbb')
  console.log(tempC)
  newDis.forEach(top => {
    // document.body.scrollTo(top, 0)
    window.scrollTo(top,0)
  })
})