import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'
import PreviewField from './components/PreviewField'

Nova.booting((app, store) => {
  app.component('index-simple-map', IndexField)
  app.component('detail-simple-map', DetailField)
  app.component('form-simple-map', FormField)
  // app.component('preview-simple-map', PreviewField)
})
