# Examples

<vuep template="#example"></vuep>

```html
<script v-pre type="text/x-template" id="example">
  <template>
  <form @submit.prevent="submitFormNew" class="requestinfo">
    <form-field label="Test1" name="test1"></form-field>
    <form-first-name v-model="submit.firstName"></form-first-name>
    <form-last-name v-model="submit.lastName"></form-last-name>      
    <el-button type="primary">Primary</el-button>
  </form>
</template>

<script>
  module.exports = {
    data: function () {
      return {
        name: 'Vue',
        submit: {
          program: '',
          firstName: '',
          lastName: '',
          field1: '',
          field2: '',
          zip: '',
          email: '',
          phone: '',
          city: null
        }
      }
    }
  }
  </script>
</script>
