import 'styled-components'

interface ThemeType {
  color: {
    default: string
  }
  background: {
    default: string
  }
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}
