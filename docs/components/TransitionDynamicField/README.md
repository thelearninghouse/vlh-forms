
# transition-dynamic-field
The transition component available to wrap form fields that will appear or disappear based on user selection
This provides a smooth experience as for this dynamic experience

```html
<transition-dynamic-field>
  <form-select
    v-if="selectedDegreeLevel"
    name="program"
    label="Select a Program"
    v-model="submit.program"
    :options="programsForSelectedDegreeLevel"
  />
</transition-dynamic-field>
```

## Props



## Slots
- `default`

        





