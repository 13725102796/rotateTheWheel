const koa=require('koa');
const static=require('koa-static');

var server=koa();

function rnd(n,m){
  return Math.floor(Math.random()*(m-n)+n);
}

server.use(function *(next){
  if(this.req.url.indexOf('/chou')!=-1){
    var n=Math.random();
    if(n<0.01){ //1%
      this.body='1';
    }else if(n<0.025){ //1.5%
      this.body='2';
    }else if(n<0.045){ //2%
      this.body='3';
    }else{
      this.body='0';
    }
  }else{
    yield next;
  }
});

server.use(static('./www'));

server.listen(8081);
