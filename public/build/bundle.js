/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/scripts/main.js":
/*!***********************************!*\
  !*** ./resources/scripts/main.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uikit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uikit */ "./resources/scripts/uikit.js");

console.log('Hello from "/resources/js/main.js" !!!');

/***/ }),

/***/ "./resources/scripts/uikit.js":
/*!************************************!*\
  !*** ./resources/scripts/uikit.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var uikit_dist_js_uikit_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uikit/dist/js/uikit-core */ "./node_modules/uikit/dist/js/uikit-core.js");
/* harmony import */ var uikit_dist_js_uikit_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uikit_dist_js_uikit_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uikit_dist_js_components_lightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uikit/dist/js/components/lightbox */ "./node_modules/uikit/dist/js/components/lightbox.js");
/* harmony import */ var uikit_dist_js_components_lightbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uikit_dist_js_components_lightbox__WEBPACK_IMPORTED_MODULE_1__);


uikit_dist_js_uikit_core__WEBPACK_IMPORTED_MODULE_0___default().component('lightbox', (uikit_dist_js_components_lightbox__WEBPACK_IMPORTED_MODULE_1___default()));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((uikit_dist_js_uikit_core__WEBPACK_IMPORTED_MODULE_0___default()));

/***/ }),

/***/ "./resources/styles/main.scss":
/*!************************************!*\
  !*** ./resources/styles/main.scss ***!
  \************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Can't find stylesheet to import.\n   ╷\n13 │ @import '../components/slider/slider.scss';\n   │         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n   ╵\n  resources/styles/main.scss 13:9  root stylesheet\n    at processResult (/home/llamibot/WEB/helloworld/node_modules/webpack/lib/NormalModule.js:758:19)\n    at /home/llamibot/WEB/helloworld/node_modules/webpack/lib/NormalModule.js:860:5\n    at /home/llamibot/WEB/helloworld/node_modules/loader-runner/lib/LoaderRunner.js:400:11\n    at /home/llamibot/WEB/helloworld/node_modules/loader-runner/lib/LoaderRunner.js:252:18\n    at context.callback (/home/llamibot/WEB/helloworld/node_modules/loader-runner/lib/LoaderRunner.js:124:13)\n    at Object.loader (/home/llamibot/WEB/helloworld/node_modules/sass-loader/dist/index.js:69:5)");

/***/ }),

/***/ "./node_modules/uikit/dist/js/components/lightbox.js":
/*!***********************************************************!*\
  !*** ./node_modules/uikit/dist/js/components/lightbox.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*! UIkit 3.14.3 | https://www.getuikit.com | (c) 2014 - 2022 YOOtheme | MIT License */

(function (global, factory) {
     true ? module.exports = factory(__webpack_require__(/*! uikit-util */ "./node_modules/uikit/src/js/util/index.js")) :
    0;
})(this, (function (uikitUtil) { 'use strict';

    var Animations$1 = {
      slide: {
        show(dir) {
          return [{ transform: translate(dir * -100) }, { transform: translate() }];
        },

        percent(current) {
          return translated(current);
        },

        translate(percent, dir) {
          return [
          { transform: translate(dir * -100 * percent) },
          { transform: translate(dir * 100 * (1 - percent)) }];

        } } };



    function translated(el) {
      return Math.abs(uikitUtil.css(el, 'transform').split(',')[4] / el.offsetWidth) || 0;
    }

    function translate(value, unit) {if (value === void 0) {value = 0;}if (unit === void 0) {unit = '%';}
      value += value ? unit : '';
      return "translate3d(" + value + ", 0, 0)";
    }

    function scale3d(value) {
      return "scale3d(" + value + ", " + value + ", 1)";
    }

    var Animations = {
      ...Animations$1,
      fade: {
        show() {
          return [{ opacity: 0 }, { opacity: 1 }];
        },

        percent(current) {
          return 1 - uikitUtil.css(current, 'opacity');
        },

        translate(percent) {
          return [{ opacity: 1 - percent }, { opacity: percent }];
        } },


      scale: {
        show() {
          return [
          { opacity: 0, transform: scale3d(1 - 0.2) },
          { opacity: 1, transform: scale3d(1) }];

        },

        percent(current) {
          return 1 - uikitUtil.css(current, 'opacity');
        },

        translate(percent) {
          return [
          { opacity: 1 - percent, transform: scale3d(1 - 0.2 * percent) },
          { opacity: percent, transform: scale3d(1 - 0.2 + 0.2 * percent) }];

        } } };

    var Container = {
      props: {
        container: Boolean },


      data: {
        container: true },


      computed: {
        container(_ref) {let { container } = _ref;
          return container === true && this.$container || container && uikitUtil.$(container);
        } } };

    var Class = {
      connected() {
        !uikitUtil.hasClass(this.$el, this.$name) && uikitUtil.addClass(this.$el, this.$name);
      } };

    var Togglable = {
      props: {
        cls: Boolean,
        animation: 'list',
        duration: Number,
        velocity: Number,
        origin: String,
        transition: String },


      data: {
        cls: false,
        animation: [false],
        duration: 200,
        velocity: 0.2,
        origin: false,
        transition: 'ease',
        clsEnter: 'uk-togglabe-enter',
        clsLeave: 'uk-togglabe-leave',

        initProps: {
          overflow: '',
          height: '',
          paddingTop: '',
          paddingBottom: '',
          marginTop: '',
          marginBottom: '',
          boxShadow: '' },


        hideProps: {
          overflow: 'hidden',
          height: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginTop: 0,
          marginBottom: 0,
          boxShadow: 'none' } },



      computed: {
        hasAnimation(_ref) {let { animation } = _ref;
          return !!animation[0];
        },

        hasTransition(_ref2) {let { animation } = _ref2;
          return this.hasAnimation && animation[0] === true;
        } },


      methods: {
        toggleElement(targets, toggle, animate) {
          return new Promise((resolve) =>
          Promise.all(
          uikitUtil.toNodes(targets).map((el) => {
            const show = uikitUtil.isBoolean(toggle) ? toggle : !this.isToggled(el);

            if (!uikitUtil.trigger(el, "before" + (show ? 'show' : 'hide'), [this])) {
              return Promise.reject();
            }

            if (!animate) {
              uikitUtil.Animation.cancel(el);
              uikitUtil.Transition.cancel(el);
            }

            const promise = (
            uikitUtil.isFunction(animate) ?
            animate :
            animate === false || !this.hasAnimation ?
            this._toggle :
            this.hasTransition ?
            toggleHeight(this) :
            toggleAnimation(this))(
            el, show);

            const cls = show ? this.clsEnter : this.clsLeave;

            uikitUtil.addClass(el, cls);

            uikitUtil.trigger(el, show ? 'show' : 'hide', [this]);

            const done = () => {
              uikitUtil.removeClass(el, cls);
              uikitUtil.trigger(el, show ? 'shown' : 'hidden', [this]);
              this.$update(el);
            };

            return promise ?
            promise.then(done, () => {
              uikitUtil.removeClass(el, cls);
              return Promise.reject();
            }) :
            done();
          })).
          then(resolve, uikitUtil.noop));

        },

        isToggled(el) {if (el === void 0) {el = this.$el;}
          [el] = uikitUtil.toNodes(el);
          return uikitUtil.hasClass(el, this.clsEnter) ?
          true :
          uikitUtil.hasClass(el, this.clsLeave) ?
          false :
          this.cls ?
          uikitUtil.hasClass(el, this.cls.split(' ')[0]) :
          uikitUtil.isVisible(el);
        },

        _toggle(el, toggled) {
          if (!el) {
            return;
          }

          toggled = Boolean(toggled);

          let changed;
          if (this.cls) {
            changed = uikitUtil.includes(this.cls, ' ') || toggled !== uikitUtil.hasClass(el, this.cls);
            changed && uikitUtil.toggleClass(el, this.cls, uikitUtil.includes(this.cls, ' ') ? undefined : toggled);
          } else {
            changed = toggled === el.hidden;
            changed && (el.hidden = !toggled);
          }

          uikitUtil.$$('[autofocus]', el).some((el) => uikitUtil.isVisible(el) ? el.focus() || true : el.blur());

          if (changed) {
            uikitUtil.trigger(el, 'toggled', [toggled, this]);
            this.$update(el);
          }
        } } };



    function toggleHeight(_ref3)







    {let { isToggled, duration, velocity, initProps, hideProps, transition, _toggle } = _ref3;
      return (el, show) => {
        const inProgress = uikitUtil.Transition.inProgress(el);
        const inner = el.hasChildNodes() ?
        uikitUtil.toFloat(uikitUtil.css(el.firstElementChild, 'marginTop')) +
        uikitUtil.toFloat(uikitUtil.css(el.lastElementChild, 'marginBottom')) :
        0;
        const currentHeight = uikitUtil.isVisible(el) ? uikitUtil.height(el) + (inProgress ? 0 : inner) : 0;

        uikitUtil.Transition.cancel(el);

        if (!isToggled(el)) {
          _toggle(el, true);
        }

        uikitUtil.height(el, '');

        // Update child components first
        uikitUtil.fastdom.flush();

        const endHeight = uikitUtil.height(el) + (inProgress ? 0 : inner);
        duration = velocity * el.offsetHeight + duration;

        uikitUtil.height(el, currentHeight);

        return (
        show ?
        uikitUtil.Transition.start(
        el,
        { ...initProps, overflow: 'hidden', height: endHeight },
        Math.round(duration * (1 - currentHeight / endHeight)),
        transition) :

        uikitUtil.Transition.start(
        el,
        hideProps,
        Math.round(duration * (currentHeight / endHeight)),
        transition).
        then(() => _toggle(el, false))).
        then(() => uikitUtil.css(el, initProps));
      };
    }

    function toggleAnimation(cmp) {
      return (el, show) => {
        uikitUtil.Animation.cancel(el);

        const { animation, duration, _toggle } = cmp;

        if (show) {
          _toggle(el, true);
          return uikitUtil.Animation.in(el, animation[0], duration, cmp.origin);
        }

        return uikitUtil.Animation.out(el, animation[1] || animation[0], duration, cmp.origin).then(() =>
        _toggle(el, false));

      };
    }

    const active = [];

    var Modal = {
      mixins: [Class, Container, Togglable],

      props: {
        selPanel: String,
        selClose: String,
        escClose: Boolean,
        bgClose: Boolean,
        stack: Boolean },


      data: {
        cls: 'uk-open',
        escClose: true,
        bgClose: true,
        overlay: true,
        stack: false },


      computed: {
        panel(_ref, $el) {let { selPanel } = _ref;
          return uikitUtil.$(selPanel, $el);
        },

        transitionElement() {
          return this.panel;
        },

        bgClose(_ref2) {let { bgClose } = _ref2;
          return bgClose && this.panel;
        } },


      beforeDisconnect() {
        if (uikitUtil.includes(active, this)) {
          this.toggleElement(this.$el, false, false);
        }
      },

      events: [
      {
        name: 'click',

        delegate() {
          return this.selClose;
        },

        handler(e) {
          e.preventDefault();
          this.hide();
        } },


      {
        name: 'toggle',

        self: true,

        handler(e) {
          if (e.defaultPrevented) {
            return;
          }

          e.preventDefault();

          if (this.isToggled() === uikitUtil.includes(active, this)) {
            this.toggle();
          }
        } },


      {
        name: 'beforeshow',

        self: true,

        handler(e) {
          if (uikitUtil.includes(active, this)) {
            return false;
          }

          if (!this.stack && active.length) {
            Promise.all(active.map((modal) => modal.hide())).then(this.show);
            e.preventDefault();
          } else {
            active.push(this);
          }
        } },


      {
        name: 'show',

        self: true,

        handler() {
          const docEl = document.documentElement;

          if (uikitUtil.width(window) > docEl.clientWidth && this.overlay) {
            uikitUtil.css(document.body, 'overflowY', 'scroll');
          }

          if (this.stack) {
            uikitUtil.css(this.$el, 'zIndex', uikitUtil.toFloat(uikitUtil.css(this.$el, 'zIndex')) + active.length);
          }

          uikitUtil.addClass(docEl, this.clsPage);

          if (this.bgClose) {
            uikitUtil.once(
            this.$el,
            'hide',
            uikitUtil.on(document, uikitUtil.pointerDown, (_ref3) => {let { target } = _ref3;
              if (
              uikitUtil.last(active) !== this ||
              this.overlay && !uikitUtil.within(target, this.$el) ||
              uikitUtil.within(target, this.panel))
              {
                return;
              }

              uikitUtil.once(
              document,
              uikitUtil.pointerUp + " " + uikitUtil.pointerCancel + " scroll",
              (_ref4) => {let { defaultPrevented, type, target: newTarget } = _ref4;
                if (
                !defaultPrevented &&
                type === uikitUtil.pointerUp &&
                target === newTarget)
                {
                  this.hide();
                }
              },
              true);

            }),
            { self: true });

          }

          if (this.escClose) {
            uikitUtil.once(
            this.$el,
            'hide',
            uikitUtil.on(document, 'keydown', (e) => {
              if (e.keyCode === 27 && uikitUtil.last(active) === this) {
                this.hide();
              }
            }),
            { self: true });

          }
        } },


      {
        name: 'shown',

        self: true,

        handler() {
          if (!uikitUtil.isFocusable(this.$el)) {
            uikitUtil.attr(this.$el, 'tabindex', '-1');
          }

          if (!uikitUtil.$(':focus', this.$el)) {
            this.$el.focus();
          }
        } },


      {
        name: 'hidden',

        self: true,

        handler() {
          if (uikitUtil.includes(active, this)) {
            active.splice(active.indexOf(this), 1);
          }

          if (!active.length) {
            uikitUtil.css(document.body, 'overflowY', '');
          }

          uikitUtil.css(this.$el, 'zIndex', '');

          if (!active.some((modal) => modal.clsPage === this.clsPage)) {
            uikitUtil.removeClass(document.documentElement, this.clsPage);
          }
        } }],



      methods: {
        toggle() {
          return this.isToggled() ? this.hide() : this.show();
        },

        show() {
          if (this.container && uikitUtil.parent(this.$el) !== this.container) {
            uikitUtil.append(this.container, this.$el);
            return new Promise((resolve) =>
            requestAnimationFrame(() => this.show().then(resolve)));

          }

          return this.toggleElement(this.$el, true, animate(this));
        },

        hide() {
          return this.toggleElement(this.$el, false, animate(this));
        } } };



    function animate(_ref5) {let { transitionElement, _toggle } = _ref5;
      return (el, show) =>
      new Promise((resolve, reject) =>
      uikitUtil.once(el, 'show hide', () => {
        el._reject == null ? void 0 : el._reject();
        el._reject = reject;

        _toggle(el, show);

        const off = uikitUtil.once(
        transitionElement,
        'transitionstart',
        () => {
          uikitUtil.once(transitionElement, 'transitionend transitioncancel', resolve, {
            self: true });

          clearTimeout(timer);
        },
        { self: true });


        const timer = setTimeout(() => {
          off();
          resolve();
        }, toMs(uikitUtil.css(transitionElement, 'transitionDuration')));
      })).
      then(() => delete el._reject);
    }

    function toMs(time) {
      return time ? uikitUtil.endsWith(time, 'ms') ? uikitUtil.toFloat(time) : uikitUtil.toFloat(time) * 1000 : 0;
    }

    function Transitioner(prev, next, dir, _ref) {let { animation, easing } = _ref;
      const { percent, translate, show = uikitUtil.noop } = animation;
      const props = show(dir);
      const deferred = new uikitUtil.Deferred();

      return {
        dir,

        show(duration, percent, linear) {if (percent === void 0) {percent = 0;}
          const timing = linear ? 'linear' : easing;
          duration -= Math.round(duration * uikitUtil.clamp(percent, -1, 1));

          this.translate(percent);

          triggerUpdate(next, 'itemin', { percent, duration, timing, dir });
          triggerUpdate(prev, 'itemout', { percent: 1 - percent, duration, timing, dir });

          Promise.all([
          uikitUtil.Transition.start(next, props[1], duration, timing),
          uikitUtil.Transition.start(prev, props[0], duration, timing)]).
          then(() => {
            this.reset();
            deferred.resolve();
          }, uikitUtil.noop);

          return deferred.promise;
        },

        cancel() {
          uikitUtil.Transition.cancel([next, prev]);
        },

        reset() {
          for (const prop in props[0]) {
            uikitUtil.css([next, prev], prop, '');
          }
        },

        forward(duration, percent) {if (percent === void 0) {percent = this.percent();}
          uikitUtil.Transition.cancel([next, prev]);
          return this.show(duration, percent, true);
        },

        translate(percent) {
          this.reset();

          const props = translate(percent, dir);
          uikitUtil.css(next, props[1]);
          uikitUtil.css(prev, props[0]);
          triggerUpdate(next, 'itemtranslatein', { percent, dir });
          triggerUpdate(prev, 'itemtranslateout', { percent: 1 - percent, dir });
        },

        percent() {
          return percent(prev || next, next, dir);
        },

        getDistance() {
          return prev == null ? void 0 : prev.offsetWidth;
        } };

    }

    function triggerUpdate(el, type, data) {
      uikitUtil.trigger(el, uikitUtil.createEvent(type, false, false, data));
    }

    var Resize = {
      connected() {var _this$$options$resize;
        this.registerObserver(
        uikitUtil.observeResize(((_this$$options$resize = this.$options.resizeTargets) == null ? void 0 : _this$$options$resize.call(this)) || this.$el, () =>
        this.$emit('resize')));


      } };

    var SliderAutoplay = {
      props: {
        autoplay: Boolean,
        autoplayInterval: Number,
        pauseOnHover: Boolean },


      data: {
        autoplay: false,
        autoplayInterval: 7000,
        pauseOnHover: true },


      connected() {
        this.autoplay && this.startAutoplay();
      },

      disconnected() {
        this.stopAutoplay();
      },

      update() {
        uikitUtil.attr(this.slides, 'tabindex', '-1');
      },

      events: [
      {
        name: 'visibilitychange',

        el() {
          return document;
        },

        filter() {
          return this.autoplay;
        },

        handler() {
          if (document.hidden) {
            this.stopAutoplay();
          } else {
            this.startAutoplay();
          }
        } }],



      methods: {
        startAutoplay() {
          this.stopAutoplay();

          this.interval = setInterval(
          () =>
          (!this.draggable || !uikitUtil.$(':focus', this.$el)) && (
          !this.pauseOnHover || !uikitUtil.matches(this.$el, ':hover')) &&
          !this.stack.length &&
          this.show('next'),
          this.autoplayInterval);

        },

        stopAutoplay() {
          this.interval && clearInterval(this.interval);
        } } };

    var SliderDrag = {
      props: {
        draggable: Boolean },


      data: {
        draggable: true,
        threshold: 10 },


      created() {
        for (const key of ['start', 'move', 'end']) {
          const fn = this[key];
          this[key] = (e) => {
            const pos = uikitUtil.getEventPos(e).x * (uikitUtil.isRtl ? -1 : 1);

            this.prevPos = pos === this.pos ? this.prevPos : this.pos;
            this.pos = pos;

            fn(e);
          };
        }
      },

      events: [
      {
        name: uikitUtil.pointerDown,

        delegate() {
          return this.selSlides;
        },

        handler(e) {
          if (
          !this.draggable ||
          !uikitUtil.isTouch(e) && hasTextNodesOnly(e.target) ||
          uikitUtil.closest(e.target, uikitUtil.selInput) ||
          e.button > 0 ||
          this.length < 2)
          {
            return;
          }

          this.start(e);
        } },


      {
        name: 'dragstart',

        handler(e) {
          e.preventDefault();
        } }],



      methods: {
        start() {
          this.drag = this.pos;

          if (this._transitioner) {
            this.percent = this._transitioner.percent();
            this.drag += this._transitioner.getDistance() * this.percent * this.dir;

            this._transitioner.cancel();
            this._transitioner.translate(this.percent);

            this.dragging = true;

            this.stack = [];
          } else {
            this.prevIndex = this.index;
          }

          uikitUtil.on(document, uikitUtil.pointerMove, this.move, { passive: false });

          // 'input' event is triggered by video controls
          uikitUtil.on(document, uikitUtil.pointerUp + " " + uikitUtil.pointerCancel + " input", this.end, true);

          uikitUtil.css(this.list, 'userSelect', 'none');
        },

        move(e) {
          const distance = this.pos - this.drag;

          if (
          distance === 0 ||
          this.prevPos === this.pos ||
          !this.dragging && Math.abs(distance) < this.threshold)
          {
            return;
          }

          // prevent click event
          uikitUtil.css(this.list, 'pointerEvents', 'none');

          e.cancelable && e.preventDefault();

          this.dragging = true;
          this.dir = distance < 0 ? 1 : -1;

          const { slides } = this;
          let { prevIndex } = this;
          let dis = Math.abs(distance);
          let nextIndex = this.getIndex(prevIndex + this.dir, prevIndex);
          let width = this._getDistance(prevIndex, nextIndex) || slides[prevIndex].offsetWidth;

          while (nextIndex !== prevIndex && dis > width) {
            this.drag -= width * this.dir;

            prevIndex = nextIndex;
            dis -= width;
            nextIndex = this.getIndex(prevIndex + this.dir, prevIndex);
            width = this._getDistance(prevIndex, nextIndex) || slides[prevIndex].offsetWidth;
          }

          this.percent = dis / width;

          const prev = slides[prevIndex];
          const next = slides[nextIndex];
          const changed = this.index !== nextIndex;
          const edge = prevIndex === nextIndex;

          let itemShown;

          [this.index, this.prevIndex].
          filter((i) => !uikitUtil.includes([nextIndex, prevIndex], i)).
          forEach((i) => {
            uikitUtil.trigger(slides[i], 'itemhidden', [this]);

            if (edge) {
              itemShown = true;
              this.prevIndex = prevIndex;
            }
          });

          if (this.index === prevIndex && this.prevIndex !== prevIndex || itemShown) {
            uikitUtil.trigger(slides[this.index], 'itemshown', [this]);
          }

          if (changed) {
            this.prevIndex = prevIndex;
            this.index = nextIndex;

            !edge && uikitUtil.trigger(prev, 'beforeitemhide', [this]);
            uikitUtil.trigger(next, 'beforeitemshow', [this]);
          }

          this._transitioner = this._translate(Math.abs(this.percent), prev, !edge && next);

          if (changed) {
            !edge && uikitUtil.trigger(prev, 'itemhide', [this]);
            uikitUtil.trigger(next, 'itemshow', [this]);
          }
        },

        end() {
          uikitUtil.off(document, uikitUtil.pointerMove, this.move, { passive: false });
          uikitUtil.off(document, uikitUtil.pointerUp + " " + uikitUtil.pointerCancel + " input", this.end, true);

          if (this.dragging) {
            this.dragging = null;

            if (this.index === this.prevIndex) {
              this.percent = 1 - this.percent;
              this.dir *= -1;
              this._show(false, this.index, true);
              this._transitioner = null;
            } else {
              const dirChange =
              (uikitUtil.isRtl ? this.dir * (uikitUtil.isRtl ? 1 : -1) : this.dir) < 0 ===
              this.prevPos > this.pos;
              this.index = dirChange ? this.index : this.prevIndex;

              if (dirChange) {
                this.percent = 1 - this.percent;
              }

              this.show(
              this.dir > 0 && !dirChange || this.dir < 0 && dirChange ?
              'next' :
              'previous',
              true);

            }
          }

          uikitUtil.css(this.list, { userSelect: '', pointerEvents: '' });

          this.drag = this.percent = null;
        } } };



    function hasTextNodesOnly(el) {
      return !el.children.length && el.childNodes.length;
    }

    var SliderNav = {
      data: {
        selNav: false },


      computed: {
        nav(_ref, $el) {let { selNav } = _ref;
          return uikitUtil.$(selNav, $el);
        },

        selNavItem(_ref2) {let { attrItem } = _ref2;
          return "[" + attrItem + "],[data-" + attrItem + "]";
        },

        navItems(_, $el) {
          return uikitUtil.$$(this.selNavItem, $el);
        } },


      update: {
        write() {
          if (this.nav && this.length !== this.nav.children.length) {
            uikitUtil.html(
            this.nav,
            this.slides.
            map((_, i) => "<li " + this.attrItem + "=\"" + i + "\"><a href></a></li>").
            join(''));

          }

          this.navItems.concat(this.nav).forEach((el) => el && (el.hidden = !this.maxIndex));

          this.updateNav();
        },

        events: ['resize'] },


      events: [
      {
        name: 'click',

        delegate() {
          return this.selNavItem;
        },

        handler(e) {
          e.preventDefault();
          this.show(uikitUtil.data(e.current, this.attrItem));
        } },


      {
        name: 'itemshow',
        handler: 'updateNav' }],



      methods: {
        updateNav() {
          const i = this.getValidIndex();
          for (const el of this.navItems) {
            const cmd = uikitUtil.data(el, this.attrItem);

            uikitUtil.toggleClass(el, this.clsActive, uikitUtil.toNumber(cmd) === i);
            uikitUtil.toggleClass(
            el,
            'uk-invisible',
            this.finite && (
            cmd === 'previous' && i === 0 || cmd === 'next' && i >= this.maxIndex));

          }
        } } };

    var Slider = {
      mixins: [SliderAutoplay, SliderDrag, SliderNav, Resize],

      props: {
        clsActivated: Boolean,
        easing: String,
        index: Number,
        finite: Boolean,
        velocity: Number,
        selSlides: String },


      data: () => ({
        easing: 'ease',
        finite: false,
        velocity: 1,
        index: 0,
        prevIndex: -1,
        stack: [],
        percent: 0,
        clsActive: 'uk-active',
        clsActivated: false,
        Transitioner: false,
        transitionOptions: {} }),


      connected() {
        this.prevIndex = -1;
        this.index = this.getValidIndex(this.$props.index);
        this.stack = [];
      },

      disconnected() {
        uikitUtil.removeClass(this.slides, this.clsActive);
      },

      computed: {
        duration(_ref, $el) {let { velocity } = _ref;
          return speedUp($el.offsetWidth / velocity);
        },

        list(_ref2, $el) {let { selList } = _ref2;
          return uikitUtil.$(selList, $el);
        },

        maxIndex() {
          return this.length - 1;
        },

        selSlides(_ref3) {let { selList, selSlides } = _ref3;
          return selList + " " + (selSlides || '> *');
        },

        slides: {
          get() {
            return uikitUtil.$$(this.selSlides, this.$el);
          },

          watch() {
            this.$reset();
          } },


        length() {
          return this.slides.length;
        } },


      methods: {
        show(index, force) {if (force === void 0) {force = false;}
          if (this.dragging || !this.length) {
            return;
          }

          const { stack } = this;
          const queueIndex = force ? 0 : stack.length;
          const reset = () => {
            stack.splice(queueIndex, 1);

            if (stack.length) {
              this.show(stack.shift(), true);
            }
          };

          stack[force ? 'unshift' : 'push'](index);

          if (!force && stack.length > 1) {
            if (stack.length === 2) {
              this._transitioner.forward(Math.min(this.duration, 200));
            }

            return;
          }

          const prevIndex = this.getIndex(this.index);
          const prev = uikitUtil.hasClass(this.slides, this.clsActive) && this.slides[prevIndex];
          const nextIndex = this.getIndex(index, this.index);
          const next = this.slides[nextIndex];

          if (prev === next) {
            reset();
            return;
          }

          this.dir = getDirection(index, prevIndex);
          this.prevIndex = prevIndex;
          this.index = nextIndex;

          if (
          prev && !uikitUtil.trigger(prev, 'beforeitemhide', [this]) ||
          !uikitUtil.trigger(next, 'beforeitemshow', [this, prev]))
          {
            this.index = this.prevIndex;
            reset();
            return;
          }

          const promise = this._show(prev, next, force).then(() => {
            prev && uikitUtil.trigger(prev, 'itemhidden', [this]);
            uikitUtil.trigger(next, 'itemshown', [this]);

            return new Promise((resolve) => {
              uikitUtil.fastdom.write(() => {
                stack.shift();
                if (stack.length) {
                  this.show(stack.shift(), true);
                } else {
                  this._transitioner = null;
                }
                resolve();
              });
            });
          });

          prev && uikitUtil.trigger(prev, 'itemhide', [this]);
          uikitUtil.trigger(next, 'itemshow', [this]);

          return promise;
        },

        getIndex(index, prev) {if (index === void 0) {index = this.index;}if (prev === void 0) {prev = this.index;}
          return uikitUtil.clamp(uikitUtil.getIndex(index, this.slides, prev, this.finite), 0, this.maxIndex);
        },

        getValidIndex(index, prevIndex) {if (index === void 0) {index = this.index;}if (prevIndex === void 0) {prevIndex = this.prevIndex;}
          return this.getIndex(index, prevIndex);
        },

        _show(prev, next, force) {
          this._transitioner = this._getTransitioner(prev, next, this.dir, {
            easing: force ?
            next.offsetWidth < 600 ?
            'cubic-bezier(0.25, 0.46, 0.45, 0.94)' /* easeOutQuad */ :
            'cubic-bezier(0.165, 0.84, 0.44, 1)' /* easeOutQuart */ :
            this.easing,
            ...this.transitionOptions });


          if (!force && !prev) {
            this._translate(1);
            return Promise.resolve();
          }

          const { length } = this.stack;
          return this._transitioner[length > 1 ? 'forward' : 'show'](
          length > 1 ? Math.min(this.duration, 75 + 75 / (length - 1)) : this.duration,
          this.percent);

        },

        _getDistance(prev, next) {
          return this._getTransitioner(prev, prev !== next && next).getDistance();
        },

        _translate(percent, prev, next) {if (prev === void 0) {prev = this.prevIndex;}if (next === void 0) {next = this.index;}
          const transitioner = this._getTransitioner(prev !== next ? prev : false, next);
          transitioner.translate(percent);
          return transitioner;
        },

        _getTransitioner(
        prev,
        next,
        dir,
        options)
        {if (prev === void 0) {prev = this.prevIndex;}if (next === void 0) {next = this.index;}if (dir === void 0) {dir = this.dir || 1;}if (options === void 0) {options = this.transitionOptions;}
          return new this.Transitioner(
          uikitUtil.isNumber(prev) ? this.slides[prev] : prev,
          uikitUtil.isNumber(next) ? this.slides[next] : next,
          dir * (uikitUtil.isRtl ? -1 : 1),
          options);

        } } };



    function getDirection(index, prevIndex) {
      return index === 'next' ? 1 : index === 'previous' ? -1 : index < prevIndex ? -1 : 1;
    }

    function speedUp(x) {
      return 0.5 * x + 300; // parabola through (400,500; 600,600; 1800,1200)
    }

    var Slideshow = {
      mixins: [Slider],

      props: {
        animation: String },


      data: {
        animation: 'slide',
        clsActivated: 'uk-transition-active',
        Animations: Animations$1,
        Transitioner },


      computed: {
        animation(_ref) {let { animation, Animations } = _ref;
          return { ...(Animations[animation] || Animations.slide), name: animation };
        },

        transitionOptions() {
          return { animation: this.animation };
        } },


      events: {
        beforeitemshow(_ref2) {let { target } = _ref2;
          uikitUtil.addClass(target, this.clsActive);
        },

        itemshown(_ref3) {let { target } = _ref3;
          uikitUtil.addClass(target, this.clsActivated);
        },

        itemhidden(_ref4) {let { target } = _ref4;
          uikitUtil.removeClass(target, this.clsActive, this.clsActivated);
        } } };

    var LightboxPanel = {
      mixins: [Container, Modal, Togglable, Slideshow],

      functional: true,

      props: {
        delayControls: Number,
        preload: Number,
        videoAutoplay: Boolean,
        template: String },


      data: () => ({
        preload: 1,
        videoAutoplay: false,
        delayControls: 3000,
        items: [],
        cls: 'uk-open',
        clsPage: 'uk-lightbox-page',
        selList: '.uk-lightbox-items',
        attrItem: 'uk-lightbox-item',
        selClose: '.uk-close-large',
        selCaption: '.uk-lightbox-caption',
        pauseOnHover: false,
        velocity: 2,
        Animations,
        template: "<div class=\"uk-lightbox uk-overflow-hidden\"> <ul class=\"uk-lightbox-items\"></ul> <div class=\"uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque\"> <button class=\"uk-lightbox-toolbar-icon uk-close-large\" type=\"button\" uk-close></button> </div> <a class=\"uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade\" href uk-slidenav-previous uk-lightbox-item=\"previous\"></a> <a class=\"uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade\" href uk-slidenav-next uk-lightbox-item=\"next\"></a> <div class=\"uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque\"></div> </div>" }),










      created() {
        const $el = uikitUtil.$(this.template);
        const list = uikitUtil.$(this.selList, $el);
        this.items.forEach(() => uikitUtil.append(list, '<li>'));

        this.$mount(uikitUtil.append(this.container, $el));
      },

      computed: {
        caption(_ref, $el) {let { selCaption } = _ref;
          return uikitUtil.$(selCaption, $el);
        } },


      events: [
      {
        name: uikitUtil.pointerMove + " " + uikitUtil.pointerDown + " keydown",

        handler: 'showControls' },


      {
        name: 'click',

        self: true,

        delegate() {
          return this.selSlides;
        },

        handler(e) {
          if (e.defaultPrevented) {
            return;
          }

          this.hide();
        } },


      {
        name: 'shown',

        self: true,

        handler() {
          this.showControls();
        } },


      {
        name: 'hide',

        self: true,

        handler() {
          this.hideControls();

          uikitUtil.removeClass(this.slides, this.clsActive);
          uikitUtil.Transition.stop(this.slides);
        } },


      {
        name: 'hidden',

        self: true,

        handler() {
          this.$destroy(true);
        } },


      {
        name: 'keyup',

        el() {
          return document;
        },

        handler(e) {
          if (!this.isToggled(this.$el) || !this.draggable) {
            return;
          }

          switch (e.keyCode) {
            case 37:
              this.show('previous');
              break;
            case 39:
              this.show('next');
              break;}

        } },


      {
        name: 'beforeitemshow',

        handler(e) {
          if (this.isToggled()) {
            return;
          }

          this.draggable = false;

          e.preventDefault();

          this.toggleElement(this.$el, true, false);

          this.animation = Animations['scale'];
          uikitUtil.removeClass(e.target, this.clsActive);
          this.stack.splice(1, 0, this.index);
        } },


      {
        name: 'itemshow',

        handler() {
          uikitUtil.html(this.caption, this.getItem().caption || '');

          for (let j = -this.preload; j <= this.preload; j++) {
            this.loadItem(this.index + j);
          }
        } },


      {
        name: 'itemshown',

        handler() {
          this.draggable = this.$props.draggable;
        } },


      {
        name: 'itemload',

        async handler(_, item) {
          const { source: src, type, alt = '', poster, attrs = {} } = item;

          this.setItem(item, '<span uk-spinner></span>');

          if (!src) {
            return;
          }

          let matches;
          const iframeAttrs = {
            frameborder: '0',
            allow: 'autoplay',
            allowfullscreen: '',
            style: 'max-width: 100%; box-sizing: border-box;',
            'uk-responsive': '',
            'uk-video': "" + this.videoAutoplay };


          // Image
          if (
          type === 'image' ||
          src.match(/\.(avif|jpe?g|jfif|a?png|gif|svg|webp)($|\?)/i))
          {
            try {
              const { width, height } = await uikitUtil.getImage(src, attrs.srcset, attrs.size);
              this.setItem(item, createEl('img', { src, width, height, alt, ...attrs }));
            } catch (e) {
              this.setError(item);
            }

            // Video
          } else if (type === 'video' || src.match(/\.(mp4|webm|ogv)($|\?)/i)) {
            const video = createEl('video', {
              src,
              poster,
              controls: '',
              playsinline: '',
              'uk-video': "" + this.videoAutoplay,
              ...attrs });


            uikitUtil.on(video, 'loadedmetadata', () => {
              uikitUtil.attr(video, { width: video.videoWidth, height: video.videoHeight });
              this.setItem(item, video);
            });
            uikitUtil.on(video, 'error', () => this.setError(item));

            // Iframe
          } else if (type === 'iframe' || src.match(/\.(html|php)($|\?)/i)) {
            this.setItem(
            item,
            createEl('iframe', {
              src,
              frameborder: '0',
              allowfullscreen: '',
              class: 'uk-lightbox-iframe',
              ...attrs }));



            // YouTube
          } else if (
          matches = src.match(
          /\/\/(?:.*?youtube(-nocookie)?\..*?[?&]v=|youtu\.be\/)([\w-]{11})[&?]?(.*)?/))

          {
            this.setItem(
            item,
            createEl('iframe', {
              src: "https://www.youtube" + (matches[1] || '') + ".com/embed/" + matches[2] + (
              matches[3] ? "?" + matches[3] : ''),

              width: 1920,
              height: 1080,
              ...iframeAttrs,
              ...attrs }));



            // Vimeo
          } else if (matches = src.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/)) {
            try {
              const { height, width } = await (
              await fetch("https://vimeo.com/api/oembed.json?maxwidth=1920&url=" +
              encodeURI(
              src),

              {
                credentials: 'omit' })).


              json();

              this.setItem(
              item,
              createEl('iframe', {
                src: "https://player.vimeo.com/video/" + matches[1] + (
                matches[2] ? "?" + matches[2] : ''),

                width,
                height,
                ...iframeAttrs,
                ...attrs }));


            } catch (e) {
              this.setError(item);
            }
          }
        } }],



      methods: {
        loadItem(index) {if (index === void 0) {index = this.index;}
          const item = this.getItem(index);

          if (!this.getSlide(item).childElementCount) {
            uikitUtil.trigger(this.$el, 'itemload', [item]);
          }
        },

        getItem(index) {if (index === void 0) {index = this.index;}
          return this.items[uikitUtil.getIndex(index, this.slides)];
        },

        setItem(item, content) {
          uikitUtil.trigger(this.$el, 'itemloaded', [this, uikitUtil.html(this.getSlide(item), content)]);
        },

        getSlide(item) {
          return this.slides[this.items.indexOf(item)];
        },

        setError(item) {
          this.setItem(item, '<span uk-icon="icon: bolt; ratio: 2"></span>');
        },

        showControls() {
          clearTimeout(this.controlsTimer);
          this.controlsTimer = setTimeout(this.hideControls, this.delayControls);

          uikitUtil.addClass(this.$el, 'uk-active', 'uk-transition-active');
        },

        hideControls() {
          uikitUtil.removeClass(this.$el, 'uk-active', 'uk-transition-active');
        } } };



    function createEl(tag, attrs) {
      const el = uikitUtil.fragment("<" + tag + ">");
      uikitUtil.attr(el, attrs);
      return el;
    }

    var Component = {
      install,

      props: { toggle: String },

      data: { toggle: 'a' },

      computed: {
        toggles: {
          get(_ref, $el) {let { toggle } = _ref;
            return uikitUtil.$$(toggle, $el);
          },

          watch() {
            this.hide();
          } } },



      disconnected() {
        this.hide();
      },

      events: [
      {
        name: 'click',

        delegate() {
          return this.toggle + ":not(.uk-disabled)";
        },

        handler(e) {
          e.preventDefault();
          this.show(e.current);
        } }],



      methods: {
        show(index) {
          const items = uikitUtil.uniqueBy(this.toggles.map(toItem), 'source');

          if (uikitUtil.isElement(index)) {
            const { source } = toItem(index);
            index = uikitUtil.findIndex(items, (_ref2) => {let { source: src } = _ref2;return source === src;});
          }

          this.panel = this.panel || this.$create('lightboxPanel', { ...this.$props, items });

          uikitUtil.on(this.panel.$el, 'hidden', () => this.panel = false);

          return this.panel.show(index);
        },

        hide() {var _this$panel;
          return (_this$panel = this.panel) == null ? void 0 : _this$panel.hide();
        } } };



    function install(UIkit, Lightbox) {
      if (!UIkit.lightboxPanel) {
        UIkit.component('lightboxPanel', LightboxPanel);
      }

      uikitUtil.assign(Lightbox.props, UIkit.component('lightboxPanel').options.props);
    }

    function toItem(el) {
      const item = {};

      for (const attr of ['href', 'caption', 'type', 'poster', 'alt', 'attrs']) {
        item[attr === 'href' ? 'source' : attr] = uikitUtil.data(el, attr);
      }

      item.attrs = uikitUtil.parseOptions(item.attrs);

      return item;
    }

    if (typeof window !== 'undefined' && window.UIkit) {
      window.UIkit.component('lightbox', Component);
    }

    return Component;

}));


/***/ }),

/***/ "./node_modules/uikit/dist/js/uikit-core.js":
/*!**************************************************!*\
  !*** ./node_modules/uikit/dist/js/uikit-core.js ***!
  \**************************************************/
/***/ (function(module) {

/*! UIkit 3.14.3 | https://www.getuikit.com | (c) 2014 - 2022 YOOtheme | MIT License */

(function (global, factory) {
     true ? module.exports = factory() :
    0;
})(this, (function () { 'use strict';

    const { hasOwnProperty, toString } = Object.prototype;

    function hasOwn(obj, key) {
      return hasOwnProperty.call(obj, key);
    }

    const hyphenateRe = /\B([A-Z])/g;

    const hyphenate = memoize((str) => str.replace(hyphenateRe, '-$1').toLowerCase());

    const camelizeRe = /-(\w)/g;

    const camelize = memoize((str) => str.replace(camelizeRe, toUpper));

    const ucfirst = memoize((str) =>
    str.length ? toUpper(null, str.charAt(0)) + str.slice(1) : '');


    function toUpper(_, c) {
      return c ? c.toUpperCase() : '';
    }

    function startsWith(str, search) {
      return str == null ? void 0 : str.startsWith == null ? void 0 : str.startsWith(search);
    }

    function endsWith(str, search) {
      return str == null ? void 0 : str.endsWith == null ? void 0 : str.endsWith(search);
    }

    function includes(obj, search) {
      return obj == null ? void 0 : obj.includes == null ? void 0 : obj.includes(search);
    }

    function findIndex(array, predicate) {
      return array == null ? void 0 : array.findIndex == null ? void 0 : array.findIndex(predicate);
    }

    const { isArray, from: toArray } = Array;
    const { assign } = Object;

    function isFunction(obj) {
      return typeof obj === 'function';
    }

    function isObject(obj) {
      return obj !== null && typeof obj === 'object';
    }

    function isPlainObject(obj) {
      return toString.call(obj) === '[object Object]';
    }

    function isWindow(obj) {
      return isObject(obj) && obj === obj.window;
    }

    function isDocument(obj) {
      return nodeType(obj) === 9;
    }

    function isNode(obj) {
      return nodeType(obj) >= 1;
    }

    function isElement(obj) {
      return nodeType(obj) === 1;
    }

    function nodeType(obj) {
      return !isWindow(obj) && isObject(obj) && obj.nodeType;
    }

    function isBoolean(value) {
      return typeof value === 'boolean';
    }

    function isString(value) {
      return typeof value === 'string';
    }

    function isNumber(value) {
      return typeof value === 'number';
    }

    function isNumeric(value) {
      return isNumber(value) || isString(value) && !isNaN(value - parseFloat(value));
    }

    function isEmpty(obj) {
      return !(isArray(obj) ? obj.length : isObject(obj) ? Object.keys(obj).length : false);
    }

    function isUndefined(value) {
      return value === void 0;
    }

    function toBoolean(value) {
      return isBoolean(value) ?
      value :
      value === 'true' || value === '1' || value === '' ?
      true :
      value === 'false' || value === '0' ?
      false :
      value;
    }

    function toNumber(value) {
      const number = Number(value);
      return isNaN(number) ? false : number;
    }

    function toFloat(value) {
      return parseFloat(value) || 0;
    }

    function toNode(element) {
      return toNodes(element)[0];
    }

    function toNodes(element) {
      return element && (isNode(element) ? [element] : Array.from(element).filter(isNode)) || [];
    }

    function toWindow(element) {var _element;
      if (isWindow(element)) {
        return element;
      }

      element = toNode(element);
      const document = isDocument(element) ? element : (_element = element) == null ? void 0 : _element.ownerDocument;

      return (document == null ? void 0 : document.defaultView) || window;
    }

    function isEqual(value, other) {
      return (
        value === other ||
        isObject(value) &&
        isObject(other) &&
        Object.keys(value).length === Object.keys(other).length &&
        each(value, (val, key) => val === other[key]));

    }

    function swap(value, a, b) {
      return value.replace(new RegExp(a + "|" + b, 'g'), (match) => match === a ? b : a);
    }

    function last(array) {
      return array[array.length - 1];
    }

    function each(obj, cb) {
      for (const key in obj) {
        if (false === cb(obj[key], key)) {
          return false;
        }
      }
      return true;
    }

    function sortBy$1(array, prop) {
      return array.
      slice().
      sort((_ref, _ref2) => {let { [prop]: propA = 0 } = _ref;let { [prop]: propB = 0 } = _ref2;return (
          propA > propB ? 1 : propB > propA ? -1 : 0);});

    }

    function uniqueBy(array, prop) {
      const seen = new Set();
      return array.filter((_ref3) => {let { [prop]: check } = _ref3;return seen.has(check) ? false : seen.add(check);});
    }

    function clamp(number, min, max) {if (min === void 0) {min = 0;}if (max === void 0) {max = 1;}
      return Math.min(Math.max(toNumber(number) || 0, min), max);
    }

    function noop() {}

    function intersectRect() {for (var _len = arguments.length, rects = new Array(_len), _key = 0; _key < _len; _key++) {rects[_key] = arguments[_key];}
      return [
      ['bottom', 'top'],
      ['right', 'left']].
      every(
      (_ref4) => {let [minProp, maxProp] = _ref4;return (
          Math.min(...rects.map((_ref5) => {let { [minProp]: min } = _ref5;return min;})) -
          Math.max(...rects.map((_ref6) => {let { [maxProp]: max } = _ref6;return max;})) >
          0);});

    }

    function pointInRect(point, rect) {
      return (
        point.x <= rect.right &&
        point.x >= rect.left &&
        point.y <= rect.bottom &&
        point.y >= rect.top);

    }

    function ratio(dimensions, prop, value) {
      const aProp = prop === 'width' ? 'height' : 'width';

      return {
        [aProp]: dimensions[prop] ?
        Math.round(value * dimensions[aProp] / dimensions[prop]) :
        dimensions[aProp],
        [prop]: value };

    }

    function contain(dimensions, maxDimensions) {
      dimensions = { ...dimensions };

      for (const prop in dimensions) {
        dimensions =
        dimensions[prop] > maxDimensions[prop] ?
        ratio(dimensions, prop, maxDimensions[prop]) :
        dimensions;
      }

      return dimensions;
    }

    function cover$1(dimensions, maxDimensions) {
      dimensions = contain(dimensions, maxDimensions);

      for (const prop in dimensions) {
        dimensions =
        dimensions[prop] < maxDimensions[prop] ?
        ratio(dimensions, prop, maxDimensions[prop]) :
        dimensions;
      }

      return dimensions;
    }

    const Dimensions = { ratio, contain, cover: cover$1 };

    function getIndex(i, elements, current, finite) {if (current === void 0) {current = 0;}if (finite === void 0) {finite = false;}
      elements = toNodes(elements);

      const { length } = elements;

      if (!length) {
        return -1;
      }

      i = isNumeric(i) ?
      toNumber(i) :
      i === 'next' ?
      current + 1 :
      i === 'previous' ?
      current - 1 :
      elements.indexOf(toNode(i));

      if (finite) {
        return clamp(i, 0, length - 1);
      }

      i %= length;

      return i < 0 ? i + length : i;
    }

    function memoize(fn) {
      const cache = Object.create(null);
      return (key) => cache[key] || (cache[key] = fn(key));
    }

    class Deferred {
      constructor() {
        this.promise = new Promise((resolve, reject) => {
          this.reject = reject;
          this.resolve = resolve;
        });
      }}

    function attr(element, name, value) {
      if (isObject(name)) {
        for (const key in name) {
          attr(element, key, name[key]);
        }
        return;
      }

      if (isUndefined(value)) {var _toNode;
        return (_toNode = toNode(element)) == null ? void 0 : _toNode.getAttribute(name);
      } else {
        for (const el of toNodes(element)) {
          if (isFunction(value)) {
            value = value.call(el, attr(el, name));
          }

          if (value === null) {
            removeAttr(el, name);
          } else {
            el.setAttribute(name, value);
          }
        }
      }
    }

    function hasAttr(element, name) {
      return toNodes(element).some((element) => element.hasAttribute(name));
    }

    function removeAttr(element, name) {
      const elements = toNodes(element);
      for (const attribute of name.split(' ')) {
        for (const element of elements) {
          element.removeAttribute(attribute);
        }
      }
    }

    function data(element, attribute) {
      for (const name of [attribute, "data-" + attribute]) {
        if (hasAttr(element, name)) {
          return attr(element, name);
        }
      }
    }

    const voidElements = {
      area: true,
      base: true,
      br: true,
      col: true,
      embed: true,
      hr: true,
      img: true,
      input: true,
      keygen: true,
      link: true,
      menuitem: true,
      meta: true,
      param: true,
      source: true,
      track: true,
      wbr: true };

    function isVoidElement(element) {
      return toNodes(element).some((element) => voidElements[element.tagName.toLowerCase()]);
    }

    function isVisible(element) {
      return toNodes(element).some(
      (element) => element.offsetWidth || element.offsetHeight || element.getClientRects().length);

    }

    const selInput = 'input,select,textarea,button';
    function isInput(element) {
      return toNodes(element).some((element) => matches(element, selInput));
    }

    const selFocusable = selInput + ",a[href],[tabindex]";
    function isFocusable(element) {
      return matches(element, selFocusable);
    }

    function parent(element) {var _toNode;
      return (_toNode = toNode(element)) == null ? void 0 : _toNode.parentElement;
    }

    function filter(element, selector) {
      return toNodes(element).filter((element) => matches(element, selector));
    }

    function matches(element, selector) {
      return toNodes(element).some((element) => element.matches(selector));
    }

    function closest(element, selector) {
      if (startsWith(selector, '>')) {
        selector = selector.slice(1);
      }

      return isElement(element) ?
      element.closest(selector) :
      toNodes(element).
      map((element) => closest(element, selector)).
      filter(Boolean);
    }

    function within(element, selector) {
      return isString(selector) ?
      matches(element, selector) || !!closest(element, selector) :
      element === selector || toNode(selector).contains(toNode(element));
    }

    function parents(element, selector) {
      const elements = [];

      while (element = parent(element)) {
        if (!selector || matches(element, selector)) {
          elements.push(element);
        }
      }

      return elements;
    }

    function children(element, selector) {
      element = toNode(element);
      const children = element ? toNodes(element.children) : [];
      return selector ? filter(children, selector) : children;
    }

    function index(element, ref) {
      return ref ? toNodes(element).indexOf(toNode(ref)) : children(parent(element)).indexOf(element);
    }

    function query(selector, context) {
      return find(selector, getContext(selector, context));
    }

    function queryAll(selector, context) {
      return findAll(selector, getContext(selector, context));
    }

    function find(selector, context) {
      return toNode(_query(selector, context, 'querySelector'));
    }

    function findAll(selector, context) {
      return toNodes(_query(selector, context, 'querySelectorAll'));
    }

    const contextSelectorRe = /(^|[^\\],)\s*[!>+~-]/;
    const isContextSelector = memoize((selector) => selector.match(contextSelectorRe));

    function getContext(selector, context) {if (context === void 0) {context = document;}
      return isString(selector) && isContextSelector(selector) || isDocument(context) ?
      context :
      context.ownerDocument;
    }

    const contextSanitizeRe = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g;
    const sanatize = memoize((selector) => selector.replace(contextSanitizeRe, '$1 *'));

    function _query(selector, context, queryFn) {if (context === void 0) {context = document;}
      if (!selector || !isString(selector)) {
        return selector;
      }

      selector = sanatize(selector);

      if (isContextSelector(selector)) {
        const split = splitSelector(selector);
        selector = '';
        for (let sel of split) {
          let ctx = context;

          if (sel[0] === '!') {
            const selectors = sel.substr(1).trim().split(' ');
            ctx = closest(parent(context), selectors[0]);
            sel = selectors.slice(1).join(' ').trim();
            if (!sel.length && split.length === 1) {
              return ctx;
            }
          }

          if (sel[0] === '-') {
            const selectors = sel.substr(1).trim().split(' ');
            const prev = (ctx || context).previousElementSibling;
            ctx = matches(prev, sel.substr(1)) ? prev : null;
            sel = selectors.slice(1).join(' ');
          }

          if (ctx) {
            selector += "" + (selector ? ',' : '') + domPath(ctx) + " " + sel;
          }
        }

        context = document;
      }

      try {
        return context[queryFn](selector);
      } catch (e) {
        return null;
      }
    }

    const selectorRe = /.*?[^\\](?:,|$)/g;

    const splitSelector = memoize((selector) =>
    selector.match(selectorRe).map((selector) => selector.replace(/,$/, '').trim()));


    function domPath(element) {
      const names = [];
      while (element.parentNode) {
        const id = attr(element, 'id');
        if (id) {
          names.unshift("#" + escape(id));
          break;
        } else {
          let { tagName } = element;
          if (tagName !== 'HTML') {
            tagName += ":nth-child(" + (index(element) + 1) + ")";
          }
          names.unshift(tagName);
          element = element.parentNode;
        }
      }
      return names.join(' > ');
    }

    function escape(css) {
      return isString(css) ? CSS.escape(css) : '';
    }

    function on() {for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}
      let [targets, types, selector, listener, useCapture = false] = getArgs(args);

      if (listener.length > 1) {
        listener = detail(listener);
      }

      if (useCapture != null && useCapture.self) {
        listener = selfFilter(listener);
      }

      if (selector) {
        listener = delegate(selector, listener);
      }

      for (const type of types) {
        for (const target of targets) {
          target.addEventListener(type, listener, useCapture);
        }
      }

      return () => off(targets, types, listener, useCapture);
    }

    function off() {for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {args[_key2] = arguments[_key2];}
      let [targets, types,, listener, useCapture = false] = getArgs(args);
      for (const type of types) {
        for (const target of targets) {
          target.removeEventListener(type, listener, useCapture);
        }
      }
    }

    function once() {for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {args[_key3] = arguments[_key3];}
      const [element, types, selector, listener, useCapture = false, condition] = getArgs(args);
      const off = on(
      element,
      types,
      selector,
      (e) => {
        const result = !condition || condition(e);
        if (result) {
          off();
          listener(e, result);
        }
      },
      useCapture);


      return off;
    }

    function trigger(targets, event, detail) {
      return toEventTargets(targets).every((target) =>
      target.dispatchEvent(createEvent(event, true, true, detail)));

    }

    function createEvent(e, bubbles, cancelable, detail) {if (bubbles === void 0) {bubbles = true;}if (cancelable === void 0) {cancelable = false;}
      if (isString(e)) {
        e = new CustomEvent(e, { bubbles, cancelable, detail });
      }

      return e;
    }

    function getArgs(args) {
      // Event targets
      args[0] = toEventTargets(args[0]);

      // Event types
      if (isString(args[1])) {
        args[1] = args[1].split(' ');
      }

      // Delegate?
      if (isFunction(args[2])) {
        args.splice(2, 0, false);
      }

      return args;
    }

    function delegate(selector, listener) {
      return (e) => {
        const current =
        selector[0] === '>' ?
        findAll(selector, e.currentTarget).
        reverse().
        filter((element) => within(e.target, element))[0] :
        closest(e.target, selector);

        if (current) {
          e.current = current;
          listener.call(this, e);
        }
      };
    }

    function detail(listener) {
      return (e) => isArray(e.detail) ? listener(e, ...e.detail) : listener(e);
    }

    function selfFilter(listener) {
      return function (e) {
        if (e.target === e.currentTarget || e.target === e.current) {
          return listener.call(null, e);
        }
      };
    }

    function isEventTarget(target) {
      return target && 'addEventListener' in target;
    }

    function toEventTarget(target) {
      return isEventTarget(target) ? target : toNode(target);
    }

    function toEventTargets(target) {
      return isArray(target) ?
      target.map(toEventTarget).filter(Boolean) :
      isString(target) ?
      findAll(target) :
      isEventTarget(target) ?
      [target] :
      toNodes(target);
    }

    function isTouch(e) {
      return e.pointerType === 'touch' || !!e.touches;
    }

    function getEventPos(e) {var _e$touches, _e$changedTouches;
      const { clientX: x, clientY: y } = ((_e$touches = e.touches) == null ? void 0 : _e$touches[0]) || ((_e$changedTouches = e.changedTouches) == null ? void 0 : _e$changedTouches[0]) || e;

      return { x, y };
    }

    function ajax(url, options) {
      const env = {
        data: null,
        method: 'GET',
        headers: {},
        xhr: new XMLHttpRequest(),
        beforeSend: noop,
        responseType: '',
        ...options };

      return Promise.resolve().
      then(() => env.beforeSend(env)).
      then(() => send(url, env));
    }

    function send(url, env) {
      return new Promise((resolve, reject) => {
        const { xhr } = env;

        for (const prop in env) {
          if (prop in xhr) {
            try {
              xhr[prop] = env[prop];
            } catch (e) {
              // noop
            }
          }
        }

        xhr.open(env.method.toUpperCase(), url);

        for (const header in env.headers) {
          xhr.setRequestHeader(header, env.headers[header]);
        }

        on(xhr, 'load', () => {
          if (xhr.status === 0 || xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
            resolve(xhr);
          } else {
            reject(
            assign(Error(xhr.statusText), {
              xhr,
              status: xhr.status }));


          }
        });

        on(xhr, 'error', () => reject(assign(Error('Network Error'), { xhr })));
        on(xhr, 'timeout', () => reject(assign(Error('Network Timeout'), { xhr })));

        xhr.send(env.data);
      });
    }

    function getImage(src, srcset, sizes) {
      return new Promise((resolve, reject) => {
        const img = new Image();

        img.onerror = (e) => {
          reject(e);
        };
        img.onload = () => {
          resolve(img);
        };

        sizes && (img.sizes = sizes);
        srcset && (img.srcset = srcset);
        img.src = src;
      });
    }

    const cssNumber = {
      'animation-iteration-count': true,
      'column-count': true,
      'fill-opacity': true,
      'flex-grow': true,
      'flex-shrink': true,
      'font-weight': true,
      'line-height': true,
      opacity: true,
      order: true,
      orphans: true,
      'stroke-dasharray': true,
      'stroke-dashoffset': true,
      widows: true,
      'z-index': true,
      zoom: true };


    function css(element, property, value, priority) {if (priority === void 0) {priority = '';}
      const elements = toNodes(element);
      for (const element of elements) {
        if (isString(property)) {
          property = propName(property);

          if (isUndefined(value)) {
            return getComputedStyle(element).getPropertyValue(property);
          } else {
            element.style.setProperty(
            property,
            isNumeric(value) && !cssNumber[property] ?
            value + "px" :
            value || isNumber(value) ?
            value :
            '',
            priority);

          }
        } else if (isArray(property)) {
          const props = {};
          for (const prop of property) {
            props[prop] = css(element, prop);
          }
          return props;
        } else if (isObject(property)) {
          priority = value;
          each(property, (value, property) => css(element, property, value, priority));
        }
      }
      return elements[0];
    }

    const propertyRe = /^\s*(["'])?(.*?)\1\s*$/;
    function getCssVar(name, element) {if (element === void 0) {element = document.documentElement;}
      return css(element, "--uk-" + name).replace(propertyRe, '$2');
    }

    // https://drafts.csswg.org/cssom/#dom-cssstyledeclaration-setproperty
    const propName = memoize((name) => vendorPropName(name));

    const cssPrefixes = ['webkit', 'moz'];

    function vendorPropName(name) {
      if (name[0] === '-') {
        return name;
      }

      name = hyphenate(name);

      const { style } = document.documentElement;

      if (name in style) {
        return name;
      }

      let i = cssPrefixes.length,
      prefixedName;

      while (i--) {
        prefixedName = "-" + cssPrefixes[i] + "-" + name;
        if (prefixedName in style) {
          return prefixedName;
        }
      }
    }

    function addClass(element) {for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {args[_key - 1] = arguments[_key];}
      apply$1(element, args, 'add');
    }

    function removeClass(element) {for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {args[_key2 - 1] = arguments[_key2];}
      apply$1(element, args, 'remove');
    }

    function removeClasses(element, cls) {
      attr(element, 'class', (value) => (value || '').replace(new RegExp("\\b" + cls + "\\b", 'g'), ''));
    }

    function replaceClass(element) {
      (arguments.length <= 1 ? undefined : arguments[1]) && removeClass(element, arguments.length <= 1 ? undefined : arguments[1]);
      (arguments.length <= 2 ? undefined : arguments[2]) && addClass(element, arguments.length <= 2 ? undefined : arguments[2]);
    }

    function hasClass(element, cls) {
      [cls] = getClasses(cls);
      return !!cls && toNodes(element).some((node) => node.classList.contains(cls));
    }

    function toggleClass(element, cls, force) {
      const classes = getClasses(cls);

      if (!isUndefined(force)) {
        force = !!force;
      }

      for (const node of toNodes(element)) {
        for (const cls of classes) {
          node.classList.toggle(cls, force);
        }
      }
    }

    function apply$1(element, args, fn) {
      args = args.reduce((args, arg) => args.concat(getClasses(arg)), []);

      for (const node of toNodes(element)) {
        node.classList[fn](...args);
      }
    }

    function getClasses(str) {
      return String(str).split(/\s|,/).filter(Boolean);
    }

    function transition(element, props, duration, timing) {if (duration === void 0) {duration = 400;}if (timing === void 0) {timing = 'linear';}
      return Promise.all(
      toNodes(element).map(
      (element) =>
      new Promise((resolve, reject) => {
        for (const name in props) {
          const value = css(element, name);
          if (value === '') {
            css(element, name, value);
          }
        }

        const timer = setTimeout(() => trigger(element, 'transitionend'), duration);

        once(
        element,
        'transitionend transitioncanceled',
        (_ref) => {let { type } = _ref;
          clearTimeout(timer);
          removeClass(element, 'uk-transition');
          css(element, {
            transitionProperty: '',
            transitionDuration: '',
            transitionTimingFunction: '' });

          type === 'transitioncanceled' ? reject() : resolve(element);
        },
        { self: true });


        addClass(element, 'uk-transition');
        css(element, {
          transitionProperty: Object.keys(props).map(propName).join(','),
          transitionDuration: duration + "ms",
          transitionTimingFunction: timing,
          ...props });

      })));


    }

    const Transition = {
      start: transition,

      stop(element) {
        trigger(element, 'transitionend');
        return Promise.resolve();
      },

      cancel(element) {
        trigger(element, 'transitioncanceled');
      },

      inProgress(element) {
        return hasClass(element, 'uk-transition');
      } };


    const animationPrefix = 'uk-animation-';

    function animate$1(element, animation, duration, origin, out) {if (duration === void 0) {duration = 200;}
      return Promise.all(
      toNodes(element).map(
      (element) =>
      new Promise((resolve, reject) => {
        trigger(element, 'animationcanceled');
        const timer = setTimeout(() => trigger(element, 'animationend'), duration);

        once(
        element,
        'animationend animationcanceled',
        (_ref2) => {let { type } = _ref2;
          clearTimeout(timer);

          type === 'animationcanceled' ? reject() : resolve(element);

          css(element, 'animationDuration', '');
          removeClasses(element, animationPrefix + "\\S*");
        },
        { self: true });


        css(element, 'animationDuration', duration + "ms");
        addClass(element, animation, animationPrefix + (out ? 'leave' : 'enter'));

        if (startsWith(animation, animationPrefix)) {
          origin && addClass(element, "uk-transform-origin-" + origin);
          out && addClass(element, animationPrefix + "reverse");
        }
      })));


    }

    const inProgress = new RegExp(animationPrefix + "(enter|leave)");
    const Animation = {
      in: animate$1,

      out(element, animation, duration, origin) {
        return animate$1(element, animation, duration, origin, true);
      },

      inProgress(element) {
        return inProgress.test(attr(element, 'class'));
      },

      cancel(element) {
        trigger(element, 'animationcanceled');
      } };

    const dirs$1 = {
      width: ['left', 'right'],
      height: ['top', 'bottom'] };


    function dimensions(element) {
      const rect = isElement(element) ?
      toNode(element).getBoundingClientRect() :
      { height: height(element), width: width(element), top: 0, left: 0 };

      return {
        height: rect.height,
        width: rect.width,
        top: rect.top,
        left: rect.left,
        bottom: rect.top + rect.height,
        right: rect.left + rect.width };

    }

    function offset(element, coordinates) {
      const currentOffset = dimensions(element);

      if (element) {
        const { scrollY, scrollX } = toWindow(element);
        const offsetBy = { height: scrollY, width: scrollX };

        for (const dir in dirs$1) {
          for (const prop of dirs$1[dir]) {
            currentOffset[prop] += offsetBy[dir];
          }
        }
      }

      if (!coordinates) {
        return currentOffset;
      }

      const pos = css(element, 'position');

      each(css(element, ['left', 'top']), (value, prop) =>
      css(
      element,
      prop,
      coordinates[prop] -
      currentOffset[prop] +
      toFloat(pos === 'absolute' && value === 'auto' ? position(element)[prop] : value)));


    }

    function position(element) {
      let { top, left } = offset(element);

      const {
        ownerDocument: { body, documentElement },
        offsetParent } =
      toNode(element);
      let parent = offsetParent || documentElement;

      while (
      parent && (
      parent === body || parent === documentElement) &&
      css(parent, 'position') === 'static')
      {
        parent = parent.parentNode;
      }

      if (isElement(parent)) {
        const parentOffset = offset(parent);
        top -= parentOffset.top + toFloat(css(parent, 'borderTopWidth'));
        left -= parentOffset.left + toFloat(css(parent, 'borderLeftWidth'));
      }

      return {
        top: top - toFloat(css(element, 'marginTop')),
        left: left - toFloat(css(element, 'marginLeft')) };

    }

    function offsetPosition(element) {
      const offset = [0, 0];

      element = toNode(element);

      do {
        offset[0] += element.offsetTop;
        offset[1] += element.offsetLeft;

        if (css(element, 'position') === 'fixed') {
          const win = toWindow(element);
          offset[0] += win.scrollY;
          offset[1] += win.scrollX;
          return offset;
        }
      } while (element = element.offsetParent);

      return offset;
    }

    const height = dimension('height');
    const width = dimension('width');

    function dimension(prop) {
      const propName = ucfirst(prop);
      return (element, value) => {
        if (isUndefined(value)) {
          if (isWindow(element)) {
            return element["inner" + propName];
          }

          if (isDocument(element)) {
            const doc = element.documentElement;
            return Math.max(doc["offset" + propName], doc["scroll" + propName]);
          }

          element = toNode(element);

          value = css(element, prop);
          value = value === 'auto' ? element["offset" + propName] : toFloat(value) || 0;

          return value - boxModelAdjust(element, prop);
        } else {
          return css(
          element,
          prop,
          !value && value !== 0 ? '' : +value + boxModelAdjust(element, prop) + 'px');

        }
      };
    }

    function boxModelAdjust(element, prop, sizing) {if (sizing === void 0) {sizing = 'border-box';}
      return css(element, 'boxSizing') === sizing ?
      dirs$1[prop].
      map(ucfirst).
      reduce(
      (value, prop) =>
      value +
      toFloat(css(element, "padding" + prop)) +
      toFloat(css(element, "border" + prop + "Width")),
      0) :

      0;
    }

    function flipPosition(pos) {
      for (const dir in dirs$1) {
        for (const i in dirs$1[dir]) {
          if (dirs$1[dir][i] === pos) {
            return dirs$1[dir][1 - i];
          }
        }
      }
      return pos;
    }

    function toPx(value, property, element, offsetDim) {if (property === void 0) {property = 'width';}if (element === void 0) {element = window;}if (offsetDim === void 0) {offsetDim = false;}
      if (!isString(value)) {
        return toFloat(value);
      }

      return parseCalc(value).reduce((result, value) => {
        const unit = parseUnit(value);
        if (unit) {
          value = percent(
          unit === 'vh' ?
          height(toWindow(element)) :
          unit === 'vw' ?
          width(toWindow(element)) :
          offsetDim ?
          element["offset" + ucfirst(property)] :
          dimensions(element)[property],
          value);

        }

        return result + toFloat(value);
      }, 0);
    }

    const calcRe = /-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g;
    const parseCalc = memoize((calc) => calc.toString().replace(/\s/g, '').match(calcRe) || []);
    const unitRe = /(?:v[hw]|%)$/;
    const parseUnit = memoize((str) => (str.match(unitRe) || [])[0]);

    function percent(base, value) {
      return base * toFloat(value) / 100;
    }

    function ready(fn) {
      if (document.readyState !== 'loading') {
        fn();
        return;
      }

      once(document, 'DOMContentLoaded', fn);
    }

    function isTag(element, tagName) {var _element$tagName;
      return (element == null ? void 0 : (_element$tagName = element.tagName) == null ? void 0 : _element$tagName.toLowerCase()) === tagName.toLowerCase();
    }

    function empty(element) {
      element = $(element);
      element.innerHTML = '';
      return element;
    }

    function html(parent, html) {
      return isUndefined(html) ? $(parent).innerHTML : append(empty(parent), html);
    }

    const prepend = applyFn('prepend');
    const append = applyFn('append');
    const before = applyFn('before');
    const after = applyFn('after');

    function applyFn(fn) {
      return function (ref, element) {var _$;
        const nodes = toNodes(isString(element) ? fragment(element) : element);
        (_$ = $(ref)) == null ? void 0 : _$[fn](...nodes);
        return unwrapSingle(nodes);
      };
    }

    function remove$1(element) {
      toNodes(element).forEach((element) => element.remove());
    }

    function wrapAll(element, structure) {
      structure = toNode(before(element, structure));

      while (structure.firstChild) {
        structure = structure.firstChild;
      }

      append(structure, element);

      return structure;
    }

    function wrapInner(element, structure) {
      return toNodes(
      toNodes(element).map((element) =>
      element.hasChildNodes() ?
      wrapAll(toNodes(element.childNodes), structure) :
      append(element, structure)));


    }

    function unwrap(element) {
      toNodes(element).
      map(parent).
      filter((value, index, self) => self.indexOf(value) === index).
      forEach((parent) => parent.replaceWith(...parent.childNodes));
    }

    const fragmentRe = /^\s*<(\w+|!)[^>]*>/;
    const singleTagRe = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;

    function fragment(html) {
      const matches = singleTagRe.exec(html);
      if (matches) {
        return document.createElement(matches[1]);
      }

      const container = document.createElement('div');
      if (fragmentRe.test(html)) {
        container.insertAdjacentHTML('beforeend', html.trim());
      } else {
        container.textContent = html;
      }

      return unwrapSingle(container.childNodes);
    }

    function unwrapSingle(nodes) {
      return nodes.length > 1 ? nodes : nodes[0];
    }

    function apply(node, fn) {
      if (!isElement(node)) {
        return;
      }

      fn(node);
      node = node.firstElementChild;
      while (node) {
        const next = node.nextElementSibling;
        apply(node, fn);
        node = next;
      }
    }

    function $(selector, context) {
      return isHtml(selector) ? toNode(fragment(selector)) : find(selector, context);
    }

    function $$(selector, context) {
      return isHtml(selector) ? toNodes(fragment(selector)) : findAll(selector, context);
    }

    function isHtml(str) {
      return isString(str) && startsWith(str.trim(), '<');
    }

    const inBrowser = typeof window !== 'undefined';
    const isRtl = inBrowser && attr(document.documentElement, 'dir') === 'rtl';

    const hasTouch = inBrowser && 'ontouchstart' in window;
    const hasPointerEvents = inBrowser && window.PointerEvent;

    const pointerDown = hasPointerEvents ? 'pointerdown' : hasTouch ? 'touchstart' : 'mousedown';
    const pointerMove = hasPointerEvents ? 'pointermove' : hasTouch ? 'touchmove' : 'mousemove';
    const pointerUp = hasPointerEvents ? 'pointerup' : hasTouch ? 'touchend' : 'mouseup';
    const pointerEnter = hasPointerEvents ? 'pointerenter' : hasTouch ? '' : 'mouseenter';
    const pointerLeave = hasPointerEvents ? 'pointerleave' : hasTouch ? '' : 'mouseleave';
    const pointerCancel = hasPointerEvents ? 'pointercancel' : 'touchcancel';

    /*
        Based on:
        Copyright (c) 2016 Wilson Page wilsonpage@me.com
        https://github.com/wilsonpage/fastdom
    */

    const fastdom = {
      reads: [],
      writes: [],

      read(task) {
        this.reads.push(task);
        scheduleFlush();
        return task;
      },

      write(task) {
        this.writes.push(task);
        scheduleFlush();
        return task;
      },

      clear(task) {
        remove(this.reads, task);
        remove(this.writes, task);
      },

      flush };


    function flush(recursion) {
      runTasks(fastdom.reads);
      runTasks(fastdom.writes.splice(0));

      fastdom.scheduled = false;

      if (fastdom.reads.length || fastdom.writes.length) {
        scheduleFlush(recursion + 1);
      }
    }

    const RECURSION_LIMIT = 4;
    function scheduleFlush(recursion) {
      if (fastdom.scheduled) {
        return;
      }

      fastdom.scheduled = true;
      if (recursion && recursion < RECURSION_LIMIT) {
        Promise.resolve().then(() => flush(recursion));
      } else {
        requestAnimationFrame(() => flush(1));
      }
    }

    function runTasks(tasks) {
      let task;
      while (task = tasks.shift()) {
        try {
          task();
        } catch (e) {
          console.error(e);
        }
      }
    }

    function remove(array, item) {
      const index = array.indexOf(item);
      return ~index && array.splice(index, 1);
    }

    function MouseTracker() {}

    MouseTracker.prototype = {
      positions: [],

      init() {
        this.positions = [];

        let position;
        this.unbind = on(document, 'mousemove', (e) => position = getEventPos(e));
        this.interval = setInterval(() => {
          if (!position) {
            return;
          }

          this.positions.push(position);

          if (this.positions.length > 5) {
            this.positions.shift();
          }
        }, 50);
      },

      cancel() {var _this$unbind;
        (_this$unbind = this.unbind) == null ? void 0 : _this$unbind.call(this);
        this.interval && clearInterval(this.interval);
      },

      movesTo(target) {
        if (this.positions.length < 2) {
          return false;
        }

        const p = target.getBoundingClientRect();
        const { left, right, top, bottom } = p;

        const [prevPosition] = this.positions;
        const position = last(this.positions);
        const path = [prevPosition, position];

        if (pointInRect(position, p)) {
          return false;
        }

        const diagonals = [
        [
        { x: left, y: top },
        { x: right, y: bottom }],

        [
        { x: left, y: bottom },
        { x: right, y: top }]];



        return diagonals.some((diagonal) => {
          const intersection = intersect(path, diagonal);
          return intersection && pointInRect(intersection, p);
        });
      } };


    // Inspired by http://paulbourke.net/geometry/pointlineplane/
    function intersect(_ref, _ref2) {let [{ x: x1, y: y1 }, { x: x2, y: y2 }] = _ref;let [{ x: x3, y: y3 }, { x: x4, y: y4 }] = _ref2;
      const denominator = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);

      // Lines are parallel
      if (denominator === 0) {
        return false;
      }

      const ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator;

      if (ua < 0) {
        return false;
      }

      // Return an object with the x and y coordinates of the intersection
      return { x: x1 + ua * (x2 - x1), y: y1 + ua * (y2 - y1) };
    }

    function observeIntersection(targets, cb, options, intersecting) {if (intersecting === void 0) {intersecting = true;}
      const observer = new IntersectionObserver(
      intersecting ?
      (entries, observer) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          cb(entries, observer);
        }
      } :
      cb,
      options);

      for (const el of toNodes(targets)) {
        observer.observe(el);
      }

      return observer;
    }

    const hasResizeObserver = inBrowser && window.ResizeObserver;
    function observeResize(targets, cb, options) {if (options === void 0) {options = { box: 'border-box' };}
      if (hasResizeObserver) {
        return observe(ResizeObserver, targets, cb, options);
      }

      // Fallback Safari < 13.1
      initResizeListener();
      listeners.add(cb);

      return {
        disconnect() {
          listeners.delete(cb);
        } };

    }

    let listeners;
    function initResizeListener() {
      if (listeners) {
        return;
      }

      listeners = new Set();

      // throttle 'resize'
      let pendingResize;
      const handleResize = () => {
        if (pendingResize) {
          return;
        }
        pendingResize = true;
        fastdom.read(() => pendingResize = false);
        for (const listener of listeners) {
          listener();
        }
      };

      on(window, 'load resize', handleResize);
      on(document, 'loadedmetadata load', handleResize, true);
    }

    function observeMutation(targets, cb, options) {
      return observe(MutationObserver, targets, cb, options);
    }

    function observe(Observer, targets, cb, options) {
      const observer = new Observer(cb);
      for (const el of toNodes(targets)) {
        observer.observe(el, options);
      }

      return observer;
    }

    const strats = {};

    strats.events =
    strats.created =
    strats.beforeConnect =
    strats.connected =
    strats.beforeDisconnect =
    strats.disconnected =
    strats.destroy =
    concatStrat;

    // args strategy
    strats.args = function (parentVal, childVal) {
      return childVal !== false && concatStrat(childVal || parentVal);
    };

    // update strategy
    strats.update = function (parentVal, childVal) {
      return sortBy$1(
      concatStrat(parentVal, isFunction(childVal) ? { read: childVal } : childVal),
      'order');

    };

    // property strategy
    strats.props = function (parentVal, childVal) {
      if (isArray(childVal)) {
        const value = {};
        for (const key of childVal) {
          value[key] = String;
        }
        childVal = value;
      }

      return strats.methods(parentVal, childVal);
    };

    // extend strategy
    strats.computed = strats.methods = function (parentVal, childVal) {
      return childVal ? parentVal ? { ...parentVal, ...childVal } : childVal : parentVal;
    };

    // data strategy
    strats.data = function (parentVal, childVal, vm) {
      if (!vm) {
        if (!childVal) {
          return parentVal;
        }

        if (!parentVal) {
          return childVal;
        }

        return function (vm) {
          return mergeFnData(parentVal, childVal, vm);
        };
      }

      return mergeFnData(parentVal, childVal, vm);
    };

    function mergeFnData(parentVal, childVal, vm) {
      return strats.computed(
      isFunction(parentVal) ? parentVal.call(vm, vm) : parentVal,
      isFunction(childVal) ? childVal.call(vm, vm) : childVal);

    }

    // concat strategy
    function concatStrat(parentVal, childVal) {
      parentVal = parentVal && !isArray(parentVal) ? [parentVal] : parentVal;

      return childVal ?
      parentVal ?
      parentVal.concat(childVal) :
      isArray(childVal) ?
      childVal :
      [childVal] :
      parentVal;
    }

    // default strategy
    function defaultStrat(parentVal, childVal) {
      return isUndefined(childVal) ? parentVal : childVal;
    }

    function mergeOptions(parent, child, vm) {
      const options = {};

      if (isFunction(child)) {
        child = child.options;
      }

      if (child.extends) {
        parent = mergeOptions(parent, child.extends, vm);
      }

      if (child.mixins) {
        for (const mixin of child.mixins) {
          parent = mergeOptions(parent, mixin, vm);
        }
      }

      for (const key in parent) {
        mergeKey(key);
      }

      for (const key in child) {
        if (!hasOwn(parent, key)) {
          mergeKey(key);
        }
      }

      function mergeKey(key) {
        options[key] = (strats[key] || defaultStrat)(parent[key], child[key], vm);
      }

      return options;
    }

    function parseOptions(options, args) {if (args === void 0) {args = [];}
      try {
        return options ?
        startsWith(options, '{') ?
        JSON.parse(options) :
        args.length && !includes(options, ':') ?
        { [args[0]]: options } :
        options.split(';').reduce((options, option) => {
          const [key, value] = option.split(/:(.*)/);
          if (key && !isUndefined(value)) {
            options[key.trim()] = value.trim();
          }
          return options;
        }, {}) :
        {};
      } catch (e) {
        return {};
      }
    }

    function play(el) {
      if (isIFrame(el)) {
        call(el, { func: 'playVideo', method: 'play' });
      }

      if (isHTML5(el)) {
        try {
          el.play().catch(noop);
        } catch (e) {
          // noop
        }
      }
    }

    function pause(el) {
      if (isIFrame(el)) {
        call(el, { func: 'pauseVideo', method: 'pause' });
      }

      if (isHTML5(el)) {
        el.pause();
      }
    }

    function mute(el) {
      if (isIFrame(el)) {
        call(el, { func: 'mute', method: 'setVolume', value: 0 });
      }

      if (isHTML5(el)) {
        el.muted = true;
      }
    }

    function isVideo(el) {
      return isHTML5(el) || isIFrame(el);
    }

    function isHTML5(el) {
      return isTag(el, 'video');
    }

    function isIFrame(el) {
      return isTag(el, 'iframe') && (isYoutube(el) || isVimeo(el));
    }

    function isYoutube(el) {
      return !!el.src.match(
      /\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/);

    }

    function isVimeo(el) {
      return !!el.src.match(/vimeo\.com\/video\/.*/);
    }

    async function call(el, cmd) {
      await enableApi(el);
      post(el, cmd);
    }

    function post(el, cmd) {
      try {
        el.contentWindow.postMessage(JSON.stringify({ event: 'command', ...cmd }), '*');
      } catch (e) {
        // noop
      }
    }

    const stateKey = '_ukPlayer';
    let counter = 0;
    function enableApi(el) {
      if (el[stateKey]) {
        return el[stateKey];
      }

      const youtube = isYoutube(el);
      const vimeo = isVimeo(el);

      const id = ++counter;
      let poller;

      return el[stateKey] = new Promise((resolve) => {
        youtube &&
        once(el, 'load', () => {
          const listener = () => post(el, { event: 'listening', id });
          poller = setInterval(listener, 100);
          listener();
        });

        once(window, 'message', resolve, false, (_ref) => {let { data } = _ref;
          try {
            data = JSON.parse(data);
            return (
              data && (
              youtube && data.id === id && data.event === 'onReady' ||
              vimeo && Number(data.player_id) === id));

          } catch (e) {
            // noop
          }
        });

        el.src = "" + el.src + (includes(el.src, '?') ? '&' : '?') + (
        youtube ? 'enablejsapi=1' : "api=1&player_id=" + id);

      }).then(() => clearInterval(poller));
    }

    function isInView(element, offsetTop, offsetLeft) {if (offsetTop === void 0) {offsetTop = 0;}if (offsetLeft === void 0) {offsetLeft = 0;}
      if (!isVisible(element)) {
        return false;
      }

      return intersectRect(
      ...scrollParents(element).
      map((parent) => {
        const { top, left, bottom, right } = offsetViewport(parent);

        return {
          top: top - offsetTop,
          left: left - offsetLeft,
          bottom: bottom + offsetTop,
          right: right + offsetLeft };

      }).
      concat(offset(element)));

    }

    function scrollTop(element, top) {
      if (isWindow(element) || isDocument(element)) {
        element = scrollingElement(element);
      } else {
        element = toNode(element);
      }

      if (isUndefined(top)) {
        return element.scrollTop;
      } else {
        element.scrollTop = top;
      }
    }

    function scrollIntoView(element, _temp) {let { offset: offsetBy = 0 } = _temp === void 0 ? {} : _temp;
      const parents = isVisible(element) ? scrollParents(element) : [];
      return parents.reduce(
      (fn, scrollElement, i) => {
        const { scrollTop, scrollHeight, offsetHeight } = scrollElement;
        const viewport = offsetViewport(scrollElement);
        const maxScroll = scrollHeight - viewport.height;
        const { height: elHeight, top: elTop } = parents[i - 1] ?
        offsetViewport(parents[i - 1]) :
        offset(element);

        let top = Math.ceil(elTop - viewport.top - offsetBy + scrollTop);

        if (offsetBy > 0 && offsetHeight < elHeight + offsetBy) {
          top += offsetBy;
        } else {
          offsetBy = 0;
        }

        if (top > maxScroll) {
          offsetBy -= top - maxScroll;
          top = maxScroll;
        } else if (top < 0) {
          offsetBy -= top;
          top = 0;
        }

        return () => scrollTo(scrollElement, top - scrollTop).then(fn);
      },
      () => Promise.resolve())();


      function scrollTo(element, top) {
        return new Promise((resolve) => {
          const scroll = element.scrollTop;
          const duration = getDuration(Math.abs(top));
          const start = Date.now();

          (function step() {
            const percent = ease(clamp((Date.now() - start) / duration));

            scrollTop(element, scroll + top * percent);

            // scroll more if we have not reached our destination
            if (percent === 1) {
              resolve();
            } else {
              requestAnimationFrame(step);
            }
          })();
        });
      }

      function getDuration(dist) {
        return 40 * Math.pow(dist, 0.375);
      }

      function ease(k) {
        return 0.5 * (1 - Math.cos(Math.PI * k));
      }
    }

    function scrolledOver(element, startOffset, endOffset) {if (startOffset === void 0) {startOffset = 0;}if (endOffset === void 0) {endOffset = 0;}
      if (!isVisible(element)) {
        return 0;
      }

      const [scrollElement] = scrollParents(element, /auto|scroll/, true);
      const { scrollHeight, scrollTop } = scrollElement;
      const { height: viewportHeight } = offsetViewport(scrollElement);
      const maxScroll = scrollHeight - viewportHeight;
      const elementOffsetTop = offsetPosition(element)[0] - offsetPosition(scrollElement)[0];

      const start = Math.max(0, elementOffsetTop - viewportHeight + startOffset);
      const end = Math.min(maxScroll, elementOffsetTop + element.offsetHeight - endOffset);

      return clamp((scrollTop - start) / (end - start));
    }

    function scrollParents(element, overflowRe, scrollable) {if (overflowRe === void 0) {overflowRe = /auto|scroll|hidden/;}if (scrollable === void 0) {scrollable = false;}
      const scrollEl = scrollingElement(element);

      let ancestors = parents(element).reverse();
      ancestors = ancestors.slice(ancestors.indexOf(scrollEl) + 1);

      const fixedIndex = findIndex(ancestors, (el) => css(el, 'position') === 'fixed');
      if (~fixedIndex) {
        ancestors = ancestors.slice(fixedIndex);
      }

      return [scrollEl].
      concat(
      ancestors.filter(
      (parent) =>
      overflowRe.test(css(parent, 'overflow')) && (
      !scrollable || parent.scrollHeight > offsetViewport(parent).height))).


      reverse();
    }

    function offsetViewport(scrollElement) {
      let viewportElement = getViewport$1(scrollElement);

      let rect = offset(viewportElement);
      for (let [prop, dir, start, end] of [
      ['width', 'x', 'left', 'right'],
      ['height', 'y', 'top', 'bottom']])
      {
        if (!isWindow(viewportElement)) {
          rect[start] += toFloat(css(viewportElement, "border" + ucfirst(start) + "Width"));
        } else {
          // iOS 12 returns <body> as scrollingElement
          viewportElement = viewportElement.document.documentElement;
        }
        rect[prop] = rect[dir] = viewportElement["client" + ucfirst(prop)];
        rect[end] = rect[prop] + rect[start];
      }
      return rect;
    }

    function scrollingElement(element) {
      return toWindow(element).document.scrollingElement;
    }

    function getViewport$1(scrollElement) {
      return scrollElement === scrollingElement(scrollElement) ? window : scrollElement;
    }

    const dirs = [
    ['width', 'x', 'left', 'right'],
    ['height', 'y', 'top', 'bottom']];


    function positionAt(element, target, options) {
      options = {
        attach: {
          element: ['left', 'top'],
          target: ['left', 'top'],
          ...options.attach },

        offset: [0, 0],
        ...options };


      const dim = options.flip ?
      attachToWithFlip(element, target, options) :
      attachTo(element, target, options);

      offset(element, dim);
    }

    function attachTo(element, target, options) {
      let { attach, offset: offsetBy } = {
        attach: {
          element: ['left', 'top'],
          target: ['left', 'top'],
          ...options.attach },

        offset: [0, 0],
        ...options };


      const position = offset(element);
      const targetOffset = offset(target);
      for (const [i, [prop, dir, start, end]] of Object.entries(dirs)) {
        position[start] = position[dir] =
        targetOffset[start] +
        moveBy(attach.target[i], end, targetOffset[prop]) -
        moveBy(attach.element[i], end, position[prop]) +
        +offsetBy[i];
        position[end] = position[start] + position[prop];
      }
      return position;
    }

    function moveBy(start, end, dim) {
      return start === 'center' ? dim / 2 : start === end ? dim : 0;
    }

    function attachToWithFlip(element, target, options) {
      const position = attachTo(element, target, options);
      const targetDim = offset(target);

      let {
        flip,
        attach: { element: elAttach, target: targetAttach },
        offset: elOffset,
        boundary,
        viewport,
        viewportOffset } =
      options;

      let viewports = scrollParents(element);
      if (boundary === target) {
        viewports = viewports.filter((viewport) => viewport !== boundary);
      }
      const [scrollElement] = viewports;
      viewports.push(viewport);

      const offsetPosition = { ...position };
      for (const [i, [prop, dir, start, end]] of Object.entries(dirs)) {
        if (flip !== true && !includes(flip, dir)) {
          continue;
        }

        const willFlip =
        !intersectLine(position, targetDim, i) && intersectLine(position, targetDim, 1 - i);

        viewport = getIntersectionArea(...viewports.filter(Boolean).map(offsetViewport));

        if (viewportOffset) {
          viewport[start] += viewportOffset;
          viewport[end] -= viewportOffset;
        }

        if (boundary && !willFlip && position[prop] <= offset(boundary)[prop]) {
          viewport = getIntersectionArea(viewport, offset(boundary));
        }

        const isInStartBoundary = position[start] >= viewport[start];
        const isInEndBoundary = position[end] <= viewport[end];

        if (isInStartBoundary && isInEndBoundary) {
          continue;
        }

        let offsetBy;

        // Flip
        if (willFlip) {
          if (
          elAttach[i] === end && isInStartBoundary ||
          elAttach[i] === start && isInEndBoundary)
          {
            continue;
          }

          offsetBy =
          (elAttach[i] === start ?
          -position[prop] :
          elAttach[i] === end ?
          position[prop] :
          0) + (
          targetAttach[i] === start ?
          targetDim[prop] :
          targetAttach[i] === end ?
          -targetDim[prop] :
          0) -
          elOffset[i] * 2;

          if (
          !isInScrollArea(
          {
            ...position,
            [start]: position[start] + offsetBy,
            [end]: position[end] + offsetBy },

          scrollElement,
          i))

          {
            if (isInScrollArea(position, scrollElement, i)) {
              continue;
            }

            if (options.recursion) {
              return false;
            }

            if (flip === true || includes(flip, dirs[1 - i][1])) {
              const newPos = attachToWithFlip(element, target, {
                ...options,
                attach: {
                  element: elAttach.map(flipDir).reverse(),
                  target: targetAttach.map(flipDir).reverse() },

                offset: elOffset.reverse(),
                flip: flip === true ? flip : [...flip, dirs[1 - i][1]],
                recursion: true });


              if (newPos && isInScrollArea(newPos, scrollElement, 1 - i)) {
                return newPos;
              }
            }
          }

          // Move
        } else {
          offsetBy =
          clamp(
          clamp(position[start], viewport[start], viewport[end] - position[prop]),
          targetDim[start] - position[prop] + elOffset[i],
          targetDim[end] - elOffset[i]) -
          position[start];
        }

        offsetPosition[start] = position[dir] = position[start] + offsetBy;
        offsetPosition[end] += offsetBy;
      }

      return offsetPosition;
    }

    function getIntersectionArea() {
      let area = {};for (var _len = arguments.length, rects = new Array(_len), _key = 0; _key < _len; _key++) {rects[_key] = arguments[_key];}
      for (const rect of rects) {
        for (const [,, start, end] of dirs) {
          area[start] = Math.max(area[start] || 0, rect[start]);
          area[end] = Math.min(...[area[end], rect[end]].filter(Boolean));
        }
      }
      return area;
    }

    function isInScrollArea(position, scrollElement, dir) {
      const viewport = offsetViewport(scrollElement);
      const [prop,, start, end] = dirs[dir];
      viewport[start] -= scrollElement["scroll" + ucfirst(start)];
      viewport[end] = viewport[start] + scrollElement["scroll" + ucfirst(prop)];

      return position[start] >= viewport[start] && position[end] <= viewport[end];
    }

    function intersectLine(dimA, dimB, dir) {
      const [,, start, end] = dirs[dir];
      return dimA[end] > dimB[start] && dimB[end] > dimA[start];
    }

    function flipDir(prop) {
      for (let i = 0; i < dirs.length; i++) {
        const index = dirs[i].indexOf(prop);
        if (~index) {
          return dirs[1 - i][index % 2 + 2];
        }
      }
    }

    var util = /*#__PURE__*/Object.freeze({
        __proto__: null,
        ajax: ajax,
        getImage: getImage,
        transition: transition,
        Transition: Transition,
        animate: animate$1,
        Animation: Animation,
        attr: attr,
        hasAttr: hasAttr,
        removeAttr: removeAttr,
        data: data,
        addClass: addClass,
        removeClass: removeClass,
        removeClasses: removeClasses,
        replaceClass: replaceClass,
        hasClass: hasClass,
        toggleClass: toggleClass,
        dimensions: dimensions,
        offset: offset,
        position: position,
        offsetPosition: offsetPosition,
        height: height,
        width: width,
        boxModelAdjust: boxModelAdjust,
        flipPosition: flipPosition,
        toPx: toPx,
        ready: ready,
        isTag: isTag,
        empty: empty,
        html: html,
        prepend: prepend,
        append: append,
        before: before,
        after: after,
        remove: remove$1,
        wrapAll: wrapAll,
        wrapInner: wrapInner,
        unwrap: unwrap,
        fragment: fragment,
        apply: apply,
        $: $,
        $$: $$,
        inBrowser: inBrowser,
        isRtl: isRtl,
        hasTouch: hasTouch,
        pointerDown: pointerDown,
        pointerMove: pointerMove,
        pointerUp: pointerUp,
        pointerEnter: pointerEnter,
        pointerLeave: pointerLeave,
        pointerCancel: pointerCancel,
        on: on,
        off: off,
        once: once,
        trigger: trigger,
        createEvent: createEvent,
        toEventTargets: toEventTargets,
        isTouch: isTouch,
        getEventPos: getEventPos,
        fastdom: fastdom,
        isVoidElement: isVoidElement,
        isVisible: isVisible,
        selInput: selInput,
        isInput: isInput,
        selFocusable: selFocusable,
        isFocusable: isFocusable,
        parent: parent,
        filter: filter,
        matches: matches,
        closest: closest,
        within: within,
        parents: parents,
        children: children,
        index: index,
        hasOwn: hasOwn,
        hyphenate: hyphenate,
        camelize: camelize,
        ucfirst: ucfirst,
        startsWith: startsWith,
        endsWith: endsWith,
        includes: includes,
        findIndex: findIndex,
        isArray: isArray,
        toArray: toArray,
        assign: assign,
        isFunction: isFunction,
        isObject: isObject,
        isPlainObject: isPlainObject,
        isWindow: isWindow,
        isDocument: isDocument,
        isNode: isNode,
        isElement: isElement,
        isBoolean: isBoolean,
        isString: isString,
        isNumber: isNumber,
        isNumeric: isNumeric,
        isEmpty: isEmpty,
        isUndefined: isUndefined,
        toBoolean: toBoolean,
        toNumber: toNumber,
        toFloat: toFloat,
        toNode: toNode,
        toNodes: toNodes,
        toWindow: toWindow,
        isEqual: isEqual,
        swap: swap,
        last: last,
        each: each,
        sortBy: sortBy$1,
        uniqueBy: uniqueBy,
        clamp: clamp,
        noop: noop,
        intersectRect: intersectRect,
        pointInRect: pointInRect,
        Dimensions: Dimensions,
        getIndex: getIndex,
        memoize: memoize,
        Deferred: Deferred,
        MouseTracker: MouseTracker,
        observeIntersection: observeIntersection,
        observeResize: observeResize,
        observeMutation: observeMutation,
        mergeOptions: mergeOptions,
        parseOptions: parseOptions,
        play: play,
        pause: pause,
        mute: mute,
        isVideo: isVideo,
        positionAt: positionAt,
        query: query,
        queryAll: queryAll,
        find: find,
        findAll: findAll,
        escape: escape,
        css: css,
        getCssVar: getCssVar,
        propName: propName,
        isInView: isInView,
        scrollTop: scrollTop,
        scrollIntoView: scrollIntoView,
        scrolledOver: scrolledOver,
        scrollParents: scrollParents,
        offsetViewport: offsetViewport
    });

    function globalAPI (UIkit) {
      const DATA = UIkit.data;

      UIkit.use = function (plugin) {
        if (plugin.installed) {
          return;
        }

        plugin.call(null, this);
        plugin.installed = true;

        return this;
      };

      UIkit.mixin = function (mixin, component) {
        component = (isString(component) ? UIkit.component(component) : component) || this;
        component.options = mergeOptions(component.options, mixin);
      };

      UIkit.extend = function (options) {
        options = options || {};

        const Super = this;
        const Sub = function UIkitComponent(options) {
          this._init(options);
        };

        Sub.prototype = Object.create(Super.prototype);
        Sub.prototype.constructor = Sub;
        Sub.options = mergeOptions(Super.options, options);

        Sub.super = Super;
        Sub.extend = Super.extend;

        return Sub;
      };

      UIkit.update = function (element, e) {
        element = element ? toNode(element) : document.body;

        for (const parentEl of parents(element).reverse()) {
          update(parentEl[DATA], e);
        }

        apply(element, (element) => update(element[DATA], e));
      };

      let container;
      Object.defineProperty(UIkit, 'container', {
        get() {
          return container || document.body;
        },

        set(element) {
          container = $(element);
        } });


      function update(data, e) {
        if (!data) {
          return;
        }

        for (const name in data) {
          if (data[name]._connected) {
            data[name]._callUpdate(e);
          }
        }
      }
    }

    function hooksAPI (UIkit) {
      UIkit.prototype._callHook = function (hook) {var _this$$options$hook;
        (_this$$options$hook = this.$options[hook]) == null ? void 0 : _this$$options$hook.forEach((handler) => handler.call(this));
      };

      UIkit.prototype._callConnected = function () {
        if (this._connected) {
          return;
        }

        this._data = {};
        this._computed = {};

        this._initProps();

        this._callHook('beforeConnect');
        this._connected = true;

        this._initEvents();
        this._initObservers();

        this._callHook('connected');
        this._callUpdate();
      };

      UIkit.prototype._callDisconnected = function () {
        if (!this._connected) {
          return;
        }

        this._callHook('beforeDisconnect');
        this._disconnectObservers();
        this._unbindEvents();
        this._callHook('disconnected');

        this._connected = false;
        delete this._watch;
      };

      UIkit.prototype._callUpdate = function (e) {if (e === void 0) {e = 'update';}
        if (!this._connected) {
          return;
        }

        if (e === 'update' || e === 'resize') {
          this._callWatches();
        }

        if (!this.$options.update) {
          return;
        }

        if (!this._updates) {
          this._updates = new Set();
          fastdom.read(() => {
            if (this._connected) {
              runUpdates.call(this, this._updates);
            }
            delete this._updates;
          });
        }

        this._updates.add(e.type || e);
      };

      UIkit.prototype._callWatches = function () {
        if (this._watch) {
          return;
        }

        const initial = !hasOwn(this, '_watch');

        this._watch = fastdom.read(() => {
          if (this._connected) {
            runWatches.call(this, initial);
          }
          this._watch = null;
        });
      };

      function runUpdates(types) {
        for (const { read, write, events = [] } of this.$options.update) {
          if (!types.has('update') && !events.some((type) => types.has(type))) {
            continue;
          }

          let result;
          if (read) {
            result = read.call(this, this._data, types);

            if (result && isPlainObject(result)) {
              assign(this._data, result);
            }
          }

          if (write && result !== false) {
            fastdom.write(() => write.call(this, this._data, types));
          }
        }
      }

      function runWatches(initial) {
        const {
          $options: { computed } } =
        this;
        const values = { ...this._computed };
        this._computed = {};

        for (const key in computed) {
          const { watch, immediate } = computed[key];
          if (
          watch && (
          initial && immediate ||
          hasOwn(values, key) && !isEqual(values[key], this[key])))
          {
            watch.call(this, this[key], values[key]);
          }
        }
      }
    }

    function stateAPI (UIkit) {
      let uid = 0;

      UIkit.prototype._init = function (options) {
        options = options || {};
        options.data = normalizeData(options, this.constructor.options);

        this.$options = mergeOptions(this.constructor.options, options, this);
        this.$el = null;
        this.$props = {};

        this._uid = uid++;
        this._initData();
        this._initMethods();
        this._initComputeds();
        this._callHook('created');

        if (options.el) {
          this.$mount(options.el);
        }
      };

      UIkit.prototype._initData = function () {
        const { data = {} } = this.$options;

        for (const key in data) {
          this.$props[key] = this[key] = data[key];
        }
      };

      UIkit.prototype._initMethods = function () {
        const { methods } = this.$options;

        if (methods) {
          for (const key in methods) {
            this[key] = methods[key].bind(this);
          }
        }
      };

      UIkit.prototype._initComputeds = function () {
        const { computed } = this.$options;

        this._computed = {};

        if (computed) {
          for (const key in computed) {
            registerComputed(this, key, computed[key]);
          }
        }
      };

      UIkit.prototype._initProps = function (props) {
        let key;

        props = props || getProps(this.$options, this.$name);

        for (key in props) {
          if (!isUndefined(props[key])) {
            this.$props[key] = props[key];
          }
        }

        const exclude = [this.$options.computed, this.$options.methods];
        for (key in this.$props) {
          if (key in props && notIn(exclude, key)) {
            this[key] = this.$props[key];
          }
        }
      };

      UIkit.prototype._initEvents = function () {
        this._events = [];
        for (const event of this.$options.events || []) {
          if (hasOwn(event, 'handler')) {
            registerEvent(this, event);
          } else {
            for (const key in event) {
              registerEvent(this, event[key], key);
            }
          }
        }
      };

      UIkit.prototype._unbindEvents = function () {
        this._events.forEach((unbind) => unbind());
        delete this._events;
      };

      UIkit.prototype._initObservers = function () {
        this._observers = [initPropsObserver(this)];

        if (this.$options.computed) {
          this.registerObserver(initChildListObserver(this));
        }
      };

      UIkit.prototype.registerObserver = function (observer) {
        this._observers.push(observer);
      };

      UIkit.prototype._disconnectObservers = function () {
        this._observers.forEach((observer) => observer == null ? void 0 : observer.disconnect());
      };
    }

    function getProps(opts, name) {
      const data$1 = {};
      const { args = [], props = {}, el } = opts;

      if (!props) {
        return data$1;
      }

      for (const key in props) {
        const prop = hyphenate(key);
        let value = data(el, prop);

        if (isUndefined(value)) {
          continue;
        }

        value = props[key] === Boolean && value === '' ? true : coerce$1(props[key], value);

        if (prop === 'target' && (!value || startsWith(value, '_'))) {
          continue;
        }

        data$1[key] = value;
      }

      const options = parseOptions(data(el, name), args);

      for (const key in options) {
        const prop = camelize(key);
        if (props[prop] !== undefined) {
          data$1[prop] = coerce$1(props[prop], options[key]);
        }
      }

      return data$1;
    }

    function registerComputed(component, key, cb) {
      Object.defineProperty(component, key, {
        enumerable: true,

        get() {
          const { _computed, $props, $el } = component;

          if (!hasOwn(_computed, key)) {
            _computed[key] = (cb.get || cb).call(component, $props, $el);
          }

          return _computed[key];
        },

        set(value) {
          const { _computed } = component;

          _computed[key] = cb.set ? cb.set.call(component, value) : value;

          if (isUndefined(_computed[key])) {
            delete _computed[key];
          }
        } });

    }

    function registerEvent(component, event, key) {
      if (!isPlainObject(event)) {
        event = { name: key, handler: event };
      }

      let { name, el, handler, capture, passive, delegate, filter, self } = event;
      el = isFunction(el) ? el.call(component) : el || component.$el;

      if (isArray(el)) {
        el.forEach((el) => registerEvent(component, { ...event, el }, key));
        return;
      }

      if (!el || filter && !filter.call(component)) {
        return;
      }

      component._events.push(
      on(
      el,
      name,
      delegate ? isString(delegate) ? delegate : delegate.call(component) : null,
      isString(handler) ? component[handler] : handler.bind(component),
      { passive, capture, self }));


    }

    function notIn(options, key) {
      return options.every((arr) => !arr || !hasOwn(arr, key));
    }

    function coerce$1(type, value) {
      if (type === Boolean) {
        return toBoolean(value);
      } else if (type === Number) {
        return toNumber(value);
      } else if (type === 'list') {
        return toList(value);
      }

      return type ? type(value) : value;
    }

    function toList(value) {
      return isArray(value) ?
      value :
      isString(value) ?
      value.
      split(/,(?![^(]*\))/).
      map((value) => isNumeric(value) ? toNumber(value) : toBoolean(value.trim())) :
      [value];
    }

    function normalizeData(_ref, _ref2) {let { data = {} } = _ref;let { args = [], props = {} } = _ref2;
      if (isArray(data)) {
        data = data.slice(0, args.length).reduce((data, value, index) => {
          if (isPlainObject(value)) {
            assign(data, value);
          } else {
            data[args[index]] = value;
          }
          return data;
        }, {});
      }

      for (const key in data) {
        if (isUndefined(data[key])) {
          delete data[key];
        } else if (props[key]) {
          data[key] = coerce$1(props[key], data[key]);
        }
      }

      return data;
    }

    function initChildListObserver(component) {
      const { el } = component.$options;

      const observer = new MutationObserver(() => component.$emit());
      observer.observe(el, {
        childList: true,
        subtree: true });


      return observer;
    }

    function initPropsObserver(component) {
      const { $name, $options, $props } = component;
      const { attrs, props, el } = $options;

      if (!props || attrs === false) {
        return;
      }

      const attributes = isArray(attrs) ? attrs : Object.keys(props);
      const filter = attributes.map((key) => hyphenate(key)).concat($name);

      const observer = new MutationObserver((records) => {
        const data = getProps($options, $name);
        if (
        records.some((_ref3) => {let { attributeName } = _ref3;
          const prop = attributeName.replace('data-', '');
          return (
          prop === $name ? attributes : [camelize(prop), camelize(attributeName)]).
          some((prop) => !isUndefined(data[prop]) && data[prop] !== $props[prop]);
        }))
        {
          component.$reset();
        }
      });

      observer.observe(el, {
        attributes: true,
        attributeFilter: filter.concat(filter.map((key) => "data-" + key)) });


      return observer;
    }

    function instanceAPI (UIkit) {
      const DATA = UIkit.data;

      UIkit.prototype.$create = function (component, element, data) {
        return UIkit[component](element, data);
      };

      UIkit.prototype.$mount = function (el) {
        const { name } = this.$options;

        if (!el[DATA]) {
          el[DATA] = {};
        }

        if (el[DATA][name]) {
          return;
        }

        el[DATA][name] = this;

        this.$el = this.$options.el = this.$options.el || el;

        if (within(el, document)) {
          this._callConnected();
        }
      };

      UIkit.prototype.$reset = function () {
        this._callDisconnected();
        this._callConnected();
      };

      UIkit.prototype.$destroy = function (removeEl) {if (removeEl === void 0) {removeEl = false;}
        const { el, name } = this.$options;

        if (el) {
          this._callDisconnected();
        }

        this._callHook('destroy');

        if (!(el != null && el[DATA])) {
          return;
        }

        delete el[DATA][name];

        if (!isEmpty(el[DATA])) {
          delete el[DATA];
        }

        if (removeEl) {
          remove$1(this.$el);
        }
      };

      UIkit.prototype.$emit = function (e) {
        this._callUpdate(e);
      };

      UIkit.prototype.$update = function (element, e) {if (element === void 0) {element = this.$el;}
        UIkit.update(element, e);
      };

      UIkit.prototype.$getComponent = UIkit.getComponent;

      const componentName = memoize((name) => UIkit.prefix + hyphenate(name));
      Object.defineProperties(UIkit.prototype, {
        $container: Object.getOwnPropertyDescriptor(UIkit, 'container'),

        $name: {
          get() {
            return componentName(this.$options.name);
          } } });


    }

    function componentAPI (UIkit) {
      const DATA = UIkit.data;

      const components = {};

      UIkit.component = function (name, options) {
        const id = hyphenate(name);

        name = camelize(id);

        if (!options) {
          if (isPlainObject(components[name])) {
            components[name] = UIkit.extend(components[name]);
          }

          return components[name];
        }

        UIkit[name] = function (element, data) {
          const component = UIkit.component(name);

          return component.options.functional ?
          new component({ data: isPlainObject(element) ? element : [...arguments] }) :
          element ?
          $$(element).map(init)[0] :
          init();

          function init(element) {
            const instance = UIkit.getComponent(element, name);

            if (instance) {
              if (data) {
                instance.$destroy();
              } else {
                return instance;
              }
            }

            return new component({ el: element, data });
          }
        };

        const opt = isPlainObject(options) ? { ...options } : options.options;

        opt.name = name;

        opt.install == null ? void 0 : opt.install(UIkit, opt, name);

        if (UIkit._initialized && !opt.functional) {
          fastdom.read(() => UIkit[name]("[uk-" + id + "],[data-uk-" + id + "]"));
        }

        return components[name] = isPlainObject(options) ? opt : options;
      };

      UIkit.getComponents = (element) => (element == null ? void 0 : element[DATA]) || {};
      UIkit.getComponent = (element, name) => UIkit.getComponents(element)[name];

      UIkit.connect = (node) => {
        if (node[DATA]) {
          for (const name in node[DATA]) {
            node[DATA][name]._callConnected();
          }
        }

        for (const attribute of node.attributes) {
          const name = getComponentName(attribute.name);

          if (name && name in components) {
            UIkit[name](node);
          }
        }
      };

      UIkit.disconnect = (node) => {
        for (const name in node[DATA]) {
          node[DATA][name]._callDisconnected();
        }
      };
    }

    const getComponentName = memoize((attribute) => {
      return startsWith(attribute, 'uk-') || startsWith(attribute, 'data-uk-') ?
      camelize(attribute.replace('data-uk-', '').replace('uk-', '')) :
      false;
    });

    const UIkit = function (options) {
      this._init(options);
    };

    UIkit.util = util;
    UIkit.data = '__uikit__';
    UIkit.prefix = 'uk-';
    UIkit.options = {};
    UIkit.version = '3.14.3';

    globalAPI(UIkit);
    hooksAPI(UIkit);
    stateAPI(UIkit);
    componentAPI(UIkit);
    instanceAPI(UIkit);

    function boot (UIkit) {
      const { connect, disconnect } = UIkit;

      if (!inBrowser || !window.MutationObserver) {
        return;
      }

      fastdom.read(function () {
        if (document.body) {
          apply(document.body, connect);
        }

        new MutationObserver((records) => records.forEach(applyChildListMutation)).observe(
        document,
        {
          childList: true,
          subtree: true });



        new MutationObserver((records) => records.forEach(applyAttributeMutation)).observe(
        document,
        {
          attributes: true,
          subtree: true });



        UIkit._initialized = true;
      });

      function applyChildListMutation(_ref) {let { addedNodes, removedNodes } = _ref;
        for (const node of addedNodes) {
          apply(node, connect);
        }

        for (const node of removedNodes) {
          apply(node, disconnect);
        }
      }

      function applyAttributeMutation(_ref2) {var _UIkit$getComponent;let { target, attributeName } = _ref2;
        const name = getComponentName(attributeName);

        if (!name || !(name in UIkit)) {
          return;
        }

        if (hasAttr(target, attributeName)) {
          UIkit[name](target);
          return;
        }

        (_UIkit$getComponent = UIkit.getComponent(target, name)) == null ? void 0 : _UIkit$getComponent.$destroy();
      }
    }

    var Class = {
      connected() {
        !hasClass(this.$el, this.$name) && addClass(this.$el, this.$name);
      } };

    var Lazyload = {
      methods: {
        lazyload(observeTargets, targets) {if (observeTargets === void 0) {observeTargets = this.$el;}if (targets === void 0) {targets = this.$el;}
          this.registerObserver(
          observeIntersection(observeTargets, (entries, observer) => {
            for (const el of toNodes(isFunction(targets) ? targets() : targets)) {
              $$('[loading="lazy"]', el).forEach((el) => removeAttr(el, 'loading'));
            }
            for (const el of entries.
            filter((_ref) => {let { isIntersecting } = _ref;return isIntersecting;}).
            map((_ref2) => {let { target } = _ref2;return target;})) {
              observer.unobserve(el);
            }
          }));

        } } };

    var Togglable = {
      props: {
        cls: Boolean,
        animation: 'list',
        duration: Number,
        velocity: Number,
        origin: String,
        transition: String },


      data: {
        cls: false,
        animation: [false],
        duration: 200,
        velocity: 0.2,
        origin: false,
        transition: 'ease',
        clsEnter: 'uk-togglabe-enter',
        clsLeave: 'uk-togglabe-leave',

        initProps: {
          overflow: '',
          height: '',
          paddingTop: '',
          paddingBottom: '',
          marginTop: '',
          marginBottom: '',
          boxShadow: '' },


        hideProps: {
          overflow: 'hidden',
          height: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginTop: 0,
          marginBottom: 0,
          boxShadow: 'none' } },



      computed: {
        hasAnimation(_ref) {let { animation } = _ref;
          return !!animation[0];
        },

        hasTransition(_ref2) {let { animation } = _ref2;
          return this.hasAnimation && animation[0] === true;
        } },


      methods: {
        toggleElement(targets, toggle, animate) {
          return new Promise((resolve) =>
          Promise.all(
          toNodes(targets).map((el) => {
            const show = isBoolean(toggle) ? toggle : !this.isToggled(el);

            if (!trigger(el, "before" + (show ? 'show' : 'hide'), [this])) {
              return Promise.reject();
            }

            if (!animate) {
              Animation.cancel(el);
              Transition.cancel(el);
            }

            const promise = (
            isFunction(animate) ?
            animate :
            animate === false || !this.hasAnimation ?
            this._toggle :
            this.hasTransition ?
            toggleHeight(this) :
            toggleAnimation(this))(
            el, show);

            const cls = show ? this.clsEnter : this.clsLeave;

            addClass(el, cls);

            trigger(el, show ? 'show' : 'hide', [this]);

            const done = () => {
              removeClass(el, cls);
              trigger(el, show ? 'shown' : 'hidden', [this]);
              this.$update(el);
            };

            return promise ?
            promise.then(done, () => {
              removeClass(el, cls);
              return Promise.reject();
            }) :
            done();
          })).
          then(resolve, noop));

        },

        isToggled(el) {if (el === void 0) {el = this.$el;}
          [el] = toNodes(el);
          return hasClass(el, this.clsEnter) ?
          true :
          hasClass(el, this.clsLeave) ?
          false :
          this.cls ?
          hasClass(el, this.cls.split(' ')[0]) :
          isVisible(el);
        },

        _toggle(el, toggled) {
          if (!el) {
            return;
          }

          toggled = Boolean(toggled);

          let changed;
          if (this.cls) {
            changed = includes(this.cls, ' ') || toggled !== hasClass(el, this.cls);
            changed && toggleClass(el, this.cls, includes(this.cls, ' ') ? undefined : toggled);
          } else {
            changed = toggled === el.hidden;
            changed && (el.hidden = !toggled);
          }

          $$('[autofocus]', el).some((el) => isVisible(el) ? el.focus() || true : el.blur());

          if (changed) {
            trigger(el, 'toggled', [toggled, this]);
            this.$update(el);
          }
        } } };



    function toggleHeight(_ref3)







    {let { isToggled, duration, velocity, initProps, hideProps, transition, _toggle } = _ref3;
      return (el, show) => {
        const inProgress = Transition.inProgress(el);
        const inner = el.hasChildNodes() ?
        toFloat(css(el.firstElementChild, 'marginTop')) +
        toFloat(css(el.lastElementChild, 'marginBottom')) :
        0;
        const currentHeight = isVisible(el) ? height(el) + (inProgress ? 0 : inner) : 0;

        Transition.cancel(el);

        if (!isToggled(el)) {
          _toggle(el, true);
        }

        height(el, '');

        // Update child components first
        fastdom.flush();

        const endHeight = height(el) + (inProgress ? 0 : inner);
        duration = velocity * el.offsetHeight + duration;

        height(el, currentHeight);

        return (
        show ?
        Transition.start(
        el,
        { ...initProps, overflow: 'hidden', height: endHeight },
        Math.round(duration * (1 - currentHeight / endHeight)),
        transition) :

        Transition.start(
        el,
        hideProps,
        Math.round(duration * (currentHeight / endHeight)),
        transition).
        then(() => _toggle(el, false))).
        then(() => css(el, initProps));
      };
    }

    function toggleAnimation(cmp) {
      return (el, show) => {
        Animation.cancel(el);

        const { animation, duration, _toggle } = cmp;

        if (show) {
          _toggle(el, true);
          return Animation.in(el, animation[0], duration, cmp.origin);
        }

        return Animation.out(el, animation[1] || animation[0], duration, cmp.origin).then(() =>
        _toggle(el, false));

      };
    }

    var Accordion = {
      mixins: [Class, Lazyload, Togglable],

      props: {
        targets: String,
        active: null,
        collapsible: Boolean,
        multiple: Boolean,
        toggle: String,
        content: String,
        offset: Number },


      data: {
        targets: '> *',
        active: false,
        animation: [true],
        collapsible: true,
        multiple: false,
        clsOpen: 'uk-open',
        toggle: '> .uk-accordion-title',
        content: '> .uk-accordion-content',
        offset: 0 },


      computed: {
        items: {
          get(_ref, $el) {let { targets } = _ref;
            return $$(targets, $el);
          },

          watch(items, prev) {
            if (prev || hasClass(items, this.clsOpen)) {
              return;
            }

            const active =
            this.active !== false && items[Number(this.active)] ||
            !this.collapsible && items[0];

            if (active) {
              this.toggle(active, false);
            }
          },

          immediate: true },


        toggles(_ref2) {let { toggle } = _ref2;
          return this.items.map((item) => $(toggle, item));
        },

        contents: {
          get(_ref3) {let { content } = _ref3;
            return this.items.map((item) => $(content, item));
          },

          watch(items) {
            for (const el of items) {
              hide(
              el,
              !hasClass(
              this.items.find((item) => item.contains(el)),
              this.clsOpen));


            }
          },

          immediate: true } },



      connected() {
        this.lazyload();
      },

      events: [
      {
        name: 'click',

        delegate() {
          return this.targets + " " + this.$props.toggle;
        },

        handler(e) {
          e.preventDefault();
          this.toggle(index(this.toggles, e.current));
        } }],



      methods: {
        toggle(item, animate) {
          let items = [this.items[getIndex(item, this.items)]];
          const activeItems = filter(this.items, "." + this.clsOpen);

          if (!this.multiple && !includes(activeItems, items[0])) {
            items = items.concat(activeItems);
          }

          if (
          !this.collapsible &&
          activeItems.length < 2 &&
          !filter(items, ":not(." + this.clsOpen + ")").length)
          {
            return;
          }

          for (const el of items) {
            this.toggleElement(el, !hasClass(el, this.clsOpen), async (el, show) => {
              toggleClass(el, this.clsOpen, show);
              attr($(this.$props.toggle, el), 'aria-expanded', show);

              const content = $("" + (el._wrapper ? '> * ' : '') + this.content, el);

              if (animate === false || !this.hasTransition) {
                hide(content, !show);
                return;
              }

              if (!el._wrapper) {
                el._wrapper = wrapAll(content, "<div" + (show ? ' hidden' : '') + ">");
              }

              hide(content, false);
              await toggleHeight(this)(el._wrapper, show);
              hide(content, !show);

              delete el._wrapper;
              unwrap(content);

              if (show) {
                const toggle = $(this.$props.toggle, el);
                fastdom.read(() => {
                  if (!isInView(toggle)) {
                    scrollIntoView(toggle, { offset: this.offset });
                  }
                });
              }
            });
          }
        } } };



    function hide(el, hide) {
      el && (el.hidden = hide);
    }

    var alert = {
      mixins: [Class, Togglable],

      args: 'animation',

      props: {
        close: String },


      data: {
        animation: [true],
        selClose: '.uk-alert-close',
        duration: 150,
        hideProps: { opacity: 0, ...Togglable.data.hideProps } },


      events: [
      {
        name: 'click',

        delegate() {
          return this.selClose;
        },

        handler(e) {
          e.preventDefault();
          this.close();
        } }],



      methods: {
        async close() {
          await this.toggleElement(this.$el);
          this.$destroy(true);
        } } };

    var Video = {
      args: 'autoplay',

      props: {
        automute: Boolean,
        autoplay: Boolean },


      data: {
        automute: false,
        autoplay: true },


      connected() {
        this.inView = this.autoplay === 'inview';

        if (this.inView && !hasAttr(this.$el, 'preload')) {
          this.$el.preload = 'none';
        }

        if (this.automute) {
          mute(this.$el);
        }

        this.registerObserver(observeIntersection(this.$el, () => this.$emit(), {}, false));
      },

      update: {
        read() {
          if (!isVideo(this.$el)) {
            return false;
          }

          return {
            visible: isVisible(this.$el) && css(this.$el, 'visibility') !== 'hidden',
            inView: this.inView && isInView(this.$el) };

        },

        write(_ref) {let { visible, inView } = _ref;
          if (!visible || this.inView && !inView) {
            pause(this.$el);
          } else if (this.autoplay === true || this.inView && inView) {
            play(this.$el);
          }
        } } };

    var Resize = {
      connected() {var _this$$options$resize;
        this.registerObserver(
        observeResize(((_this$$options$resize = this.$options.resizeTargets) == null ? void 0 : _this$$options$resize.call(this)) || this.$el, () =>
        this.$emit('resize')));


      } };

    var cover = {
      mixins: [Resize, Video],

      props: {
        width: Number,
        height: Number },


      data: {
        automute: true },


      events: {
        'load loadedmetadata'() {
          this.$emit('resize');
        } },


      resizeTargets() {
        return [this.$el, parent(this.$el)];
      },

      update: {
        read() {
          const { ratio, cover } = Dimensions;
          const { $el, width, height } = this;

          let dim = { width, height };

          if (!dim.width || !dim.height) {
            const intrinsic = {
              width: $el.naturalWidth || $el.videoWidth || $el.clientWidth,
              height: $el.naturalHeight || $el.videoHeight || $el.clientHeight };


            if (dim.width) {
              dim = ratio(intrinsic, 'width', dim.width);
            } else if (height) {
              dim = ratio(intrinsic, 'height', dim.height);
            } else {
              dim = intrinsic;
            }
          }

          const { offsetHeight: coverHeight, offsetWidth: coverWidth } =
          getPositionedParent($el) || parent($el);
          const coverDim = cover(dim, {
            width: coverWidth + (coverWidth % 2 ? 1 : 0),
            height: coverHeight + (coverHeight % 2 ? 1 : 0) });


          if (!coverDim.width || !coverDim.height) {
            return false;
          }

          return coverDim;
        },

        write(_ref) {let { height, width } = _ref;
          css(this.$el, { height, width });
        },

        events: ['resize'] } };



    function getPositionedParent(el) {
      while (el = parent(el)) {
        if (css(el, 'position') !== 'static') {
          return el;
        }
      }
    }

    var Container = {
      props: {
        container: Boolean },


      data: {
        container: true },


      computed: {
        container(_ref) {let { container } = _ref;
          return container === true && this.$container || container && $(container);
        } } };

    var Position = {
      props: {
        pos: String,
        offset: null,
        flip: Boolean },


      data: {
        pos: "bottom-" + (isRtl ? 'right' : 'left'),
        flip: true,
        offset: false },


      connected() {
        this.pos = this.$props.pos.split('-').concat('center').slice(0, 2);
        this.axis = includes(['top', 'bottom'], this.pos[0]) ? 'y' : 'x';
      },

      methods: {
        positionAt(element, target, boundary) {
          const [dir, align] = this.pos;

          let offset = toPx(
          this.offset === false ? getCssVar('position-offset', element) : this.offset,
          this.axis === 'x' ? 'width' : 'height',
          element);

          offset = [includes(['left', 'top'], dir) ? -offset : +offset, 0];

          const attach = {
            element: [flipPosition(dir), align],
            target: [dir, align] };


          if (this.axis === 'y') {
            for (const prop in attach) {
              attach[prop] = attach[prop].reverse();
            }
            offset = offset.reverse();
          }

          positionAt(element, target, {
            attach,
            offset,
            boundary,
            flip: this.flip,
            viewportOffset: toPx(getCssVar('position-viewport-offset', element)) });

        } } };

    let active$1;

    var drop = {
      mixins: [Container, Lazyload, Position, Togglable],

      args: 'pos',

      props: {
        mode: 'list',
        toggle: Boolean,
        boundary: Boolean,
        boundaryAlign: Boolean,
        delayShow: Number,
        delayHide: Number,
        display: String,
        clsDrop: String },


      data: {
        mode: ['click', 'hover'],
        toggle: '- *',
        boundary: true,
        boundaryAlign: false,
        delayShow: 0,
        delayHide: 800,
        display: null,
        clsDrop: false,
        animation: ['uk-animation-fade'],
        cls: 'uk-open',
        container: false },


      created() {
        this.tracker = new MouseTracker();
      },

      beforeConnect() {
        this.clsDrop = this.$props.clsDrop || "uk-" + this.$options.name;
      },

      connected() {
        addClass(this.$el, this.clsDrop);

        if (this.toggle && !this.target) {
          this.target = this.$create('toggle', query(this.toggle, this.$el), {
            target: this.$el,
            mode: this.mode }).
          $el;
          attr(this.target, 'aria-haspopup', true);
          this.lazyload(this.target);
        }
      },

      disconnected() {
        if (this.isActive()) {
          active$1 = null;
        }
      },

      events: [
      {
        name: 'click',

        delegate() {
          return "." + this.clsDrop + "-close";
        },

        handler(e) {
          e.preventDefault();
          this.hide(false);
        } },


      {
        name: 'click',

        delegate() {
          return 'a[href^="#"]';
        },

        handler(_ref) {let { defaultPrevented, current: { hash } } = _ref;
          if (!defaultPrevented && hash && !within(hash, this.$el)) {
            this.hide(false);
          }
        } },


      {
        name: 'beforescroll',

        handler() {
          this.hide(false);
        } },


      {
        name: 'toggle',

        self: true,

        handler(e, toggle) {
          e.preventDefault();

          if (this.isToggled()) {
            this.hide(false);
          } else {
            this.show(toggle == null ? void 0 : toggle.$el, false);
          }
        } },


      {
        name: 'toggleshow',

        self: true,

        handler(e, toggle) {
          e.preventDefault();
          this.show(toggle == null ? void 0 : toggle.$el);
        } },


      {
        name: 'togglehide',

        self: true,

        handler(e) {
          e.preventDefault();
          if (!matches(this.$el, ':focus,:hover')) {
            this.hide();
          }
        } },


      {
        name: pointerEnter + " focusin",

        filter() {
          return includes(this.mode, 'hover');
        },

        handler(e) {
          if (!isTouch(e)) {
            this.clearTimers();
          }
        } },


      {
        name: pointerLeave + " focusout",

        filter() {
          return includes(this.mode, 'hover');
        },

        handler(e) {
          if (!isTouch(e) && e.relatedTarget) {
            this.hide();
          }
        } },


      {
        name: 'toggled',

        self: true,

        handler(e, toggled) {
          if (!toggled) {
            return;
          }

          this.clearTimers();
          this.position();
        } },


      {
        name: 'show',

        self: true,

        handler() {
          active$1 = this;

          this.tracker.init();

          for (const handler of [
          on(
          document,
          pointerDown,
          (_ref2) => {let { target } = _ref2;return (
              !within(target, this.$el) &&
              once(
              document,
              pointerUp + " " + pointerCancel + " scroll",
              (_ref3) => {let { defaultPrevented, type, target: newTarget } = _ref3;
                if (
                !defaultPrevented &&
                type === pointerUp &&
                target === newTarget &&
                !(this.target && within(target, this.target)))
                {
                  this.hide(false);
                }
              },
              true));}),



          on(document, 'keydown', (e) => {
            if (e.keyCode === 27) {
              this.hide(false);
            }
          }),

          ...(this.display === 'static' ?
          [] :
          (() => {
            const handler = () => this.$emit();
            return [
            on(window, 'resize', handler),
            on(document, 'scroll', handler, true),
            (() => {
              const observer = observeResize(
              scrollParents(this.$el),
              handler);

              return () => observer.disconnect();
            })()];

          })())])
          {
            once(this.$el, 'hide', handler, { self: true });
          }
        } },


      {
        name: 'beforehide',

        self: true,

        handler() {
          this.clearTimers();
        } },


      {
        name: 'hide',

        handler(_ref4) {let { target } = _ref4;
          if (this.$el !== target) {
            active$1 =
            active$1 === null && within(target, this.$el) && this.isToggled() ?
            this :
            active$1;
            return;
          }

          active$1 = this.isActive() ? null : active$1;
          this.tracker.cancel();
        } }],



      update: {
        write() {
          if (this.isToggled() && !hasClass(this.$el, this.clsEnter)) {
            this.position();
          }
        } },


      methods: {
        show(target, delay) {if (target === void 0) {target = this.target;}if (delay === void 0) {delay = true;}
          if (this.isToggled() && target && this.target && target !== this.target) {
            this.hide(false);
          }

          this.target = target;

          this.clearTimers();

          if (this.isActive()) {
            return;
          }

          if (active$1) {
            if (delay && active$1.isDelaying) {
              this.showTimer = setTimeout(() => matches(target, ':hover') && this.show(), 10);
              return;
            }

            let prev;
            while (active$1 && prev !== active$1 && !within(this.$el, active$1.$el)) {
              prev = active$1;
              active$1.hide(false);
            }
          }

          if (this.container && parent(this.$el) !== this.container) {
            append(this.container, this.$el);
          }

          this.showTimer = setTimeout(
          () => this.toggleElement(this.$el, true),
          delay && this.delayShow || 0);

        },

        hide(delay) {if (delay === void 0) {delay = true;}
          const hide = () => this.toggleElement(this.$el, false, false);

          this.clearTimers();

          this.isDelaying = getPositionedElements(this.$el).some((el) =>
          this.tracker.movesTo(el));


          if (delay && this.isDelaying) {
            this.hideTimer = setTimeout(this.hide, 50);
          } else if (delay && this.delayHide) {
            this.hideTimer = setTimeout(hide, this.delayHide);
          } else {
            hide();
          }
        },

        clearTimers() {
          clearTimeout(this.showTimer);
          clearTimeout(this.hideTimer);
          this.showTimer = null;
          this.hideTimer = null;
          this.isDelaying = false;
        },

        isActive() {
          return active$1 === this;
        },

        position() {
          removeClass(this.$el, this.clsDrop + "-stack");
          toggleClass(this.$el, this.clsDrop + "-boundary", this.boundaryAlign);

          const boundary = query(this.boundary, this.$el);
          const scrollParentOffset = offset(
          scrollParents(boundary && this.boundaryAlign ? boundary : this.$el)[0]);

          const boundaryOffset = boundary ? offset(boundary) : scrollParentOffset;

          css(this.$el, 'maxWidth', '');
          const maxWidth =
          scrollParentOffset.width -
          2 * toPx(getCssVar('position-viewport-offset', this.$el));

          if (this.pos[1] === 'justify') {
            const prop = this.axis === 'y' ? 'width' : 'height';
            css(
            this.$el,
            prop,
            Math.min(
            (boundary ? boundaryOffset : offset(this.target))[prop],
            scrollParentOffset[prop] -
            2 * toPx(getCssVar('position-viewport-offset', this.$el))));


          } else if (this.$el.offsetWidth > maxWidth) {
            addClass(this.$el, this.clsDrop + "-stack");
          }

          css(this.$el, 'maxWidth', maxWidth);

          this.positionAt(
          this.$el,
          boundary && this.boundaryAlign ? boundary : this.target,
          boundary);

        } } };



    function getPositionedElements(el) {
      const result = [];
      apply(el, (el) => css(el, 'position') !== 'static' && result.push(el));
      return result;
    }

    var formCustom = {
      mixins: [Class],

      args: 'target',

      props: {
        target: Boolean },


      data: {
        target: false },


      computed: {
        input(_, $el) {
          return $(selInput, $el);
        },

        state() {
          return this.input.nextElementSibling;
        },

        target(_ref, $el) {let { target } = _ref;
          return (
            target && (
            target === true && parent(this.input) === $el && this.input.nextElementSibling ||
            $(target, $el)));

        } },


      update() {var _input$files;
        const { target, input } = this;

        if (!target) {
          return;
        }

        let option;
        const prop = isInput(target) ? 'value' : 'textContent';
        const prev = target[prop];
        const value = (_input$files = input.files) != null && _input$files[0] ?
        input.files[0].name :
        matches(input, 'select') && (
        option = $$('option', input).filter((el) => el.selected)[0]) // eslint-disable-line prefer-destructuring
        ? option.textContent :
        input.value;

        if (prev !== value) {
          target[prop] = value;
        }
      },

      events: [
      {
        name: 'change',

        handler() {
          this.$emit();
        } },


      {
        name: 'reset',

        el() {
          return closest(this.$el, 'form');
        },

        handler() {
          this.$emit();
        } }] };

    var Margin = {
      mixins: [Resize],

      props: {
        margin: String,
        firstColumn: Boolean },


      data: {
        margin: 'uk-margin-small-top',
        firstColumn: 'uk-first-column' },


      resizeTargets() {
        return [this.$el, ...toArray(this.$el.children)];
      },

      connected() {
        this.registerObserver(
        observeMutation(this.$el, () => this.$reset(), {
          childList: true }));


      },

      update: {
        read() {
          const rows = getRows(this.$el.children);

          return {
            rows,
            columns: getColumns(rows) };

        },

        write(_ref) {let { columns, rows } = _ref;
          for (const row of rows) {
            for (const column of row) {
              toggleClass(column, this.margin, rows[0] !== row);
              toggleClass(column, this.firstColumn, columns[0].includes(column));
            }
          }
        },

        events: ['resize'] } };



    function getRows(items) {
      return sortBy(items, 'top', 'bottom');
    }

    function getColumns(rows) {
      const columns = [];

      for (const row of rows) {
        const sorted = sortBy(row, 'left', 'right');
        for (let j = 0; j < sorted.length; j++) {
          columns[j] = columns[j] ? columns[j].concat(sorted[j]) : sorted[j];
        }
      }

      return isRtl ? columns.reverse() : columns;
    }

    function sortBy(items, startProp, endProp) {
      const sorted = [[]];

      for (const el of items) {
        if (!isVisible(el)) {
          continue;
        }

        let dim = getOffset(el);

        for (let i = sorted.length - 1; i >= 0; i--) {
          const current = sorted[i];

          if (!current[0]) {
            current.push(el);
            break;
          }

          let startDim;
          if (current[0].offsetParent === el.offsetParent) {
            startDim = getOffset(current[0]);
          } else {
            dim = getOffset(el, true);
            startDim = getOffset(current[0], true);
          }

          if (dim[startProp] >= startDim[endProp] - 1 && dim[startProp] !== startDim[startProp]) {
            sorted.push([el]);
            break;
          }

          if (dim[endProp] - 1 > startDim[startProp] || dim[startProp] === startDim[startProp]) {
            current.push(el);
            break;
          }

          if (i === 0) {
            sorted.unshift([el]);
            break;
          }
        }
      }

      return sorted;
    }

    function getOffset(element, offset) {if (offset === void 0) {offset = false;}
      let { offsetTop, offsetLeft, offsetHeight, offsetWidth } = element;

      if (offset) {
        [offsetTop, offsetLeft] = offsetPosition(element);
      }

      return {
        top: offsetTop,
        left: offsetLeft,
        bottom: offsetTop + offsetHeight,
        right: offsetLeft + offsetWidth };

    }

    var Scroll = {
      connected() {
        registerScrollListener(this._uid, () => this.$emit('scroll'));
      },

      disconnected() {
        unregisterScrollListener(this._uid);
      } };


    const scrollListeners = new Map();
    let unbindScrollListener;
    function registerScrollListener(id, listener) {
      unbindScrollListener =
      unbindScrollListener ||
      on(window, 'scroll', () => scrollListeners.forEach((listener) => listener()), {
        passive: true,
        capture: true });


      scrollListeners.set(id, listener);
    }

    function unregisterScrollListener(id) {
      scrollListeners.delete(id);
      if (unbindScrollListener && !scrollListeners.size) {
        unbindScrollListener();
        unbindScrollListener = null;
      }
    }

    var grid = {
      extends: Margin,

      mixins: [Class, Scroll],

      name: 'grid',

      props: {
        masonry: Boolean,
        parallax: Number },


      data: {
        margin: 'uk-grid-margin',
        clsStack: 'uk-grid-stack',
        masonry: false,
        parallax: 0 },


      connected() {
        this.masonry && addClass(this.$el, 'uk-flex-top uk-flex-wrap-top');
      },

      update: [
      {
        write(_ref) {let { columns } = _ref;
          toggleClass(this.$el, this.clsStack, columns.length < 2);
        },

        events: ['resize'] },


      {
        read(data) {
          let { columns, rows } = data;

          // Filter component makes elements positioned absolute
          if (
          !columns.length ||
          !this.masonry && !this.parallax ||
          positionedAbsolute(this.$el))
          {
            data.translates = false;
            return false;
          }

          let translates = false;

          const nodes = children(this.$el);
          const columnHeights = getColumnHeights(columns);
          const margin = getMarginTop(nodes, this.margin) * (rows.length - 1);
          const elHeight = Math.max(...columnHeights) + margin;

          if (this.masonry) {
            columns = columns.map((column) => sortBy$1(column, 'offsetTop'));
            translates = getTranslates(rows, columns);
          }

          let padding = Math.abs(this.parallax);
          if (padding) {
            padding = columnHeights.reduce(
            (newPadding, hgt, i) =>
            Math.max(
            newPadding,
            hgt + margin + (i % 2 ? padding : padding / 8) - elHeight),

            0);

          }

          return { padding, columns, translates, height: translates ? elHeight : '' };
        },

        write(_ref2) {let { height, padding } = _ref2;
          css(this.$el, 'paddingBottom', padding || '');
          height !== false && css(this.$el, 'height', height);
        },

        events: ['resize'] },


      {
        read() {
          if (this.parallax && positionedAbsolute(this.$el)) {
            return false;
          }

          return {
            scrolled: this.parallax ?
            scrolledOver(this.$el) * Math.abs(this.parallax) :
            false };

        },

        write(_ref3) {let { columns, scrolled, translates } = _ref3;
          if (scrolled === false && !translates) {
            return;
          }

          columns.forEach((column, i) =>
          column.forEach((el, j) =>
          css(
          el,
          'transform',
          !scrolled && !translates ?
          '' : "translateY(" + (

          (translates && -translates[i][j]) + (
          scrolled ? i % 2 ? scrolled : scrolled / 8 : 0)) + "px)")));




        },

        events: ['scroll', 'resize'] }] };




    function positionedAbsolute(el) {
      return children(el).some((el) => css(el, 'position') === 'absolute');
    }

    function getTranslates(rows, columns) {
      const rowHeights = rows.map((row) => Math.max(...row.map((el) => el.offsetHeight)));

      return columns.map((elements) => {
        let prev = 0;
        return elements.map(
        (element, row) =>
        prev += row ? rowHeights[row - 1] - elements[row - 1].offsetHeight : 0);

      });
    }

    function getMarginTop(nodes, cls) {
      const [node] = nodes.filter((el) => hasClass(el, cls));

      return toFloat(node ? css(node, 'marginTop') : css(nodes[0], 'paddingLeft'));
    }

    function getColumnHeights(columns) {
      return columns.map((column) => column.reduce((sum, el) => sum + el.offsetHeight, 0));
    }

    var heightMatch = {
      mixins: [Resize],

      args: 'target',

      props: {
        target: String,
        row: Boolean },


      data: {
        target: '> *',
        row: true },


      computed: {
        elements: {
          get(_ref, $el) {let { target } = _ref;
            return $$(target, $el);
          },

          watch() {
            this.$reset();
          } } },



      resizeTargets() {
        return [this.$el, ...this.elements];
      },

      update: {
        read() {
          return {
            rows: (this.row ? getRows(this.elements) : [this.elements]).map(match) };

        },

        write(_ref2) {let { rows } = _ref2;
          for (const { heights, elements } of rows) {
            elements.forEach((el, i) => css(el, 'minHeight', heights[i]));
          }
        },

        events: ['resize'] } };



    function match(elements) {
      if (elements.length < 2) {
        return { heights: [''], elements };
      }

      css(elements, 'minHeight', '');
      let heights = elements.map(getHeight);
      const max = Math.max(...heights);

      return {
        heights: elements.map((el, i) => heights[i].toFixed(2) === max.toFixed(2) ? '' : max),
        elements };

    }

    function getHeight(element) {
      let style = false;
      if (!isVisible(element)) {
        style = element.style.display;
        css(element, 'display', 'block', 'important');
      }

      const height = dimensions(element).height - boxModelAdjust(element, 'height', 'content-box');

      if (style !== false) {
        css(element, 'display', style);
      }

      return height;
    }

    var heightViewport = {
      mixins: [Resize],

      props: {
        expand: Boolean,
        offsetTop: Boolean,
        offsetBottom: Boolean,
        minHeight: Number },


      data: {
        expand: false,
        offsetTop: false,
        offsetBottom: false,
        minHeight: 0 },


      resizeTargets() {
        // check for offsetTop change
        return [this.$el, document.documentElement];
      },

      update: {
        read(_ref) {let { minHeight: prev } = _ref;
          if (!isVisible(this.$el)) {
            return false;
          }

          let minHeight = '';
          const box = boxModelAdjust(this.$el, 'height', 'content-box');

          if (this.expand) {
            minHeight = Math.max(
            height(window) - (
            dimensions(document.documentElement).height -
            dimensions(this.$el).height) -
            box,
            0);

          } else {
            // on mobile devices (iOS and Android) window.innerHeight !== 100vh
            minHeight = 'calc(100vh';

            if (this.offsetTop) {
              const { top } = offset(this.$el);
              minHeight += top > 0 && top < height(window) / 2 ? " - " + top + "px" : '';
            }

            if (this.offsetBottom === true) {
              minHeight += " - " + dimensions(this.$el.nextElementSibling).height + "px";
            } else if (isNumeric(this.offsetBottom)) {
              minHeight += " - " + this.offsetBottom + "vh";
            } else if (this.offsetBottom && endsWith(this.offsetBottom, 'px')) {
              minHeight += " - " + toFloat(this.offsetBottom) + "px";
            } else if (isString(this.offsetBottom)) {
              minHeight += " - " + dimensions(query(this.offsetBottom, this.$el)).height + "px";
            }

            minHeight += (box ? " - " + box + "px" : '') + ")";
          }

          return { minHeight, prev };
        },

        write(_ref2) {let { minHeight } = _ref2;
          css(this.$el, { minHeight });

          if (this.minHeight && toFloat(css(this.$el, 'minHeight')) < this.minHeight) {
            css(this.$el, 'minHeight', this.minHeight);
          }
        },

        events: ['resize'] } };

    var SVG = {
      args: 'src',

      props: {
        id: Boolean,
        icon: String,
        src: String,
        style: String,
        width: Number,
        height: Number,
        ratio: Number,
        class: String,
        strokeAnimation: Boolean,
        focusable: Boolean, // IE 11
        attributes: 'list' },


      data: {
        ratio: 1,
        include: ['style', 'class', 'focusable'],
        class: '',
        strokeAnimation: false },


      beforeConnect() {
        this.class += ' uk-svg';
      },

      connected() {
        if (!this.icon && includes(this.src, '#')) {
          [this.src, this.icon] = this.src.split('#');
        }

        this.svg = this.getSvg().then((el) => {
          if (this._connected) {
            const svg = insertSVG(el, this.$el);

            if (this.svgEl && svg !== this.svgEl) {
              remove$1(this.svgEl);
            }

            this.applyAttributes(svg, el);

            return this.svgEl = svg;
          }
        }, noop);

        if (this.strokeAnimation) {
          this.svg.then((el) => {
            if (this._connected) {
              applyAnimation(el);
              this.registerObserver(
              observeIntersection(el, (records, observer) => {
                applyAnimation(el);
                observer.disconnect();
              }));

            }
          });
        }
      },

      disconnected() {
        this.svg.then((svg) => {
          if (this._connected) {
            return;
          }

          if (isVoidElement(this.$el)) {
            this.$el.hidden = false;
          }

          remove$1(svg);
          this.svgEl = null;
        });

        this.svg = null;
      },

      methods: {
        async getSvg() {
          if (isTag(this.$el, 'img') && !this.$el.complete && this.$el.loading === 'lazy') {
            return new Promise((resolve) =>
            once(this.$el, 'load', () => resolve(this.getSvg())));

          }

          return parseSVG(await loadSVG(this.src), this.icon) || Promise.reject('SVG not found.');
        },

        applyAttributes(el, ref) {
          for (const prop in this.$options.props) {
            if (includes(this.include, prop) && prop in this) {
              attr(el, prop, this[prop]);
            }
          }

          for (const attribute in this.attributes) {
            const [prop, value] = this.attributes[attribute].split(':', 2);
            attr(el, prop, value);
          }

          if (!this.id) {
            removeAttr(el, 'id');
          }

          const props = ['width', 'height'];
          let dimensions = props.map((prop) => this[prop]);

          if (!dimensions.some((val) => val)) {
            dimensions = props.map((prop) => attr(ref, prop));
          }

          const viewBox = attr(ref, 'viewBox');
          if (viewBox && !dimensions.some((val) => val)) {
            dimensions = viewBox.split(' ').slice(2);
          }

          dimensions.forEach((val, i) => attr(el, props[i], toFloat(val) * this.ratio || null));
        } } };



    const loadSVG = memoize(async (src) => {
      if (src) {
        if (startsWith(src, 'data:')) {
          return decodeURIComponent(src.split(',')[1]);
        } else {
          return (await fetch(src)).text();
        }
      } else {
        return Promise.reject();
      }
    });

    function parseSVG(svg, icon) {var _svg;
      if (icon && includes(svg, '<symbol')) {
        svg = parseSymbols(svg, icon) || svg;
      }

      svg = $(svg.substr(svg.indexOf('<svg')));
      return ((_svg = svg) == null ? void 0 : _svg.hasChildNodes()) && svg;
    }

    const symbolRe = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g;
    const symbols = {};

    function parseSymbols(svg, icon) {
      if (!symbols[svg]) {
        symbols[svg] = {};

        symbolRe.lastIndex = 0;

        let match;
        while (match = symbolRe.exec(svg)) {
          symbols[svg][match[3]] = "<svg xmlns=\"http://www.w3.org/2000/svg\"" + match[1] + "svg>";
        }
      }

      return symbols[svg][icon];
    }

    function applyAnimation(el) {
      const length = getMaxPathLength(el);

      if (length) {
        el.style.setProperty('--uk-animation-stroke', length);
      }
    }

    function getMaxPathLength(el) {
      return Math.ceil(
      Math.max(
      0,
      ...$$('[stroke]', el).map((stroke) => {
        try {
          return stroke.getTotalLength();
        } catch (e) {
          return 0;
        }
      })));


    }

    function insertSVG(el, root) {
      if (isVoidElement(root) || isTag(root, 'canvas')) {
        root.hidden = true;

        const next = root.nextElementSibling;
        return equals(el, next) ? next : after(root, el);
      }

      const last = root.lastElementChild;
      return equals(el, last) ? last : append(root, el);
    }

    function equals(el, other) {
      return isTag(el, 'svg') && isTag(other, 'svg') && innerHTML(el) === innerHTML(other);
    }

    function innerHTML(el) {
      return (
      el.innerHTML ||
      new XMLSerializer().serializeToString(el).replace(/<svg.*?>(.*?)<\/svg>/g, '$1')).
      replace(/\s/g, '');
    }

    var closeIcon = "<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" xmlns=\"http://www.w3.org/2000/svg\"><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"1\" y1=\"1\" x2=\"13\" y2=\"13\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"13\" y1=\"1\" x2=\"1\" y2=\"13\"/></svg>";

    var closeLarge = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" x1=\"1\" y1=\"1\" x2=\"19\" y2=\"19\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" x1=\"19\" y1=\"1\" x2=\"1\" y2=\"19\"/></svg>";

    var marker = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"9\" y=\"4\" width=\"1\" height=\"11\"/><rect x=\"4\" y=\"9\" width=\"11\" height=\"1\"/></svg>";

    var navbarToggleIcon = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect y=\"9\" width=\"20\" height=\"2\"/><rect y=\"3\" width=\"20\" height=\"2\"/><rect y=\"15\" width=\"20\" height=\"2\"/></svg>";

    var overlayIcon = "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"19\" y=\"0\" width=\"1\" height=\"40\"/><rect x=\"0\" y=\"19\" width=\"40\" height=\"1\"/></svg>";

    var paginationNext = "<svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"1 1 6 6 1 11\"/></svg>";

    var paginationPrevious = "<svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"6 1 1 6 6 11\"/></svg>";

    var searchIcon = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9\" cy=\"9\" r=\"7\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M14,14 L18,18 L14,14 Z\"/></svg>";

    var searchLarge = "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.8\" cx=\"17.5\" cy=\"17.5\" r=\"16.5\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.8\" x1=\"38\" y1=\"39\" x2=\"29\" y2=\"30\"/></svg>";

    var searchNavbar = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10.5\" cy=\"10.5\" r=\"9.5\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"23\" y1=\"23\" x2=\"17\" y2=\"17\"/></svg>";

    var slidenavNext = "<svg width=\"14\" height=\"24\" viewBox=\"0 0 14 24\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" points=\"1.225,23 12.775,12 1.225,1 \"/></svg>";

    var slidenavNextLarge = "<svg width=\"25\" height=\"40\" viewBox=\"0 0 25 40\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"2\" points=\"4.002,38.547 22.527,20.024 4,1.5 \"/></svg>";

    var slidenavPrevious = "<svg width=\"14\" height=\"24\" viewBox=\"0 0 14 24\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" points=\"12.775,1 1.225,12 12.775,23 \"/></svg>";

    var slidenavPreviousLarge = "<svg width=\"25\" height=\"40\" viewBox=\"0 0 25 40\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"2\" points=\"20.527,1.5 2,20.024 20.525,38.547 \"/></svg>";

    var spinner = "<svg width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" cx=\"15\" cy=\"15\" r=\"14\"/></svg>";

    var totop = "<svg width=\"18\" height=\"10\" viewBox=\"0 0 18 10\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"1 9 9 1 17 9 \"/></svg>";

    const icons = {
      spinner,
      totop,
      marker,
      'close-icon': closeIcon,
      'close-large': closeLarge,
      'navbar-toggle-icon': navbarToggleIcon,
      'overlay-icon': overlayIcon,
      'pagination-next': paginationNext,
      'pagination-previous': paginationPrevious,
      'search-icon': searchIcon,
      'search-large': searchLarge,
      'search-navbar': searchNavbar,
      'slidenav-next': slidenavNext,
      'slidenav-next-large': slidenavNextLarge,
      'slidenav-previous': slidenavPrevious,
      'slidenav-previous-large': slidenavPreviousLarge };


    const Icon = {
      install: install$1,

      extends: SVG,

      args: 'icon',

      props: ['icon'],

      data: {
        include: ['focusable'] },


      isIcon: true,

      beforeConnect() {
        addClass(this.$el, 'uk-icon');
      },

      methods: {
        async getSvg() {
          const icon = getIcon(this.icon);

          if (!icon) {
            throw 'Icon not found.';
          }

          return icon;
        } } };

    const IconComponent = {
      args: false,

      extends: Icon,

      data: (vm) => ({
        icon: hyphenate(vm.constructor.options.name) }),


      beforeConnect() {
        addClass(this.$el, this.$name);
      } };


    const Slidenav = {
      extends: IconComponent,

      beforeConnect() {
        addClass(this.$el, 'uk-slidenav');
        const icon = this.$props.icon;
        this.icon = hasClass(this.$el, 'uk-slidenav-large') ? icon + "-large" : icon;
      } };


    const Search = {
      extends: IconComponent,

      beforeConnect() {
        this.icon =
        hasClass(this.$el, 'uk-search-icon') && parents(this.$el, '.uk-search-large').length ?
        'search-large' :
        parents(this.$el, '.uk-search-navbar').length ?
        'search-navbar' :
        this.$props.icon;
      } };


    const Close = {
      extends: IconComponent,

      beforeConnect() {
        this.icon = "close-" + (hasClass(this.$el, 'uk-close-large') ? 'large' : 'icon');
      } };


    const Spinner = {
      extends: IconComponent,

      methods: {
        async getSvg() {
          const icon = await Icon.methods.getSvg.call(this);

          if (this.ratio !== 1) {
            css($('circle', icon), 'strokeWidth', 1 / this.ratio);
          }

          return icon;
        } } };



    const parsed = {};
    function install$1(UIkit) {
      UIkit.icon.add = (name, svg) => {
        const added = isString(name) ? { [name]: svg } : name;
        each(added, (svg, name) => {
          icons[name] = svg;
          delete parsed[name];
        });

        if (UIkit._initialized) {
          apply(document.body, (el) =>
          each(UIkit.getComponents(el), (cmp) => {
            cmp.$options.isIcon && cmp.icon in added && cmp.$reset();
          }));

        }
      };
    }

    function getIcon(icon) {
      if (!icons[icon]) {
        return null;
      }

      if (!parsed[icon]) {
        parsed[icon] = $((icons[applyRtl(icon)] || icons[icon]).trim());
      }

      return parsed[icon].cloneNode(true);
    }

    function applyRtl(icon) {
      return isRtl ? swap(swap(icon, 'left', 'right'), 'previous', 'next') : icon;
    }

    const nativeLazyLoad = inBrowser && 'loading' in HTMLImageElement.prototype;

    var img = {
      args: 'dataSrc',

      props: {
        dataSrc: String,
        sources: String,
        offsetTop: String,
        offsetLeft: String,
        target: String,
        loading: String },


      data: {
        dataSrc: '',
        sources: false,
        offsetTop: '50vh',
        offsetLeft: '50vw',
        target: false,
        loading: 'lazy' },


      connected() {
        if (this.loading !== 'lazy') {
          this.load();
          return;
        }

        const target = [this.$el, ...queryAll(this.$props.target, this.$el)];

        if (nativeLazyLoad && isImg(this.$el)) {
          this.$el.loading = 'lazy';
          setSrcAttrs(this.$el);

          if (target.length === 1) {
            return;
          }
        }

        ensureSrcAttribute(this.$el);

        this.registerObserver(
        observeIntersection(
        target,
        (entries, observer) => {
          this.load();
          observer.disconnect();
        },
        {
          rootMargin: toPx(this.offsetTop, 'height') + "px " + toPx(
          this.offsetLeft,
          'width') + "px" }));




      },

      disconnected() {
        if (this._data.image) {
          this._data.image.onload = '';
        }
      },

      methods: {
        load() {
          if (this._data.image) {
            return this._data.image;
          }

          const image = isImg(this.$el) ?
          this.$el :
          getImageFromElement(this.$el, this.dataSrc, this.sources);

          removeAttr(image, 'loading');
          setSrcAttrs(this.$el, image.currentSrc);
          return this._data.image = image;
        } } };



    function setSrcAttrs(el, src) {
      if (isImg(el)) {
        const parentNode = parent(el);
        const elements = isPicture(parentNode) ? children(parentNode) : [el];
        elements.forEach((el) => setSourceProps(el, el));
      } else if (src) {
        const change = !includes(el.style.backgroundImage, src);
        if (change) {
          css(el, 'backgroundImage', "url(" + escape(src) + ")");
          trigger(el, createEvent('load', false));
        }
      }
    }

    const srcProps = ['data-src', 'data-srcset', 'sizes'];
    function setSourceProps(sourceEl, targetEl) {
      srcProps.forEach((prop) => {
        const value = data(sourceEl, prop);
        if (value) {
          attr(targetEl, prop.replace(/^(data-)+/, ''), value);
        }
      });
    }

    function getImageFromElement(el, src, sources) {
      const img = new Image();

      wrapInPicture(img, sources);
      setSourceProps(el, img);
      img.onload = () => {
        setSrcAttrs(el, img.currentSrc);
      };
      attr(img, 'src', src);
      return img;
    }

    function wrapInPicture(img, sources) {
      sources = parseSources(sources);

      if (sources.length) {
        const picture = fragment('<picture>');
        for (const attrs of sources) {
          const source = fragment('<source>');
          attr(source, attrs);
          append(picture, source);
        }
        append(picture, img);
      }
    }

    function parseSources(sources) {
      if (!sources) {
        return [];
      }

      if (startsWith(sources, '[')) {
        try {
          sources = JSON.parse(sources);
        } catch (e) {
          sources = [];
        }
      } else {
        sources = parseOptions(sources);
      }

      if (!isArray(sources)) {
        sources = [sources];
      }

      return sources.filter((source) => !isEmpty(source));
    }

    function ensureSrcAttribute(el) {
      if (isImg(el) && !hasAttr(el, 'src')) {
        attr(el, 'src', 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"></svg>');
      }
    }

    function isPicture(el) {
      return isTag(el, 'picture');
    }

    function isImg(el) {
      return isTag(el, 'img');
    }

    var Media = {
      props: {
        media: Boolean },


      data: {
        media: false },


      connected() {
        const media = toMedia(this.media);
        this.matchMedia = true;
        if (media) {
          this.mediaObj = window.matchMedia(media);
          const handler = () => {
            this.matchMedia = this.mediaObj.matches;
            trigger(this.$el, createEvent('mediachange', false, true, [this.mediaObj]));
          };
          this.offMediaObj = on(this.mediaObj, 'change', () => {
            handler();
            this.$emit('resize');
          });
          handler();
        }
      },

      disconnected() {var _this$offMediaObj;
        (_this$offMediaObj = this.offMediaObj) == null ? void 0 : _this$offMediaObj.call(this);
      } };


    function toMedia(value) {
      if (isString(value)) {
        if (startsWith(value, '@')) {
          const name = "breakpoint-" + value.substr(1);
          value = toFloat(getCssVar(name));
        } else if (isNaN(value)) {
          return value;
        }
      }

      return value && isNumeric(value) ? "(min-width: " + value + "px)" : '';
    }

    var leader = {
      mixins: [Class, Media, Resize],

      props: {
        fill: String },


      data: {
        fill: '',
        clsWrapper: 'uk-leader-fill',
        clsHide: 'uk-leader-hide',
        attrFill: 'data-fill' },


      computed: {
        fill(_ref) {let { fill } = _ref;
          return fill || getCssVar('leader-fill-content');
        } },


      connected() {
        [this.wrapper] = wrapInner(this.$el, "<span class=\"" + this.clsWrapper + "\">");
      },

      disconnected() {
        unwrap(this.wrapper.childNodes);
      },

      update: {
        read() {
          const width = Math.trunc(this.$el.offsetWidth / 2);

          return {
            width,
            fill: this.fill,
            hide: !this.matchMedia };

        },

        write(_ref2) {let { width, fill, hide } = _ref2;
          toggleClass(this.wrapper, this.clsHide, hide);
          attr(this.wrapper, this.attrFill, new Array(width).join(fill));
        },

        events: ['resize'] } };

    const active = [];

    var Modal = {
      mixins: [Class, Container, Togglable],

      props: {
        selPanel: String,
        selClose: String,
        escClose: Boolean,
        bgClose: Boolean,
        stack: Boolean },


      data: {
        cls: 'uk-open',
        escClose: true,
        bgClose: true,
        overlay: true,
        stack: false },


      computed: {
        panel(_ref, $el) {let { selPanel } = _ref;
          return $(selPanel, $el);
        },

        transitionElement() {
          return this.panel;
        },

        bgClose(_ref2) {let { bgClose } = _ref2;
          return bgClose && this.panel;
        } },


      beforeDisconnect() {
        if (includes(active, this)) {
          this.toggleElement(this.$el, false, false);
        }
      },

      events: [
      {
        name: 'click',

        delegate() {
          return this.selClose;
        },

        handler(e) {
          e.preventDefault();
          this.hide();
        } },


      {
        name: 'toggle',

        self: true,

        handler(e) {
          if (e.defaultPrevented) {
            return;
          }

          e.preventDefault();

          if (this.isToggled() === includes(active, this)) {
            this.toggle();
          }
        } },


      {
        name: 'beforeshow',

        self: true,

        handler(e) {
          if (includes(active, this)) {
            return false;
          }

          if (!this.stack && active.length) {
            Promise.all(active.map((modal) => modal.hide())).then(this.show);
            e.preventDefault();
          } else {
            active.push(this);
          }
        } },


      {
        name: 'show',

        self: true,

        handler() {
          const docEl = document.documentElement;

          if (width(window) > docEl.clientWidth && this.overlay) {
            css(document.body, 'overflowY', 'scroll');
          }

          if (this.stack) {
            css(this.$el, 'zIndex', toFloat(css(this.$el, 'zIndex')) + active.length);
          }

          addClass(docEl, this.clsPage);

          if (this.bgClose) {
            once(
            this.$el,
            'hide',
            on(document, pointerDown, (_ref3) => {let { target } = _ref3;
              if (
              last(active) !== this ||
              this.overlay && !within(target, this.$el) ||
              within(target, this.panel))
              {
                return;
              }

              once(
              document,
              pointerUp + " " + pointerCancel + " scroll",
              (_ref4) => {let { defaultPrevented, type, target: newTarget } = _ref4;
                if (
                !defaultPrevented &&
                type === pointerUp &&
                target === newTarget)
                {
                  this.hide();
                }
              },
              true);

            }),
            { self: true });

          }

          if (this.escClose) {
            once(
            this.$el,
            'hide',
            on(document, 'keydown', (e) => {
              if (e.keyCode === 27 && last(active) === this) {
                this.hide();
              }
            }),
            { self: true });

          }
        } },


      {
        name: 'shown',

        self: true,

        handler() {
          if (!isFocusable(this.$el)) {
            attr(this.$el, 'tabindex', '-1');
          }

          if (!$(':focus', this.$el)) {
            this.$el.focus();
          }
        } },


      {
        name: 'hidden',

        self: true,

        handler() {
          if (includes(active, this)) {
            active.splice(active.indexOf(this), 1);
          }

          if (!active.length) {
            css(document.body, 'overflowY', '');
          }

          css(this.$el, 'zIndex', '');

          if (!active.some((modal) => modal.clsPage === this.clsPage)) {
            removeClass(document.documentElement, this.clsPage);
          }
        } }],



      methods: {
        toggle() {
          return this.isToggled() ? this.hide() : this.show();
        },

        show() {
          if (this.container && parent(this.$el) !== this.container) {
            append(this.container, this.$el);
            return new Promise((resolve) =>
            requestAnimationFrame(() => this.show().then(resolve)));

          }

          return this.toggleElement(this.$el, true, animate(this));
        },

        hide() {
          return this.toggleElement(this.$el, false, animate(this));
        } } };



    function animate(_ref5) {let { transitionElement, _toggle } = _ref5;
      return (el, show) =>
      new Promise((resolve, reject) =>
      once(el, 'show hide', () => {
        el._reject == null ? void 0 : el._reject();
        el._reject = reject;

        _toggle(el, show);

        const off = once(
        transitionElement,
        'transitionstart',
        () => {
          once(transitionElement, 'transitionend transitioncancel', resolve, {
            self: true });

          clearTimeout(timer);
        },
        { self: true });


        const timer = setTimeout(() => {
          off();
          resolve();
        }, toMs(css(transitionElement, 'transitionDuration')));
      })).
      then(() => delete el._reject);
    }

    function toMs(time) {
      return time ? endsWith(time, 'ms') ? toFloat(time) : toFloat(time) * 1000 : 0;
    }

    var modal = {
      install,

      mixins: [Modal],

      data: {
        clsPage: 'uk-modal-page',
        selPanel: '.uk-modal-dialog',
        selClose:
        '.uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full' },


      events: [
      {
        name: 'show',

        self: true,

        handler() {
          if (hasClass(this.panel, 'uk-margin-auto-vertical')) {
            addClass(this.$el, 'uk-flex');
          } else {
            css(this.$el, 'display', 'block');
          }

          height(this.$el); // force reflow
        } },


      {
        name: 'hidden',

        self: true,

        handler() {
          css(this.$el, 'display', '');
          removeClass(this.$el, 'uk-flex');
        } }] };




    function install(_ref) {let { modal } = _ref;
      modal.dialog = function (content, options) {
        const dialog = modal("<div class=\"uk-modal\"> <div class=\"uk-modal-dialog\">" +

        content + "</div> </div>",

        options);


        dialog.show();

        on(
        dialog.$el,
        'hidden',
        async () => {
          await Promise.resolve();
          dialog.$destroy(true);
        },
        { self: true });


        return dialog;
      };

      modal.alert = function (message, options) {
        return openDialog(
        (_ref2) => {let { labels } = _ref2;return "<div class=\"uk-modal-body\">" + (
          isString(message) ? message : html(message)) + "</div> <div class=\"uk-modal-footer uk-text-right\"> <button class=\"uk-button uk-button-primary uk-modal-close\" autofocus>" +



          labels.ok + "</button> </div>";},


        options,
        (deferred) => deferred.resolve());

      };

      modal.confirm = function (message, options) {
        return openDialog(
        (_ref3) => {let { labels } = _ref3;return "<form> <div class=\"uk-modal-body\">" + (
          isString(message) ? message : html(message)) + "</div> <div class=\"uk-modal-footer uk-text-right\"> <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">" +


          labels.cancel + "</button> <button class=\"uk-button uk-button-primary\" autofocus>" +

          labels.ok + "</button> </div> </form>";},


        options,
        (deferred) => deferred.reject());

      };

      modal.prompt = function (message, value, options) {
        return openDialog(
        (_ref4) => {let { labels } = _ref4;return "<form class=\"uk-form-stacked\"> <div class=\"uk-modal-body\"> <label>" + (

          isString(message) ? message : html(message)) + "</label> <input class=\"uk-input\" value=\"" + (
          value || '') + "\" autofocus> </div> <div class=\"uk-modal-footer uk-text-right\"> <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">" +



          labels.cancel + "</button> <button class=\"uk-button uk-button-primary\">" +

          labels.ok + "</button> </div> </form>";},


        options,
        (deferred) => deferred.resolve(null),
        (dialog) => $('input', dialog.$el).value);

      };

      modal.labels = {
        ok: 'Ok',
        cancel: 'Cancel' };


      function openDialog(tmpl, options, hideFn, submitFn) {
        options = { bgClose: false, escClose: true, labels: modal.labels, ...options };

        const dialog = modal.dialog(tmpl(options), options);
        const deferred = new Deferred();

        let resolved = false;

        on(dialog.$el, 'submit', 'form', (e) => {
          e.preventDefault();
          deferred.resolve(submitFn == null ? void 0 : submitFn(dialog));
          resolved = true;
          dialog.hide();
        });

        on(dialog.$el, 'hide', () => !resolved && hideFn(deferred));

        deferred.promise.dialog = dialog;

        return deferred.promise;
      }
    }

    var nav = {
      extends: Accordion,

      data: {
        targets: '> .uk-parent',
        toggle: '> a',
        content: '> ul' } };

    var navbar = {
      mixins: [Class, Container],

      props: {
        dropdown: String,
        mode: 'list',
        align: String,
        offset: Number,
        boundary: Boolean,
        boundaryAlign: Boolean,
        clsDrop: String,
        delayShow: Number,
        delayHide: Number,
        dropbar: Boolean,
        dropbarAnchor: Boolean,
        duration: Number },


      data: {
        dropdown: '.uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle',
        align: isRtl ? 'right' : 'left',
        clsDrop: 'uk-navbar-dropdown',
        mode: undefined,
        offset: undefined,
        delayShow: undefined,
        delayHide: undefined,
        boundaryAlign: undefined,
        flip: 'x',
        boundary: true,
        dropbar: false,
        dropbarAnchor: false,
        duration: 200,
        container: false },


      computed: {
        boundary(_ref, $el) {let { boundary } = _ref;
          return boundary === true ? $el : boundary;
        },

        dropbarAnchor(_ref2, $el) {let { dropbarAnchor } = _ref2;
          return query(dropbarAnchor, $el);
        },

        pos(_ref3) {let { align } = _ref3;
          return "bottom-" + align;
        },

        dropbar: {
          get(_ref4) {let { dropbar } = _ref4;
            if (!dropbar) {
              return null;
            }

            dropbar =
            this._dropbar ||
            query(dropbar, this.$el) ||
            $('+ .uk-navbar-dropbar', this.$el);

            return dropbar ? dropbar : this._dropbar = $('<div></div>');
          },

          watch(dropbar) {
            addClass(dropbar, 'uk-navbar-dropbar');
          },

          immediate: true },


        dropContainer(_, $el) {
          return this.container || $el;
        },

        dropdowns: {
          get(_ref5, $el) {let { clsDrop } = _ref5;
            const dropdowns = $$("." + clsDrop, $el);

            if (this.dropContainer !== $el) {
              for (const el of $$("." + clsDrop, this.dropContainer)) {var _this$getDropdown;
                const target = (_this$getDropdown = this.getDropdown(el)) == null ? void 0 : _this$getDropdown.target;
                if (!includes(dropdowns, el) && target && within(target, this.$el)) {
                  dropdowns.push(el);
                }
              }
            }

            return dropdowns;
          },

          watch(dropdowns) {
            this.$create(
            'drop',
            dropdowns.filter((el) => !this.getDropdown(el)),
            {
              ...this.$props,
              boundary: this.boundary,
              pos: this.pos,
              offset: this.dropbar || this.offset });


          },

          immediate: true },


        toggles: {
          get(_ref6, $el) {let { dropdown } = _ref6;
            return $$(dropdown, $el);
          },

          watch() {
            const justify = hasClass(this.$el, 'uk-navbar-justify');
            for (const container of $$(
            '.uk-navbar-nav, .uk-navbar-left, .uk-navbar-right',
            this.$el))
            {
              css(container, 'flexGrow', justify ? $$(this.dropdown, container).length : '');
            }
          },

          immediate: true } },



      disconnected() {
        this.dropbar && remove$1(this.dropbar);
        delete this._dropbar;
      },

      events: [
      {
        name: 'mouseover focusin',

        delegate() {
          return this.dropdown;
        },

        handler(_ref7) {let { current } = _ref7;
          const active = this.getActive();
          if (
          active &&
          includes(active.mode, 'hover') &&
          active.target &&
          !within(active.target, current) &&
          !active.isDelaying)
          {
            active.hide(false);
          }
        } },


      {
        name: 'keydown',

        delegate() {
          return this.dropdown;
        },

        handler(e) {
          const { current, keyCode } = e;
          const active = this.getActive();

          if (keyCode === keyMap.DOWN && hasAttr(current, 'aria-expanded')) {
            e.preventDefault();

            if (!active || active.target !== current) {
              current.click();
              once(this.dropContainer, 'show', (_ref8) => {let { target } = _ref8;return (
                  focusFirstFocusableElement(target));});

            } else {
              focusFirstFocusableElement(active.$el);
            }
          }

          handleNavItemNavigation(e, this.toggles, active);
        } },


      {
        name: 'keydown',

        el() {
          return this.dropContainer;
        },

        delegate() {
          return "." + this.clsDrop;
        },

        handler(e) {
          const { current, keyCode } = e;

          if (!includes(this.dropdowns, current)) {
            return;
          }

          const active = this.getActive();
          const elements = $$(selFocusable, current);
          const i = findIndex(elements, (el) => matches(el, ':focus'));

          if (keyCode === keyMap.UP) {
            e.preventDefault();
            if (i > 0) {
              elements[i - 1].focus();
            }
          }

          if (keyCode === keyMap.DOWN) {
            e.preventDefault();
            if (i < elements.length - 1) {
              elements[i + 1].focus();
            }
          }

          if (keyCode === keyMap.ESC) {var _active$target;
            active == null ? void 0 : (_active$target = active.target) == null ? void 0 : _active$target.focus();
          }

          handleNavItemNavigation(e, this.toggles, active);
        } },


      {
        name: 'mouseleave',

        el() {
          return this.dropbar;
        },

        filter() {
          return this.dropbar;
        },

        handler() {
          const active = this.getActive();

          if (
          active &&
          includes(active.mode, 'hover') &&
          !this.dropdowns.some((el) => matches(el, ':hover')))
          {
            active.hide();
          }
        } },


      {
        name: 'beforeshow',

        el() {
          return this.dropContainer;
        },

        filter() {
          return this.dropbar;
        },

        handler(_, _ref9) {let { $el } = _ref9;
          if (!hasClass($el, this.clsDrop)) {
            return;
          }

          if (!parent(this.dropbar)) {
            after(this.dropbarAnchor || this.$el, this.dropbar);
          }

          addClass($el, this.clsDrop + "-dropbar");
        } },


      {
        name: 'show',

        el() {
          return this.dropContainer;
        },

        filter() {
          return this.dropbar;
        },

        handler(_, _ref10) {let { $el } = _ref10;
          if (!hasClass($el, this.clsDrop)) {
            return;
          }

          this._observer = observeResize($el, () =>
          this.transitionTo(
          offset($el).bottom -
          offset(this.dropbar).top +
          toFloat(css($el, 'marginBottom')),
          $el));


        } },


      {
        name: 'beforehide',

        el() {
          return this.dropContainer;
        },

        filter() {
          return this.dropbar;
        },

        handler(e, _ref11) {let { $el } = _ref11;
          const active = this.getActive();

          if (
          matches(this.dropbar, ':hover') &&
          (active == null ? void 0 : active.$el) === $el &&
          !this.toggles.some((el) => active.target !== el && matches(el, ':focus')))
          {
            e.preventDefault();
          }
        } },


      {
        name: 'hide',

        el() {
          return this.dropContainer;
        },

        filter() {
          return this.dropbar;
        },

        handler(_, _ref12) {let { $el } = _ref12;
          if (!hasClass($el, this.clsDrop)) {
            return;
          }

          this._observer.disconnect();

          const active = this.getActive();

          if (!active || (active == null ? void 0 : active.$el) === $el) {
            this.transitionTo(0);
          }
        } }],



      methods: {
        getActive() {
          return active$1 && within(active$1.target, this.$el) && active$1;
        },

        transitionTo(newHeight, el) {
          const { dropbar } = this;
          const oldHeight = height(dropbar);

          el = oldHeight < newHeight && el;

          css(el, 'clip', "rect(0," + el.offsetWidth + "px," + oldHeight + "px,0)");

          height(dropbar, oldHeight);

          Transition.cancel([el, dropbar]);
          Promise.all([
          Transition.start(dropbar, { height: newHeight }, this.duration),
          Transition.start(
          el,
          { clip: "rect(0," + el.offsetWidth + "px," + newHeight + "px,0)" },
          this.duration)]).


          catch(noop).
          then(() => css(el, { clip: '' }));
        },

        getDropdown(el) {
          return this.$getComponent(el, 'drop') || this.$getComponent(el, 'dropdown');
        } } };



    function handleNavItemNavigation(e, toggles, active) {
      const { current, keyCode } = e;
      const target = (active == null ? void 0 : active.target) || current;
      const i = toggles.indexOf(target);

      // Left
      if (keyCode === keyMap.LEFT && i > 0) {
        active == null ? void 0 : active.hide(false);
        toggles[i - 1].focus();
      }

      // Right
      if (keyCode === keyMap.RIGHT && i < toggles.length - 1) {
        active == null ? void 0 : active.hide(false);
        toggles[i + 1].focus();
      }

      if (keyCode === keyMap.TAB) {
        target.focus();
        active == null ? void 0 : active.hide(false);
      }
    }

    function focusFirstFocusableElement(el) {
      if (!$(':focus', el)) {var _$;
        (_$ = $(selFocusable, el)) == null ? void 0 : _$.focus();
      }
    }

    const keyMap = {
      TAB: 9,
      ESC: 27,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40 };

    var Swipe = {
      props: {
        swiping: Boolean },


      data: {
        swiping: true },


      computed: {
        swipeTarget(props, $el) {
          return $el;
        } },


      connected() {
        if (!this.swiping) {
          return;
        }

        registerEvent(this, {
          el: this.swipeTarget,
          name: pointerDown,
          passive: true,
          handler(e) {
            if (!isTouch(e)) {
              return;
            }

            // Handle Swipe Gesture
            const pos = getEventPos(e);
            const target = 'tagName' in e.target ? e.target : parent(e.target);
            once(document, pointerUp + " " + pointerCancel + " scroll", (e) => {
              const { x, y } = getEventPos(e);

              // swipe
              if (
              e.type !== 'scroll' && target && x && Math.abs(pos.x - x) > 100 ||
              y && Math.abs(pos.y - y) > 100)
              {
                setTimeout(() => {
                  trigger(target, 'swipe');
                  trigger(target, "swipe" + swipeDirection(pos.x, pos.y, x, y));
                });
              }
            });
          } });

      } };


    function swipeDirection(x1, y1, x2, y2) {
      return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ?
      x1 - x2 > 0 ?
      'Left' :
      'Right' :
      y1 - y2 > 0 ?
      'Up' :
      'Down';
    }

    var offcanvas = {
      mixins: [Modal, Swipe],

      args: 'mode',

      props: {
        mode: String,
        flip: Boolean,
        overlay: Boolean },


      data: {
        mode: 'slide',
        flip: false,
        overlay: false,
        clsPage: 'uk-offcanvas-page',
        clsContainer: 'uk-offcanvas-container',
        selPanel: '.uk-offcanvas-bar',
        clsFlip: 'uk-offcanvas-flip',
        clsContainerAnimation: 'uk-offcanvas-container-animation',
        clsSidebarAnimation: 'uk-offcanvas-bar-animation',
        clsMode: 'uk-offcanvas',
        clsOverlay: 'uk-offcanvas-overlay',
        selClose: '.uk-offcanvas-close',
        container: false },


      computed: {
        clsFlip(_ref) {let { flip, clsFlip } = _ref;
          return flip ? clsFlip : '';
        },

        clsOverlay(_ref2) {let { overlay, clsOverlay } = _ref2;
          return overlay ? clsOverlay : '';
        },

        clsMode(_ref3) {let { mode, clsMode } = _ref3;
          return clsMode + "-" + mode;
        },

        clsSidebarAnimation(_ref4) {let { mode, clsSidebarAnimation } = _ref4;
          return mode === 'none' || mode === 'reveal' ? '' : clsSidebarAnimation;
        },

        clsContainerAnimation(_ref5) {let { mode, clsContainerAnimation } = _ref5;
          return mode !== 'push' && mode !== 'reveal' ? '' : clsContainerAnimation;
        },

        transitionElement(_ref6) {let { mode } = _ref6;
          return mode === 'reveal' ? parent(this.panel) : this.panel;
        } },


      update: {
        read() {
          if (this.isToggled() && !isVisible(this.$el)) {
            this.hide();
          }
        },

        events: ['resize'] },


      events: [
      {
        name: 'click',

        delegate() {
          return 'a[href^="#"]';
        },

        handler(_ref7) {let { current: { hash }, defaultPrevented } = _ref7;
          if (!defaultPrevented && hash && $(hash, document.body)) {
            this.hide();
          }
        } },


      {
        name: 'touchstart',

        passive: true,

        el() {
          return this.panel;
        },

        handler(_ref8) {let { targetTouches } = _ref8;
          if (targetTouches.length === 1) {
            this.clientY = targetTouches[0].clientY;
          }
        } },


      {
        name: 'touchmove',

        self: true,
        passive: false,

        filter() {
          return this.overlay;
        },

        handler(e) {
          e.cancelable && e.preventDefault();
        } },


      {
        name: 'touchmove',

        passive: false,

        el() {
          return this.panel;
        },

        handler(e) {
          if (e.targetTouches.length !== 1) {
            return;
          }

          const clientY = e.targetTouches[0].clientY - this.clientY;
          const { scrollTop, scrollHeight, clientHeight } = this.panel;

          if (
          clientHeight >= scrollHeight ||
          scrollTop === 0 && clientY > 0 ||
          scrollHeight - scrollTop <= clientHeight && clientY < 0)
          {
            e.cancelable && e.preventDefault();
          }
        } },


      {
        name: 'show',

        self: true,

        handler() {
          if (this.mode === 'reveal' && !hasClass(parent(this.panel), this.clsMode)) {
            wrapAll(this.panel, '<div>');
            addClass(parent(this.panel), this.clsMode);
          }

          css(document.documentElement, 'overflowY', this.overlay ? 'hidden' : '');
          addClass(document.body, this.clsContainer, this.clsFlip);
          css(document.body, 'touch-action', 'pan-y pinch-zoom');
          css(this.$el, 'display', 'block');
          addClass(this.$el, this.clsOverlay);
          addClass(
          this.panel,
          this.clsSidebarAnimation,
          this.mode !== 'reveal' ? this.clsMode : '');


          height(document.body); // force reflow
          addClass(document.body, this.clsContainerAnimation);

          this.clsContainerAnimation && suppressUserScale();
        } },


      {
        name: 'hide',

        self: true,

        handler() {
          removeClass(document.body, this.clsContainerAnimation);
          css(document.body, 'touch-action', '');
        } },


      {
        name: 'hidden',

        self: true,

        handler() {
          this.clsContainerAnimation && resumeUserScale();

          if (this.mode === 'reveal') {
            unwrap(this.panel);
          }

          removeClass(this.panel, this.clsSidebarAnimation, this.clsMode);
          removeClass(this.$el, this.clsOverlay);
          css(this.$el, 'display', '');
          removeClass(document.body, this.clsContainer, this.clsFlip);

          css(document.documentElement, 'overflowY', '');
        } },


      {
        name: 'swipeLeft swipeRight',

        handler(e) {
          if (this.isToggled() && endsWith(e.type, 'Left') ^ this.flip) {
            this.hide();
          }
        } }] };




    // Chrome in responsive mode zooms page upon opening offcanvas
    function suppressUserScale() {
      getViewport().content += ',user-scalable=0';
    }

    function resumeUserScale() {
      const viewport = getViewport();
      viewport.content = viewport.content.replace(/,user-scalable=0$/, '');
    }

    function getViewport() {
      return (
        $('meta[name="viewport"]', document.head) || append(document.head, '<meta name="viewport">'));

    }

    var overflowAuto = {
      mixins: [Class, Resize],

      props: {
        selContainer: String,
        selContent: String,
        minHeight: Number },


      data: {
        selContainer: '.uk-modal',
        selContent: '.uk-modal-dialog',
        minHeight: 150 },


      computed: {
        container(_ref, $el) {let { selContainer } = _ref;
          return closest($el, selContainer);
        },

        content(_ref2, $el) {let { selContent } = _ref2;
          return closest($el, selContent);
        } },


      resizeTargets() {
        return [this.container, this.content];
      },

      update: {
        read() {
          if (!this.content || !this.container || !isVisible(this.$el)) {
            return false;
          }

          return {
            max: Math.max(
            this.minHeight,
            height(this.container) - (dimensions(this.content).height - height(this.$el))) };


        },

        write(_ref3) {let { max } = _ref3;
          css(this.$el, { minHeight: this.minHeight, maxHeight: max });
        },

        events: ['resize'] } };

    var responsive = {
      mixins: [Resize],

      props: ['width', 'height'],

      resizeTargets() {
        return [this.$el, parent(this.$el)];
      },

      connected() {
        addClass(this.$el, 'uk-responsive-width');
      },

      update: {
        read() {
          return isVisible(this.$el) && this.width && this.height ?
          { width: width(parent(this.$el)), height: this.height } :
          false;
        },

        write(dim) {
          height(
          this.$el,
          Dimensions.contain(
          {
            height: this.height,
            width: this.width },

          dim).
          height);

        },

        events: ['resize'] } };

    var scroll = {
      props: {
        offset: Number },


      data: {
        offset: 0 },


      methods: {
        async scrollTo(el) {
          el = el && $(el) || document.body;

          if (trigger(this.$el, 'beforescroll', [this, el])) {
            await scrollIntoView(el, { offset: this.offset });
            trigger(this.$el, 'scrolled', [this, el]);
          }
        } },


      events: {
        click(e) {
          if (e.defaultPrevented) {
            return;
          }

          e.preventDefault();
          this.scrollTo(getTargetElement(this.$el));
        } } };



    function getTargetElement(el) {
      return document.getElementById(decodeURIComponent(el.hash).substring(1));
    }

    var scrollspy = {
      mixins: [Scroll],

      args: 'cls',

      props: {
        cls: String,
        target: String,
        hidden: Boolean,
        offsetTop: Number,
        offsetLeft: Number,
        repeat: Boolean,
        delay: Number },


      data: () => ({
        cls: '',
        target: false,
        hidden: true,
        offsetTop: 0,
        offsetLeft: 0,
        repeat: false,
        delay: 0,
        inViewClass: 'uk-scrollspy-inview' }),


      computed: {
        elements: {
          get(_ref, $el) {let { target } = _ref;
            return target ? $$(target, $el) : [$el];
          },

          watch(elements, prev) {
            if (this.hidden) {
              css(filter(elements, ":not(." + this.inViewClass + ")"), 'visibility', 'hidden');
            }

            if (!isEqual(elements, prev)) {
              this.$reset();
            }
          },

          immediate: true } },



      connected() {
        this._data.elements = new Map();
        this.registerObserver(
        observeIntersection(
        this.elements,
        (records) => {
          const elements = this._data.elements;
          for (const { target: el, isIntersecting } of records) {
            if (!elements.has(el)) {
              elements.set(el, {
                cls: data(el, 'uk-scrollspy-class') || this.cls });

            }

            const state = elements.get(el);
            if (!this.repeat && state.show) {
              continue;
            }

            state.show = isIntersecting;
          }

          this.$emit();
        },
        {
          rootMargin: toPx(this.offsetTop, 'height') - 1 + "px " + (
          toPx(this.offsetLeft, 'width') - 1) + "px" },


        false));


      },

      disconnected() {
        for (const [el, state] of this._data.elements.entries()) {
          removeClass(el, this.inViewClass, (state == null ? void 0 : state.cls) || '');
        }
      },

      update: [
      {
        write(data) {
          for (const [el, state] of data.elements.entries()) {
            if (state.show && !state.inview && !state.queued) {
              state.queued = true;

              data.promise = (data.promise || Promise.resolve()).
              then(() => new Promise((resolve) => setTimeout(resolve, this.delay))).
              then(() => {
                this.toggle(el, true);
                setTimeout(() => {
                  state.queued = false;
                  this.$emit();
                }, 300);
              });
            } else if (!state.show && state.inview && !state.queued && this.repeat) {
              this.toggle(el, false);
            }
          }
        } }],



      methods: {
        toggle(el, inview) {
          const state = this._data.elements.get(el);

          if (!state) {
            return;
          }

          state.off == null ? void 0 : state.off();

          css(el, 'visibility', !inview && this.hidden ? 'hidden' : '');

          toggleClass(el, this.inViewClass, inview);
          toggleClass(el, state.cls);

          if (/\buk-animation-/.test(state.cls)) {
            const removeAnimationClasses = () => removeClasses(el, 'uk-animation-[\\w-]+');
            if (inview) {
              state.off = once(el, 'animationcancel animationend', removeAnimationClasses);
            } else {
              removeAnimationClasses();
            }
          }

          trigger(el, inview ? 'inview' : 'outview');

          state.inview = inview;

          this.$update(el);
        } } };

    var scrollspyNav = {
      mixins: [Scroll],

      props: {
        cls: String,
        closest: String,
        scroll: Boolean,
        overflow: Boolean,
        offset: Number },


      data: {
        cls: 'uk-active',
        closest: false,
        scroll: false,
        overflow: true,
        offset: 0 },


      computed: {
        links: {
          get(_, $el) {
            return $$('a[href^="#"]', $el).filter((el) => el.hash);
          },

          watch(links) {
            if (this.scroll) {
              this.$create('scroll', links, { offset: this.offset || 0 });
            }
          },

          immediate: true },


        elements(_ref) {let { closest: selector } = _ref;
          return closest(this.links, selector || '*');
        } },


      update: [
      {
        read() {
          const targets = this.links.map(getTargetElement).filter(Boolean);

          const { length } = targets;

          if (!length || !isVisible(this.$el)) {
            return false;
          }

          const [scrollElement] = scrollParents(targets, /auto|scroll/, true);
          const { scrollTop, scrollHeight } = scrollElement;
          const viewport = offsetViewport(scrollElement);
          const max = scrollHeight - viewport.height;
          let active = false;

          if (scrollTop === max) {
            active = length - 1;
          } else {
            for (let i = 0; i < targets.length; i++) {
              if (offset(targets[i]).top - viewport.top - this.offset > 0) {
                break;
              }
              active = +i;
            }

            if (active === false && this.overflow) {
              active = 0;
            }
          }

          return { active };
        },

        write(_ref2) {let { active } = _ref2;
          const changed = active !== false && !hasClass(this.elements[active], this.cls);

          this.links.forEach((el) => el.blur());
          for (let i = 0; i < this.elements.length; i++) {
            toggleClass(this.elements[i], this.cls, +i === active);
          }

          if (changed) {
            trigger(this.$el, 'active', [active, this.elements[active]]);
          }
        },

        events: ['scroll', 'resize'] }] };

    var sticky = {
      mixins: [Class, Media, Resize, Scroll],

      props: {
        position: String,
        top: null,
        bottom: null,
        start: null,
        end: null,
        offset: String,
        overflowFlip: Boolean,
        animation: String,
        clsActive: String,
        clsInactive: String,
        clsFixed: String,
        clsBelow: String,
        selTarget: String,
        showOnUp: Boolean,
        targetOffset: Number },


      data: {
        position: 'top',
        top: false,
        bottom: false,
        start: false,
        end: false,
        offset: 0,
        overflowFlip: false,
        animation: '',
        clsActive: 'uk-active',
        clsInactive: '',
        clsFixed: 'uk-sticky-fixed',
        clsBelow: 'uk-sticky-below',
        selTarget: '',
        showOnUp: false,
        targetOffset: false },


      computed: {
        selTarget(_ref, $el) {let { selTarget } = _ref;
          return selTarget && $(selTarget, $el) || $el;
        } },


      resizeTargets() {
        return document.documentElement;
      },

      connected() {
        this.start = coerce(this.start || this.top);
        this.end = coerce(this.end || this.bottom);

        this.placeholder =
        $('+ .uk-sticky-placeholder', this.$el) ||
        $('<div class="uk-sticky-placeholder"></div>');
        this.isFixed = false;
        this.setActive(false);
      },

      disconnected() {
        if (this.isFixed) {
          this.hide();
          removeClass(this.selTarget, this.clsInactive);
        }

        remove$1(this.placeholder);
        this.placeholder = null;
      },

      events: [
      {
        name: 'resize',

        el() {
          return window;
        },

        handler() {
          this.$emit('resize');
        } },

      {
        name: 'load hashchange popstate',

        el() {
          return window;
        },

        filter() {
          return this.targetOffset !== false;
        },

        handler() {
          if (!location.hash || scrollTop(window) === 0) {
            return;
          }

          setTimeout(() => {
            const targetOffset = offset($(location.hash));
            const elOffset = offset(this.$el);

            if (this.isFixed && intersectRect(targetOffset, elOffset)) {
              scrollTop(
              window,
              targetOffset.top -
              elOffset.height -
              toPx(this.targetOffset, 'height', this.placeholder) -
              toPx(this.offset, 'height', this.placeholder));

            }
          });
        } }],



      update: [
      {
        read(_ref2, types) {let { height: height$1, margin } = _ref2;
          this.inactive = !this.matchMedia || !isVisible(this.$el);

          if (this.inactive) {
            return false;
          }

          const hide = this.active && types.has('resize');
          if (hide) {
            css(this.selTarget, 'transition', '0s');
            this.hide();
          }

          if (!this.active) {
            height$1 = offset(this.$el).height;
            margin = css(this.$el, 'margin');
          }

          if (hide) {
            this.show();
            requestAnimationFrame(() => css(this.selTarget, 'transition', ''));
          }

          const referenceElement = this.isFixed ? this.placeholder : this.$el;
          const windowHeight = height(window);

          let position = this.position;
          if (this.overflowFlip && height$1 > windowHeight) {
            position = position === 'top' ? 'bottom' : 'top';
          }

          let offset$1 = toPx(this.offset, 'height', referenceElement);
          if (position === 'bottom' && (height$1 < windowHeight || this.overflowFlip)) {
            offset$1 += windowHeight - height$1;
          }

          const overflow = this.overflowFlip ?
          0 :
          Math.max(0, height$1 + offset$1 - windowHeight);
          const topOffset = offset(referenceElement).top;

          const start =
          (this.start === false ?
          topOffset :
          parseProp(this.start, this.$el, topOffset)) - offset$1;
          const end =
          this.end === false ?
          document.scrollingElement.scrollHeight - windowHeight :
          parseProp(this.end, this.$el, topOffset + height$1, true) -
          offset(this.$el).height +
          overflow -
          offset$1;

          return {
            start,
            end,
            offset: offset$1,
            overflow,
            topOffset,
            height: height$1,
            margin,
            width: dimensions(referenceElement).width,
            top: offsetPosition(referenceElement)[0] };

        },

        write(_ref3) {let { height, margin } = _ref3;
          const { placeholder } = this;

          css(placeholder, { height, margin });

          if (!within(placeholder, document)) {
            after(this.$el, placeholder);
            placeholder.hidden = true;
          }
        },

        events: ['resize'] },


      {
        read(_ref4)






        {let { scroll: prevScroll = 0, dir: prevDir = 'down', overflow, overflowScroll = 0, start, end } = _ref4;
          const scroll = scrollTop(window);
          const dir = prevScroll <= scroll ? 'down' : 'up';

          return {
            dir,
            prevDir,
            scroll,
            prevScroll,
            offsetParentTop: offset(
            (this.isFixed ? this.placeholder : this.$el).offsetParent).
            top,
            overflowScroll: clamp(
            overflowScroll + clamp(scroll, start, end) - clamp(prevScroll, start, end),
            0,
            overflow) };


        },

        write(data, types) {
          const isScrollUpdate = types.has('scroll');
          const {
            initTimestamp = 0,
            dir,
            prevDir,
            scroll,
            prevScroll = 0,
            top,
            start,
            topOffset,
            height } =
          data;

          if (
          scroll < 0 ||
          scroll === prevScroll && isScrollUpdate ||
          this.showOnUp && !isScrollUpdate && !this.isFixed)
          {
            return;
          }

          const now = Date.now();
          if (now - initTimestamp > 300 || dir !== prevDir) {
            data.initScroll = scroll;
            data.initTimestamp = now;
          }

          if (
          this.showOnUp &&
          !this.isFixed &&
          Math.abs(data.initScroll - scroll) <= 30 &&
          Math.abs(prevScroll - scroll) <= 10)
          {
            return;
          }

          if (
          this.inactive ||
          scroll < start ||
          this.showOnUp && (
          scroll <= start ||
          dir === 'down' && isScrollUpdate ||
          dir === 'up' && !this.isFixed && scroll <= topOffset + height))
          {
            if (!this.isFixed) {
              if (Animation.inProgress(this.$el) && top > scroll) {
                Animation.cancel(this.$el);
                this.hide();
              }

              return;
            }

            this.isFixed = false;

            if (this.animation && scroll > topOffset) {
              Animation.cancel(this.$el);
              Animation.out(this.$el, this.animation).then(() => this.hide(), noop);
            } else {
              this.hide();
            }
          } else if (this.isFixed) {
            this.update();
          } else if (this.animation && scroll > topOffset) {
            Animation.cancel(this.$el);
            this.show();
            Animation.in(this.$el, this.animation).catch(noop);
          } else {
            this.show();
          }
        },

        events: ['resize', 'scroll'] }],



      methods: {
        show() {
          this.isFixed = true;
          this.update();
          this.placeholder.hidden = false;
        },

        hide() {
          this.setActive(false);
          removeClass(this.$el, this.clsFixed, this.clsBelow);
          css(this.$el, { position: '', top: '', width: '' });
          this.placeholder.hidden = true;
        },

        update() {
          let {
            width,
            scroll = 0,
            overflow,
            overflowScroll = 0,
            start,
            end,
            offset,
            topOffset,
            height,
            offsetParentTop } =
          this._data;
          const active = start !== 0 || scroll > start;
          let position = 'fixed';

          if (scroll > end) {
            offset += end - offsetParentTop;
            position = 'absolute';
          }

          if (overflow) {
            offset -= overflowScroll;
          }

          css(this.$el, {
            position,
            top: offset + "px",
            width });


          this.setActive(active);
          toggleClass(this.$el, this.clsBelow, scroll > topOffset + height);
          addClass(this.$el, this.clsFixed);
        },

        setActive(active) {
          const prev = this.active;
          this.active = active;
          if (active) {
            replaceClass(this.selTarget, this.clsInactive, this.clsActive);
            prev !== active && trigger(this.$el, 'active');
          } else {
            replaceClass(this.selTarget, this.clsActive, this.clsInactive);
            prev !== active && trigger(this.$el, 'inactive');
          }
        } } };



    function parseProp(value, el, propOffset, padding) {
      if (!value) {
        return 0;
      }

      if (isNumeric(value) || isString(value) && value.match(/^-?\d/)) {
        return propOffset + toPx(value, 'height', el, true);
      } else {
        const refElement = value === true ? parent(el) : query(value, el);
        return (
          offset(refElement).bottom - (
          padding && refElement && within(el, refElement) ?
          toFloat(css(refElement, 'paddingBottom')) :
          0));

      }
    }

    function coerce(value) {
      if (value === 'true') {
        return true;
      } else if (value === 'false') {
        return false;
      }
      return value;
    }

    var Switcher = {
      mixins: [Lazyload, Swipe, Togglable],

      args: 'connect',

      props: {
        connect: String,
        toggle: String,
        itemNav: String,
        active: Number },


      data: {
        connect: '~.uk-switcher',
        toggle: '> * > :first-child',
        itemNav: false,
        active: 0,
        cls: 'uk-active',
        attrItem: 'uk-switcher-item' },


      computed: {
        connects: {
          get(_ref, $el) {let { connect } = _ref;
            return queryAll(connect, $el);
          },

          watch(connects) {
            if (this.swiping) {
              css(connects, 'touch-action', 'pan-y pinch-zoom');
            }

            const index = this.index();
            this.connects.forEach((el) =>
            children(el).forEach((child, i) => toggleClass(child, this.cls, i === index)));

          },

          immediate: true },


        toggles: {
          get(_ref2, $el) {let { toggle } = _ref2;
            return $$(toggle, $el).filter(
            (el) => !matches(el, '.uk-disabled *, .uk-disabled, [disabled]'));

          },

          watch(toggles) {
            const active = this.index();
            this.show(~active ? active : toggles[this.active] || toggles[0]);
          },

          immediate: true },


        children() {
          return children(this.$el).filter((child) =>
          this.toggles.some((toggle) => within(toggle, child)));

        },

        swipeTarget() {
          return this.connects;
        } },


      connected() {
        this.lazyload(this.$el, this.connects);

        // check for connects
        ready(() => this.$emit());
      },

      events: [
      {
        name: 'click',

        delegate() {
          return this.toggle;
        },

        handler(e) {
          e.preventDefault();
          this.show(e.current);
        } },


      {
        name: 'click',

        el() {
          return this.connects.concat(this.itemNav ? queryAll(this.itemNav, this.$el) : []);
        },

        delegate() {
          return "[" + this.attrItem + "],[data-" + this.attrItem + "]";
        },

        handler(e) {
          e.preventDefault();
          this.show(data(e.current, this.attrItem));
        } },


      {
        name: 'swipeRight swipeLeft',

        filter() {
          return this.swiping;
        },

        el() {
          return this.connects;
        },

        handler(_ref3) {let { type } = _ref3;
          this.show(endsWith(type, 'Left') ? 'next' : 'previous');
        } }],



      methods: {
        index() {
          return findIndex(this.children, (el) => hasClass(el, this.cls));
        },

        show(item) {
          const prev = this.index();
          const next = getIndex(item, this.toggles, prev);
          const active = getIndex(this.children[next], children(this.$el));
          children(this.$el).forEach((child, i) => {
            toggleClass(child, this.cls, active === i);
            attr(this.toggles[i], 'aria-expanded', active === i);
          });

          const animate = prev >= 0 && prev !== next;
          this.connects.forEach(async (_ref4) => {let { children } = _ref4;
            await this.toggleElement(
            toNodes(children).filter((child) => hasClass(child, this.cls)),
            false,
            animate);

            await this.toggleElement(children[active], true, animate);
          });
        } } };

    var tab = {
      mixins: [Class],

      extends: Switcher,

      props: {
        media: Boolean },


      data: {
        media: 960,
        attrItem: 'uk-tab-item' },


      connected() {
        const cls = hasClass(this.$el, 'uk-tab-left') ?
        'uk-tab-left' :
        hasClass(this.$el, 'uk-tab-right') ?
        'uk-tab-right' :
        false;

        if (cls) {
          this.$create('toggle', this.$el, { cls, mode: 'media', media: this.media });
        }
      } };

    const KEY_SPACE = 32;

    var toggle = {
      mixins: [Lazyload, Media, Togglable],

      args: 'target',

      props: {
        href: String,
        target: null,
        mode: 'list',
        queued: Boolean },


      data: {
        href: false,
        target: false,
        mode: 'click',
        queued: true },


      computed: {
        target: {
          get(_ref, $el) {let { href, target } = _ref;
            target = queryAll(target || href, $el);
            return target.length && target || [$el];
          },

          watch() {
            this.updateAria();
          },

          immediate: true } },



      connected() {
        if (!includes(this.mode, 'media') && !isFocusable(this.$el)) {
          attr(this.$el, 'tabindex', '0');
        }

        this.lazyload(this.$el, this.target);

        // check for target
        ready(() => this.$emit());
      },

      events: [
      {
        name: pointerDown,

        filter() {
          return includes(this.mode, 'hover');
        },

        handler(e) {
          this._preventClick = null;

          if (!isTouch(e) || this._showState) {
            return;
          }

          // Clicking a button does not give it focus on all browsers and platforms
          // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#clicking_and_focus
          trigger(this.$el, 'focus');
          once(
          document,
          pointerDown,
          () => trigger(this.$el, 'blur'),
          true,
          (e) => !within(e.target, this.$el));


          // Prevent initial click to prevent double toggle through focus + click
          if (includes(this.mode, 'click')) {
            this._preventClick = true;
          }
        } },


      {
        name: pointerEnter + " " + pointerLeave + " focus blur",

        filter() {
          return includes(this.mode, 'hover');
        },

        handler(e) {
          if (isTouch(e)) {
            return;
          }

          const show = includes([pointerEnter, 'focus'], e.type);
          const expanded = attr(this.$el, 'aria-expanded');

          // Skip hide if still hovered or focused
          if (
          !show && (
          e.type === pointerLeave && matches(this.$el, ':focus') ||
          e.type === 'blur' && matches(this.$el, ':hover')))
          {
            return;
          }

          // Skip if state does not change e.g. hover + focus received
          if (this._showState && show && expanded !== this._showState) {
            // Ensure reset if state has changed through click
            if (!show) {
              this._showState = null;
            }
            return;
          }

          this._showState = show ? expanded : null;

          this.toggle("toggle" + (show ? 'show' : 'hide'));
        } },


      {
        name: 'keydown',

        filter() {
          return includes(this.mode, 'click') && !isTag(this.$el, 'input');
        },

        handler(e) {
          if (e.keyCode === KEY_SPACE) {
            e.preventDefault();
            this.$el.click();
          }
        } },


      {
        name: 'click',

        filter() {
          return ['click', 'hover'].some((mode) => includes(this.mode, mode));
        },

        handler(e) {
          let link;
          if (
          this._preventClick ||
          closest(e.target, 'a[href="#"], a[href=""]') ||
          (link = closest(e.target, 'a[href]')) && (
          attr(this.$el, 'aria-expanded') !== 'true' ||
          link.hash && matches(this.target, link.hash)))
          {
            e.preventDefault();
          }

          if (!this._preventClick && includes(this.mode, 'click')) {
            this.toggle();
          }
        } },


      {
        name: 'toggled',

        self: true,

        el() {
          return this.target;
        },

        handler(e, toggled) {
          if (e.target === this.target[0]) {
            this.updateAria(toggled);
          }
        } },


      {
        name: 'mediachange',

        filter() {
          return includes(this.mode, 'media');
        },

        el() {
          return this.target;
        },

        handler(e, mediaObj) {
          if (mediaObj.matches ^ this.isToggled(this.target)) {
            this.toggle();
          }
        } }],



      methods: {
        async toggle(type) {
          if (!trigger(this.target, type || 'toggle', [this])) {
            return;
          }

          if (!this.queued) {
            return this.toggleElement(this.target);
          }

          const leaving = this.target.filter((el) => hasClass(el, this.clsLeave));

          if (leaving.length) {
            for (const el of this.target) {
              const isLeaving = includes(leaving, el);
              this.toggleElement(el, isLeaving, isLeaving);
            }
            return;
          }

          const toggled = this.target.filter(this.isToggled);
          await this.toggleElement(toggled, false);
          await this.toggleElement(
          this.target.filter((el) => !includes(toggled, el)),
          true);

        },

        updateAria(toggled) {
          if (includes(this.mode, 'media')) {
            return;
          }

          attr(
          this.$el,
          'aria-expanded',
          isBoolean(toggled) ? toggled : this.isToggled(this.target));

        } } };

    var components = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Accordion: Accordion,
        Alert: alert,
        Cover: cover,
        Drop: drop,
        Dropdown: drop,
        FormCustom: formCustom,
        Grid: grid,
        HeightMatch: heightMatch,
        HeightViewport: heightViewport,
        Icon: Icon,
        Img: img,
        Leader: leader,
        Margin: Margin,
        Modal: modal,
        Nav: nav,
        Navbar: navbar,
        Offcanvas: offcanvas,
        OverflowAuto: overflowAuto,
        Responsive: responsive,
        Scroll: scroll,
        Scrollspy: scrollspy,
        ScrollspyNav: scrollspyNav,
        Sticky: sticky,
        Svg: SVG,
        Switcher: Switcher,
        Tab: tab,
        Toggle: toggle,
        Video: Video,
        Close: Close,
        Spinner: Spinner,
        SlidenavNext: Slidenav,
        SlidenavPrevious: Slidenav,
        SearchIcon: Search,
        Marker: IconComponent,
        NavbarToggleIcon: IconComponent,
        OverlayIcon: IconComponent,
        PaginationNext: IconComponent,
        PaginationPrevious: IconComponent,
        Totop: IconComponent
    });

    // register components
    each(components, (component, name) => UIkit.component(name, component));

    boot(UIkit);

    return UIkit;

}));


/***/ }),

/***/ "./node_modules/uikit/src/js/util/ajax.js":
/*!************************************************!*\
  !*** ./node_modules/uikit/src/js/util/ajax.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ajax": () => (/* binding */ ajax),
/* harmony export */   "getImage": () => (/* binding */ getImage)
/* harmony export */ });
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event */ "./node_modules/uikit/src/js/util/event.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang */ "./node_modules/uikit/src/js/util/lang.js");



function ajax(url, options) {
    const env = {
        data: null,
        method: 'GET',
        headers: {},
        xhr: new XMLHttpRequest(),
        beforeSend: _lang__WEBPACK_IMPORTED_MODULE_0__.noop,
        responseType: '',
        ...options,
    };
    return Promise.resolve()
        .then(() => env.beforeSend(env))
        .then(() => send(url, env));
}

function send(url, env) {
    return new Promise((resolve, reject) => {
        const { xhr } = env;

        for (const prop in env) {
            if (prop in xhr) {
                try {
                    xhr[prop] = env[prop];
                } catch (e) {
                    // noop
                }
            }
        }

        xhr.open(env.method.toUpperCase(), url);

        for (const header in env.headers) {
            xhr.setRequestHeader(header, env.headers[header]);
        }

        (0,_event__WEBPACK_IMPORTED_MODULE_1__.on)(xhr, 'load', () => {
            if (xhr.status === 0 || (xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
                resolve(xhr);
            } else {
                reject(
                    (0,_lang__WEBPACK_IMPORTED_MODULE_0__.assign)(Error(xhr.statusText), {
                        xhr,
                        status: xhr.status,
                    })
                );
            }
        });

        (0,_event__WEBPACK_IMPORTED_MODULE_1__.on)(xhr, 'error', () => reject((0,_lang__WEBPACK_IMPORTED_MODULE_0__.assign)(Error('Network Error'), { xhr })));
        (0,_event__WEBPACK_IMPORTED_MODULE_1__.on)(xhr, 'timeout', () => reject((0,_lang__WEBPACK_IMPORTED_MODULE_0__.assign)(Error('Network Timeout'), { xhr })));

        xhr.send(env.data);
    });
}

function getImage(src, srcset, sizes) {
    return new Promise((resolve, reject) => {
        const img = new Image();

        img.onerror = (e) => {
            reject(e);
        };
        img.onload = () => {
            resolve(img);
        };

        sizes && (img.sizes = sizes);
        srcset && (img.srcset = srcset);
        img.src = src;
    });
}


/***/ }),

/***/ "./node_modules/uikit/src/js/util/animation.js":
/*!*****************************************************!*\
  !*** ./node_modules/uikit/src/js/util/animation.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Animation": () => (/* binding */ Animation),
/* harmony export */   "Transition": () => (/* binding */ Transition),
/* harmony export */   "animate": () => (/* binding */ animate),
/* harmony export */   "transition": () => (/* binding */ transition)
/* harmony export */ });
/* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attr */ "./node_modules/uikit/src/js/util/attr.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event */ "./node_modules/uikit/src/js/util/event.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./node_modules/uikit/src/js/util/style.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang */ "./node_modules/uikit/src/js/util/lang.js");
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./class */ "./node_modules/uikit/src/js/util/class.js");






function transition(element, props, duration = 400, timing = 'linear') {
    return Promise.all(
        (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNodes)(element).map(
            (element) =>
                new Promise((resolve, reject) => {
                    for (const name in props) {
                        const value = (0,_style__WEBPACK_IMPORTED_MODULE_1__.css)(element, name);
                        if (value === '') {
                            (0,_style__WEBPACK_IMPORTED_MODULE_1__.css)(element, name, value);
                        }
                    }

                    const timer = setTimeout(() => (0,_event__WEBPACK_IMPORTED_MODULE_2__.trigger)(element, 'transitionend'), duration);

                    (0,_event__WEBPACK_IMPORTED_MODULE_2__.once)(
                        element,
                        'transitionend transitioncanceled',
                        ({ type }) => {
                            clearTimeout(timer);
                            (0,_class__WEBPACK_IMPORTED_MODULE_3__.removeClass)(element, 'uk-transition');
                            (0,_style__WEBPACK_IMPORTED_MODULE_1__.css)(element, {
                                transitionProperty: '',
                                transitionDuration: '',
                                transitionTimingFunction: '',
                            });
                            type === 'transitioncanceled' ? reject() : resolve(element);
                        },
                        { self: true }
                    );

                    (0,_class__WEBPACK_IMPORTED_MODULE_3__.addClass)(element, 'uk-transition');
                    (0,_style__WEBPACK_IMPORTED_MODULE_1__.css)(element, {
                        transitionProperty: Object.keys(props).map(_style__WEBPACK_IMPORTED_MODULE_1__.propName).join(','),
                        transitionDuration: `${duration}ms`,
                        transitionTimingFunction: timing,
                        ...props,
                    });
                })
        )
    );
}

const Transition = {
    start: transition,

    stop(element) {
        (0,_event__WEBPACK_IMPORTED_MODULE_2__.trigger)(element, 'transitionend');
        return Promise.resolve();
    },

    cancel(element) {
        (0,_event__WEBPACK_IMPORTED_MODULE_2__.trigger)(element, 'transitioncanceled');
    },

    inProgress(element) {
        return (0,_class__WEBPACK_IMPORTED_MODULE_3__.hasClass)(element, 'uk-transition');
    },
};

const animationPrefix = 'uk-animation-';

function animate(element, animation, duration = 200, origin, out) {
    return Promise.all(
        (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNodes)(element).map(
            (element) =>
                new Promise((resolve, reject) => {
                    (0,_event__WEBPACK_IMPORTED_MODULE_2__.trigger)(element, 'animationcanceled');
                    const timer = setTimeout(() => (0,_event__WEBPACK_IMPORTED_MODULE_2__.trigger)(element, 'animationend'), duration);

                    (0,_event__WEBPACK_IMPORTED_MODULE_2__.once)(
                        element,
                        'animationend animationcanceled',
                        ({ type }) => {
                            clearTimeout(timer);

                            type === 'animationcanceled' ? reject() : resolve(element);

                            (0,_style__WEBPACK_IMPORTED_MODULE_1__.css)(element, 'animationDuration', '');
                            (0,_class__WEBPACK_IMPORTED_MODULE_3__.removeClasses)(element, `${animationPrefix}\\S*`);
                        },
                        { self: true }
                    );

                    (0,_style__WEBPACK_IMPORTED_MODULE_1__.css)(element, 'animationDuration', `${duration}ms`);
                    (0,_class__WEBPACK_IMPORTED_MODULE_3__.addClass)(element, animation, animationPrefix + (out ? 'leave' : 'enter'));

                    if ((0,_lang__WEBPACK_IMPORTED_MODULE_0__.startsWith)(animation, animationPrefix)) {
                        origin && (0,_class__WEBPACK_IMPORTED_MODULE_3__.addClass)(element, `uk-transform-origin-${origin}`);
                        out && (0,_class__WEBPACK_IMPORTED_MODULE_3__.addClass)(element, `${animationPrefix}reverse`);
                    }
                })
        )
    );
}

const inProgress = new RegExp(`${animationPrefix}(enter|leave)`);
const Animation = {
    in: animate,

    out(element, animation, duration, origin) {
        return animate(element, animation, duration, origin, true);
    },

    inProgress(element) {
        return inProgress.test((0,_attr__WEBPACK_IMPORTED_MODULE_4__.attr)(element, 'class'));
    },

    cancel(element) {
        (0,_event__WEBPACK_IMPORTED_MODULE_2__.trigger)(element, 'animationcanceled');
    },
};


/***/ }),

/***/ "./node_modules/uikit/src/js/util/attr.js":
/*!************************************************!*\
  !*** ./node_modules/uikit/src/js/util/attr.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attr": () => (/* binding */ attr),
/* harmony export */   "data": () => (/* binding */ data),
/* harmony export */   "hasAttr": () => (/* binding */ hasAttr),
/* harmony export */   "removeAttr": () => (/* binding */ removeAttr)
/* harmony export */ });
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang */ "./node_modules/uikit/src/js/util/lang.js");


function attr(element, name, value) {
    if ((0,_lang__WEBPACK_IMPORTED_MODULE_0__.isObject)(name)) {
        for (const key in name) {
            attr(element, key, name[key]);
        }
        return;
    }

    if ((0,_lang__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(value)) {
        return (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNode)(element)?.getAttribute(name);
    } else {
        for (const el of (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNodes)(element)) {
            if ((0,_lang__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value)) {
                value = value.call(el, attr(el, name));
            }

            if (value === null) {
                removeAttr(el, name);
            } else {
                el.setAttribute(name, value);
            }
        }
    }
}

function hasAttr(element, name) {
    return (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNodes)(element).some((element) => element.hasAttribute(name));
}

function removeAttr(element, name) {
    const elements = (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNodes)(element);
    for (const attribute of name.split(' ')) {
        for (const element of elements) {
            element.removeAttribute(attribute);
        }
    }
}

function data(element, attribute) {
    for (const name of [attribute, `data-${attribute}`]) {
        if (hasAttr(element, name)) {
            return attr(element, name);
        }
    }
}


/***/ }),

/***/ "./node_modules/uikit/src/js/util/class.js":
/*!*************************************************!*\
  !*** ./node_modules/uikit/src/js/util/class.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addClass": () => (/* binding */ addClass),
/* harmony export */   "hasClass": () => (/* binding */ hasClass),
/* harmony export */   "removeClass": () => (/* binding */ removeClass),
/* harmony export */   "removeClasses": () => (/* binding */ removeClasses),
/* harmony export */   "replaceClass": () => (/* binding */ replaceClass),
/* harmony export */   "toggleClass": () => (/* binding */ toggleClass)
/* harmony export */ });
/* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attr */ "./node_modules/uikit/src/js/util/attr.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang */ "./node_modules/uikit/src/js/util/lang.js");



function addClass(element, ...args) {
    apply(element, args, 'add');
}

function removeClass(element, ...args) {
    apply(element, args, 'remove');
}

function removeClasses(element, cls) {
    (0,_attr__WEBPACK_IMPORTED_MODULE_0__.attr)(element, 'class', (value) => (value || '').replace(new RegExp(`\\b${cls}\\b`, 'g'), ''));
}

function replaceClass(element, ...args) {
    args[0] && removeClass(element, args[0]);
    args[1] && addClass(element, args[1]);
}

function hasClass(element, cls) {
    [cls] = getClasses(cls);
    return !!cls && (0,_lang__WEBPACK_IMPORTED_MODULE_1__.toNodes)(element).some((node) => node.classList.contains(cls));
}

function toggleClass(element, cls, force) {
    const classes = getClasses(cls);

    if (!(0,_lang__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(force)) {
        force = !!force;
    }

    for (const node of (0,_lang__WEBPACK_IMPORTED_MODULE_1__.toNodes)(element)) {
        for (const cls of classes) {
            node.classList.toggle(cls, force);
        }
    }
}

function apply(element, args, fn) {
    args = args.reduce((args, arg) => args.concat(getClasses(arg)), []);

    for (const node of (0,_lang__WEBPACK_IMPORTED_MODULE_1__.toNodes)(element)) {
        node.classList[fn](...args);
    }
}

function getClasses(str) {
    return String(str).split(/\s|,/).filter(Boolean);
}


/***/ }),

/***/ "./node_modules/uikit/src/js/util/dimensions.js":
/*!******************************************************!*\
  !*** ./node_modules/uikit/src/js/util/dimensions.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "boxModelAdjust": () => (/* binding */ boxModelAdjust),
/* harmony export */   "dimensions": () => (/* binding */ dimensions),
/* harmony export */   "flipPosition": () => (/* binding */ flipPosition),
/* harmony export */   "height": () => (/* binding */ height),
/* harmony export */   "offset": () => (/* binding */ offset),
/* harmony export */   "offsetPosition": () => (/* binding */ offsetPosition),
/* harmony export */   "position": () => (/* binding */ position),
/* harmony export */   "toPx": () => (/* binding */ toPx),
/* harmony export */   "width": () => (/* binding */ width)
/* harmony export */ });
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./node_modules/uikit/src/js/util/style.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang */ "./node_modules/uikit/src/js/util/lang.js");



const dirs = {
    width: ['left', 'right'],
    height: ['top', 'bottom'],
};

function dimensions(element) {
    const rect = (0,_lang__WEBPACK_IMPORTED_MODULE_0__.isElement)(element)
        ? (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNode)(element).getBoundingClientRect()
        : { height: height(element), width: width(element), top: 0, left: 0 };

    return {
        height: rect.height,
        width: rect.width,
        top: rect.top,
        left: rect.left,
        bottom: rect.top + rect.height,
        right: rect.left + rect.width,
    };
}

function offset(element, coordinates) {
    const currentOffset = dimensions(element);

    if (element) {
        const { scrollY, scrollX } = (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toWindow)(element);
        const offsetBy = { height: scrollY, width: scrollX };

        for (const dir in dirs) {
            for (const prop of dirs[dir]) {
                currentOffset[prop] += offsetBy[dir];
            }
        }
    }

    if (!coordinates) {
        return currentOffset;
    }

    const pos = (0,_style__WEBPACK_IMPORTED_MODULE_1__.css)(element, 'position');

    (0,_lang__WEBPACK_IMPORTED_MODULE_0__.each)((0,_style__WEBPACK_IMPORTED_MODULE_1__.css)(element, ['left', 'top']), (value, prop) =>
        (0,_style__WEBPACK_IMPORTED_MODULE_1__.css)(
            element,
            prop,
            coordinates[prop] -
                currentOffset[prop] +
                (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toFloat)(pos === 'absolute' && value === 'auto' ? position(element)[prop] : value)
        )
    );
}

function position(element) {
    let { top, left } = offset(element);

    const {
        ownerDocument: { body, documentElement },
        offsetParent,
    } = (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNode)(element);
    let parent = offsetParent || documentElement;

    while (
        parent &&
        (parent === body || parent === documentElement) &&
        (0,_style__WEBPACK_IMPORTED_MODULE_1__.css)(parent, 'position') === 'static'
    ) {
        parent = parent.parentNode;
    }

    if ((0,_lang__WEBPACK_IMPORTED_MODULE_0__.isElement)(parent)) {
        const parentOffset = offset(parent);
        top -= parentOffset.top + (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toFloat)((0,_style__WEBPACK_IMPORTED_MODULE_1__.css)(parent, 'borderTopWidth'));
        left -= parentOffset.left + (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toFloat)((0,_style__WEBPACK_IMPORTED_MODULE_1__.css)(parent, 'borderLeftWidth'));
    }

    return {
        top: top - (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toFloat)((0,_style__WEBPACK_IMPORTED_MODULE_1__.css)(element, 'marginTop')),
        left: left - (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toFloat)((0,_style__WEBPACK_IMPORTED_MODULE_1__.css)(element, 'marginLeft')),
    };
}

function offsetPosition(element) {
    const offset = [0, 0];

    element = (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNode)(element);

    do {
        offset[0] += element.offsetTop;
        offset[1] += element.offsetLeft;

        if ((0,_style__WEBPACK_IMPORTED_MODULE_1__.css)(element, 'position') === 'fixed') {
            const win = (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toWindow)(element);
            offset[0] += win.scrollY;
            offset[1] += win.scrollX;
            return offset;
        }
    } while ((element = element.offsetParent));

    return offset;
}

const height = dimension('height');
const width = dimension('width');

function dimension(prop) {
    const propName = (0,_lang__WEBPACK_IMPORTED_MODULE_0__.ucfirst)(prop);
    return (element, value) => {
        if ((0,_lang__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(value)) {
            if ((0,_lang__WEBPACK_IMPORTED_MODULE_0__.isWindow)(element)) {
                return element[`inner${propName}`];
            }

            if ((0,_lang__WEBPACK_IMPORTED_MODULE_0__.isDocument)(element)) {
                const doc = element.documentElement;
                return Math.max(doc[`offset${propName}`], doc[`scroll${propName}`]);
            }

            element = (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNode)(element);

            value = (0,_style__WEBPACK_IMPORTED_MODULE_1__.css)(element, prop);
            value = value === 'auto' ? element[`offset${propName}`] : (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toFloat)(value) || 0;

            return value - boxModelAdjust(element, prop);
        } else {
            return (0,_style__WEBPACK_IMPORTED_MODULE_1__.css)(
                element,
                prop,
                !value && value !== 0 ? '' : +value + boxModelAdjust(element, prop) + 'px'
            );
        }
    };
}

function boxModelAdjust(element, prop, sizing = 'border-box') {
    return (0,_style__WEBPACK_IMPORTED_MODULE_1__.css)(element, 'boxSizing') === sizing
        ? dirs[prop]
              .map(_lang__WEBPACK_IMPORTED_MODULE_0__.ucfirst)
              .reduce(
                  (value, prop) =>
                      value +
                      (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toFloat)((0,_style__WEBPACK_IMPORTED_MODULE_1__.css)(element, `padding${prop}`)) +
                      (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toFloat)((0,_style__WEBPACK_IMPORTED_MODULE_1__.css)(element, `border${prop}Width`)),
                  0
              )
        : 0;
}

function flipPosition(pos) {
    for (const dir in dirs) {
        for (const i in dirs[dir]) {
            if (dirs[dir][i] === pos) {
                return dirs[dir][1 - i];
            }
        }
    }
    return pos;
}

function toPx(value, property = 'width', element = window, offsetDim = false) {
    if (!(0,_lang__WEBPACK_IMPORTED_MODULE_0__.isString)(value)) {
        return (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toFloat)(value);
    }

    return parseCalc(value).reduce((result, value) => {
        const unit = parseUnit(value);
        if (unit) {
            value = percent(
                unit === 'vh'
                    ? height((0,_lang__WEBPACK_IMPORTED_MODULE_0__.toWindow)(element))
                    : unit === 'vw'
                    ? width((0,_lang__WEBPACK_IMPORTED_MODULE_0__.toWindow)(element))
                    : offsetDim
                    ? element[`offset${(0,_lang__WEBPACK_IMPORTED_MODULE_0__.ucfirst)(property)}`]
                    : dimensions(element)[property],
                value
            );
        }

        return result + (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toFloat)(value);
    }, 0);
}

const calcRe = /-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g;
const parseCalc = (0,_lang__WEBPACK_IMPORTED_MODULE_0__.memoize)((calc) => calc.toString().replace(/\s/g, '').match(calcRe) || []);
const unitRe = /(?:v[hw]|%)$/;
const parseUnit = (0,_lang__WEBPACK_IMPORTED_MODULE_0__.memoize)((str) => (str.match(unitRe) || [])[0]);

function percent(base, value) {
    return (base * (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toFloat)(value)) / 100;
}


/***/ }),

/***/ "./node_modules/uikit/src/js/util/dom.js":
/*!***********************************************!*\
  !*** ./node_modules/uikit/src/js/util/dom.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ $),
/* harmony export */   "$$": () => (/* binding */ $$),
/* harmony export */   "after": () => (/* binding */ after),
/* harmony export */   "append": () => (/* binding */ append),
/* harmony export */   "apply": () => (/* binding */ apply),
/* harmony export */   "before": () => (/* binding */ before),
/* harmony export */   "empty": () => (/* binding */ empty),
/* harmony export */   "fragment": () => (/* binding */ fragment),
/* harmony export */   "html": () => (/* binding */ html),
/* harmony export */   "isTag": () => (/* binding */ isTag),
/* harmony export */   "prepend": () => (/* binding */ prepend),
/* harmony export */   "ready": () => (/* binding */ ready),
/* harmony export */   "remove": () => (/* binding */ remove),
/* harmony export */   "unwrap": () => (/* binding */ unwrap),
/* harmony export */   "wrapAll": () => (/* binding */ wrapAll),
/* harmony export */   "wrapInner": () => (/* binding */ wrapInner)
/* harmony export */ });
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event */ "./node_modules/uikit/src/js/util/event.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter */ "./node_modules/uikit/src/js/util/filter.js");
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selector */ "./node_modules/uikit/src/js/util/selector.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang */ "./node_modules/uikit/src/js/util/lang.js");





function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
        return;
    }

    (0,_event__WEBPACK_IMPORTED_MODULE_0__.once)(document, 'DOMContentLoaded', fn);
}

function isTag(element, tagName) {
    return element?.tagName?.toLowerCase() === tagName.toLowerCase();
}

function empty(element) {
    element = $(element);
    element.innerHTML = '';
    return element;
}

function html(parent, html) {
    return (0,_lang__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(html) ? $(parent).innerHTML : append(empty(parent), html);
}

const prepend = applyFn('prepend');
const append = applyFn('append');
const before = applyFn('before');
const after = applyFn('after');

function applyFn(fn) {
    return function (ref, element) {
        const nodes = (0,_lang__WEBPACK_IMPORTED_MODULE_1__.toNodes)((0,_lang__WEBPACK_IMPORTED_MODULE_1__.isString)(element) ? fragment(element) : element);
        $(ref)?.[fn](...nodes);
        return unwrapSingle(nodes);
    };
}

function remove(element) {
    (0,_lang__WEBPACK_IMPORTED_MODULE_1__.toNodes)(element).forEach((element) => element.remove());
}

function wrapAll(element, structure) {
    structure = (0,_lang__WEBPACK_IMPORTED_MODULE_1__.toNode)(before(element, structure));

    while (structure.firstChild) {
        structure = structure.firstChild;
    }

    append(structure, element);

    return structure;
}

function wrapInner(element, structure) {
    return (0,_lang__WEBPACK_IMPORTED_MODULE_1__.toNodes)(
        (0,_lang__WEBPACK_IMPORTED_MODULE_1__.toNodes)(element).map((element) =>
            element.hasChildNodes()
                ? wrapAll((0,_lang__WEBPACK_IMPORTED_MODULE_1__.toNodes)(element.childNodes), structure)
                : append(element, structure)
        )
    );
}

function unwrap(element) {
    (0,_lang__WEBPACK_IMPORTED_MODULE_1__.toNodes)(element)
        .map(_filter__WEBPACK_IMPORTED_MODULE_2__.parent)
        .filter((value, index, self) => self.indexOf(value) === index)
        .forEach((parent) => parent.replaceWith(...parent.childNodes));
}

const fragmentRe = /^\s*<(\w+|!)[^>]*>/;
const singleTagRe = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;

function fragment(html) {
    const matches = singleTagRe.exec(html);
    if (matches) {
        return document.createElement(matches[1]);
    }

    const container = document.createElement('div');
    if (fragmentRe.test(html)) {
        container.insertAdjacentHTML('beforeend', html.trim());
    } else {
        container.textContent = html;
    }

    return unwrapSingle(container.childNodes);
}

function unwrapSingle(nodes) {
    return nodes.length > 1 ? nodes : nodes[0];
}

function apply(node, fn) {
    if (!(0,_lang__WEBPACK_IMPORTED_MODULE_1__.isElement)(node)) {
        return;
    }

    fn(node);
    node = node.firstElementChild;
    while (node) {
        const next = node.nextElementSibling;
        apply(node, fn);
        node = next;
    }
}

function $(selector, context) {
    return isHtml(selector) ? (0,_lang__WEBPACK_IMPORTED_MODULE_1__.toNode)(fragment(selector)) : (0,_selector__WEBPACK_IMPORTED_MODULE_3__.find)(selector, context);
}

function $$(selector, context) {
    return isHtml(selector) ? (0,_lang__WEBPACK_IMPORTED_MODULE_1__.toNodes)(fragment(selector)) : (0,_selector__WEBPACK_IMPORTED_MODULE_3__.findAll)(selector, context);
}

function isHtml(str) {
    return (0,_lang__WEBPACK_IMPORTED_MODULE_1__.isString)(str) && (0,_lang__WEBPACK_IMPORTED_MODULE_1__.startsWith)(str.trim(), '<');
}


/***/ }),

/***/ "./node_modules/uikit/src/js/util/env.js":
/*!***********************************************!*\
  !*** ./node_modules/uikit/src/js/util/env.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasTouch": () => (/* binding */ hasTouch),
/* harmony export */   "inBrowser": () => (/* binding */ inBrowser),
/* harmony export */   "isRtl": () => (/* binding */ isRtl),
/* harmony export */   "pointerCancel": () => (/* binding */ pointerCancel),
/* harmony export */   "pointerDown": () => (/* binding */ pointerDown),
/* harmony export */   "pointerEnter": () => (/* binding */ pointerEnter),
/* harmony export */   "pointerLeave": () => (/* binding */ pointerLeave),
/* harmony export */   "pointerMove": () => (/* binding */ pointerMove),
/* harmony export */   "pointerUp": () => (/* binding */ pointerUp)
/* harmony export */ });
/* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attr */ "./node_modules/uikit/src/js/util/attr.js");


const inBrowser = typeof window !== 'undefined';
const isRtl = inBrowser && (0,_attr__WEBPACK_IMPORTED_MODULE_0__.attr)(document.documentElement, 'dir') === 'rtl';

const hasTouch = inBrowser && 'ontouchstart' in window;
const hasPointerEvents = inBrowser && window.PointerEvent;

const pointerDown = hasPointerEvents ? 'pointerdown' : hasTouch ? 'touchstart' : 'mousedown';
const pointerMove = hasPointerEvents ? 'pointermove' : hasTouch ? 'touchmove' : 'mousemove';
const pointerUp = hasPointerEvents ? 'pointerup' : hasTouch ? 'touchend' : 'mouseup';
const pointerEnter = hasPointerEvents ? 'pointerenter' : hasTouch ? '' : 'mouseenter';
const pointerLeave = hasPointerEvents ? 'pointerleave' : hasTouch ? '' : 'mouseleave';
const pointerCancel = hasPointerEvents ? 'pointercancel' : 'touchcancel';


/***/ }),

/***/ "./node_modules/uikit/src/js/util/event.js":
/*!*************************************************!*\
  !*** ./node_modules/uikit/src/js/util/event.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createEvent": () => (/* binding */ createEvent),
/* harmony export */   "getEventPos": () => (/* binding */ getEventPos),
/* harmony export */   "isTouch": () => (/* binding */ isTouch),
/* harmony export */   "off": () => (/* binding */ off),
/* harmony export */   "on": () => (/* binding */ on),
/* harmony export */   "once": () => (/* binding */ once),
/* harmony export */   "toEventTargets": () => (/* binding */ toEventTargets),
/* harmony export */   "trigger": () => (/* binding */ trigger)
/* harmony export */ });
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selector */ "./node_modules/uikit/src/js/util/selector.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter */ "./node_modules/uikit/src/js/util/filter.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang */ "./node_modules/uikit/src/js/util/lang.js");




function on(...args) {
    let [targets, types, selector, listener, useCapture = false] = getArgs(args);

    if (listener.length > 1) {
        listener = detail(listener);
    }

    if (useCapture?.self) {
        listener = selfFilter(listener);
    }

    if (selector) {
        listener = delegate(selector, listener);
    }

    for (const type of types) {
        for (const target of targets) {
            target.addEventListener(type, listener, useCapture);
        }
    }

    return () => off(targets, types, listener, useCapture);
}

function off(...args) {
    let [targets, types, , listener, useCapture = false] = getArgs(args);
    for (const type of types) {
        for (const target of targets) {
            target.removeEventListener(type, listener, useCapture);
        }
    }
}

function once(...args) {
    const [element, types, selector, listener, useCapture = false, condition] = getArgs(args);
    const off = on(
        element,
        types,
        selector,
        (e) => {
            const result = !condition || condition(e);
            if (result) {
                off();
                listener(e, result);
            }
        },
        useCapture
    );

    return off;
}

function trigger(targets, event, detail) {
    return toEventTargets(targets).every((target) =>
        target.dispatchEvent(createEvent(event, true, true, detail))
    );
}

function createEvent(e, bubbles = true, cancelable = false, detail) {
    if ((0,_lang__WEBPACK_IMPORTED_MODULE_0__.isString)(e)) {
        e = new CustomEvent(e, { bubbles, cancelable, detail });
    }

    return e;
}

function getArgs(args) {
    // Event targets
    args[0] = toEventTargets(args[0]);

    // Event types
    if ((0,_lang__WEBPACK_IMPORTED_MODULE_0__.isString)(args[1])) {
        args[1] = args[1].split(' ');
    }

    // Delegate?
    if ((0,_lang__WEBPACK_IMPORTED_MODULE_0__.isFunction)(args[2])) {
        args.splice(2, 0, false);
    }

    return args;
}

function delegate(selector, listener) {
    return (e) => {
        const current =
            selector[0] === '>'
                ? (0,_selector__WEBPACK_IMPORTED_MODULE_1__.findAll)(selector, e.currentTarget)
                      .reverse()
                      .filter((element) => (0,_filter__WEBPACK_IMPORTED_MODULE_2__.within)(e.target, element))[0]
                : (0,_filter__WEBPACK_IMPORTED_MODULE_2__.closest)(e.target, selector);

        if (current) {
            e.current = current;
            listener.call(this, e);
        }
    };
}

function detail(listener) {
    return (e) => ((0,_lang__WEBPACK_IMPORTED_MODULE_0__.isArray)(e.detail) ? listener(e, ...e.detail) : listener(e));
}

function selfFilter(listener) {
    return function (e) {
        if (e.target === e.currentTarget || e.target === e.current) {
            return listener.call(null, e);
        }
    };
}

function isEventTarget(target) {
    return target && 'addEventListener' in target;
}

function toEventTarget(target) {
    return isEventTarget(target) ? target : (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNode)(target);
}

function toEventTargets(target) {
    return (0,_lang__WEBPACK_IMPORTED_MODULE_0__.isArray)(target)
        ? target.map(toEventTarget).filter(Boolean)
        : (0,_lang__WEBPACK_IMPORTED_MODULE_0__.isString)(target)
        ? (0,_selector__WEBPACK_IMPORTED_MODULE_1__.findAll)(target)
        : isEventTarget(target)
        ? [target]
        : (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNodes)(target);
}

function isTouch(e) {
    return e.pointerType === 'touch' || !!e.touches;
}

function getEventPos(e) {
    const { clientX: x, clientY: y } = e.touches?.[0] || e.changedTouches?.[0] || e;

    return { x, y };
}


/***/ }),

/***/ "./node_modules/uikit/src/js/util/fastdom.js":
/*!***************************************************!*\
  !*** ./node_modules/uikit/src/js/util/fastdom.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fastdom": () => (/* binding */ fastdom)
/* harmony export */ });
/*
    Based on:
    Copyright (c) 2016 Wilson Page wilsonpage@me.com
    https://github.com/wilsonpage/fastdom
*/

const fastdom = {
    reads: [],
    writes: [],

    read(task) {
        this.reads.push(task);
        scheduleFlush();
        return task;
    },

    write(task) {
        this.writes.push(task);
        scheduleFlush();
        return task;
    },

    clear(task) {
        remove(this.reads, task);
        remove(this.writes, task);
    },

    flush,
};

function flush(recursion) {
    runTasks(fastdom.reads);
    runTasks(fastdom.writes.splice(0));

    fastdom.scheduled = false;

    if (fastdom.reads.length || fastdom.writes.length) {
        scheduleFlush(recursion + 1);
    }
}

const RECURSION_LIMIT = 4;
function scheduleFlush(recursion) {
    if (fastdom.scheduled) {
        return;
    }

    fastdom.scheduled = true;
    if (recursion && recursion < RECURSION_LIMIT) {
        Promise.resolve().then(() => flush(recursion));
    } else {
        requestAnimationFrame(() => flush(1));
    }
}

function runTasks(tasks) {
    let task;
    while ((task = tasks.shift())) {
        try {
            task();
        } catch (e) {
            console.error(e);
        }
    }
}

function remove(array, item) {
    const index = array.indexOf(item);
    return ~index && array.splice(index, 1);
}


/***/ }),

/***/ "./node_modules/uikit/src/js/util/filter.js":
/*!**************************************************!*\
  !*** ./node_modules/uikit/src/js/util/filter.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "children": () => (/* binding */ children),
/* harmony export */   "closest": () => (/* binding */ closest),
/* harmony export */   "filter": () => (/* binding */ filter),
/* harmony export */   "index": () => (/* binding */ index),
/* harmony export */   "isFocusable": () => (/* binding */ isFocusable),
/* harmony export */   "isInput": () => (/* binding */ isInput),
/* harmony export */   "isVisible": () => (/* binding */ isVisible),
/* harmony export */   "isVoidElement": () => (/* binding */ isVoidElement),
/* harmony export */   "matches": () => (/* binding */ matches),
/* harmony export */   "parent": () => (/* binding */ parent),
/* harmony export */   "parents": () => (/* binding */ parents),
/* harmony export */   "selFocusable": () => (/* binding */ selFocusable),
/* harmony export */   "selInput": () => (/* binding */ selInput),
/* harmony export */   "within": () => (/* binding */ within)
/* harmony export */ });
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang */ "./node_modules/uikit/src/js/util/lang.js");


const voidElements = {
    area: true,
    base: true,
    br: true,
    col: true,
    embed: true,
    hr: true,
    img: true,
    input: true,
    keygen: true,
    link: true,
    menuitem: true,
    meta: true,
    param: true,
    source: true,
    track: true,
    wbr: true,
};
function isVoidElement(element) {
    return (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNodes)(element).some((element) => voidElements[element.tagName.toLowerCase()]);
}

function isVisible(element) {
    return (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNodes)(element).some(
        (element) => element.offsetWidth || element.offsetHeight || element.getClientRects().length
    );
}

const selInput = 'input,select,textarea,button';
function isInput(element) {
    return (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNodes)(element).some((element) => matches(element, selInput));
}

const selFocusable = `${selInput},a[href],[tabindex]`;
function isFocusable(element) {
    return matches(element, selFocusable);
}

function parent(element) {
    return (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNode)(element)?.parentElement;
}

function filter(element, selector) {
    return (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNodes)(element).filter((element) => matches(element, selector));
}

function matches(element, selector) {
    return (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNodes)(element).some((element) => element.matches(selector));
}

function closest(element, selector) {
    if ((0,_lang__WEBPACK_IMPORTED_MODULE_0__.startsWith)(selector, '>')) {
        selector = selector.slice(1);
    }

    return (0,_lang__WEBPACK_IMPORTED_MODULE_0__.isElement)(element)
        ? element.closest(selector)
        : (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNodes)(element)
              .map((element) => closest(element, selector))
              .filter(Boolean);
}

function within(element, selector) {
    return (0,_lang__WEBPACK_IMPORTED_MODULE_0__.isString)(selector)
        ? matches(element, selector) || !!closest(element, selector)
        : element === selector || (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNode)(selector).contains((0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNode)(element));
}

function parents(element, selector) {
    const elements = [];

    while ((element = parent(element))) {
        if (!selector || matches(element, selector)) {
            elements.push(element);
        }
    }

    return elements;
}

function children(element, selector) {
    element = (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNode)(element);
    const children = element ? (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNodes)(element.children) : [];
    return selector ? filter(children, selector) : children;
}

function index(element, ref) {
    return ref ? (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNodes)(element).indexOf((0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNode)(ref)) : children(parent(element)).indexOf(element);
}


/***/ }),

/***/ "./node_modules/uikit/src/js/util/index.js":
/*!*************************************************!*\
  !*** ./node_modules/uikit/src/js/util/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_5__.$),
/* harmony export */   "$$": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_5__.$$),
/* harmony export */   "Animation": () => (/* reexport safe */ _animation__WEBPACK_IMPORTED_MODULE_1__.Animation),
/* harmony export */   "Deferred": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.Deferred),
/* harmony export */   "Dimensions": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.Dimensions),
/* harmony export */   "MouseTracker": () => (/* reexport safe */ _mouse__WEBPACK_IMPORTED_MODULE_11__.MouseTracker),
/* harmony export */   "Transition": () => (/* reexport safe */ _animation__WEBPACK_IMPORTED_MODULE_1__.Transition),
/* harmony export */   "addClass": () => (/* reexport safe */ _class__WEBPACK_IMPORTED_MODULE_3__.addClass),
/* harmony export */   "after": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_5__.after),
/* harmony export */   "ajax": () => (/* reexport safe */ _ajax__WEBPACK_IMPORTED_MODULE_0__.ajax),
/* harmony export */   "animate": () => (/* reexport safe */ _animation__WEBPACK_IMPORTED_MODULE_1__.animate),
/* harmony export */   "append": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_5__.append),
/* harmony export */   "apply": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_5__.apply),
/* harmony export */   "assign": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.assign),
/* harmony export */   "attr": () => (/* reexport safe */ _attr__WEBPACK_IMPORTED_MODULE_2__.attr),
/* harmony export */   "before": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_5__.before),
/* harmony export */   "boxModelAdjust": () => (/* reexport safe */ _dimensions__WEBPACK_IMPORTED_MODULE_4__.boxModelAdjust),
/* harmony export */   "camelize": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.camelize),
/* harmony export */   "children": () => (/* reexport safe */ _filter__WEBPACK_IMPORTED_MODULE_9__.children),
/* harmony export */   "clamp": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.clamp),
/* harmony export */   "closest": () => (/* reexport safe */ _filter__WEBPACK_IMPORTED_MODULE_9__.closest),
/* harmony export */   "createEvent": () => (/* reexport safe */ _event__WEBPACK_IMPORTED_MODULE_7__.createEvent),
/* harmony export */   "css": () => (/* reexport safe */ _style__WEBPACK_IMPORTED_MODULE_17__.css),
/* harmony export */   "data": () => (/* reexport safe */ _attr__WEBPACK_IMPORTED_MODULE_2__.data),
/* harmony export */   "dimensions": () => (/* reexport safe */ _dimensions__WEBPACK_IMPORTED_MODULE_4__.dimensions),
/* harmony export */   "each": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.each),
/* harmony export */   "empty": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_5__.empty),
/* harmony export */   "endsWith": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.endsWith),
/* harmony export */   "escape": () => (/* reexport safe */ _selector__WEBPACK_IMPORTED_MODULE_16__.escape),
/* harmony export */   "fastdom": () => (/* reexport safe */ _fastdom__WEBPACK_IMPORTED_MODULE_8__.fastdom),
/* harmony export */   "filter": () => (/* reexport safe */ _filter__WEBPACK_IMPORTED_MODULE_9__.filter),
/* harmony export */   "find": () => (/* reexport safe */ _selector__WEBPACK_IMPORTED_MODULE_16__.find),
/* harmony export */   "findAll": () => (/* reexport safe */ _selector__WEBPACK_IMPORTED_MODULE_16__.findAll),
/* harmony export */   "findIndex": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.findIndex),
/* harmony export */   "flipPosition": () => (/* reexport safe */ _dimensions__WEBPACK_IMPORTED_MODULE_4__.flipPosition),
/* harmony export */   "fragment": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_5__.fragment),
/* harmony export */   "getCssVar": () => (/* reexport safe */ _style__WEBPACK_IMPORTED_MODULE_17__.getCssVar),
/* harmony export */   "getEventPos": () => (/* reexport safe */ _event__WEBPACK_IMPORTED_MODULE_7__.getEventPos),
/* harmony export */   "getImage": () => (/* reexport safe */ _ajax__WEBPACK_IMPORTED_MODULE_0__.getImage),
/* harmony export */   "getIndex": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.getIndex),
/* harmony export */   "hasAttr": () => (/* reexport safe */ _attr__WEBPACK_IMPORTED_MODULE_2__.hasAttr),
/* harmony export */   "hasClass": () => (/* reexport safe */ _class__WEBPACK_IMPORTED_MODULE_3__.hasClass),
/* harmony export */   "hasOwn": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.hasOwn),
/* harmony export */   "hasTouch": () => (/* reexport safe */ _env__WEBPACK_IMPORTED_MODULE_6__.hasTouch),
/* harmony export */   "height": () => (/* reexport safe */ _dimensions__WEBPACK_IMPORTED_MODULE_4__.height),
/* harmony export */   "html": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_5__.html),
/* harmony export */   "hyphenate": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.hyphenate),
/* harmony export */   "inBrowser": () => (/* reexport safe */ _env__WEBPACK_IMPORTED_MODULE_6__.inBrowser),
/* harmony export */   "includes": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.includes),
/* harmony export */   "index": () => (/* reexport safe */ _filter__WEBPACK_IMPORTED_MODULE_9__.index),
/* harmony export */   "intersectRect": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.intersectRect),
/* harmony export */   "isArray": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.isArray),
/* harmony export */   "isBoolean": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.isBoolean),
/* harmony export */   "isDocument": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.isDocument),
/* harmony export */   "isElement": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.isElement),
/* harmony export */   "isEmpty": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.isEmpty),
/* harmony export */   "isEqual": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.isEqual),
/* harmony export */   "isFocusable": () => (/* reexport safe */ _filter__WEBPACK_IMPORTED_MODULE_9__.isFocusable),
/* harmony export */   "isFunction": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.isFunction),
/* harmony export */   "isInView": () => (/* reexport safe */ _viewport__WEBPACK_IMPORTED_MODULE_18__.isInView),
/* harmony export */   "isInput": () => (/* reexport safe */ _filter__WEBPACK_IMPORTED_MODULE_9__.isInput),
/* harmony export */   "isNode": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.isNode),
/* harmony export */   "isNumber": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.isNumber),
/* harmony export */   "isNumeric": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.isNumeric),
/* harmony export */   "isObject": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.isObject),
/* harmony export */   "isPlainObject": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.isPlainObject),
/* harmony export */   "isRtl": () => (/* reexport safe */ _env__WEBPACK_IMPORTED_MODULE_6__.isRtl),
/* harmony export */   "isString": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.isString),
/* harmony export */   "isTag": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_5__.isTag),
/* harmony export */   "isTouch": () => (/* reexport safe */ _event__WEBPACK_IMPORTED_MODULE_7__.isTouch),
/* harmony export */   "isUndefined": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.isUndefined),
/* harmony export */   "isVideo": () => (/* reexport safe */ _player__WEBPACK_IMPORTED_MODULE_14__.isVideo),
/* harmony export */   "isVisible": () => (/* reexport safe */ _filter__WEBPACK_IMPORTED_MODULE_9__.isVisible),
/* harmony export */   "isVoidElement": () => (/* reexport safe */ _filter__WEBPACK_IMPORTED_MODULE_9__.isVoidElement),
/* harmony export */   "isWindow": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.isWindow),
/* harmony export */   "last": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.last),
/* harmony export */   "matches": () => (/* reexport safe */ _filter__WEBPACK_IMPORTED_MODULE_9__.matches),
/* harmony export */   "memoize": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.memoize),
/* harmony export */   "mergeOptions": () => (/* reexport safe */ _options__WEBPACK_IMPORTED_MODULE_13__.mergeOptions),
/* harmony export */   "mute": () => (/* reexport safe */ _player__WEBPACK_IMPORTED_MODULE_14__.mute),
/* harmony export */   "noop": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.noop),
/* harmony export */   "observeIntersection": () => (/* reexport safe */ _observer__WEBPACK_IMPORTED_MODULE_12__.observeIntersection),
/* harmony export */   "observeMutation": () => (/* reexport safe */ _observer__WEBPACK_IMPORTED_MODULE_12__.observeMutation),
/* harmony export */   "observeResize": () => (/* reexport safe */ _observer__WEBPACK_IMPORTED_MODULE_12__.observeResize),
/* harmony export */   "off": () => (/* reexport safe */ _event__WEBPACK_IMPORTED_MODULE_7__.off),
/* harmony export */   "offset": () => (/* reexport safe */ _dimensions__WEBPACK_IMPORTED_MODULE_4__.offset),
/* harmony export */   "offsetPosition": () => (/* reexport safe */ _dimensions__WEBPACK_IMPORTED_MODULE_4__.offsetPosition),
/* harmony export */   "offsetViewport": () => (/* reexport safe */ _viewport__WEBPACK_IMPORTED_MODULE_18__.offsetViewport),
/* harmony export */   "on": () => (/* reexport safe */ _event__WEBPACK_IMPORTED_MODULE_7__.on),
/* harmony export */   "once": () => (/* reexport safe */ _event__WEBPACK_IMPORTED_MODULE_7__.once),
/* harmony export */   "parent": () => (/* reexport safe */ _filter__WEBPACK_IMPORTED_MODULE_9__.parent),
/* harmony export */   "parents": () => (/* reexport safe */ _filter__WEBPACK_IMPORTED_MODULE_9__.parents),
/* harmony export */   "parseOptions": () => (/* reexport safe */ _options__WEBPACK_IMPORTED_MODULE_13__.parseOptions),
/* harmony export */   "pause": () => (/* reexport safe */ _player__WEBPACK_IMPORTED_MODULE_14__.pause),
/* harmony export */   "play": () => (/* reexport safe */ _player__WEBPACK_IMPORTED_MODULE_14__.play),
/* harmony export */   "pointInRect": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.pointInRect),
/* harmony export */   "pointerCancel": () => (/* reexport safe */ _env__WEBPACK_IMPORTED_MODULE_6__.pointerCancel),
/* harmony export */   "pointerDown": () => (/* reexport safe */ _env__WEBPACK_IMPORTED_MODULE_6__.pointerDown),
/* harmony export */   "pointerEnter": () => (/* reexport safe */ _env__WEBPACK_IMPORTED_MODULE_6__.pointerEnter),
/* harmony export */   "pointerLeave": () => (/* reexport safe */ _env__WEBPACK_IMPORTED_MODULE_6__.pointerLeave),
/* harmony export */   "pointerMove": () => (/* reexport safe */ _env__WEBPACK_IMPORTED_MODULE_6__.pointerMove),
/* harmony export */   "pointerUp": () => (/* reexport safe */ _env__WEBPACK_IMPORTED_MODULE_6__.pointerUp),
/* harmony export */   "position": () => (/* reexport safe */ _dimensions__WEBPACK_IMPORTED_MODULE_4__.position),
/* harmony export */   "positionAt": () => (/* reexport safe */ _position__WEBPACK_IMPORTED_MODULE_15__.positionAt),
/* harmony export */   "prepend": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_5__.prepend),
/* harmony export */   "propName": () => (/* reexport safe */ _style__WEBPACK_IMPORTED_MODULE_17__.propName),
/* harmony export */   "query": () => (/* reexport safe */ _selector__WEBPACK_IMPORTED_MODULE_16__.query),
/* harmony export */   "queryAll": () => (/* reexport safe */ _selector__WEBPACK_IMPORTED_MODULE_16__.queryAll),
/* harmony export */   "ready": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_5__.ready),
/* harmony export */   "remove": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_5__.remove),
/* harmony export */   "removeAttr": () => (/* reexport safe */ _attr__WEBPACK_IMPORTED_MODULE_2__.removeAttr),
/* harmony export */   "removeClass": () => (/* reexport safe */ _class__WEBPACK_IMPORTED_MODULE_3__.removeClass),
/* harmony export */   "removeClasses": () => (/* reexport safe */ _class__WEBPACK_IMPORTED_MODULE_3__.removeClasses),
/* harmony export */   "replaceClass": () => (/* reexport safe */ _class__WEBPACK_IMPORTED_MODULE_3__.replaceClass),
/* harmony export */   "scrollIntoView": () => (/* reexport safe */ _viewport__WEBPACK_IMPORTED_MODULE_18__.scrollIntoView),
/* harmony export */   "scrollParents": () => (/* reexport safe */ _viewport__WEBPACK_IMPORTED_MODULE_18__.scrollParents),
/* harmony export */   "scrollTop": () => (/* reexport safe */ _viewport__WEBPACK_IMPORTED_MODULE_18__.scrollTop),
/* harmony export */   "scrolledOver": () => (/* reexport safe */ _viewport__WEBPACK_IMPORTED_MODULE_18__.scrolledOver),
/* harmony export */   "selFocusable": () => (/* reexport safe */ _filter__WEBPACK_IMPORTED_MODULE_9__.selFocusable),
/* harmony export */   "selInput": () => (/* reexport safe */ _filter__WEBPACK_IMPORTED_MODULE_9__.selInput),
/* harmony export */   "sortBy": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.sortBy),
/* harmony export */   "startsWith": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.startsWith),
/* harmony export */   "swap": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.swap),
/* harmony export */   "toArray": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.toArray),
/* harmony export */   "toBoolean": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.toBoolean),
/* harmony export */   "toEventTargets": () => (/* reexport safe */ _event__WEBPACK_IMPORTED_MODULE_7__.toEventTargets),
/* harmony export */   "toFloat": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.toFloat),
/* harmony export */   "toNode": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.toNode),
/* harmony export */   "toNodes": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.toNodes),
/* harmony export */   "toNumber": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.toNumber),
/* harmony export */   "toPx": () => (/* reexport safe */ _dimensions__WEBPACK_IMPORTED_MODULE_4__.toPx),
/* harmony export */   "toWindow": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.toWindow),
/* harmony export */   "toggleClass": () => (/* reexport safe */ _class__WEBPACK_IMPORTED_MODULE_3__.toggleClass),
/* harmony export */   "transition": () => (/* reexport safe */ _animation__WEBPACK_IMPORTED_MODULE_1__.transition),
/* harmony export */   "trigger": () => (/* reexport safe */ _event__WEBPACK_IMPORTED_MODULE_7__.trigger),
/* harmony export */   "ucfirst": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.ucfirst),
/* harmony export */   "uniqueBy": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.uniqueBy),
/* harmony export */   "unwrap": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_5__.unwrap),
/* harmony export */   "width": () => (/* reexport safe */ _dimensions__WEBPACK_IMPORTED_MODULE_4__.width),
/* harmony export */   "within": () => (/* reexport safe */ _filter__WEBPACK_IMPORTED_MODULE_9__.within),
/* harmony export */   "wrapAll": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_5__.wrapAll),
/* harmony export */   "wrapInner": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_5__.wrapInner)
/* harmony export */ });
/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajax */ "./node_modules/uikit/src/js/util/ajax.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation */ "./node_modules/uikit/src/js/util/animation.js");
/* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attr */ "./node_modules/uikit/src/js/util/attr.js");
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./class */ "./node_modules/uikit/src/js/util/class.js");
/* harmony import */ var _dimensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dimensions */ "./node_modules/uikit/src/js/util/dimensions.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom */ "./node_modules/uikit/src/js/util/dom.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./env */ "./node_modules/uikit/src/js/util/env.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./event */ "./node_modules/uikit/src/js/util/event.js");
/* harmony import */ var _fastdom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fastdom */ "./node_modules/uikit/src/js/util/fastdom.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filter */ "./node_modules/uikit/src/js/util/filter.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lang */ "./node_modules/uikit/src/js/util/lang.js");
/* harmony import */ var _mouse__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mouse */ "./node_modules/uikit/src/js/util/mouse.js");
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./observer */ "./node_modules/uikit/src/js/util/observer.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./options */ "./node_modules/uikit/src/js/util/options.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./player */ "./node_modules/uikit/src/js/util/player.js");
/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./position */ "./node_modules/uikit/src/js/util/position.js");
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./selector */ "./node_modules/uikit/src/js/util/selector.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./style */ "./node_modules/uikit/src/js/util/style.js");
/* harmony import */ var _viewport__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./viewport */ "./node_modules/uikit/src/js/util/viewport.js");





















/***/ }),

/***/ "./node_modules/uikit/src/js/util/lang.js":
/*!************************************************!*\
  !*** ./node_modules/uikit/src/js/util/lang.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Deferred": () => (/* binding */ Deferred),
/* harmony export */   "Dimensions": () => (/* binding */ Dimensions),
/* harmony export */   "assign": () => (/* binding */ assign),
/* harmony export */   "camelize": () => (/* binding */ camelize),
/* harmony export */   "clamp": () => (/* binding */ clamp),
/* harmony export */   "each": () => (/* binding */ each),
/* harmony export */   "endsWith": () => (/* binding */ endsWith),
/* harmony export */   "findIndex": () => (/* binding */ findIndex),
/* harmony export */   "getIndex": () => (/* binding */ getIndex),
/* harmony export */   "hasOwn": () => (/* binding */ hasOwn),
/* harmony export */   "hyphenate": () => (/* binding */ hyphenate),
/* harmony export */   "includes": () => (/* binding */ includes),
/* harmony export */   "intersectRect": () => (/* binding */ intersectRect),
/* harmony export */   "isArray": () => (/* binding */ isArray),
/* harmony export */   "isBoolean": () => (/* binding */ isBoolean),
/* harmony export */   "isDocument": () => (/* binding */ isDocument),
/* harmony export */   "isElement": () => (/* binding */ isElement),
/* harmony export */   "isEmpty": () => (/* binding */ isEmpty),
/* harmony export */   "isEqual": () => (/* binding */ isEqual),
/* harmony export */   "isFunction": () => (/* binding */ isFunction),
/* harmony export */   "isNode": () => (/* binding */ isNode),
/* harmony export */   "isNumber": () => (/* binding */ isNumber),
/* harmony export */   "isNumeric": () => (/* binding */ isNumeric),
/* harmony export */   "isObject": () => (/* binding */ isObject),
/* harmony export */   "isPlainObject": () => (/* binding */ isPlainObject),
/* harmony export */   "isString": () => (/* binding */ isString),
/* harmony export */   "isUndefined": () => (/* binding */ isUndefined),
/* harmony export */   "isWindow": () => (/* binding */ isWindow),
/* harmony export */   "last": () => (/* binding */ last),
/* harmony export */   "memoize": () => (/* binding */ memoize),
/* harmony export */   "noop": () => (/* binding */ noop),
/* harmony export */   "pointInRect": () => (/* binding */ pointInRect),
/* harmony export */   "sortBy": () => (/* binding */ sortBy),
/* harmony export */   "startsWith": () => (/* binding */ startsWith),
/* harmony export */   "swap": () => (/* binding */ swap),
/* harmony export */   "toArray": () => (/* binding */ toArray),
/* harmony export */   "toBoolean": () => (/* binding */ toBoolean),
/* harmony export */   "toFloat": () => (/* binding */ toFloat),
/* harmony export */   "toNode": () => (/* binding */ toNode),
/* harmony export */   "toNodes": () => (/* binding */ toNodes),
/* harmony export */   "toNumber": () => (/* binding */ toNumber),
/* harmony export */   "toWindow": () => (/* binding */ toWindow),
/* harmony export */   "ucfirst": () => (/* binding */ ucfirst),
/* harmony export */   "uniqueBy": () => (/* binding */ uniqueBy)
/* harmony export */ });
const { hasOwnProperty, toString } = Object.prototype;

function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
}

const hyphenateRe = /\B([A-Z])/g;

const hyphenate = memoize((str) => str.replace(hyphenateRe, '-$1').toLowerCase());

const camelizeRe = /-(\w)/g;

const camelize = memoize((str) => str.replace(camelizeRe, toUpper));

const ucfirst = memoize((str) =>
    str.length ? toUpper(null, str.charAt(0)) + str.slice(1) : ''
);

function toUpper(_, c) {
    return c ? c.toUpperCase() : '';
}

function startsWith(str, search) {
    return str?.startsWith?.(search);
}

function endsWith(str, search) {
    return str?.endsWith?.(search);
}

function includes(obj, search) {
    return obj?.includes?.(search);
}

function findIndex(array, predicate) {
    return array?.findIndex?.(predicate);
}

const { isArray, from: toArray } = Array;
const { assign } = Object;

function isFunction(obj) {
    return typeof obj === 'function';
}

function isObject(obj) {
    return obj !== null && typeof obj === 'object';
}

function isPlainObject(obj) {
    return toString.call(obj) === '[object Object]';
}

function isWindow(obj) {
    return isObject(obj) && obj === obj.window;
}

function isDocument(obj) {
    return nodeType(obj) === 9;
}

function isNode(obj) {
    return nodeType(obj) >= 1;
}

function isElement(obj) {
    return nodeType(obj) === 1;
}

function nodeType(obj) {
    return !isWindow(obj) && isObject(obj) && obj.nodeType;
}

function isBoolean(value) {
    return typeof value === 'boolean';
}

function isString(value) {
    return typeof value === 'string';
}

function isNumber(value) {
    return typeof value === 'number';
}

function isNumeric(value) {
    return isNumber(value) || (isString(value) && !isNaN(value - parseFloat(value)));
}

function isEmpty(obj) {
    return !(isArray(obj) ? obj.length : isObject(obj) ? Object.keys(obj).length : false);
}

function isUndefined(value) {
    return value === void 0;
}

function toBoolean(value) {
    return isBoolean(value)
        ? value
        : value === 'true' || value === '1' || value === ''
        ? true
        : value === 'false' || value === '0'
        ? false
        : value;
}

function toNumber(value) {
    const number = Number(value);
    return isNaN(number) ? false : number;
}

function toFloat(value) {
    return parseFloat(value) || 0;
}

function toNode(element) {
    return toNodes(element)[0];
}

function toNodes(element) {
    return (element && (isNode(element) ? [element] : Array.from(element).filter(isNode))) || [];
}

function toWindow(element) {
    if (isWindow(element)) {
        return element;
    }

    element = toNode(element);
    const document = isDocument(element) ? element : element?.ownerDocument;

    return document?.defaultView || window;
}

function isEqual(value, other) {
    return (
        value === other ||
        (isObject(value) &&
            isObject(other) &&
            Object.keys(value).length === Object.keys(other).length &&
            each(value, (val, key) => val === other[key]))
    );
}

function swap(value, a, b) {
    return value.replace(new RegExp(`${a}|${b}`, 'g'), (match) => (match === a ? b : a));
}

function last(array) {
    return array[array.length - 1];
}

function each(obj, cb) {
    for (const key in obj) {
        if (false === cb(obj[key], key)) {
            return false;
        }
    }
    return true;
}

function sortBy(array, prop) {
    return array
        .slice()
        .sort(({ [prop]: propA = 0 }, { [prop]: propB = 0 }) =>
            propA > propB ? 1 : propB > propA ? -1 : 0
        );
}

function uniqueBy(array, prop) {
    const seen = new Set();
    return array.filter(({ [prop]: check }) => (seen.has(check) ? false : seen.add(check)));
}

function clamp(number, min = 0, max = 1) {
    return Math.min(Math.max(toNumber(number) || 0, min), max);
}

function noop() {}

function intersectRect(...rects) {
    return [
        ['bottom', 'top'],
        ['right', 'left'],
    ].every(
        ([minProp, maxProp]) =>
            Math.min(...rects.map(({ [minProp]: min }) => min)) -
                Math.max(...rects.map(({ [maxProp]: max }) => max)) >
            0
    );
}

function pointInRect(point, rect) {
    return (
        point.x <= rect.right &&
        point.x >= rect.left &&
        point.y <= rect.bottom &&
        point.y >= rect.top
    );
}

function ratio(dimensions, prop, value) {
    const aProp = prop === 'width' ? 'height' : 'width';

    return {
        [aProp]: dimensions[prop]
            ? Math.round((value * dimensions[aProp]) / dimensions[prop])
            : dimensions[aProp],
        [prop]: value,
    };
}

function contain(dimensions, maxDimensions) {
    dimensions = { ...dimensions };

    for (const prop in dimensions) {
        dimensions =
            dimensions[prop] > maxDimensions[prop]
                ? ratio(dimensions, prop, maxDimensions[prop])
                : dimensions;
    }

    return dimensions;
}

function cover(dimensions, maxDimensions) {
    dimensions = contain(dimensions, maxDimensions);

    for (const prop in dimensions) {
        dimensions =
            dimensions[prop] < maxDimensions[prop]
                ? ratio(dimensions, prop, maxDimensions[prop])
                : dimensions;
    }

    return dimensions;
}

const Dimensions = { ratio, contain, cover };

function getIndex(i, elements, current = 0, finite = false) {
    elements = toNodes(elements);

    const { length } = elements;

    if (!length) {
        return -1;
    }

    i = isNumeric(i)
        ? toNumber(i)
        : i === 'next'
        ? current + 1
        : i === 'previous'
        ? current - 1
        : elements.indexOf(toNode(i));

    if (finite) {
        return clamp(i, 0, length - 1);
    }

    i %= length;

    return i < 0 ? i + length : i;
}

function memoize(fn) {
    const cache = Object.create(null);
    return (key) => cache[key] || (cache[key] = fn(key));
}

class Deferred {
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.reject = reject;
            this.resolve = resolve;
        });
    }
}


/***/ }),

/***/ "./node_modules/uikit/src/js/util/mouse.js":
/*!*************************************************!*\
  !*** ./node_modules/uikit/src/js/util/mouse.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MouseTracker": () => (/* binding */ MouseTracker)
/* harmony export */ });
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event */ "./node_modules/uikit/src/js/util/event.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang */ "./node_modules/uikit/src/js/util/lang.js");



function MouseTracker() {}

MouseTracker.prototype = {
    positions: [],

    init() {
        this.positions = [];

        let position;
        this.unbind = (0,_event__WEBPACK_IMPORTED_MODULE_0__.on)(document, 'mousemove', (e) => (position = (0,_event__WEBPACK_IMPORTED_MODULE_0__.getEventPos)(e)));
        this.interval = setInterval(() => {
            if (!position) {
                return;
            }

            this.positions.push(position);

            if (this.positions.length > 5) {
                this.positions.shift();
            }
        }, 50);
    },

    cancel() {
        this.unbind?.();
        this.interval && clearInterval(this.interval);
    },

    movesTo(target) {
        if (this.positions.length < 2) {
            return false;
        }

        const p = target.getBoundingClientRect();
        const { left, right, top, bottom } = p;

        const [prevPosition] = this.positions;
        const position = (0,_lang__WEBPACK_IMPORTED_MODULE_1__.last)(this.positions);
        const path = [prevPosition, position];

        if ((0,_lang__WEBPACK_IMPORTED_MODULE_1__.pointInRect)(position, p)) {
            return false;
        }

        const diagonals = [
            [
                { x: left, y: top },
                { x: right, y: bottom },
            ],
            [
                { x: left, y: bottom },
                { x: right, y: top },
            ],
        ];

        return diagonals.some((diagonal) => {
            const intersection = intersect(path, diagonal);
            return intersection && (0,_lang__WEBPACK_IMPORTED_MODULE_1__.pointInRect)(intersection, p);
        });
    },
};

// Inspired by http://paulbourke.net/geometry/pointlineplane/
function intersect([{ x: x1, y: y1 }, { x: x2, y: y2 }], [{ x: x3, y: y3 }, { x: x4, y: y4 }]) {
    const denominator = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);

    // Lines are parallel
    if (denominator === 0) {
        return false;
    }

    const ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator;

    if (ua < 0) {
        return false;
    }

    // Return an object with the x and y coordinates of the intersection
    return { x: x1 + ua * (x2 - x1), y: y1 + ua * (y2 - y1) };
}


/***/ }),

/***/ "./node_modules/uikit/src/js/util/observer.js":
/*!****************************************************!*\
  !*** ./node_modules/uikit/src/js/util/observer.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "observeIntersection": () => (/* binding */ observeIntersection),
/* harmony export */   "observeMutation": () => (/* binding */ observeMutation),
/* harmony export */   "observeResize": () => (/* binding */ observeResize)
/* harmony export */ });
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event */ "./node_modules/uikit/src/js/util/event.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang */ "./node_modules/uikit/src/js/util/lang.js");
/* harmony import */ var _fastdom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fastdom */ "./node_modules/uikit/src/js/util/fastdom.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./env */ "./node_modules/uikit/src/js/util/env.js");





function observeIntersection(targets, cb, options, intersecting = true) {
    const observer = new IntersectionObserver(
        intersecting
            ? (entries, observer) => {
                  if (entries.some((entry) => entry.isIntersecting)) {
                      cb(entries, observer);
                  }
              }
            : cb,
        options
    );
    for (const el of (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNodes)(targets)) {
        observer.observe(el);
    }

    return observer;
}

const hasResizeObserver = _env__WEBPACK_IMPORTED_MODULE_1__.inBrowser && window.ResizeObserver;
function observeResize(targets, cb, options = { box: 'border-box' }) {
    if (hasResizeObserver) {
        return observe(ResizeObserver, targets, cb, options);
    }

    // Fallback Safari < 13.1
    initResizeListener();
    listeners.add(cb);

    return {
        disconnect() {
            listeners.delete(cb);
        },
    };
}

let listeners;
function initResizeListener() {
    if (listeners) {
        return;
    }

    listeners = new Set();

    // throttle 'resize'
    let pendingResize;
    const handleResize = () => {
        if (pendingResize) {
            return;
        }
        pendingResize = true;
        _fastdom__WEBPACK_IMPORTED_MODULE_2__.fastdom.read(() => (pendingResize = false));
        for (const listener of listeners) {
            listener();
        }
    };

    (0,_event__WEBPACK_IMPORTED_MODULE_3__.on)(window, 'load resize', handleResize);
    (0,_event__WEBPACK_IMPORTED_MODULE_3__.on)(document, 'loadedmetadata load', handleResize, true);
}

function observeMutation(targets, cb, options) {
    return observe(MutationObserver, targets, cb, options);
}

function observe(Observer, targets, cb, options) {
    const observer = new Observer(cb);
    for (const el of (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNodes)(targets)) {
        observer.observe(el, options);
    }

    return observer;
}


/***/ }),

/***/ "./node_modules/uikit/src/js/util/options.js":
/*!***************************************************!*\
  !*** ./node_modules/uikit/src/js/util/options.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mergeOptions": () => (/* binding */ mergeOptions),
/* harmony export */   "parseOptions": () => (/* binding */ parseOptions)
/* harmony export */ });
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang */ "./node_modules/uikit/src/js/util/lang.js");


const strats = {};

strats.events =
    strats.created =
    strats.beforeConnect =
    strats.connected =
    strats.beforeDisconnect =
    strats.disconnected =
    strats.destroy =
        concatStrat;

// args strategy
strats.args = function (parentVal, childVal) {
    return childVal !== false && concatStrat(childVal || parentVal);
};

// update strategy
strats.update = function (parentVal, childVal) {
    return (0,_lang__WEBPACK_IMPORTED_MODULE_0__.sortBy)(
        concatStrat(parentVal, (0,_lang__WEBPACK_IMPORTED_MODULE_0__.isFunction)(childVal) ? { read: childVal } : childVal),
        'order'
    );
};

// property strategy
strats.props = function (parentVal, childVal) {
    if ((0,_lang__WEBPACK_IMPORTED_MODULE_0__.isArray)(childVal)) {
        const value = {};
        for (const key of childVal) {
            value[key] = String;
        }
        childVal = value;
    }

    return strats.methods(parentVal, childVal);
};

// extend strategy
strats.computed = strats.methods = function (parentVal, childVal) {
    return childVal ? (parentVal ? { ...parentVal, ...childVal } : childVal) : parentVal;
};

// data strategy
strats.data = function (parentVal, childVal, vm) {
    if (!vm) {
        if (!childVal) {
            return parentVal;
        }

        if (!parentVal) {
            return childVal;
        }

        return function (vm) {
            return mergeFnData(parentVal, childVal, vm);
        };
    }

    return mergeFnData(parentVal, childVal, vm);
};

function mergeFnData(parentVal, childVal, vm) {
    return strats.computed(
        (0,_lang__WEBPACK_IMPORTED_MODULE_0__.isFunction)(parentVal) ? parentVal.call(vm, vm) : parentVal,
        (0,_lang__WEBPACK_IMPORTED_MODULE_0__.isFunction)(childVal) ? childVal.call(vm, vm) : childVal
    );
}

// concat strategy
function concatStrat(parentVal, childVal) {
    parentVal = parentVal && !(0,_lang__WEBPACK_IMPORTED_MODULE_0__.isArray)(parentVal) ? [parentVal] : parentVal;

    return childVal
        ? parentVal
            ? parentVal.concat(childVal)
            : (0,_lang__WEBPACK_IMPORTED_MODULE_0__.isArray)(childVal)
            ? childVal
            : [childVal]
        : parentVal;
}

// default strategy
function defaultStrat(parentVal, childVal) {
    return (0,_lang__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(childVal) ? parentVal : childVal;
}

function mergeOptions(parent, child, vm) {
    const options = {};

    if ((0,_lang__WEBPACK_IMPORTED_MODULE_0__.isFunction)(child)) {
        child = child.options;
    }

    if (child.extends) {
        parent = mergeOptions(parent, child.extends, vm);
    }

    if (child.mixins) {
        for (const mixin of child.mixins) {
            parent = mergeOptions(parent, mixin, vm);
        }
    }

    for (const key in parent) {
        mergeKey(key);
    }

    for (const key in child) {
        if (!(0,_lang__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(parent, key)) {
            mergeKey(key);
        }
    }

    function mergeKey(key) {
        options[key] = (strats[key] || defaultStrat)(parent[key], child[key], vm);
    }

    return options;
}

function parseOptions(options, args = []) {
    try {
        return options
            ? (0,_lang__WEBPACK_IMPORTED_MODULE_0__.startsWith)(options, '{')
                ? JSON.parse(options)
                : args.length && !(0,_lang__WEBPACK_IMPORTED_MODULE_0__.includes)(options, ':')
                ? { [args[0]]: options }
                : options.split(';').reduce((options, option) => {
                      const [key, value] = option.split(/:(.*)/);
                      if (key && !(0,_lang__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(value)) {
                          options[key.trim()] = value.trim();
                      }
                      return options;
                  }, {})
            : {};
    } catch (e) {
        return {};
    }
}


/***/ }),

/***/ "./node_modules/uikit/src/js/util/player.js":
/*!**************************************************!*\
  !*** ./node_modules/uikit/src/js/util/player.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isVideo": () => (/* binding */ isVideo),
/* harmony export */   "mute": () => (/* binding */ mute),
/* harmony export */   "pause": () => (/* binding */ pause),
/* harmony export */   "play": () => (/* binding */ play)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./node_modules/uikit/src/js/util/dom.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event */ "./node_modules/uikit/src/js/util/event.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang */ "./node_modules/uikit/src/js/util/lang.js");




function play(el) {
    if (isIFrame(el)) {
        call(el, { func: 'playVideo', method: 'play' });
    }

    if (isHTML5(el)) {
        try {
            el.play().catch(_lang__WEBPACK_IMPORTED_MODULE_0__.noop);
        } catch (e) {
            // noop
        }
    }
}

function pause(el) {
    if (isIFrame(el)) {
        call(el, { func: 'pauseVideo', method: 'pause' });
    }

    if (isHTML5(el)) {
        el.pause();
    }
}

function mute(el) {
    if (isIFrame(el)) {
        call(el, { func: 'mute', method: 'setVolume', value: 0 });
    }

    if (isHTML5(el)) {
        el.muted = true;
    }
}

function isVideo(el) {
    return isHTML5(el) || isIFrame(el);
}

function isHTML5(el) {
    return (0,_dom__WEBPACK_IMPORTED_MODULE_1__.isTag)(el, 'video');
}

function isIFrame(el) {
    return (0,_dom__WEBPACK_IMPORTED_MODULE_1__.isTag)(el, 'iframe') && (isYoutube(el) || isVimeo(el));
}

function isYoutube(el) {
    return !!el.src.match(
        /\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/
    );
}

function isVimeo(el) {
    return !!el.src.match(/vimeo\.com\/video\/.*/);
}

async function call(el, cmd) {
    await enableApi(el);
    post(el, cmd);
}

function post(el, cmd) {
    try {
        el.contentWindow.postMessage(JSON.stringify({ event: 'command', ...cmd }), '*');
    } catch (e) {
        // noop
    }
}

const stateKey = '_ukPlayer';
let counter = 0;
function enableApi(el) {
    if (el[stateKey]) {
        return el[stateKey];
    }

    const youtube = isYoutube(el);
    const vimeo = isVimeo(el);

    const id = ++counter;
    let poller;

    return (el[stateKey] = new Promise((resolve) => {
        youtube &&
            (0,_event__WEBPACK_IMPORTED_MODULE_2__.once)(el, 'load', () => {
                const listener = () => post(el, { event: 'listening', id });
                poller = setInterval(listener, 100);
                listener();
            });

        (0,_event__WEBPACK_IMPORTED_MODULE_2__.once)(window, 'message', resolve, false, ({ data }) => {
            try {
                data = JSON.parse(data);
                return (
                    data &&
                    ((youtube && data.id === id && data.event === 'onReady') ||
                        (vimeo && Number(data.player_id) === id))
                );
            } catch (e) {
                // noop
            }
        });

        el.src = `${el.src}${(0,_lang__WEBPACK_IMPORTED_MODULE_0__.includes)(el.src, '?') ? '&' : '?'}${
            youtube ? 'enablejsapi=1' : `api=1&player_id=${id}`
        }`;
    }).then(() => clearInterval(poller)));
}


/***/ }),

/***/ "./node_modules/uikit/src/js/util/position.js":
/*!****************************************************!*\
  !*** ./node_modules/uikit/src/js/util/position.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "positionAt": () => (/* binding */ positionAt)
/* harmony export */ });
/* harmony import */ var _dimensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dimensions */ "./node_modules/uikit/src/js/util/dimensions.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lang */ "./node_modules/uikit/src/js/util/lang.js");
/* harmony import */ var _viewport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewport */ "./node_modules/uikit/src/js/util/viewport.js");




const dirs = [
    ['width', 'x', 'left', 'right'],
    ['height', 'y', 'top', 'bottom'],
];

function positionAt(element, target, options) {
    options = {
        attach: {
            element: ['left', 'top'],
            target: ['left', 'top'],
            ...options.attach,
        },
        offset: [0, 0],
        ...options,
    };

    const dim = options.flip
        ? attachToWithFlip(element, target, options)
        : attachTo(element, target, options);

    (0,_dimensions__WEBPACK_IMPORTED_MODULE_0__.offset)(element, dim);
}

function attachTo(element, target, options) {
    let { attach, offset: offsetBy } = {
        attach: {
            element: ['left', 'top'],
            target: ['left', 'top'],
            ...options.attach,
        },
        offset: [0, 0],
        ...options,
    };

    const position = (0,_dimensions__WEBPACK_IMPORTED_MODULE_0__.offset)(element);
    const targetOffset = (0,_dimensions__WEBPACK_IMPORTED_MODULE_0__.offset)(target);
    for (const [i, [prop, dir, start, end]] of Object.entries(dirs)) {
        position[start] = position[dir] =
            targetOffset[start] +
            moveBy(attach.target[i], end, targetOffset[prop]) -
            moveBy(attach.element[i], end, position[prop]) +
            +offsetBy[i];
        position[end] = position[start] + position[prop];
    }
    return position;
}

function moveBy(start, end, dim) {
    return start === 'center' ? dim / 2 : start === end ? dim : 0;
}

function attachToWithFlip(element, target, options) {
    const position = attachTo(element, target, options);
    const targetDim = (0,_dimensions__WEBPACK_IMPORTED_MODULE_0__.offset)(target);

    let {
        flip,
        attach: { element: elAttach, target: targetAttach },
        offset: elOffset,
        boundary,
        viewport,
        viewportOffset,
    } = options;

    let viewports = (0,_viewport__WEBPACK_IMPORTED_MODULE_1__.scrollParents)(element);
    if (boundary === target) {
        viewports = viewports.filter((viewport) => viewport !== boundary);
    }
    const [scrollElement] = viewports;
    viewports.push(viewport);

    const offsetPosition = { ...position };
    for (const [i, [prop, dir, start, end]] of Object.entries(dirs)) {
        if (flip !== true && !(0,_lang__WEBPACK_IMPORTED_MODULE_2__.includes)(flip, dir)) {
            continue;
        }

        const willFlip =
            !intersectLine(position, targetDim, i) && intersectLine(position, targetDim, 1 - i);

        viewport = getIntersectionArea(...viewports.filter(Boolean).map(_viewport__WEBPACK_IMPORTED_MODULE_1__.offsetViewport));

        if (viewportOffset) {
            viewport[start] += viewportOffset;
            viewport[end] -= viewportOffset;
        }

        if (boundary && !willFlip && position[prop] <= (0,_dimensions__WEBPACK_IMPORTED_MODULE_0__.offset)(boundary)[prop]) {
            viewport = getIntersectionArea(viewport, (0,_dimensions__WEBPACK_IMPORTED_MODULE_0__.offset)(boundary));
        }

        const isInStartBoundary = position[start] >= viewport[start];
        const isInEndBoundary = position[end] <= viewport[end];

        if (isInStartBoundary && isInEndBoundary) {
            continue;
        }

        let offsetBy;

        // Flip
        if (willFlip) {
            if (
                (elAttach[i] === end && isInStartBoundary) ||
                (elAttach[i] === start && isInEndBoundary)
            ) {
                continue;
            }

            offsetBy =
                (elAttach[i] === start
                    ? -position[prop]
                    : elAttach[i] === end
                    ? position[prop]
                    : 0) +
                (targetAttach[i] === start
                    ? targetDim[prop]
                    : targetAttach[i] === end
                    ? -targetDim[prop]
                    : 0) -
                elOffset[i] * 2;

            if (
                !isInScrollArea(
                    {
                        ...position,
                        [start]: position[start] + offsetBy,
                        [end]: position[end] + offsetBy,
                    },
                    scrollElement,
                    i
                )
            ) {
                if (isInScrollArea(position, scrollElement, i)) {
                    continue;
                }

                if (options.recursion) {
                    return false;
                }

                if (flip === true || (0,_lang__WEBPACK_IMPORTED_MODULE_2__.includes)(flip, dirs[1 - i][1])) {
                    const newPos = attachToWithFlip(element, target, {
                        ...options,
                        attach: {
                            element: elAttach.map(flipDir).reverse(),
                            target: targetAttach.map(flipDir).reverse(),
                        },
                        offset: elOffset.reverse(),
                        flip: flip === true ? flip : [...flip, dirs[1 - i][1]],
                        recursion: true,
                    });

                    if (newPos && isInScrollArea(newPos, scrollElement, 1 - i)) {
                        return newPos;
                    }
                }
            }

            // Move
        } else {
            offsetBy =
                (0,_lang__WEBPACK_IMPORTED_MODULE_2__.clamp)(
                    (0,_lang__WEBPACK_IMPORTED_MODULE_2__.clamp)(position[start], viewport[start], viewport[end] - position[prop]),
                    targetDim[start] - position[prop] + elOffset[i],
                    targetDim[end] - elOffset[i]
                ) - position[start];
        }

        offsetPosition[start] = position[dir] = position[start] + offsetBy;
        offsetPosition[end] += offsetBy;
    }

    return offsetPosition;
}

function getIntersectionArea(...rects) {
    let area = {};
    for (const rect of rects) {
        for (const [, , start, end] of dirs) {
            area[start] = Math.max(area[start] || 0, rect[start]);
            area[end] = Math.min(...[area[end], rect[end]].filter(Boolean));
        }
    }
    return area;
}

function isInScrollArea(position, scrollElement, dir) {
    const viewport = (0,_viewport__WEBPACK_IMPORTED_MODULE_1__.offsetViewport)(scrollElement, false);
    const [prop, , start, end] = dirs[dir];
    viewport[start] -= scrollElement[`scroll${(0,_lang__WEBPACK_IMPORTED_MODULE_2__.ucfirst)(start)}`];
    viewport[end] = viewport[start] + scrollElement[`scroll${(0,_lang__WEBPACK_IMPORTED_MODULE_2__.ucfirst)(prop)}`];

    return position[start] >= viewport[start] && position[end] <= viewport[end];
}

function intersectLine(dimA, dimB, dir) {
    const [, , start, end] = dirs[dir];
    return dimA[end] > dimB[start] && dimB[end] > dimA[start];
}

function flipDir(prop) {
    for (let i = 0; i < dirs.length; i++) {
        const index = dirs[i].indexOf(prop);
        if (~index) {
            return dirs[1 - i][(index % 2) + 2];
        }
    }
}


/***/ }),

/***/ "./node_modules/uikit/src/js/util/selector.js":
/*!****************************************************!*\
  !*** ./node_modules/uikit/src/js/util/selector.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "escape": () => (/* binding */ escape),
/* harmony export */   "find": () => (/* binding */ find),
/* harmony export */   "findAll": () => (/* binding */ findAll),
/* harmony export */   "query": () => (/* binding */ query),
/* harmony export */   "queryAll": () => (/* binding */ queryAll)
/* harmony export */ });
/* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attr */ "./node_modules/uikit/src/js/util/attr.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter */ "./node_modules/uikit/src/js/util/filter.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang */ "./node_modules/uikit/src/js/util/lang.js");




function query(selector, context) {
    return find(selector, getContext(selector, context));
}

function queryAll(selector, context) {
    return findAll(selector, getContext(selector, context));
}

function find(selector, context) {
    return (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNode)(_query(selector, context, 'querySelector'));
}

function findAll(selector, context) {
    return (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNodes)(_query(selector, context, 'querySelectorAll'));
}

const contextSelectorRe = /(^|[^\\],)\s*[!>+~-]/;
const isContextSelector = (0,_lang__WEBPACK_IMPORTED_MODULE_0__.memoize)((selector) => selector.match(contextSelectorRe));

function getContext(selector, context = document) {
    return ((0,_lang__WEBPACK_IMPORTED_MODULE_0__.isString)(selector) && isContextSelector(selector)) || (0,_lang__WEBPACK_IMPORTED_MODULE_0__.isDocument)(context)
        ? context
        : context.ownerDocument;
}

const contextSanitizeRe = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g;
const sanatize = (0,_lang__WEBPACK_IMPORTED_MODULE_0__.memoize)((selector) => selector.replace(contextSanitizeRe, '$1 *'));

function _query(selector, context = document, queryFn) {
    if (!selector || !(0,_lang__WEBPACK_IMPORTED_MODULE_0__.isString)(selector)) {
        return selector;
    }

    selector = sanatize(selector);

    if (isContextSelector(selector)) {
        const split = splitSelector(selector);
        selector = '';
        for (let sel of split) {
            let ctx = context;

            if (sel[0] === '!') {
                const selectors = sel.substr(1).trim().split(' ');
                ctx = (0,_filter__WEBPACK_IMPORTED_MODULE_1__.closest)((0,_filter__WEBPACK_IMPORTED_MODULE_1__.parent)(context), selectors[0]);
                sel = selectors.slice(1).join(' ').trim();
                if (!sel.length && split.length === 1) {
                    return ctx;
                }
            }

            if (sel[0] === '-') {
                const selectors = sel.substr(1).trim().split(' ');
                const prev = (ctx || context).previousElementSibling;
                ctx = (0,_filter__WEBPACK_IMPORTED_MODULE_1__.matches)(prev, sel.substr(1)) ? prev : null;
                sel = selectors.slice(1).join(' ');
            }

            if (ctx) {
                selector += `${selector ? ',' : ''}${domPath(ctx)} ${sel}`;
            }
        }

        context = document;
    }

    try {
        return context[queryFn](selector);
    } catch (e) {
        return null;
    }
}

const selectorRe = /.*?[^\\](?:,|$)/g;

const splitSelector = (0,_lang__WEBPACK_IMPORTED_MODULE_0__.memoize)((selector) =>
    selector.match(selectorRe).map((selector) => selector.replace(/,$/, '').trim())
);

function domPath(element) {
    const names = [];
    while (element.parentNode) {
        const id = (0,_attr__WEBPACK_IMPORTED_MODULE_2__.attr)(element, 'id');
        if (id) {
            names.unshift(`#${escape(id)}`);
            break;
        } else {
            let { tagName } = element;
            if (tagName !== 'HTML') {
                tagName += `:nth-child(${(0,_filter__WEBPACK_IMPORTED_MODULE_1__.index)(element) + 1})`;
            }
            names.unshift(tagName);
            element = element.parentNode;
        }
    }
    return names.join(' > ');
}

function escape(css) {
    return (0,_lang__WEBPACK_IMPORTED_MODULE_0__.isString)(css) ? CSS.escape(css) : '';
}


/***/ }),

/***/ "./node_modules/uikit/src/js/util/style.js":
/*!*************************************************!*\
  !*** ./node_modules/uikit/src/js/util/style.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "css": () => (/* binding */ css),
/* harmony export */   "getCssVar": () => (/* binding */ getCssVar),
/* harmony export */   "propName": () => (/* binding */ propName)
/* harmony export */ });
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang */ "./node_modules/uikit/src/js/util/lang.js");


const cssNumber = {
    'animation-iteration-count': true,
    'column-count': true,
    'fill-opacity': true,
    'flex-grow': true,
    'flex-shrink': true,
    'font-weight': true,
    'line-height': true,
    opacity: true,
    order: true,
    orphans: true,
    'stroke-dasharray': true,
    'stroke-dashoffset': true,
    widows: true,
    'z-index': true,
    zoom: true,
};

function css(element, property, value, priority = '') {
    const elements = (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNodes)(element);
    for (const element of elements) {
        if ((0,_lang__WEBPACK_IMPORTED_MODULE_0__.isString)(property)) {
            property = propName(property);

            if ((0,_lang__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(value)) {
                return getComputedStyle(element).getPropertyValue(property);
            } else {
                element.style.setProperty(
                    property,
                    (0,_lang__WEBPACK_IMPORTED_MODULE_0__.isNumeric)(value) && !cssNumber[property]
                        ? `${value}px`
                        : value || (0,_lang__WEBPACK_IMPORTED_MODULE_0__.isNumber)(value)
                        ? value
                        : '',
                    priority
                );
            }
        } else if ((0,_lang__WEBPACK_IMPORTED_MODULE_0__.isArray)(property)) {
            const props = {};
            for (const prop of property) {
                props[prop] = css(element, prop);
            }
            return props;
        } else if ((0,_lang__WEBPACK_IMPORTED_MODULE_0__.isObject)(property)) {
            priority = value;
            (0,_lang__WEBPACK_IMPORTED_MODULE_0__.each)(property, (value, property) => css(element, property, value, priority));
        }
    }
    return elements[0];
}

const propertyRe = /^\s*(["'])?(.*?)\1\s*$/;
function getCssVar(name, element = document.documentElement) {
    return css(element, `--uk-${name}`).replace(propertyRe, '$2');
}

// https://drafts.csswg.org/cssom/#dom-cssstyledeclaration-setproperty
const propName = (0,_lang__WEBPACK_IMPORTED_MODULE_0__.memoize)((name) => vendorPropName(name));

const cssPrefixes = ['webkit', 'moz'];

function vendorPropName(name) {
    if (name[0] === '-') {
        return name;
    }

    name = (0,_lang__WEBPACK_IMPORTED_MODULE_0__.hyphenate)(name);

    const { style } = document.documentElement;

    if (name in style) {
        return name;
    }

    let i = cssPrefixes.length,
        prefixedName;

    while (i--) {
        prefixedName = `-${cssPrefixes[i]}-${name}`;
        if (prefixedName in style) {
            return prefixedName;
        }
    }
}


/***/ }),

/***/ "./node_modules/uikit/src/js/util/viewport.js":
/*!****************************************************!*\
  !*** ./node_modules/uikit/src/js/util/viewport.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isInView": () => (/* binding */ isInView),
/* harmony export */   "offsetViewport": () => (/* binding */ offsetViewport),
/* harmony export */   "scrollIntoView": () => (/* binding */ scrollIntoView),
/* harmony export */   "scrollParents": () => (/* binding */ scrollParents),
/* harmony export */   "scrollTop": () => (/* binding */ scrollTop),
/* harmony export */   "scrolledOver": () => (/* binding */ scrolledOver)
/* harmony export */ });
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./node_modules/uikit/src/js/util/style.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ "./node_modules/uikit/src/js/util/filter.js");
/* harmony import */ var _dimensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dimensions */ "./node_modules/uikit/src/js/util/dimensions.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang */ "./node_modules/uikit/src/js/util/lang.js");





function isInView(element, offsetTop = 0, offsetLeft = 0) {
    if (!(0,_filter__WEBPACK_IMPORTED_MODULE_0__.isVisible)(element)) {
        return false;
    }

    return (0,_lang__WEBPACK_IMPORTED_MODULE_1__.intersectRect)(
        ...scrollParents(element)
            .map((parent) => {
                const { top, left, bottom, right } = offsetViewport(parent);

                return {
                    top: top - offsetTop,
                    left: left - offsetLeft,
                    bottom: bottom + offsetTop,
                    right: right + offsetLeft,
                };
            })
            .concat((0,_dimensions__WEBPACK_IMPORTED_MODULE_2__.offset)(element))
    );
}

function scrollTop(element, top) {
    if ((0,_lang__WEBPACK_IMPORTED_MODULE_1__.isWindow)(element) || (0,_lang__WEBPACK_IMPORTED_MODULE_1__.isDocument)(element)) {
        element = scrollingElement(element);
    } else {
        element = (0,_lang__WEBPACK_IMPORTED_MODULE_1__.toNode)(element);
    }

    if ((0,_lang__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(top)) {
        return element.scrollTop;
    } else {
        element.scrollTop = top;
    }
}

function scrollIntoView(element, { offset: offsetBy = 0 } = {}) {
    const parents = (0,_filter__WEBPACK_IMPORTED_MODULE_0__.isVisible)(element) ? scrollParents(element) : [];
    return parents.reduce(
        (fn, scrollElement, i) => {
            const { scrollTop, scrollHeight, offsetHeight } = scrollElement;
            const viewport = offsetViewport(scrollElement);
            const maxScroll = scrollHeight - viewport.height;
            const { height: elHeight, top: elTop } = parents[i - 1]
                ? offsetViewport(parents[i - 1])
                : (0,_dimensions__WEBPACK_IMPORTED_MODULE_2__.offset)(element);

            let top = Math.ceil(elTop - viewport.top - offsetBy + scrollTop);

            if (offsetBy > 0 && offsetHeight < elHeight + offsetBy) {
                top += offsetBy;
            } else {
                offsetBy = 0;
            }

            if (top > maxScroll) {
                offsetBy -= top - maxScroll;
                top = maxScroll;
            } else if (top < 0) {
                offsetBy -= top;
                top = 0;
            }

            return () => scrollTo(scrollElement, top - scrollTop).then(fn);
        },
        () => Promise.resolve()
    )();

    function scrollTo(element, top) {
        return new Promise((resolve) => {
            const scroll = element.scrollTop;
            const duration = getDuration(Math.abs(top));
            const start = Date.now();

            (function step() {
                const percent = ease((0,_lang__WEBPACK_IMPORTED_MODULE_1__.clamp)((Date.now() - start) / duration));

                scrollTop(element, scroll + top * percent);

                // scroll more if we have not reached our destination
                if (percent === 1) {
                    resolve();
                } else {
                    requestAnimationFrame(step);
                }
            })();
        });
    }

    function getDuration(dist) {
        return 40 * Math.pow(dist, 0.375);
    }

    function ease(k) {
        return 0.5 * (1 - Math.cos(Math.PI * k));
    }
}

function scrolledOver(element, startOffset = 0, endOffset = 0) {
    if (!(0,_filter__WEBPACK_IMPORTED_MODULE_0__.isVisible)(element)) {
        return 0;
    }

    const [scrollElement] = scrollParents(element, /auto|scroll/, true);
    const { scrollHeight, scrollTop } = scrollElement;
    const { height: viewportHeight } = offsetViewport(scrollElement);
    const maxScroll = scrollHeight - viewportHeight;
    const elementOffsetTop = (0,_dimensions__WEBPACK_IMPORTED_MODULE_2__.offsetPosition)(element)[0] - (0,_dimensions__WEBPACK_IMPORTED_MODULE_2__.offsetPosition)(scrollElement)[0];

    const start = Math.max(0, elementOffsetTop - viewportHeight + startOffset);
    const end = Math.min(maxScroll, elementOffsetTop + element.offsetHeight - endOffset);

    return (0,_lang__WEBPACK_IMPORTED_MODULE_1__.clamp)((scrollTop - start) / (end - start));
}

function scrollParents(element, overflowRe = /auto|scroll|hidden/, scrollable = false) {
    const scrollEl = scrollingElement(element);

    let ancestors = (0,_filter__WEBPACK_IMPORTED_MODULE_0__.parents)(element).reverse();
    ancestors = ancestors.slice(ancestors.indexOf(scrollEl) + 1);

    const fixedIndex = (0,_lang__WEBPACK_IMPORTED_MODULE_1__.findIndex)(ancestors, (el) => (0,_style__WEBPACK_IMPORTED_MODULE_3__.css)(el, 'position') === 'fixed');
    if (~fixedIndex) {
        ancestors = ancestors.slice(fixedIndex);
    }

    return [scrollEl]
        .concat(
            ancestors.filter(
                (parent) =>
                    overflowRe.test((0,_style__WEBPACK_IMPORTED_MODULE_3__.css)(parent, 'overflow')) &&
                    (!scrollable || parent.scrollHeight > offsetViewport(parent).height)
            )
        )
        .reverse();
}

function offsetViewport(scrollElement) {
    let viewportElement = getViewport(scrollElement);

    let rect = (0,_dimensions__WEBPACK_IMPORTED_MODULE_2__.offset)(viewportElement);
    for (let [prop, dir, start, end] of [
        ['width', 'x', 'left', 'right'],
        ['height', 'y', 'top', 'bottom'],
    ]) {
        if (!(0,_lang__WEBPACK_IMPORTED_MODULE_1__.isWindow)(viewportElement)) {
            rect[start] += (0,_lang__WEBPACK_IMPORTED_MODULE_1__.toFloat)((0,_style__WEBPACK_IMPORTED_MODULE_3__.css)(viewportElement, `border${(0,_lang__WEBPACK_IMPORTED_MODULE_1__.ucfirst)(start)}Width`));
        } else {
            // iOS 12 returns <body> as scrollingElement
            viewportElement = viewportElement.document.documentElement;
        }
        rect[prop] = rect[dir] = viewportElement[`client${(0,_lang__WEBPACK_IMPORTED_MODULE_1__.ucfirst)(prop)}`];
        rect[end] = rect[prop] + rect[start];
    }
    return rect;
}

function scrollingElement(element) {
    return (0,_lang__WEBPACK_IMPORTED_MODULE_1__.toWindow)(element).document.scrollingElement;
}

function getViewport(scrollElement) {
    return scrollElement === scrollingElement(scrollElement) ? window : scrollElement;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./resources/scripts/main.js");
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/styles/main.scss");
/******/ 	
/******/ })()
;