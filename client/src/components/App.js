import React from 'react'

// components
import Header from './Header'
import Intro from './Intro'
import Error from './Error'
import Loading from '../containers/Loading'

// style
import '../styles/App.css'

export default class extends React.Component{
  constructor(props){
    super(props)
    if (window.location.pathname !== '/'){
      props.getCodeShare(window.location.pathname.slice(1))
    }
  }
  render(){
    const { Editor, importEditor, errMsg, keyEditor } = this.props
    return (
      <div className="app">
        <Header></Header>
        <Loading></Loading>
        {(function (){
          if (errMsg) return <Error message={errMsg}></Error>
          if (Editor !== null) return <Editor key={keyEditor}></Editor>
          return <Intro onClick={importEditor}></Intro>
        })()}
      </div>
    )
  }
}


