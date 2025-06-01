import { AccountSettings } from '@stackframe/stack'
import { Settings } from 'lucide-react'

import { Button, Dialog, DialogContent, DialogTrigger } from '@/ui'

export const AccountSettingsModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="outline">
          <Settings />
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-[55vw] min-h-[55vh] p-0">
        <AccountSettings />
      </DialogContent>
    </Dialog>
  )
}
