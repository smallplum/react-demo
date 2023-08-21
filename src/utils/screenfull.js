/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
/*!
 * screenfull
 * v5.0.2 - 2020-02-13
 * (c) Sindre Sorhus; MIT License
 */
(function () {
  const document = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};
  const isCommonjs = typeof module !== 'undefined' && module.exports;

  const fn = (function () {
    let val;

    const fnMap = [
      [
        'requestFullscreen',
        'exitFullscreen',
        'fullscreenElement',
        'fullscreenEnabled',
        'fullscreenchange',
        'fullscreenerror'
      ],
      // New WebKit
      [
        'webkitRequestFullscreen',
        'webkitExitFullscreen',
        'webkitFullscreenElement',
        'webkitFullscreenEnabled',
        'webkitfullscreenchange',
        'webkitfullscreenerror'
      ],
      // Old WebKit
      [
        'webkitRequestFullScreen',
        'webkitCancelFullScreen',
        'webkitCurrentFullScreenElement',
        'webkitCancelFullScreen',
        'webkitfullscreenchange',
        'webkitfullscreenerror'
      ],
      [
        'mozRequestFullScreen',
        'mozCancelFullScreen',
        'mozFullScreenElement',
        'mozFullScreenEnabled',
        'mozfullscreenchange',
        'mozfullscreenerror'
      ],
      [
        'msRequestFullscreen',
        'msExitFullscreen',
        'msFullscreenElement',
        'msFullscreenEnabled',
        'MSFullscreenChange',
        'MSFullscreenError'
      ]
    ];

    let i = 0;
    const l = fnMap.length;
    const ret = {};

    for (; i < l; i++) {
      val = fnMap[i];
      if (val && val[1] in document) {
        for (i = 0; i < val.length; i++) {
          ret[fnMap[0][i]] = val[i];
        }
        return ret;
      }
    }

    return false;
  }());

  const eventNameMap = {
    change: fn.fullscreenchange,
    error: fn.fullscreenerror
  };

  const screenfull = {
    request(element) {
      return new Promise(
        (resolve, reject) => {
          const onFullScreenEntered = function () {
            this.off('change', onFullScreenEntered);
            resolve();
          }.bind(this);

          this.on('change', onFullScreenEntered);

          element = element || document.documentElement;

          const returnPromise = element[fn.requestFullscreen]();

          if (returnPromise instanceof Promise) {
            returnPromise.then(onFullScreenEntered).catch(reject);
          }
        }
      );
    },
    exit() {
      return new Promise(
        (resolve, reject) => {
          if (!this.isFullscreen) {
            resolve();
            return;
          }

          const onFullScreenExit = function () {
            this.off('change', onFullScreenExit);
            resolve();
          }.bind(this);

          this.on('change', onFullScreenExit);

          const returnPromise = document[fn.exitFullscreen]();

          if (returnPromise instanceof Promise) {
            returnPromise.then(onFullScreenExit).catch(reject);
          }
        }
      );
    },
    toggle(element) {
      return this.isFullscreen ? this.exit() : this.request(element);
    },
    onchange(callback) {
      this.on('change', callback);
    },
    onerror(callback) {
      this.on('error', callback);
    },
    on(event, callback) {
      const eventName = eventNameMap[event];
      if (eventName) {
        document.addEventListener(eventName, callback, false);
      }
    },
    off(event, callback) {
      const eventName = eventNameMap[event];
      if (eventName) {
        document.removeEventListener(eventName, callback, false);
      }
    },
    raw: fn
  };

  if (!fn) {
    if (isCommonjs) {
      module.exports = { isEnabled: false };
    } else {
      window.screenfull = { isEnabled: false };
    }

    return;
  }

  Object.defineProperties(screenfull, {
    isFullscreen: {
      get() {
        return Boolean(document[fn.fullscreenElement]);
      }
    },
    element: {
      enumerable: true,
      get() {
        return document[fn.fullscreenElement];
      }
    },
    isEnabled: {
      enumerable: true,
      get() {
        // Coerce to boolean in case of old WebKit
        return Boolean(document[fn.fullscreenEnabled]);
      }
    }
  });

  if (isCommonjs) {
    module.exports = screenfull;
  } else {
    window.screenfull = screenfull;
  }
}());
