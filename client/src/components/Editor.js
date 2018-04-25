import React from 'react'
import AceEditor from 'react-ace'

// Components
import Button from './Button'
import Menu from './Menu'
import Setting from './Setting'
import SettingItem from './Setting.Item'
import ModalBox from '../containers/ModalBox'

// Others
import modes from '../others/Modes'
import themes from '../others/Themes'

// Images
import cog from '../img/cog.svg'

// Styles
import 'brace/mode/plain_text'
import 'brace/theme/monokai'

export default ({ setting, toggleSetting, newCodeShare, updateCodeShare, saveCodeShare, codeShare }) => {
  const { content, theme, mode, fontSize, tabSize, lastUpdate } = codeShare
  return (
    <div className="codeshare">
      <ModalBox></ModalBox>
      <Menu>
        <Button onClick={toggleSetting}><img src={cog} alt="setting"/></Button>
        <Button onClick={() => saveCodeShare(codeShare)}>Save</Button>
        <Button onClick={newCodeShare}>New</Button>
      </Menu>
      <p className="codeshare__status">Last Update: <span style={{ marginLeft: '5px' }}>{lastUpdate}</span></p>
      <Setting setting={setting}>
        <SettingItem id="fontSize" title="Font size:" list={[13,14,15,16,17,18,19,20]} defaultValue={fontSize} handleChange={updateCodeShare}/>
        <SettingItem id="tabSize" title="Tab size:" list={[2,3,4,5,6,7,8]} defaultValue={tabSize} handleChange={updateCodeShare}/>
        <SettingItem id="mode" title="Mode:" list={Object.keys(modes)} defaultValue={mode} handleChange={updateCodeShare}/>
        <SettingItem id="theme" title="Theme:" list={themes} defaultValue={theme} handleChange={updateCodeShare}/>
      </Setting>
      <AceEditor
        mode={modes[mode]}
        theme={theme}
        name="content"
        className="editor"
        fontSize={fontSize}
        showPrintMargin={false}
        showGutter={true}
        highlightActiveLine={true}
        value={content}
        onChange={v => updateCodeShare({ target: { id: 'content', value: v } })}
        editorProps={{$blockScrolling: true}}
        setOptions={{
          showLineNumbers: true,
          tabSize,
        }}/>
    </div>
  )
}