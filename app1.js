import $ from 'jquery'
import './app1.css'


const mvc_model={
    init(){
        if(!localStorage.getItem('n')){localStorage.setItem('n',100)}
        this.n=parseInt(localStorage.getItem('n'))
    },update(){
        localStorage.setItem('n',mvc_model.n);
    }
}
mvc_model.init();


const mvc_view={
   htmlElement:`
       <div id="app1">
          <div class="output">
              <span id="number"></span>
         </div>
         <div class="actions">
              <button id="plus">+1</button>
              <button id="reduce">-1</button>
              <button id="multiply">X2</button>
              <button id="division">÷2</button>
         </div>
       </div>`,
    init(){
        $(mvc_view.htmlElement).appendTo($('#globalPage'));
    },
    render(){
        mvc_control.number.text(mvc_model.n)
    },
};
mvc_view.init();


const mvc_control={
        number:$('#number'),
        action:$('#action'),
        events:{
            'click #plus':'add',
            'click #reduce':'reduce',
            'click #multiply':'multiply',
            'click #division':'division',
        },
        add(){
            mvc_model.n+=1;
        },
        reduce(){
            mvc_model.n-=1;
        },
        multiply(){
            mvc_model.n*=2
        },
        division(){
            mvc_model.n/=2;
        },
        init(){
           for(let key in mvc_control.events){
               const fn =mvc_control[this.events[key]]
               const spaceIndex=key.indexOf(' ')
               const part1=key.slice(0,spaceIndex)
               const part2=key.slice(spaceIndex+1)
           }
        }
};
mvc_control.init();

mvc_view.render()







