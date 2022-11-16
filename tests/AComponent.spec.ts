import {mount} from '@vue/test-utils';
import AComponent from '@/AComponent.vue';

describe('AComponent', () => {

  describe('property: text', () => {

    it('should display text', () => {
      const component = mount(AComponent, {
        props: {
          text: 'some text',
        },
      });

      const output = component.get('.output');

      expect(output.text()).toContain('some text');
    });
  });

});
