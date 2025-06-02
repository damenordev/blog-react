import { monokaiPro } from '@codesandbox/sandpack-themes'
import { Home, Mail, Menu, Settings, User } from 'lucide-react'
import {
  SandpackProvider,
  SandpackLayout,
  SandpackFileExplorer,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackFiles,
} from '@codesandbox/sandpack-react'
import { MenuContainer, MenuItem } from '../common/Menu'

export interface IPlaygroundEditorProps {
  files?: SandpackFiles
}

export const PlaygroundEditor: React.FC<IPlaygroundEditorProps> = ({ files }) => {
  return (
    <SandpackProvider template="react-ts" files={files} theme={monokaiPro}>
      <SandpackLayout style={{ width: '100%', height: 'calc(100vh - 0px)' }}>
        <SandpackFileExplorer style={{ width: '260px', height: 'calc(100vh - 0px)' }} />
        <SandpackCodeEditor
          style={{ width: '100%', height: 'calc(100vh - 0px)' }}
          showLineNumbers
          closableTabs
          showInlineErrors
          showTabs
          showRunButton={false}
        />
        <SandpackPreview
          style={{ width: '50vh', height: 'calc(100vh - 0px)' }}
          showRefreshButton
          showOpenInCodeSandbox={false}
        />
        {/* <Button className="fixed bottom-3 left-3" variant="secondary" size="icon">
          <Menu className="size-5 text-foreground" />
        </Button> */}

        <div className="fixed bottom-3 left-3">
          <MenuContainer>
            <MenuItem icon={<Menu className="-mt-0.5" size={24} strokeWidth={1.5} />} />
            <MenuItem icon={<Home size={24} strokeWidth={1.5} />} />
            <MenuItem icon={<Mail size={24} strokeWidth={1.5} />} />
            <MenuItem icon={<User size={24} strokeWidth={1.5} />} />
            <MenuItem icon={<Settings className="-mt-0.5" size={24} strokeWidth={1.5} />} />
          </MenuContainer>
        </div>
      </SandpackLayout>
    </SandpackProvider>
  )
}
