import _ from 'lodash'

const BORDER_PROPS = [
  'border',
  'borderTop',
  'borderRight',
  'borderBottom',
  'borderLeft',
]

export default (config) => ({
  match: (_theme, value, key) => (
    config && value && _.has(config, value) && _.includes(BORDER_PROPS, key)
  ),
  value: (_theme, value) => config[value],
})
