import { shallowMount } from '@vue/test-utils';
import footer from '@/components/Footer/PageFooter.vue';

describe('footer.vue', () => {
  it('renders props.msg when passed', () => {
    const name = 'hackalgo';
    const wrapper = shallowMount(footer, {
      propsData: { name },
    });
    expect(wrapper.text()).toMatch(name);
  });
});
