# VlhForms @thelearninghouse

Plugin for Learning House Forms using Vue.js

This is a Vue.js component library for the Learning House Marketing Forms.

!> VlhForms is included in the package.json of the TlhFormsWP Plugin via using github url. When VlhForms gets updated, run `yarn upgrade vlh-forms` and it updated to latest version

**It uses Poi.js for Development and Building into library**

## Install

```bash
yarn add vlh-forms
```

CDN: [UNPKG](https://unpkg.com/vlh-forms/) | [jsDelivr](https://cdn.jsdelivr.net/npm/vlh-forms/) (available as `window.VlhForms`)

## Usage

```vue
<template>
  <form-program-select></form-program-select>
</template>

<script>
import FormProgramSelect from 'form-program-select'

export default {
  components: {
    FormProgramSelect
  }
}
</script>
```

## License

MIT &copy; [David Royer](https://davidroyer.me)
