
# form-step
Used in step-forms.

```html
<form-step :active-step="currentStep" v-if="currentStep == 1" :key="1">
 <form-first-name v-model="submit.firstName"/>
 <form-last-name v-model="submit.lastName"/>
</form-step>
```

## Props


- `activeStep` ***Number|string***

  


## Slots
- `default`

        





