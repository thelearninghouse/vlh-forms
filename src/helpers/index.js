import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

/**
 * Globally register all base components for convenience, because they
 * will be used very frequently. Components are registered using the
 * PascalCased version of their file name.
 * @see https://webpack.js.org/guides/dependency-management/#require-context
 */
export function registerComponents(Vue, Components) {
  Components.keys().forEach(ComponentFileName => {
    const componentConfig = Components(ComponentFileName);
    // PascalCase name without file extension
    const componentName = upperFirst(
      camelCase(ComponentFileName.replace(/\.\w+$/, ""))
    );
    // Globally register the component
    Vue.component(componentName, componentConfig.default || componentConfig);
  });
}
