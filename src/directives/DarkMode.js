import Vue from "vue";

const addOrRemoveDarkModeClass = (darkModeIsOn, el) => {
  const darkModeClassName = "dark-mode";
  if (darkModeIsOn) {
    if (!el.classList.contains(darkModeClassName)) {
      el.classList.add(darkModeClassName);
    }
  } else {
    el.classList.remove(darkModeClassName);
  }
};

const getStoreFromVnode = (vnode) => vnode.context.$store;

Vue.directive("darkmode", {
  bind: function(el, _, vnode) {
    const store = getStoreFromVnode(vnode);
    const darkModeIsOn = store.state.darkModeModule.darkMode;
    addOrRemoveDarkModeClass(darkModeIsOn, el);

    vnode.unwatch = store.watch(function({ darkModeModule: { darkMode } }) {
      addOrRemoveDarkModeClass(darkMode, el);
    });
  },
  inserted: function(el, _, vnode) {
    const store = getStoreFromVnode(vnode);
    const darkModeIsOn = store.state.darkModeModule.darkMode;
    addOrRemoveDarkModeClass(darkModeIsOn, el);
  },
  update: function(el, _, vnode) {
    const store = getStoreFromVnode(vnode);
    const darkModeIsOn = store.state.darkModeModule.darkMode;
    addOrRemoveDarkModeClass(darkModeIsOn, el);
  },
  unbind: function(el, _, vnode) {
    if (vnode.unwatch) {
      vnode.unwatch();
    }
  },
});
