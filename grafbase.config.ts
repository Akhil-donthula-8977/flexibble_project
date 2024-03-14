import { graph, config } from '@grafbase/sdk'

const g = graph.Standalone()


export default config({
  graph: g,
  auth: {
    rules: (rules) => {
      rules.public()
    },
  },
})
