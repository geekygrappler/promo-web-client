import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return `Promotion ${i + 1}`;
  },
  startDate() { 
    return faker.date.recent(10);
  },
  endDate() {
    return faker.date.future(0.5);
  },
  itemsPercentageDiscount: 10
});
