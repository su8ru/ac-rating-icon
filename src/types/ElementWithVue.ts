type ElementWithVue = Element & {
  __vue__: Record<string, unknown>;
};

export const isElementWithVue = (element: Element): element is ElementWithVue =>
  Object.prototype.hasOwnProperty.call(element, "__vue__");

export default ElementWithVue;
