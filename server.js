const ex = require("express");
const app = ex();
app.get("/proxy",(q,r)=>{
  fetch(q.query.url||"https://example.com").then(r=>r.text()).then(data=>{
  r.send(data)
});
});
app.listen(8000,()=>console.log("やっとCORS回避できたわ"));
