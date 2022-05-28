// Packages
import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f7fcfc', '#202023')(props)
    }
  })
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

export const colors = {
  "primaryLightColor": '#6979F8',
  "secondaryLightColor": '#8e9bfa',

  "primaryDarkColor": '#8efffa',
  "secondaryDarkColor": '',

  "borderGray": "#E5E5E5",
  "lightModeGray": "#9C9C9C",
  "darkModeGray": "#bab1b1",

  "increaseGreen": "#4AAF05",
  "decreaseRed": "#992222",

  "bluePalette": {
    "100": "#6FFFE9",
    "200": "#5BC0BE",
    "300": "#3A506B",
    "400": "#1C2541",
    "500": "#0B132B"
  }
}


const config = {
  initialColorMode: 'light',
  //useCustomProperties: true,
}

const theme = extendTheme({ config, styles, fonts, colors })
export default theme