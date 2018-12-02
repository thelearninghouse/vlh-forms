<template>
  <div class="example">
    <h2>Example</h2>
    <form id="tlh-form">
        <form-first-name v-model="submit.firstName"/>
        <form-email v-model="submit.email"/>
        <form-zip v-model="submit.zip"/>
        <form-submit text="Get Started"/>
    </form>    
    <!-- <slot></slot>
    <slot name="formExample"></slot> -->
  </div>
</template>

<script>
import marketingFormsMixin from './../../../utils/marketingFormsMixin.js'

export default {
  mixins: [marketingFormsMixin]
}
</script>

<style>
#tlh-form .form-item .input, #tlh-form .form-item .select {
    font-size: 1em;
    font-size: 16px !important;
}
.example {
  margin-top: 1.5em;
  margin-bottom: 2.75em;
}

form {
  max-width: 550px;
}
</style>