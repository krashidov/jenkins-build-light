var keyMirror = require('react/lib/keyMirror');

module.exports = {
  PROXY_PORT: 9090,
  POLL_FREQUENCY: 5000,

  BUILDS: [
    'http://almci/job/on-demand/job/alm-on-demand-2',
    'churro.ci.f4tech.com/job/churro',
    'http://urro.ci.f4tech.com/job/ux-bootstrap/',
    'almci/job/alm-jobs/job/alm',
    'almci/job/app-catalog-jobs/job/app-catalog',
    'almci/job/appsdk-jobs/job/appsdk',
    'almci/job/alm-jobs/job/alm-backward-compatibility-of-migrations',
    'almci/job/bridge/job/appsdk-alm-bridge'
  ],

  ActionTypes: keyMirror({
    BUILDS_LOADED: null
  }),

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })
};

