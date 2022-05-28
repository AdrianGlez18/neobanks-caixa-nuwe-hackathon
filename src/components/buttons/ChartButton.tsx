// Packages
import { IconButton } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

const ChartButton = () => {
  return (
        <IconButton
          aria-label="Details"
          icon={<HamburgerIcon/>}
          p={2}
        />
  )
}

export default ChartButton