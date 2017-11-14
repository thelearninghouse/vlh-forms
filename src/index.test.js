import { mount } from 'vue-test-utils'
import FormProgramSelect from './'

test('it works', () => {
  const wrapper = mount(FormProgramSelect)
  expect(wrapper.isVueInstance()).toBe(true)
})
