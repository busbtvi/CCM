const editorComponent = {
  type:'component',
  componentName: 'editor',
  title: 'editor',
  tooltip: '여기서 코드를 작성하세요',
  isClosable: false,
};
const problemComponent = {
  type:'component',
  componentName: 'problem',
  title: 'problem',
  tooltip: '문제를 여기서 확인하세요',
  isClosable: false,
  componentState: { list: 'Component 1' }
};
const exampleComponent = {
  type:'react-component',
  title: 'example',
  tooltip: '여기서 실행해보세요',
  isClosable: false,
  component: 'Examples',
  props : {
    list : [
      {
        index :"1" ,
        img :"https://miro.medium.com/max/12032/1*1X0-98EiQNkwBJj2vnTTqQ.jpeg" ,
        input :"1\n2\n3\n4" ,
        output :"1234",
      },
      {
        index :"2" ,
        input :"3 5 3\n4 9 2\n3 5 1" ,
        output :"4",
      },
      {
        index :"3" ,
        input :"1 392" ,
        output :"123",
      }
    ],
  },
};


const layoutConfig = {
  settings:{
    showPopoutIcon: false,
    showMaximiseIcon: false,
    showCloseIcon: false,
    selectionEnabled: true,
  },
  dimensions: {headerHeight: 34},
  content: [{
    type: 'stack',
    content: [editorComponent, problemComponent, exampleComponent]
  }]
};