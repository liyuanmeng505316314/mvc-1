import $ from 'jquery'
import './app2.css'


const mvc_view={
    html:`<div id="app2">
    <ul class="tabBar" >
        <li id="tabBar1">1</li>
        <li id="tabBar2">2</li>
    </ul>
    <ul class="tabContent">
        <li id="tabContent1">内容1</li>
        <li id="tabContent2">内容2</li>
    </ul>
    </div>`,
    init(){
        $(mvc_view.html).appendTo('#globalPage')
    },render (){
        if(mvc_model.x===1){
           mvc_control.tc1.addClass('active');
           mvc_control.tc2.removeClass('active');
        }else if((mvc_model.x===2)){
            mvc_control.tc1.removeClass('active');
            mvc_control.tc2.addClass('active');
        }
     }
}
mvc_view.init();

const mvc_model={
    init(){
        if(!localStorage.getItem('x')){localStorage.setItem('x',0)}
        this.x=parseInt(localStorage.getItem('x'))
    },
    update(){
        localStorage.setItem('x',mvc_model.x)
    }
}
mvc_model.init()

const mvc_control={
    tb1 : $('#tabBar1'),
    tc1 : $('#tabContent1'),
    tb2 : $('#tabBar2'),
    tc2 : $('#tabContent2'),
    init(){
        this.tb1.on("click",()=>{mvc_model.x=1;mvc_model.update();mvc_view.render()})
        this.tb2.on("click",()=>{mvc_model.x=2;mvc_model.update();mvc_view.render()})
    },
}
mvc_control.init();

mvc_view.render()



