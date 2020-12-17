import React, {Component} from 'react';

class MyThirdComponent extends Component {

    // will call when first render is executed
    componentDidMount(){
        console.log('This is component did mount')
    }
componentWillReceiveProps(nextProps,nextContext){
    console.log(nextProps)
    console.log(nextContext)
}
    
    componentWillUnmount(){
        console.log('Component will unmount')
    }

    render(){
        return(
            <div>This is my third component<br/>
                {this.props.my_name}
            </div>)
            
    }
}
export {MyThirdComponent}