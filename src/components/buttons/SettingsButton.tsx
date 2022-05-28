// Packages
import { IconButton} from '@chakra-ui/react'
import { SettingsIcon } from '@chakra-ui/icons'

const SettingsButton = () => {
  return (
        <IconButton
          aria-label="Settings"
          icon={<SettingsIcon/>}
          p={2}
        />
  )
}

export default SettingsButton