const res=document.getElementById('res');
function run(){
let txt=document.getElementById('input').value.toLowerCase();
let val=document.getElementById('value').value;
let out='Analysis:\n';

if(txt.includes('alloc')) out+='- Memory allocation pattern detected\n';
if(txt.includes('pointer')) out+='- Pointer safety context\n';
if(txt.includes('compile')) out+='- Compile-time execution detected\n';
if(txt.includes('async')) out+='- Async IO behavior\n';

if(val){
  out+='- Metric: '+val+'\n';
}

out+='- Optimize memory, compile-time, and performance behavior\n';

res.innerText=out;
}