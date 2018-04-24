import React from 'react'
import CodeMirror from 'codemirror'

// Components
import Button from './Button'
import Menu from './Menu'
import Setting from './Setting'
import SettingItem from './Setting.Item'
import ModalBox from '../containers/ModalBox'

// Others
import { langues } from '../others/Langues'
import themes from '../others/Themes'

// Images
import cog from '../img/cog.svg'

// Styles
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/monokai.css'

const message = 'Type some awesome codes here!'

export default class extends React.Component{
  langue = this.props.codeShare.langue || "Plain Text"
  editor = React.createRef()

  render(){
    const { setting, toggleSetting, newCodeShare } = this.props
    let { content, theme, langue, tabSize, lastUpdate } = this.props.codeShare

    theme = theme || 'monokai'
    langue = langue || 'Plain Text'
    tabSize = tabSize || 2

    return (
      <div className="codeshare">
        <ModalBox></ModalBox>
        <Menu>
          <Button onClick={toggleSetting}><img src={cog} alt="setting"/></Button>
          <Button onClick={this.saveCodeShare}>Save</Button>
          <Button onClick={newCodeShare}>New</Button>
        </Menu>
        <p className="codeshare__status">Last Update: <span style={{ marginLeft: '5px' }}>{lastUpdate}</span></p>
        <Setting setting={setting}>
          <SettingItem id="tabsize" title="Tab size:" list={[2,3,4,5,6,7,8]} defaultValue={tabSize} handleChange={this.handleSetting}/>
          <SettingItem id="mode" title="Langue:" list={langues} defaultValue={langue} handleChange={this.handleSetting}/>
          <SettingItem id="theme" title="Theme:" list={themes} defaultValue={theme} handleChange={this.handleSetting}/>
        </Setting>
        <textarea ref={this.editor} defaultValue={content || message}></textarea>
      </div>
    )
  }

  componentDidMount(){
    const { theme, mode, tabSize } = this.props.codeShare

    this.myCodeMirror = CodeMirror.fromTextArea(this.editor.current, {
      lineNumbers: true,
      tabSize: tabSize || 2,
      mode: mode || 'Plain Text',
      theme: 'default',
    })

    document.getElementsByClassName('CodeMirror')[0].setAttribute('style', `
      height: ${window.innerHeight - 146}px
    `)

    this.myCodeMirror.setOption('theme', theme || 'monokai') // fix some bugs when upload
  }

  handleSetting = e => {    
    this.props.handleSetting(this.myCodeMirror, e.target.id, e.target.value)
  }

  saveCodeShare = e => {
    const tabSize = this.myCodeMirror.getOption('tabSize')
    const theme = this.myCodeMirror.getOption('theme')
    const mode = this.myCodeMirror.getOption('mode')    
    const content = this.myCodeMirror.getValue()
    const langue = document.getElementById('mode').value
    const d = new Date()
    const lastUpdate = d.toLocaleDateString() + ' ' + d.toLocaleTimeString()
    
    let id = undefined
    
    if (window.location.pathname !== '/'){
      id = window.location.pathname.slice(1)
    }

    this.props.saveCodeShare(id, { tabSize, theme, mode, langue, content, lastUpdate })
  }
}